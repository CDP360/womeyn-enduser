import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./styles/Login.module.scss";
import google from "../../assests/homepage-logos/google.png";
import facebook from "../../assests/homepage-logos/loginfacebook.png";
import Image from "next/image";
// import Layout from '../../../pages/layout';
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut } from "next-auth/react"
import { toast } from 'react-toastify';
import { LoginText } from "./const/Consttext";
function Login() {

    const { data: session } = useSession();
    const history = useRouter();

    const { redirect } = history.query;

    useEffect(() => {
        if (session?.user) {
            history.push(redirect || "/")
        }
    }, [session])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async ({ email, password }) => {
        try {
            const result = await signIn("credentials", {
                redirect: false,
                email,
                password
            })
            if (result.error) {
                toast.error(result.error);
            }
        }
        catch (err) {
            console.log(err);
        }
    };


    return (
        <Fragment>
            <div className={styles.mainloginsection}>
                <div>{/* <LayoutHeader/> */}</div>
                <div className={styles.insidesectionlogin}>
                    <div className={styles.insideloginsplit}>
                        <div className={styles.logintext}>{LoginText?.Login}</div>
                        <div>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control
                                        type="email"
                                        placeholder="Email"
                                        className={styles.forms}
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
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control
                                        type="password"
                                        placeholder="Password"
                                        className={styles.forms}
                                        {...register("password", {
                                            required: "Please enter password",
                                            minLength: {
                                                value: 6,
                                                message: "Password is more than 5 charactor"
                                            },
                                        })}

                                    />
                                    {errors.password && <span className="active">{errors.password.message}</span>}
                                </Form.Group>

                                <div className={styles.forgetpassword}>{LoginText?.Forgotpassword}</div>
                                <Button className="loginbutton" type="submit">
                                    {" "}
                                    {LoginText?.Login}
                                </Button>
                            </Form>
                            <div className="text-center mt-3 mb-4">orloginwith</div>
                            <div className={styles.socialloginbutton}>
                                <div>
                                    <Image
                                        src={google}
                                        alt="no image"
                                        className={styles.googleiconsectionlogin}
                                    />
                                </div>
                                <div>{LoginText?.Google}</div>
                            </div>
                            <div className={styles.socialloginbutton}>
                                <div>
                                    <Image
                                        src={facebook}
                                        alt="no image"
                                        className={styles.googleiconsectionlogin}
                                    />
                                </div>
                                <div>{LoginText?.Facebook}</div>
                            </div>
                            <div className="text-center">
                                {LoginText?.Donthaveanaccount}
                                <span
                                    className="active"
                                    onClick={() => history.push("/signup")}
                                >
                                    {LoginText?.Signup}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default Login;
