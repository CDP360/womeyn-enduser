import React, { Fragment, useRef } from 'react'
import { Form } from 'react-bootstrap';
import styles from './styles/Forgetpassword.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import eye from '../../assests/login-logos/Eye.png';
import eyeoff from '../../assests/login-logos/Eye Off.png';
import { useState } from 'react';
import { CreatePassword, CreateProfileuser } from '../../services/user-login-service/user-login-services';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import Col from 'react-bootstrap/Col';

function Passwordcreate() {
    const router = useRouter();
    const [emailcheckuser, setEmailCheck] = useState("");
    const [matchcheck1, setMatchCheck1] = useState(false);
    const [matchcheck2, setMatchCheck2] = useState(false);
    const [matchcheck3, setMatchCheck3] = useState(false);
    const [matchcheck4, setMatchCheck4] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [tokenUser, setTokenUser] = useState("");

    const formSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is Required.'),
        email: Yup.string()
            .required('Email is Required.'),
        phonenumber: Yup.string()
            .required('Contact No is Required.'),
        gender: Yup.string().required("Gender is Required."),
        password: Yup.string()
            .required('Password must be atleast 8 characters long')
            .min(8, 'Password must be atleast 8 characters long'),
        confirmPwd: Yup.string()
            .required('Password is mandatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
        dateofbirth: Yup.string().required("Date Of Birth is Required.")
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = async (data) => {
        const productWhishlist = JSON.parse(localStorage.getItem("productwhishlist"));
        const check = {
            password: data?.password,
            firstName: data?.name,
            gender: data?.gender,
            email: data?.email,
            contactNumber: data?.phonenumber,
            dateOfBirth: data?.dateofbirth
        }
        var passwordRegex = /(?=^.{8,}$)(?=.{0,}[A-Z])(?=.{0,}[a-z])(?=.{0,}\W)(?=.{0,}\d)/;
        if (productWhishlist) {
            if (passwordRegex.test(check?.password)) {
                localStorage.setItem("auth", true);
                setMatchCheck1(true);
                setMatchCheck2(false);
                CreateProfileuser(check).then((res) => {
                    toast.success("Profile Create!!", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "success",
                    });
                    setTimeout(() => {
                        router.push(`${productWhishlist}`)
                    }, 1000);
                }).catch((err) => {
                    console.log(err);
                })

            }
            else {
                setMatchCheck2(true);
            }

        }
        else {
            if (passwordRegex.test(check?.password)) {

                localStorage.setItem("auth", true);
                setMatchCheck1(true);
                setMatchCheck2(false);
                CreateProfileuser(check).then((res) => {
                    toast.success("Profile Create!!!", {
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
                        router.push("/")
                    }, 1000);
                }).catch((err) => {
                    console.log(err);
                })
            }
            else {
                setMatchCheck2(true);
            }

        }

        // console.log(check,"check")


        // if (check?.password?.match(/[a-z]/)) {
        //     console.log("matched type 1");
        //     setMatchCheck1(true);
        // }

        // if (check?.password?.match(/[A-Z]/)) {
        //     console.log("matched type 2");
        //     setMatchCheck2(true);

        // }

        // if (check?.password?.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
        //     console.log("matched type 3")
        //     setMatchCheck3(true);

        // }
        // if (check?.password?.match(/\d/)) {
        //     console.log("matched type 4");
        //     setMatchCheck4(true);

        // }

    };


    useEffect(() => {
        const emailstypecheck = localStorage.getItem("signupuser");



        if (!typeof (JSON.parse(emailstypecheck === 1 || 2 || 3 || 4 || 5 || 6 || 7 || 8 || 9 || 0)) == "number") {
            setValue("contactno", JSON.parse(emailstypecheck))

            setEmailCheck("number")


        }
        else {
            setValue("email", JSON.parse(emailstypecheck))
            setEmailCheck("string")

        }
    }, [matchcheck1, matchcheck2, matchcheck3, matchcheck4, emailcheckuser]);


    useEffect(() => {
        const TokenCheckUser = localStorage.getItem("auth");
        setTokenUser(JSON.parse(TokenCheckUser));



    }, [])


    const NavigateService = () => {
        router.push("/")
    }



    if (tokenUser) {
        return (
            <div>
                {NavigateService()}
            </div>
        )
    }

    else {
        return (
            <Fragment>
                <div className="mainsection">
                    <div className="insidesection">
                        <div className="mt-3">
                            <div className={styles.Mainforgetpassword}>
                                <div className={styles.insidesectionforget}>
                                    <div className={styles.insideforgetsplit}>
                                        <div className={styles.logintext}>
                                            Welcome to Womeyn
                                        </div>
                                        <div>
                                        </div>
                                        <div className='mb-4 mt-2'>
                                            <Form onSubmit={handleSubmit(onSubmit)}>
                                                <div className={styles.passwordformsection}>
                                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                                        <Form.Label>Name</Form.Label>
                                                        <div className={"formsectioncommonlogin"}>
                                                            <Form.Control type="text" placeholder="Name" className={styles.forms}
                                                                {...register('name', {
                                                                    required: "Please enter name",

                                                                })}
                                                            />
                                                        </div>
                                                        {errors.name && <span className="active">{errors.name.message}</span>}
                                                    </Form.Group>

                                                </div>
                                                <div className='mt-4'>
                                                    {emailcheckuser == "string" ? <>

                                                        <div className={styles.passwordformsection}>
                                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                                <Form.Label>Email </Form.Label>
                                                                <div className={"formsectioncommonlogin"}>
                                                                    <Form.Control type="email" placeholder="Email" className={styles.forms}
                                                                        {...register('email', {
                                                                            required: "Please enter email",
                                                                            pattern: /^\S+@\S+$/i
                                                                        })}
                                                                        disabled

                                                                    />


                                                                </div>
                                                                {errors.email && <span className="active">{errors.email.message}</span>}
                                                            </Form.Group>

                                                        </div>
                                                    </> : <>
                                                        <div className={styles.passwordformsection}>
                                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                                <Form.Label>Email</Form.Label>
                                                                <div className={"formsectioncommonlogin"}>
                                                                    <Form.Control type="email" placeholder="Email" className={styles.forms}
                                                                        {...register('email', {
                                                                            required: "Please enter email",
                                                                            pattern: /^\S+@\S+$/i
                                                                        })}
                                                                    />


                                                                </div>
                                                                {errors.email && <span className="active">{errors.email.message}</span>}
                                                            </Form.Group>

                                                        </div>
                                                    </>}

                                                </div>
                                                <div className='mt-4'>

                                                    {emailcheckuser == "number" ? <>

                                                        <div className={styles.passwordformsection}>
                                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                                <Form.Label>Contact Number</Form.Label>

                                                                {/* <div className={"formsectioncommonlogin"}>
                                                            <Form.Control type="text" placeholder="Mobile no" className={styles.forms}
                                                            maxLength={9}
                                                                {...register('contactno', {
                                                                    required: "Please enter mobile no",

                                                                })}

                                                                disabled
                                                            />
                                                        </div> */}


                                                                <div className={styles.formcontrolscontact}>
                                                                    <div className={styles.numbercontactsections}>
                                                                        +61
                                                                    </div>
                                                                    <div className="col-lg-11">
                                                                        <input type="text" placeholder="Enter contactno" className={styles.contactformbox}
                                                                            {...register("phonenumber", {
                                                                                required: "Please enter contactno",

                                                                            })}
                                                                            maxLength={9}
                                                                            disabled
                                                                        />
                                                                    </div>

                                                                </div>
                                                                {errors.contactno && <span className="active">{errors.contactno.message}</span>}
                                                            </Form.Group>

                                                        </div>
                                                    </> : <>



                                                        <div className={styles.passwordformsection}>
                                                            <Form.Group className="mb-2" controlId="formBasicEmail">
                                                                <Form.Label>Contact no</Form.Label>

                                                                <div className={styles.formcontrolscontact}>
                                                                    <div className={styles.numbercontactsections}>
                                                                        +61
                                                                    </div>
                                                                    <div className="col-lg-11">
                                                                        <input type="text" placeholder="Enter Contact No" className={styles.contactformbox}
                                                                            {...register("phonenumber", {
                                                                                required: "Please enter Contact No",

                                                                            })}
                                                                            maxLength={9}

                                                                        />
                                                                    </div>

                                                                </div>
                                                                {/* <div className={"formsectioncommonlogin"}>
                                                            <Form.Control type="text" placeholder="Mobile no" className={styles.forms}
                                                                {...register('contactno', {
                                                                    required: "Please enter mobile no",

                                                                })}
                                                            />


                                                        </div> */}
                                                                {errors.phonenumber && <span className="active">{errors.phonenumber.message}</span>}
                                                            </Form.Group>

                                                        </div>
                                                    </>}

                                                </div>
                                                <div className='mt-4'>
                                                    <div className={styles.passwordformsection}>
                                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                                            <Form.Label>Password</Form.Label>
                                                            <div className={"formsectioncommonlogin"}>
                                                                <Form.Control type={show ? "text" : "password"} placeholder="Password" className={styles.forms}
                                                                    {...register('password', {
                                                                        pattern: {
                                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                                            message: "invalid email address"
                                                                        },
                                                                    })}
                                                                />
                                                                <div className={styles.passwordicons}>
                                                                    {show ? <div className='mt-2' onClick={() => setShow(!show)}><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow(!show)}><Image src={eyeoff} alt="no image" /></div>}
                                                                </div>
                                                            </div>
                                                            {errors.password && <span className="active">{errors.password.message}</span>}
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div className='mt-4'>
                                                    <div className={styles.passwordformsection}>
                                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                                            <Form.Label>Confirm Password</Form.Label>
                                                            <div className={"formsectioncommonlogin"}>
                                                                <Form.Control type={show1 ? "text" : "password"} placeholder="Confirm Password" className={styles.forms}
                                                                    {...register('confirmPwd')}
                                                                />
                                                                <div className={styles.passwordicons}>
                                                                    {show1 ? <div onClick={() => setShow1(!show1)} className="mt-2 ms-4"><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow1(!show1)}><Image src={eyeoff} alt="no image" /></div>}
                                                                </div>
                                                            </div>
                                                            {errors.confirmPwd && <span className="active">{errors.confirmPwd.message}</span>}
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div>
                                                    {matchcheck1 ? <div className='text-success'>
                                                        Password Matched!
                                                    </div> : <>
                                                    </>}
                                                    {matchcheck2 && <div className='text-danger shorttexts'>
                                                        At least one letter,
                                                        one capital letter,
                                                        one number,
                                                        one special character,
                                                    </div>}
                                                </div>
                                                <div className='mt-4'>
                                                    <div className="mb-2">Gender:</div>
                                                    <div className='d-flex gap-2'>
                                                        <input {...register("gender", { required: true })} type="radio" value="female" className="radiobutton"/> <span>Female</span>
                                                        <input {...register("gender", { required: true })} type="radio" value="male" 
                                                        /><span>Male</span>
                                                    </div>

                                                    {errors.gender && <span className="active">{errors.gender.message}</span>}
                                                </div>
                                                <div className="mt-3 mb-3">
                                                    <Col xs="12" sm="12" md="6" lg="12">

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
                                                </div>
                                                <button variant="primary" type="submit" className="loginbutton mt-4">
                                                    Submit
                                                </button>

                                            </Form>
                                            {/* 
                                    <button variant="primary" type="submit" className="cancelbutton mt-4 mb-3">
                                        Cancel
                                    </button> */}

                                            {/* <div className='text-center mb-5 mt-5'>
                                    Already have an account?  <span className='active' onClick={() => router.push("/login")}>Sign up</span>
                                </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className={styles.leftsection1}>

                </div>
                <div className={styles.righttopsection1}>

                </div>
                <div className={styles.rightbottomsection1}>

                </div>
            </Fragment >
        )
    }


}

export default Passwordcreate;



