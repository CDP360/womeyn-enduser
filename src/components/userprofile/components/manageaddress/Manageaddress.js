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
import { Addaddress, GetAddressData } from '../../../../services/user-profile-service/user-profile-services';
import maplocation from '../../../../assests/profile-logo/maplocation.png';
import deleteicons from '../../../../assests/cart-logos/deleteicons.png';
import { toast } from 'react-toastify';

function Manageaddress() {
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
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {

    getAddressdata();

  }, []);

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
  return (
    <>
      <div className={styles.mainaddresspage}>
        <div className={styles.insideaddresspage}>


          {getaddress?.length > 0 ? <>
            <div className={styles.topsectionaddress}>
              <div className={styles.leftaddresssection}>
                {/* <input type="text" placeholder='Search address or receiver name' className={styles.serachaddress} />
                        <div>
                            <Image src={searchcion} alt="no image" className={styles.searchicon} />
                        </div> */}
           
                <div className="commonprofiletextsize">
Manage Address
                  </div>
              </div>
              <div className={styles.rightaddresssection}>
                <div>
                  <button className={styles.addbuttonnew} onClick={handleShow} >Add new address</button>
                </div>
              </div>
            </div>
            <div>
              {loading ? <>
                {/* <Loader */}
                loading...
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
                              <div className={styles.editaddresss}>
                                Edit Address
                              </div>
                              <div className={styles.editaddresss}>
                                <div className={styles.removebuttonssection}>
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
                  <button className={styles.addbuttonnew} >Add new address</button>
                </div>
              </div>
            </div>
          </div>}
        </div>
      </div>
      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          //  size="lg"
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
                      <Form.Control type="text" placeholder="Enter Address" className='form-control-profiles'
                        {...register("address", {
                          required: "Please enter Address",
                        })}
                      />
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
                      <Form.Label className="labelname">Pincode</Form.Label>
                      <Form.Control type="text" placeholder="Enter Pincode" className='form-control-profiles'
                        {...register("pincode", {
                          required: "Please enter Pincode",
                        })}
                      />
                      <Form.Text className="text-muted">
                        {errors.pincode && <span className="active">{errors.pincode.message}</span>}
                      </Form.Text>
                    </Form.Group>
                  </Col>
                </Row>
              </div>
              <div className={styles.buttonsectionaddress}>
                <div >
                  <button className={styles.addbutton} onClick={handleSubmit(onSubmit)}>
                    Add
                  </button>
                </div>
                <div>
                  <button className={styles.cancelbutton} onClick={handleClose}>
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary">Understood</Button>
          </Modal.Footer> */}
        </Modal>
      </>

    </>

  )
}

export default Manageaddress