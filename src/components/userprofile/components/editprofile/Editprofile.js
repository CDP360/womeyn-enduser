import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Editprofile.module.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import userprofile from '../../../../assests/womeynlogos/userprofile.png';
import camera from '../../../../assests/womeynlogos/cameraprofile.png';
import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import { useRouter } from 'next/router';
import { CreatePassword, UserProfileImageupload, UserProfileInformation } from '../../../../services/user-login-service/user-login-services';
import { toast } from 'react-toastify';
import congrtsimage from '../../../../assests/login-logos/congratusimage.png';
function Editprofile({ move, user }) {
    const [imageshowmodel, setImageShowModel] = useState(true);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const onSubmit = (e) => {
        const datas = {
            firstName: e?.username,
            dob: e?.dateofbirth,
            gender: e?.gender,
            email: e?.email,
            contactNumber: e?.phonenumber,
            address: e?.address
        }
        const userid = localStorage.getItem("womenUserid");
        CreatePassword(JSON.parse(userid), datas).then((res) => {
            toast.success("User Profile Edit Successfully")
            setTimeout(() => {
                move(false);
                window.location.reload();
            }, 1000)
        }).catch((err) => {
            console.log(err);
        })
    }
    const [image, setImage] = useState("");
    const [showuploadbutton, setShowUploadButton] = useState(false);
    const handleImagechange = (e) => {
        setImage(e.target.files[0]);
        setShowUploadButton(true);
    }
    const ImageUploadSuccess = () => {
        const userid = localStorage.getItem("womenUserid");
        const formDatas = new FormData();
        formDatas.append("upl", image);
        UserProfileImageupload(JSON.parse(userid), formDatas).then((res) => {
            handleClose();
            setTimeout(() => {
                handleShow1();
            }, 200)
        }).catch((err) => {
            console.log(err);
        })
    }
    const confirmuploadprofileimage = () => {
        window.location.reload();
        handleClose1();
    }
    useEffect(() => {
        setValue("username", user?.firstName);
        setValue("gender", user?.gender);
        setValue("email", user?.email);
        setValue("phonenumber", user?.contactNumber);

    }, [user])
    return (
        <Fragment>
            <div className={styles.maineditprofile}>
                <div className='profile-text-sizes'>
                    Edit Profile
                </div>
                <div className={styles.formeditsection}>
                    <div className={styles.imagesectionprofile} >
                        {user?.profileImageName ? <>
                            <img
                                width={"110px"}
                                height={"110px"}
                                style={{ borderRadius: "50%", cursor: "pointer" }}
                                className={styles.editprofilesection}
                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${user?.profileImageName}`}
                                alt="profile-pic"
                            />
                        </> : <Image src={userprofile} alt="no image" className={styles.profileimage} onClick={handleShow} />}
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
                                    // minLength: {
                                    //     value: 10,
                                    //     message: "username is more than 7 charactor"
                                    // },
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
                            {/* <Form.Select aria-label="Default select example" className='form-control-profile'>


                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Form.Select> */}

                            <select
                                className='form-control-profiles'
                                id="selectmethod"
                                defaultValue=""
                                name="gender"
                                {...register("gender", { required: "Please enter gender", })}
                            >
                                <option value="" disabled>Select Option</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            {errors.gender && <span className="active">{errors.gender.message}</span>}
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
                        {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="text" placeholder="Enter Address" className='form-control-profile'
                                {...register("address", {
                                    required: "Please enter address",
                                    minLength: {
                                        value: 9,
                                        message: "Address Required!"
                                    },
                                })}
                            />
                        </Form.Group>
                        {errors.address && <span className="active">{errors.address.message}</span>} */}

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

                            {image ? <label htmlFor="upload-button">
                                <>
                                    <img
                                        alt="profile-pic"
                                        width={"110px"}
                                        height={"110px"}
                                        style={{ borderRadius: "50%", cursor: "pointer" }}
                                        src={URL.createObjectURL(image)}
                                    />

                                    {showuploadbutton ? <>
                                    </> : <>
                                        <div className="mt-2">
                                            <Button onClick={uploadImages} className="upload-btn" >Upload</Button>
                                        </div>
                                    </>}
                                </>
                            </label> : (
                                <>
                                    {user?.profileImageName ? <label htmlFor="upload-button">
                                        <img
                                            width={"110px"}
                                            height={"110px"}
                                            style={{ borderRadius: "50%", cursor: "pointer" }}
                                            src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${user?.profileImageName}`}
                                            alt="profile-pic"
                                        />
                                    </label> : <Image
                                        className="theme-color-default-img  profile-pic rounded avatar-100"
                                        src="https://sialifehospital.com/wp-content/uploads/2021/04/testimonial-1.png"
                                        alt="profile-pic"
                                    />}
                                </>)}
                        </div>
                        <div className="text-center mt-4 mb-1">
                            <div>
                                <span className='active'> Drag & drop</span> an image
                            </div>
                            <label htmlFor="upload-button">
                                Or <span className='active'>Click Here</span> an image
                            </label>
                            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleImagechange} />
                        </div>
                    </Modal.Body>
                    <div className="text-center mb-4 mt-3">
                        <Button className={styles.editbuttonss} onClick={ImageUploadSuccess}>Done</Button>
                    </div>
                </Modal>

                <div>
                    <Modal show={show1}
                        onHide={handleClose1}
                        backdrop="static"
                        keyboard={false}
                        centered>

                        <Modal.Body>
                            <div className={styles.cursors} onClick={handleClose1}>
                                <ion-icon name="close-outline" size="large"></ion-icon>
                            </div>
                            <div className={styles.congratus}>
                                <div className={styles.insidesectioncongratus}>
                                    <div className="mt-2 mb-3">
                                        <Image src={congrtsimage} alt="no image" className={styles.congratusimage} />
                                    </div>
                                    <div className="mt-2 mb-3">
                                        <h1 className={styles.congratustext}>Congratulations!</h1>

                                    </div>
                                    <div className={styles.yourprofilehas}>
                                        Your profile has been Updated!
                                    </div>
                                    <div className='mt-4 mb-4'>
                                        <Button className={styles.editbuttonssdone} onClick={confirmuploadprofileimage}>Done</Button>

                                    </div>
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </div>


            </>
        </Fragment>
    )
}

export default Editprofile