// import React from 'react'
// import Spinner from 'react-bootstrap/Spinner';
// import Modal from 'react-bootstrap/Modal';
// import styles from './styles/Orderdetails.module.scss';
// import Image from 'next/image';
// import Form from 'react-bootstrap/Form';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// function ModelAddress({ show, handleClose, register, errors, handleSubmit, SubmitsAddress, handleShow,editaddressid,UpdateAddresss }) {
//     return (
//         <>
//             <div>    <button className={styles.addnewaddressbutton} onClick={handleShow}>
//                 Add New Address
//             </button>

//             </div>
//             <Modal
//                 show={show}
//                 onHide={handleClose}
//                 backdrop="static"
//                 keyboard={false}
//                 size="lg"
//                 centered
//             >

//                 <Modal.Body>
//                     <div className={styles.mainmodelsection}>
//                         <div className={styles.closesectionmodel}>
//                             <div className={styles.addressnew}>
//                                 Add New Address
//                             </div>
//                             <div className={styles.icons} onClick={handleClose}>
//                                 <ion-icon name="close-outline" size="large"></ion-icon>
//                             </div>
//                         </div>
//                         <div className="mt-3">
//                             <Row>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">Name</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Name" className='form-control-profiles'
//                                             {...register("name", {
//                                                 required: "Please enter Name",

//                                             })}
//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.name && <span className="active">{errors.name.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div>
//                             <Row>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">Contact Number</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Contact No" className='form-control-profiles'
//                                             {...register("contactno", {
//                                                 required: "Please enter Contact No",

//                                             })}
//                                             maxLength={9}
//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.contactno && <span className="active">{errors.contactno.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">Alternate Contact Number</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Alternate Contact No" className='form-control-profiles'
//                                             {...register("alternatecontactno", {
//                                                 required: "Please enter Alternate Contact No",
//                                             })}
//                                             maxLength={9}
//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.alternatecontactno && <span className="active">{errors.alternatecontactno.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div>
//                             <Row>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">Landmark</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Landmark" className='form-control-profiles'
//                                             {...register("landmark", {
//                                                 required: "Please enter Landmark",
//                                             })}
//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.landmark && <span className="active">{errors.landmark.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div>
//                             <Row>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">Address</Form.Label>
//                                         <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">

//                                             <Form.Control as="textarea" rows={3}
//                                                 className='form-control-profiles'
//                                                 placeholder="Enter Address"
//                                                 {...register("address", {
//                                                     required: "Please enter Address",

//                                                 })}
//                                             />
//                                         </Form.Group>

//                                         <Form.Text className="text-muted">
//                                             {errors.address && <span className="active">{errors.address.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div>
//                             <Row>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">City</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter City" className='form-control-profiles'
//                                             {...register("city", {
//                                                 required: "Please enter City",
//                                             })}
//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.city && <span className="active">{errors.city.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">State</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter State" className='form-control-profiles'
//                                             {...register("state", {
//                                                 required: "Please enter state",
//                                             })}
//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.state && <span className="active">{errors.state.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                                 <Col>
//                                     <Form.Group className="mb-3" controlId="formBasicEmail">
//                                         <Form.Label className="labelname">Post Code</Form.Label>
//                                         <Form.Control type="text" placeholder="Enter Post Code" className='form-control-profiles'
//                                             {...register("pincode", {
//                                                 required: "Please enter Post Code",
//                                             })}
//                                             maxLength={4}

//                                         />
//                                         <Form.Text className="text-muted">
//                                             {errors.pincode && <span className="active">{errors.pincode.message}</span>}
//                                         </Form.Text>
//                                     </Form.Group>
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className={styles.buttonsectionaddress}>
//                             <div >

//                                 {editaddressid?<>
//                                     <button className={styles.addbutton} onClick={handleSubmit(UpdateAddresss)}>
//                                     Update
//                                 </button>
//                                 </>:<>
//                                 <button className={styles.addbutton} onClick={handleSubmit(SubmitsAddress)}>
//                                     Add
//                                 </button>
//                                 </>}

//                             </div>
//                             <div>
//                                 <button className={styles.cancelbutton} onClick={handleClose}>
//                                     Cancel
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </Modal.Body>
//                 {/* <Modal.Footer>
//             <Button variant="secondary" onClick={handleClose}>
//               Close
//             </Button>
//             <Button variant="primary">Understood</Button>
//           </Modal.Footer> */}
//             </Modal>



