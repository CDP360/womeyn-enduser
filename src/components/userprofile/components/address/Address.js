import React, { useState, useEffect, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import styles from './styles/Address.module.scss';
import searchcion from '../../../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Addaddress, GetAddressData } from '../../../../services/user-profile-service/user-profile-services';



// const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY;
// const mapApiJs = `https://maps.googleapis.com/maps/api/js`;


// load google map api

function loadAsyncScript(src) {
    return new Promise(resolve => {
        const script = document.createElement("script");
        Object.assign(script, {
            type: "text/javascript",
            async: true,
            src
        })
        script.addEventListener("load", () => resolve(script));
        document.head.appendChild(script);
    })
}
function Address({setIndex,index}) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();


    const [query, setQuery] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [loading,setLoading]=useState(false);


    const [getaddress, setAddress] = useState([]);

    const onSubmit = (e) => {
        const datas = {
            name: e?.name,
            contactNumber: e?.contactnumber,
            alternateContactNumber: e?.alternatecontactnumber,
            pincode: e?.pincode,
            lanmark: e?.lanmark,
            cityName: e?.city,
            stateName: e?.state,
            countryName: "Australia",
            fullAddress: e?.fulladdress
        }
        window.location.reload();
                setIndex(index+1);
        // Addaddress(datas).then((res) => {
        //     setTimeout(() => {
        //         handleClose();
        //         window.location.reload();
        //         setIndex(1);
        //     }, 1000)
        // }).catch((err) => {
        //     console.log(err);
        // })
    }




 


    useEffect(() => {
       
        getAddressdata();
  
    }, []);

    const getAddressdata = () => {
        setLoading(true);
        GetAddressData().then((res) => {
            setAddress(res?.data?.results);
            setTimeout(()=>{
                setLoading(false);
            },500)
        }).catch((err) => {
            console.log(err);
        })
    }

    console.log("setIndex",index)

    return (
        <div className={styles.mainaddresspage}>
            <div className={styles.insideaddresspage}>
                <div className={styles.topsectionaddress}>
                    <div className={styles.leftaddresssection}>
                        <input type="text" placeholder='Search address or receiver name' className={styles.serachaddress} />
                        <div>
                            <Image src={searchcion} alt="no image" className={styles.searchicon} />
                        </div>
                    </div>
                    <div className={styles.rightaddresssection}>
                        <div>
                            <button className={styles.addbuttonnew} onClick={handleShow}>Add new address</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>
            <div>

               {loading?<>
               {/* <Loader */}
               loading...
               </>:<>
               
               {getaddress?.map((item, index) => {
                    return (
                        <>

                            <div className={styles.addresslistsection} key={index}>
                                <div className={styles.addresssplit}>
                                    <div className={styles.leftaddress}>

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
                                    </div>

                                    <div className={styles.rightaddress}>
                                        <div>
                                            <button className={styles.editbuttonaddress}>Edit</button>

                                        </div>
                                        <div>
                                            <button className={styles.deletebuttonaddress}>Delete</button>

                                        </div>

                                    </div>
                                </div>

                            </div>

                        </>
                    )
                })}

               </>} 
             


            </div>

            <>


                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                    size="lg"

                >

                    <Modal.Body>

                        <div className={styles.mainsectionaddress}>
                            <div className={styles.cursors} onClick={handleClose}>
                                <ion-icon name="close-outline" size="large"></ion-icon>
                            </div>
                            <div className="text-center">
                                <h3>Add an Address</h3>
                            </div>
                            <div className="mt-4">
                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter name" className='form-control-profile'
                                                {...register("name", {
                                                    required: "Please enter name",
                                                    // minLength: {
                                                    //     value: 10,
                                                    //     message: "username is more than 7 charactor"
                                                    // },
                                                })}
                                            />
                                            <Form.Text className="text-muted">
                                                {errors.name && <span className="active">{errors.name.message}</span>}
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Contact Number</Form.Label>
                                            <Form.Control type="number" placeholder="Enter contact number" className='form-control-profile'
                                                {...register("contactnumber", {
                                                    required: "Please enter contactnumber",
                                                    minLength: {
                                                        value: 9,
                                                        message: "contactnumber is more than 9 numbers"
                                                    },
                                                })}
                                            />
                                            <Form.Text className="text-muted">
                                                {errors.contactnumber && <span className="active">{errors.contactnumber.message}</span>}
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Alternate Contact Number</Form.Label>
                                            <Form.Control type="number" placeholder="Enter alternate contact number" className='form-control-profile'
                                                {...register("alternatecontactnumber", {
                                                    required: "Please enter contactnumber",
                                                    minLength: {
                                                        value: 9,
                                                        message: "alternatecontactnumber is more than 9 numbers"
                                                    },
                                                })}

                                            />
                                            <Form.Text className="text-muted">
                                                {errors.alternatecontactnumber && <span className="active">{errors.alternatecontactnumber.message}</span>}
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>Lanmark</Form.Label>
                                            <Form.Control type="text" placeholder="Enter lanmark" className='form-control-profile'
                                                {...register("lanmark", {
                                                    required: "Please enter lanmark",

                                                })}
                                            />
                                            <Form.Text className="text-muted">
                                                {errors.lanmark && <span className="active">{errors.lanmark.message}</span>}
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                </Row>


                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>City</Form.Label>
                                            <Form.Control type="text" placeholder="Enter city" className='form-control-profile'
                                                {...register("city", {
                                                    required: "Please enter city",
                                                })}

                                            />
                                            <Form.Text className="text-muted">
                                                {errors.city && <span className="active">{errors.city.message}</span>}
                                            </Form.Text>
                                        </Form.Group>
                                    </Col>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Label>State</Form.Label>
                                            <Form.Control type="text" placeholder="Enter state" className='form-control-profile'
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
                                    <Form.Group className="mb-3" >
                                            <Form.Label>Pincode</Form.Label>
                                            <Form.Control type="number" placeholder="Enter pincode" className='form-control-profile'
                                                // ref={searchInput}
                                            // id="postalCode" ref={autoCompleteRef} onChange={getAddressFromGoogle} value={query}
                                            {...register("pincode", {
                                                required: "Please enter lanmark",

                                            })}
                                            />
                                            <Form.Text className="text-muted">
                                                {errors.pincode && <span className="active">{errors.pincode.message}</span>}
                                            </Form.Text>
                                        </Form.Group>
                       
                                    </Col>
                                </Row>

                                <Row>

                                    <Col>
                                        <Form.Label>Address</Form.Label>
                                        <FloatingLabel controlId="floatingTextarea2" >
                                            <Form.Control
                                                className='form-control-profile'
                                                as="textarea"
                                                placeholder="Leave a comment here"
                                                style={{ height: '100px' }}
                                                name="fulladdress"
                                                {...register("fulladdress", {
                                                    required: "Please enter fulladdress",

                                                })}
                                            />
                                            <Form.Text className="text-muted">
                                                {errors.fulladdress && <span className="active">{errors.fulladdress.message}</span>}
                                            </Form.Text>
                                        </FloatingLabel>
                                    </Col>

                                </Row>
                                <div className="mt-4 mb-3">

                                    <button className={styles.savebutton} onClick={handleSubmit(onSubmit)}>Save</button>
                                </div>

                            </div>
                        </div>
                    </Modal.Body>

                </Modal>
            </>
        </div>
    )
}

export default Address