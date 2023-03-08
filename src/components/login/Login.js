import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./styles/Login.module.scss";
import google from "../../assests/homepage-logos/google.png";
import facebook from "../../assests/login-logos/facebook image.png";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useSession, signIn, signOut, getSession } from "next-auth/react"
import { toast } from 'react-toastify';
import { LoginText } from "../../consttext/Loginconst";
import { GoogleOauth, Userlogin } from "../../services/user-login-service/user-login-services";


function Login() {

    // const { data: session } = useSession();
    const history = useRouter();
    // const { redirect } = history.query;
    // useEffect(() => {
    //     if (session?.user) {
    //         history.push(redirect || "/")
    //     }
    // }, [session])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async ({ email, password }) => {
        const datas = {
            email: email,
            password: password
        }
        Userlogin(datas).then(async (res) => {
            if (res) {
                toast.success("User Login Success");
                localStorage.setItem("womenUserid", JSON.stringify(res?.data?.user?.id));
                localStorage.setItem("womenUserToken", JSON.stringify(res?.data?.tokens?.access?.token));
                setTimeout(() => {
                    history.push("/");
                }, 500)

                // await signIn("credentials", {
                //     redirect: false,
                //     email: email,
                //     password: password,
                //     token: res?.data?.tokens?.access?.token,
                //     id: res?.data?.user?.id

                // });


            }
            else {
                toast.error("Incorrect email or password");
            }
        }).catch((err) => {
            console.log(err);
        })

        // try {
        //     const result = await signIn("credentials", {
        //         redirect: false,
        //         email: email,
        //         password: password
        //     })
        //     if (result.error === null) {
        //         // Redirect to home or welcome page
        //         const { user } = await getSession();
        //         if (redir) {
        //             const check = user?.isNewUser ? "/" : "/login";
        //             history.push(check);
        //         } else {

        //             history.push("/login");
        //         }
        //     } else {
        //         setError("NOT USERS");
        //     }
        //     if (result.error) {
        //         toast.error(result.error);
        //     }
        // }
        // catch (err) {
        //     console.log(err);
        // }

    };

    const handlePushForgetpassword = () => {
        history.push("/forgetpassword")
    }

    const [indexs, setIndexs] = useState(0);

    const Googleoauth = () => {
        // GoogleOauth();
        window.open(
            `https://womeynapi.cdp360.in/v1/customer/oauth/google`,
            "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=600,height=600"
        );

    }
    const FacebookAuth = () => {
        window.open(
            `https://womeynapi.cdp360.in/v1/customer/oauth/facebook`,
            "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=600,height=600"
        );
    }
    return (
        <Fragment>

            <div className={styles.mainloginsection}>
                {/* <div className={styles.endcustomerbutton}>
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
                </div> */}

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

                                <div className={styles.forgetpassword} onClick={handlePushForgetpassword}>{LoginText?.Forgotpassword}</div>
                                <Button className="loginbutton" type="submit">
                                    {" "}
                                    {LoginText?.Login}
                                </Button>
                            </Form>
                            <div className="text-center mt-3 mb-4">{LoginText?.orloginwith}</div>
                            <div className={styles.socialloginbutton} onClick={Googleoauth}>
                                <div>
                                    <Image
                                        src={google}
                                        alt="no image"
                                        className={styles.googleiconsectionlogin}
                                    />
                                </div>
                                <div>{LoginText?.Google}</div>
                            </div>
                            <div className={styles.socialloginbutton} onClick={FacebookAuth}>
                                <div>
                                    <Image
                                        src={facebook}
                                        alt="no image"
                                        className={styles.facebookicon}
                                    />
                                </div>
                                <div>{LoginText?.Facebook}</div>
                            </div>
                            <div className="text-center mb-3">
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
