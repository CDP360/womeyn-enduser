import React, { Fragment, useState } from 'react'
import styles from './styles/Editprofile.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import userprofile from '../../../../assests/womeynlogos/userprofile.png';
import camera from '../../../../assests/womeynlogos/cameraprofile.png';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
function Editprofile({ move }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const onSubmit = (e) => {
        console.log(e, "kalai");
        setTimeout(() => {
            move(false);
        }, 1000)
    }
    return (
        <Fragment>
            <div className={styles.maineditprofile}>
                <div className='profile-text-sizes'>
                    Edit Profile
                </div>
                <div className={styles.formeditsection}>
                    <div className={styles.imagesectionprofile} >
                        <Image src={userprofile} alt="no image" className={styles.profileimage} onClick={handleShow} />
                        <div>
                            <Image src={camera} alt="no image" className={styles.profileimagecamera} onClick={handleShow} />
                        </div>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                        <Form.Group className="mb-3" >
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" placeholder="Enter Username" className='form-control-profile'
                                {...register("username", {
                                    required: "Please enter username",
                                    minLength: {
                                        value: 10,
                                        message: "username is more than 7 charactor"
                                    },
                                })}
                            />
                            {errors.username && <span className="active">{errors.username.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date Of Birth" className='form-control-profile'
                                {...register("dateofbirth", {
                                    required: "Please enter dateofbirth",

                                })}
                            />
                            {errors.dateofbirth && <span className="active">{errors.dateofbirth.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Gender</Form.Label>
                            <Form.Select aria-label="Default select example" className='form-control-profile'>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='form-control-profile'
                                {...register("email", {
                                    required: "Please enter email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    },
                                })}
                            />
                            {errors.email && <span className="active">{errors.email.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter Phone Number" className='form-control-profile'
                                {...register("phonenumber", {
                                    required: "Please enter phonenumber",
                                    minLength: {
                                        value: 9,
                                        message: "please enter 9 digit mobile number"
                                    },
                                })}
                            />
                            {errors.phonenumber && <span className="active">{errors.phonenumber.message}</span>}
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" className='form-control-profile' />
                        </Form.Group>
                        <div className="d-flex gap-4 mt-4 mb-3">
                            <Button className={["edit-btn", styles.editbutton]} onClick={() => move(false)} >Cancel</Button>
                            <Button className={["selleractive", styles.editbutton]} type="submit" >Save</Button>
                        </div>
                    </Form>

                </div>

            </div>

            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Body>
                        <div className={styles.cursors} onClick={handleClose}>
                            <ion-icon name="close-outline" size="large"></ion-icon>
                        </div>
                        <div className="mt-3 mb-4">
                            <div className={styles.changepicturesize}>Change picture </div>
                        </div>
                        <div className="text-center">
                            <Image src={userprofile} alt="no image" className={styles.profileimages} onClick={handleShow} />
                        </div>
                        <div className="text-center mt-4 mb-1">
                            <div>
                                <span className='active'> Drag & drop</span> an image
                            </div>
                            <label htmlFor="upload-button">
                                Or <span className='active'>Click Here</span> an image
                            </label>
                            <input type="file" id="upload-button" style={{ display: 'none' }} />

                        </div>
                    </Modal.Body>
                    <div className="text-center mb-4 mt-3">
                        <Button className={styles.editbuttons} onClick={handleClose}>Done</Button>
                    </div>
                </Modal>

            </>
        </Fragment>
    )
}

export default Editprofile