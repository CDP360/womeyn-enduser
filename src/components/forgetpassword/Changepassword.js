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

function Changepassword() {
    const router = useRouter();

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
        console.log('data', data)
    };

    const handlePushTerms = () => {
        router.push("/women/terms-and-conditions")
    }
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
                                <Form onSubmit={handleSubmit(onSubmit)}>

                                    <div className={styles.passwordformsection}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type={show ? "text" : "password"} placeholder="User@gmail.com" className={styles.forms}
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
                                            {errors.password && <span className="active">{errors.password.message}</span>}
                                        </Form.Group>

                                    </div>
                                    <div className={styles.passwordformsection}>
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type={show1 ? "text" : "password"} placeholder="User@gmail.com" className={styles.forms}
                                                {...register('confirmPwd')}

                                            />
                                            <div className={styles.passwordicons}>
                                                {show1 ? <div onClick={() => setShow1(!show1)} className="mt-2 ms-4"><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow1(!show1)}><Image src={eyeoff} alt="no image" /></div>}
                                            </div>
                                            {errors.confirmPwd && <span className="active">{errors.confirmPwd.message}</span>}
                                        </Form.Group>
                                    </div>
                                    <button variant="primary" type="submit" className="loginbutton mt-4 mb-3">
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
        </Fragment>
    )
}

export default Changepassword;



