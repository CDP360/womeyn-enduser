import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import searchcion from '../../../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import styles from './styles/Mangeaddress.module.scss';
import address from '../../../../assests/profile-logo/addressempty.png';
import { Addaddress, GetAddressData, DeleteAddress,SingleAddress,UpdateAddress } from '../../../../services/user-profile-service/user-profile-services';
import maplocation from '../../../../assests/profile-logo/maplocation.png';
import deleteicons from '../../../../assests/cart-logos/deleteicons.png';
import { toast } from 'react-toastify';
import LoaderLogo from '../../../loaderlogo/LoaderLogo';
import Spinner from 'react-bootstrap/Spinner';
import { useRouter } from 'next/router';
// import Autocomplete from "react-google-autocomplete";

import dynamic from 'next/dynamic';
import Orderdetails from './../order/components/orderdetails/Orderdetails';
import Googleautocomplete from '../../../googleautocompleteaddress/Googleautocomplete';
function Manageaddress({ error }) {
  const [pincodeaus, setPincodeAus] = useState("");
  const [stateaus, setStateAus] = useState("");
  const [countryaus, setCountryAus] = useState("");
  const [overallaus, setOverallAus] = useState("");
  const [editaddressid,setEditaddressId]=useState("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [getaddress, setAddress] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [showdelete, setShowdelete] = useState(false);
  const [removeloading, setRemoveloading] = useState(false);
  const [deleteaddressid, setDeleteId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClosedelete = () => setShowdelete(false);
  const handleShowdelete = (id) => {
    setShowdelete(true);
    setDeleteId(id);
  };
  useEffect(() => {
    getAddressdata();

//     SingleAddress(editaddressid).then((res)=>{
// setValue("name",res?.data?.name);
// setValue("contactno",res?.data?.contactNumber);
// setValue("alternatecontactno",res?.data?.alternateContactNumber);
// setValue("address",res?.data?.fullAddress);
// setValue("pincode",res?.data?.pinCode);
// setValue("landmark",res?.data?.landMark);
// setValue("city",res?.data?.cityName);
// setValue("state",res?.data?.stateName);
//     }).catch((err)=>{
//       console.log(err);
//     })


    if (error) {
      localStorage.removeItem("userid");
      localStorage.removeItem("userToken");
      localStorage.removeItem("whish");
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("productid");
      localStorage.removeItem('signupuser');

      router.push("/login");
    }
  }, [deleteaddressid, error,editaddressid]);
  const getAddressdata = () => {
    setLoading(true);
    GetAddressData().then((res) => {
      setAddress(res?.data?.results);
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }).catch((err) => {
      console.log(err);
    })
  }
  const onSubmit = (data) => {
    const address = {
      name: data?.name,
      contactNumber: data?.contactno,
      alternateContactNumber: data?.alternatecontactno,
      fullAddress: data?.address,
      pinCode: data?.pincode,
      landMark: data?.landmark,
      cityName: data?.city,
      stateName: data?.state,
      countryName: "Australia",
    }
    Addaddress(address).then((res) => {
      toast.success("Address Added!!",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      window.location.reload();
      handleClose();
    }).catch((err) => {
      console.log(err);
    })
  }
  const DeleteAddressUser = () => {


  
    setRemoveloading(true);
    DeleteAddress(deleteaddressid).then((res) => {
      toast.success("Delete Address",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });

      
      setTimeout(() => {
        // window.location.reload();
        setRemoveloading(false);
        handleClosedelete();

      }, 400)
    }).catch((err) => {
      console.log(err);
    })

    const Filterdata=getaddress?.filter((item)=>{
      return item?.id!==deleteaddressid
    })
    setAddress(Filterdata);
  }

  const EditAddress=(id)=>{
     
       router.push({
        pathname: '/profile/addresscreate',
        query:{id:id},
    })
  

  }


  // const UpdateAddresss=(data)=>{
  //   const address = {
  //     name: data?.name,
  //     contactNumber: data?.contactno,
  //     alternateContactNumber: data?.alternatecontactno,
  //     fullAddress: data?.address,
  //     pinCode: data?.pincode,
  //     landMark: data?.landmark,
  //     cityName: data?.city,
  //     stateName: data?.state,
  //     countryName: "Australia",
  //     addressId:editaddressid
  //   }
  //   UpdateAddress(address).then((res) => {
  //     toast.success("Address Updated",
  //       {
  //         position: "top-center",
  //         autoClose: 3000,
  //         hideProgressBar: false,
  //         closeOnClick: true,
  //         pauseOnHover: true,
  //         draggable: true,
  //         progress: undefined,
  //         theme: "dark",
  //       }
  //     );
  //     window.location.reload();
  //     handleClose();
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }


  const NavigateAddress=()=>{
    router.push("/profile/addresscreate"
     );

  }

  return (
    <>
      <div className={styles.mainaddresspage}>
        <div className={styles.insideaddresspage}>
          {getaddress?.length > 0 ? <>
            <div className={styles.topsectionaddress}>
              <div className={styles.leftaddresssection}>
                <div className="commonprofiletextsize" >
                  Manage Address
                </div>
              </div>
              <div className={styles.rightaddresssection}>
                <div>
                  <button className={styles.addbuttonnew} onClick={NavigateAddress} >+ Add new address</button>
                </div>
              </div>
            </div>
            <div>
              {loading ? <>
                {/* <Loader */}
                <LoaderLogo />
              </> : <>
                {getaddress?.map((item, index) => {
                  return (
                    <>
                      <div className={styles.addresslistsection} key={index}>
                        <div className={styles.addresssplit}>
                          <div className={styles.leftaddress}>
                            <Image src={maplocation} alt="no image" className={styles.map} />
                          </div>
                          <div className={styles.rightaddress}>
                            <div>
                              {item?.name}
                            </div>
                            <div>
                              {item?.contactNumber}
                            </div>
                            <div>
                              {item?.stateName}
                            </div>
                            <div>
                              {item?.cityName}
                            </div>
                            <div>
                              {item?.fullAddress}
                            </div>
                            <div className={styles.splitedits}>
                              <div className={styles.editaddresss} onClick={()=>EditAddress(item?.id)}>
                                  Edit Address
                                </div>
                              <div className={styles.editaddresss}>
                                <div className={styles.removebuttonssection} onClick={() => handleShowdelete(item?.id)}>
                                  <div>
                                    <Image src={deleteicons} alt="no image" className={styles.mapremove} />
                                  </div>
                                  <div>
                                    Remove
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </>}
            </div>
          </> : <div>
            <div>
              Manage Address
            </div>
            <Image src={address} alt="no image" className={styles.notlocation} />
            <div className="text-center mt-3 mb-4">
              Please add a delivery address here
            </div>
            <div>
              <div className={styles.rightaddresssection}>
                <div>
                  <button className={styles.addbuttonnew} onClick={NavigateAddress} >Add new address</button>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>

   

 
      <>
        {/* <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          size="lg"
          centered
        >
          <Modal.Body>
            <div className={styles.mainmodelsection}>
              <div className={styles.closesectionmodel}>
                <div className={styles.addressnew}>
                  Address new
                </div>
                <div className={styles.icons} onClick={handleClose}>
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </div>
              </div>
              <div className="mt-3">



                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter Name" className='form-control-profiles'
                        {...register("name", {
                          required: "Please enter Name",

                        })}
                      />
                      <Form.Text className="text-muted">
                        {errors.name && <span className="active">{errors.name.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">Contact Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Contact No" className='form-control-profiles'
                        {...register("contactno", {
                          required: "Please enter Contact No",

                        })}
                        maxLength={9}

                      />
                      <Form.Text className="text-muted">
                        {errors.contactno && <span className="active">{errors.contactno.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">Alternate Contact Number</Form.Label>
                      <Form.Control type="text" placeholder="Enter Alternate Contact No" className='form-control-profiles'
                        {...register("alternatecontactno", {
                          required: "Please enter Alternate Contact No",
                        })}
                        maxLength={9}

                      />
                      <Form.Text className="text-muted">
                        {errors.alternatecontactno && <span className="active">{errors.alternatecontactno.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">Landmark</Form.Label>
                      <Form.Control type="text" placeholder="Enter Landmark" className='form-control-profiles'
                        {...register("landmark", {
                          required: "Please enter Landmark",
                        })}
                      />
                      <Form.Text className="text-muted">
                        {errors.landmark && <span className="active">{errors.landmark.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">Address</Form.Label>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

                        <Form.Control as="textarea" rows={3}
                          className='form-control-profiles'
                          placeholder="Enter Address"
                          {...register("address", {
                            required: "Please enter Address",

                          })}
                        />
                      </Form.Group>

                      <Form.Text className="text-muted">
                        {errors.address && <span className="active">{errors.address.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div>
                <Row>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">City</Form.Label>
                      <Form.Control type="text" placeholder="Enter City" className='form-control-profiles'
                        {...register("city", {
                          required: "Please enter City",
                        })}
                      />
                      <Form.Text className="text-muted">
                        {errors.city && <span className="active">{errors.city.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">State</Form.Label>
                      <Form.Control type="text" placeholder="Enter State" className='form-control-profiles'
                        {...register("state", {
                          required: "Please enter state",
                        })}
                      />
                      <Form.Text className="text-muted">
                        {errors.state && <span className="active">{errors.state.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="labelname">Post code</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" className='form-control-profiles'
                        maxLength={4}
                        {...register("pincode", {
                          required: "Please enter Pincode",
                        })}
                      />
                      <Form.Text className="text-muted">
                        {errors.pincode && <span className="active">{errors.pincode.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                  <Col>
                  <div >
                  <Googleautocomplete/>
</div>
                  </Col>
                </Row>
             
              </div>
              <div className={styles.buttonsectionaddress}>
                <div >

                  {editaddressid?<>
                    <button className={styles.addbutton} onClick={handleSubmit(UpdateAddresss)}>
               Update
                  </button>
                  </>:<>
                  <button className={styles.addbutton} onClick={handleSubmit(onSubmit)}>
                    Add
                  </button>
                  </>}
                 
                </div>
                <div>
                  <button className={styles.cancelbutton} onClick={handleClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>

        </Modal> */}

        <div>




          <Modal
            show={showdelete}
            onHide={handleClosedelete}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title>Remove Address</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>

                Are you sure remove this Address?
              </div>
              <div className={styles.pathbuttonsplit}>

                <div className={styles.cancelbutton} onClick={handleClosedelete}>Cancel</div>
                <div className={styles.removebutton} onClick={DeleteAddressUser}>

                  {removeloading ? <>
                    <Spinner
                      as="span"
                      animation="grow"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                    Loading...
                  </> : <>
                    Remove
                  </>}


                </div>


              </div>
            </Modal.Body>

          </Modal>

        </div>
      </> 

    </>

  )

}

export default Manageaddress;
