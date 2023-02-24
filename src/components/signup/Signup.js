import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap';
import styles from '../../components/login/styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { LoginText } from '../login/const/Consttext';
import { useForm } from "react-hook-form";

function Signup() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log('data', data)
        router.push("/login")
    };

    const handlePushTerms = () => {
        router.push("/terms-and-conditions")
    }

    const Googleoauth = () => {
        window.open(
            `https://womeynapi.cdp360.in/v1/auth/seller/google`,
            "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=600,height=600"
        );

    }
    const FacebookAuth = () => {
        window.open(
            `https://womeynapi.cdp360.in/v1/auth/seller/facebook`,
            "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=600,height=600"
        );
    }

    const buttons = [
        {
            id: 1,
            name: "Womenpreneur"
        },
        {
            id: 1,
            name: "End Consumer"
        }
    ]

    const [indexs, setIndexs] = useState(0);


    return (
        <Fragment>

            <div className={styles.mainloginsection}>
                <div className={styles.endcustomerbutton}>
                    <div className={styles.insidecustomerbutton}>
                        <button className={`${indexs === 0 ? "endconsumerbuttons" : "womenprebutton"}`}
                            onClick={() => {
                                setIndexs(0);
                            }}
                        >{LoginText?.Womenpreneur}</button>
                        <button className={`${indexs === 1 ? "endconsumerbuttons" : "womenprebutton"}`}
                            onClick={() => {
                                setIndexs(1);
                            }}
                        >{LoginText?.EndConsumer}</button>
                    </div>
                </div>
                <div className={styles.insidesectionlogin}>
                    <div className={styles.insideloginsplit}>
                        <div className={styles.logintext}>
                            {LoginText?.Signup}
                        </div>
                        <div>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Email / Phone Number" className={styles.forms}
                                        {...register("email", {
                                            required: "Please enter email / Phone Number",
                                            pattern: {
                                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                message: "invalid email address"
                                            },
                                        })}
                                    />
                                    {errors.email && <span className="active">{errors.email.message}</span>}
                                </Form.Group>

                                <button variant="primary" type="submit" className="loginbutton mt-2 mb-2">
                                    {LoginText?.Signup}
                                </button>
                            </Form>
                            <div className="text-center mt-2 mb-3">
                                {LoginText?.oryoucanuse}
                            </div>
                            <div className={styles.socialloginbutton} onClick={Googleoauth}>
                                <div>
                                    <Image src={google} alt="no image" className={styles.googleiconsectionlogin} />
                                </div>
                                <div>
                                    {LoginText?.Google}
                                </div>
                            </div>
                            <div className={styles.socialloginbutton} onClick={FacebookAuth}>
                                <div>
                                    <Image src={facebook} alt="no image" className={styles.googleiconsectionlogin} />
                                </div>
                                <div>
                                    {LoginText?.Facebook}
                                </div>
                            </div>
                            <div className='text-center mb-3'>
                                {LoginText?.Alreadyhaveanaccount}  <span className='active' onClick={() => router.push("/login")}>{LoginText?.Login}</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.termsconditions}>
                        <div className={styles.insideterms}>
                            <div className={styles.toourtext}>
                                {LoginText?.Bysigningupyouagreetoour}
                            </div>
                            <div className={styles.termsactivetext} onClick={handlePushTerms}>
                                {LoginText?.termsandconditions}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup