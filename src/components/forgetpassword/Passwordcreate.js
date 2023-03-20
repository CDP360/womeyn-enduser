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
import { CreatePassword } from '../../services/user-login-service/user-login-services';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
function Passwordcreate() {
    const router = useRouter();
    const [matchcheck1, setMatchCheck1] = useState(false);
    const [matchcheck2, setMatchCheck2] = useState(false);
    const [matchcheck3, setMatchCheck3] = useState(false);
    const [matchcheck4, setMatchCheck4] = useState(false);
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const formSchema = Yup.object().shape({
        password: Yup.string()
            .required('Password is must ')
            .min(8, 'Password must be atleast 8 characters long'),

        confirmPwd: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = async (data) => {
        const userid = localStorage.getItem("womenUserid");
        const check = {
            password: data?.password,
        }
        var passwordRegex = /(?=^.{8,}$)(?=.{0,}[A-Z])(?=.{0,}[a-z])(?=.{0,}\W)(?=.{0,}\d)/g
        if (passwordRegex.test(check?.password)) {
            console.log("data", check)
            setMatchCheck1(true);
            setMatchCheck2(false);
            // CreatePassword(JSON.parse(userid), check).then((res) => {
            //     toast.success("Create Password Successfully");
            //     handlePushTerms();

            // }).catch((err) => {
            //     console.log(err);
            // })
        }
        else {
            setMatchCheck2(true);
        }

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

    const handlePushTerms = () => {
        setTimeout(() => {
            router.push("/")
        }, 1000);
    }

    useEffect(() => {

    }, [matchcheck1, matchcheck2, matchcheck3, matchcheck4])
    return (
        <Fragment>
            <div className="mt-3">
                <div className={styles.Mainforgetpassword}>
                    <div className={styles.insidesectionforget}>
                        <div className={styles.insideforgetsplit}>
                            <div className={styles.logintext}>
                                New Credentials
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
                            <div className='mb-4 mt-2'>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={styles.passwordformsection}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>Password</Form.Label>
                                            <div className={"formsectioncommonlogin"}>
                                                <Form.Control type={show ? "text" : "password"} placeholder="password" className={styles.forms}
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
                                    <button variant="primary" type="submit" className="loginbutton mt-4">
                                        Submit
                                    </button>

                                </Form>

                                <button variant="primary" type="submit" className="cancelbutton mt-4 mb-3">
                                    Cancel
                                </button>

                                {/* <div className='text-center mb-5 mt-5'>
                                Already have an account?  <span className='active' onClick={() => router.push("/login")}>Sign up</span>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default Passwordcreate;



