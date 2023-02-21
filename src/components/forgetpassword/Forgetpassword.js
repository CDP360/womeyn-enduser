import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap';
import styles from './styles/Forgetpassword.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
function Forgetpassword() {
    const router = useRouter();


    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
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
                                Forgot Password
                            </div>
                            <div>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="User@gmail.com" className={styles.forms}

                                            {...register("email", {
                                                required: "Please enter your registered email",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                },
                                            })}
                                        />
                                        {errors.email && <span className="active">{errors.email.message}</span>}
                                    </Form.Group>
                                    <button variant="primary" type="submit" className="loginbutton mt-4 mb-3">
                                        Request Reset Password link
                                    </button>
                                </Form>

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

export default Forgetpassword;