//         </>
//     )
// }

// export default ModelAddress



import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';


import { usePlacesWidget } from "react-google-autocomplete";

import styles from './styles/Createaddress.module.scss';
import { Addaddress, GetAddressData, DeleteAddress, SingleAddress, UpdateAddress } from '../../../../services/user-profile-service/user-profile-services';

import { useRouter } from 'next/router';
import Googleautocomplete from './../../../googleautocompleteaddress/Googleautocomplete';

function ModelAddress({ error }) {

  const [codes, setCodes] = useState("");







  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm();


  const router = useRouter();

  const addressids = router.query;

  const [postalcodeset, setPostalCodes] = useState("");


  const [showdelete, setShowdelete] = useState(false);
  const [removeloading, setRemoveloading] = useState(false);
  const [deleteaddressid, setDeleteId] = useState("");



  const [stateshortcode1, setShortcode1] = useState("");
  const [statecity1, setCity1] = useState("");



  const [errorpost, setErrorPostCode] = useState(false);


  console.log(postalcodeset?.length, "postalcodeset")


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
        window.location.reload();
        setRemoveloading(false);
      }, 400)
    }).catch((err) => {
      console.log(err);
    })
  }










  const onSubmit = (data) => {
    const address = {
      name: data?.name,
      contactNumber: data?.contactno,
      alternateContactNumber: data?.alternatecontactno,
      // fullAddress: data?.address,
      pinCode: codes,
      landMark: data?.landmark,
      cityName: data?.city,
      stateName: data?.state,
      stateShortCode: data?.stateShortCode,
      countryName: "Australia",
      addressType: Number(data?.addressType),
      addressLineOne: data?.addressLineOne
    }




    if (postalcodeset?.length === 0) {
      setErrorPostCode(true);
    }



    if (postalcodeset) {
      console.log(address, "addresss")

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
        setTimeout(() => {
          router.push('/checkout')
        }, 500)
      }).catch((err) => {
        console.log(err);
      })
    }







  }


  const CancelAddress = () => {
    router.push('/checkout')
  }


  const [checks, setChecks] = useState([]);


  const [firstcity, setFirstCity] = useState("");
  const [firststate, setFirstState] = useState("");
  const [firststateCode, setstateShortCode] = useState("");



  const [addressTypes, setAddressTypes] = useState("");

  useEffect(() => {


    if (addressids?.id) {
      SingleAddress(addressids?.id).then((res) => {
        console.log("res", res?.data)

        setValue("name", res?.data?.name);
        setValue("contactno", res?.data?.contactNumber);
        setValue("alternatecontactno", res?.data?.alternateContactNumber);
        // setValue("address", res?.data?.fullAddress);
        // setValue("pincode",res?.data?.pinCode);
        setValue("landmark", res?.data?.landMark);
        setPostalCodes(codes ? codes : res?.data?.pinCode);
        setValue("city", firstcity ? firstcity : res?.data?.cityName);
        setValue("state", firststate ? firststate : res?.data?.stateName);
        setValue("addressType", res?.data?.addressType);

        setValue("stateShortCode", firststateCode ? firststateCode : res?.data?.stateShortCode);
        //  setCodes(res?.data?.pinCode);
        setShortcode1(res?.data?.pinCode)
        setAddressTypes(res?.data?.addressType)
        setValue("addressLineOne", res?.data?.addressLineOne)

      }).catch((err) => {
        console.log(err);
      })

    }



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




  }, [deleteaddressid, error, codes]);









  const UpdateAddresss = (data) => {
    const address = {
      name: data?.name,
      contactNumber: data?.contactno,
      alternateContactNumber: data?.alternatecontactno,
      // fullAddress: data?.address,
      pinCode: codes ? codes : stateshortcode1,
      landMark: data?.landmark,
      cityName: data?.city,
      stateName: data?.state,
      stateShortCode: data?.stateShortCode,
      countryName: "Australia",
      addressId: addressids?.id,
      addressType: Number(data?.addressType),
      addressLineOne: data?.addressLineOne
    }


    if (codes?.length === 0 || postalcodeset?.length === 0) {
      setErrorPostCode(true);
    }

    if (postalcodeset) {

      UpdateAddress(address).then((res) => {
        toast.success("Address Updated",
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

        setTimeout(() => {
          CancelAddress();
        }, 500)
      }).catch((err) => {
        console.log(err);
      })
    }
  }

  const { ref } = usePlacesWidget({
    apiKey: `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
    onPlaceSelected: (place) => {
      for (const component of place.address_components) {
        const componentType = component.types[0];
        if (componentType === "locality") {


          setValue("city", component.long_name ? component.long_name : null)

          setFirstCity(component.long_name)


        }
        if (componentType === "administrative_area_level_1") {
          setValue("state", component.long_name ? component.long_name : null)
          setFirstState(component.long_name ? component.long_name : null);
          setValue("stateShortCode", component.short_name)
          setstateShortCode(component.short_name)
        }
        if (componentType === "country") {
          if (component.long_name === "Australia") {
            setValue("country", "Australia")
          }
        }
        if (componentType === "postal_code") {
          setPostalCodes(component.long_name);
          setCodes(component.long_name);
        }

      }


    },
    options: {
      types: ["postal_code"],
      componentRestrictions: { country: "Aus" },
    },
  });


  return (
    <div className="mainsection">
    <div className="insidesection">
    <div className={styles.mainaddresspage}>
      <>
        <div className={styles.mainmodelsection}>
          <div className={styles.closesectionmodel}>
            <div className={styles.addressnew}>
              Address new
            </div>

          </div>
          <div className="mt-3">

            <Row>
              <Col xs="12">
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
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">Contact Number</Form.Label>
                  {/* <Form.Control type="text" placeholder="Enter Contact No" className='form-control-profiles'
                    {...register("contactno", {
                      required: "Please enter Contact No",

                    })}
                    maxLength={9}

                  /> */}

                  <div className={styles.formcontrolscontact}>
                    <div className={styles.numbercontactsections}>
                      +61
                    </div>
                    <div className="col-lg-11">
                      <input type="text" placeholder="Enter Alternate Contactno" className={styles.contactformbox}
                        {...register("contactno", {
                          required: "Please enter Contact No",
                        })}
                        maxLength={9}

                      />
                    </div>

                  </div>
                  <Form.Text className="text-muted">
                    {errors.contactno && <span className="active">{errors.contactno.message}</span>}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div>
            <Row>

              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">Alternate Contact Number</Form.Label>
                  {/* <Form.Control type="text" placeholder="Enter Alternate Contact No" className='form-control-profiles'
                    {...register("alternatecontactno", {
                      required: "Please enter Alternate Contact No",
                    })}
                    maxLength={9}
                  />
                  <Form.Text className="text-muted">
                    {errors.alternatecontactno && <span className="active">{errors.alternatecontactno.message}</span>}
                  </Form.Text> */}

                  <div className={styles.formcontrolscontact}>
                    <div className={styles.numbercontactsections}>
                      +61
                    </div>
                    <div className="col-lg-11">
                      <input type="text" placeholder="Enter Alternate Contactno" className={styles.contactformbox}
                        {...register("alternatecontactno", {
                          required: "Please enter Alternate Contactno",
                        })}
                        maxLength={9}

                      />
                    </div>

                  </div>

                  <Form.Text className="text-muted">
                    {errors.alternatecontactno && <span className="active">{errors.alternatecontactno.message}</span>}
                  </Form.Text>
                </Form.Group>
              </Col>

              <Col sm="12">
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
                  <Form.Label className="labelname">Address 1</Form.Label>
                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={2}
                      className='form-control-profiles'
                      placeholder="Enter Address"
                      {...register("addressLineOne", {
                        required: "Please enter address 1",
                      })}
                      maxlength={51}
                    />
                  </Form.Group>
                  <Form.Text className="text-muted">
                    {errors.addressLineOne && <span className="active">{errors.addressLineOne.message}</span>}
                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </div>


          <div>
            <Row>
              <Col xs="12">



                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">Post code</Form.Label>
                  <Form.Control type="text" placeholder="Enter Pincode" className='form-control-profiles'
                    maxLength={4}
                    ref={ref}

                    value={postalcodeset}
                    onChange={(e) => setPostalCodes(e?.target?.value)}

                  />

                  <Form.Text className="text-muted">
                    {errors.city && <span className="active">Post Code is Required</span>}


                    {/* {errorpost && codes?.length<=0?<span className="active">Post Code is Required</span>:null} */}
                    {errorpost && postalcodeset?.length <= 0 ? <span className="active">Postal codeset is Required</span> : null}

                  </Form.Text>


                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">City</Form.Label>
                  <Form.Control type="text" placeholder="Enter City" className='form-control-profiles'
                    {...register("city", {
                      required: "Please enter city",
                    })}
                    // disabled

                  />
                  <Form.Text className="text-muted">
                    {errors.city && <span className="active">{errors.city.message}</span>}
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col xs="12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">State</Form.Label>
                  <Form.Control type="text" placeholder="Enter State" className='form-control-profiles'
                    {...register("state", {
                      required: "Please enter state",
                    })}
                    disabled
                  />
                  <Form.Text className="text-muted">
                    {errors.state && <span className="active">{errors.state.message}</span>}


                  </Form.Text>
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div>
            <Row>

              <Col xs="12">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">State Short Code</Form.Label>
                  <Form.Control type="text" placeholder="Enter stateShortCode" className='form-control-profiles'
                    {...register("stateShortCode", {
                      required: "Please enter stateShortCode",
                    })}




                    disabled
                  />
                  <Form.Text className="text-muted">
                    {errors.stateShortCode && <span className="active">{errors.stateShortCode.message}</span>}
                  </Form.Text>
                </Form.Group>
              </Col>


              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="labelname">Country </Form.Label>
                  <Form.Control type="text" placeholder="Enter country " className='form-control-profiles'
                    // {...register("country", { 
                    //   required: "Please enter country ",
                    // })}
                    disabled
                    defaultValue="Australia"
                  />
                  <Form.Text className="text-muted">
                    {/* {errors.country  && <span className="active">{errors.country.message}</span>} */}
                  </Form.Text>
                </Form.Group>
              </Col>

            </Row>

          </div>

          <div className="mb-4 mt-2" style={{ cursor: "pointer" }}>
            <Form.Label className="labelname mb-2">Address Type</Form.Label>


            <Form.Group className="mb-3" controlId="formBasicEmail">


              <select
                className='form-control-profiless'
                id="selectmethod"
                defaultValue=""
                name="addressType"
                {...register("addressType", { required: "Please enter addressType", })}

              >
                <option value="" disabled>---Please Select Address Type---</option>
                <option value="1">Home (All Day Delivery)</option>
                <option value="2">Work (Delivery between 10 AM to 5.30 PM)</option>
              </select>

              {/* <Form.Select aria-label="Default select example"   {...register("gender", { required: "Please enter gender", })}>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
  
                </Form.Select> */}


              <Form.Text className="text-muted">
                {errors.addressType && <span className="active">{errors.addressType.message}</span>}
              </Form.Text>
            </Form.Group>

            {/* <Row>

            <Col lg="4">
            
            <Form.Check
          type={"radio"}
          label={"Home (All Day Delivery)"}
          id={"1"}
          value="1"
          {...register("addressType",{
            required: "Please Select Address Type",
          })}
        />
            </Col>



            <Col>
            
            <Form.Check
          type={"radio"}
          label={"Work (Delivery between 10 AM to 5.30 PM)"}
          id={"2"}
          value="2"
        
          {...register("addressType",{
            required: "Please Select Address Type",
          })}
        />
            </Col>
            </Row> */}


            {/* <Form.Text className="text-muted">
              {errors.addressType && <span className="active">{errors.addressType.message}</span>}
            </Form.Text> */}


          </div>



          <div className={styles.buttonsectionaddress}>
            <div >

              {addressids?.id ? <>
                <button className={styles.addbutton} onClick={handleSubmit(UpdateAddresss)}>
                  Update
                </button>
              </> : <>
                <button className={styles.addbutton} onClick={
                  handleSubmit(onSubmit)
                }>
                  Create
                </button>
              </>}





            </div>
            <div>


              <button className={styles.cancelbutton} onClick={CancelAddress}>
                Cancel
              </button>
            </div>
          </div>
        </div>


        <div>






        </div>
      </>
    </div>
    </div>
    </div>
  )
}

export default ModelAddress;