import React from 'react'
import Spinner from 'react-bootstrap/Spinner';
import Modal from 'react-bootstrap/Modal';
import styles from './styles/Orderdetails.module.scss';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function ModelAddress({ show, handleClose, register, errors, handleSubmit, SubmitsAddress, handleShow }) {
    return (
        <>
            <div>    <button className={styles.addnewaddressbutton} onClick={handleShow}>
                Add New Address
            </button>

            </div>
            <Modal
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
                                Add New Address
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
                                        {/* <Form.Control type="text" placeholder="Enter Address" className='form-control-profiles'
                        {...register("address", {
                          required: "Please enter Address",
                        })}
                      /> */}
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
                                            maxLength={4}

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
                                <button className={styles.addbutton} onClick={handleSubmit(SubmitsAddress)}>
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
    )
}

export default ModelAddress