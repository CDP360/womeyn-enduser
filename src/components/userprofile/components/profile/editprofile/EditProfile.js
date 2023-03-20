import React, { useState, useEffect } from 'react'
import styles from '../styles/Profile.module.scss';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CreateProfileuser, UserProfileInformation } from '../../../../../services/user-login-service/user-login-services';
function EditProfile() {
    const history = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const userid = localStorage.getItem("womenUserid");
        UserProfileInformation(JSON.parse(userid)).then((res) => {
            if (res == "Please authenticate") {
                toast.error("Please Authenticate!!",
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
                localStorage.removeItem("womenUserid");
                localStorage.removeItem("womenUserToken");
                localStorage.removeItem("womenProfile");
            }
            setUser(res?.data);
            localStorage.setItem("womenProfile", JSON.stringify(res?.data?.profileImageName));
        }).catch((err) => {
            console.log(err);
        })

    }, []);

    useEffect(() => {
        setValue("username", user?.firstName);
        setValue("gender", user?.gender);
        setValue("email", user?.email);
        setValue("phonenumber", user?.contactNumber);
    }, [user])
    const [show, setShow] = useState(false);
    const EditProfile = () => {
        setShow(true);
    }
    const onSubmit = (e) => {
        const datas = {
            firstName: e?.username,
            dob: e?.dateofbirth,
            gender: e?.gender,
            email: e?.email,
            contactNumber: e?.phonenumber,

        }
        const userid = localStorage.getItem("womenUserid");
        CreateProfileuser(JSON.parse(userid), datas).then((res) => {
            toast.success("Profile Updated",
                {
                    position: "top-center",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                })
            history.push("/profile/youraccount")
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <div className={styles.profileformssection}>
            <div className={styles.personalinformation}>
                <div className="commonprofiletextsize">Personal Information</div>
                <div className={styles.buttonsplitsections}>
                    <button className={styles.editbutton} onClick={handleSubmit(onSubmit)}>Save</button>
                    <button className={styles.editbuttoncancel} onClick={() => history.push("/profile/youraccount")}>Cancel</button>

                </div>

            </div>
            <div className="mt-4 mb-2">
                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>User Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter User Name" className='form-control-profile'
                                {...register("username", {
                                    required: "Please enter username",

                                })}
                            />
                            <Form.Text className="text-muted">
                                {errors.username && <span className="active">{errors.username.message}</span>}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Gender</Form.Label>

                            <select
                                className='form-control-profiles'
                                id="selectmethod"
                                defaultValue=""
                                name="gender"
                                {...register("gender", { required: "Please enter gender", })}
                            >
                                <option value="female">Female</option>
                                <option value="male">Male</option>

                            </select>

                            {/* <Form.Select aria-label="Default select example"   {...register("gender", { required: "Please enter gender", })}>
                <option value="Female">Female</option>
                <option value="Male">Male</option>

              </Form.Select> */}


                            <Form.Text className="text-muted">
                                {errors.gender && <span className="active">{errors.gender.message}</span>}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email" className='form-control-profile'
                                {...register("email", {
                                    required: "Please enter email",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    },
                                })}

                            />
                            <Form.Text className="text-muted">
                                {errors.email && <span className="active">{errors.email.message}</span>}
                            </Form.Text>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Contact Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter contactno" className='form-control-profile'
                                {...register("phonenumber", {
                                    required: "Please enter contactno",

                                })}
                            />
                            <Form.Text className="text-muted">
                                {errors.phonenumber && <span className="active">{errors.phonenumber.message}</span>}
                            </Form.Text>
                        </Form.Group>
                    </Col>

                </Row>

                <Row>

                    <Col lg="6">

                        <Form.Group className="mb-3"  >
                            <Form.Label>Date Of Birth</Form.Label>
                            <Form.Control type="date" placeholder="Date Of Birth" className='form-control-profile'
                                {...register("dateofbirth", {
                                    required: "Please enter dateofbirth",

                                })}
                            />
                            {errors.dateofbirth && <span className="active">{errors.dateofbirth.message}</span>}
                        </Form.Group>
                    </Col>

                </Row>
            </div>
        </div>
    )
}

export default EditProfile;