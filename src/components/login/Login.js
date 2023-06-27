import React, { Fragment, useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./styles/Login.module.scss";
import google from "../../assests/homepage-logos/google.png";
import facebook from "../../assests/login-logos/facebook image.png";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { LoginText } from "../../consttext/Loginconst";
import { Userlogin } from "../../services/user-login-service/user-login-services";
import eye from '../../assests/login-logos/Eye.png';
import eyeoff from '../../assests/login-logos/Eye Off.png';
import Spinner from 'react-bootstrap/Spinner';
import { IpAddress } from "../../services/ipaddressservice/ipaddress-service";
function Login() {
    const [show1, setShow1] = useState(false);
    const history = useRouter();
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const [tokenUser, setTokenUser] = useState("");

    const [ipaddress,setIpaddress]=useState("");

    useEffect(() => {
        IpAddress().then((res) => {
            setIpaddress(res?.data?.ip)
        }).catch((err) => {
            console.log(err);
        })
    }, [ipaddress])
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const url = process?.env?.NEXT_PUBLIC_URL;
    const onSubmit = async ({ email, password }) => {
        const productWhishlist = JSON.parse(localStorage.getItem("whish"));
        const datas = {
            email: email,
            password: password,
            // loginIPAddress:ipaddress
        }
        setLoading(true);
        if (productWhishlist) {
            Userlogin(datas).then(async (res) => {
                if (res) {
                    localStorage.setItem("auth", true);
                    localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
                    localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
                    setTimeout(() => {
                        history.push(`${productWhishlist}`);
                        setLoading(false);
                    }, 400)
                }

            }).catch((err) => {
                toast.error(err?.response?.data,
                    {
                        position: "top-center",
                        autoClose: 3300,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
                setError(false);
                setLoading(false);


            })
        }
        else {
            Userlogin(datas).then(async (res) => {
                if (res) {
                    localStorage.setItem("auth", true);
                    localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
                    localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
                    setTimeout(() => {
                        history.push("/");
                        setLoading(false);
                    }, 600);
                }
            }).catch((err) => {
                toast.error("Incorrect email or password",
                    {
                        position: "top-center",
                        autoClose: 3300,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
                setError(false);
                setLoading(false);
            })
        }

    };
    const NavigateService = () => {
        history.push("/")
    }
    const handlePushForgetpassword = () => {
        history.push("/forgetpassword")
    }

    const [indexs, setIndexs] = useState(0);

    const Googleoauth = () => {
        // GoogleOauth();
        window.open(
            `${url}/customer/oauth/google`,
            "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=600,height=600"
        );

    }
    const FacebookAuth = () => {
        window.open(
            `${url}/customer/oauth/facebook`,
            "_self", "toolbar=yes,scrollbars=yes,resizable=yes,top=100,left=500,width=600,height=600"
        );
    }

    useEffect(() => {
        const TokenCheckUser = localStorage.getItem("userToken");
        setTokenUser(JSON.parse(TokenCheckUser));

    }, [])
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
                                    <div className={styles.passwordformsection}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">

                                            <div className={"formsectioncommonlogin"}>
                                                <Form.Control type={show1 ? "text" : "password"} placeholder="Password" className={styles.forms}
                                                    {...register("password", {
                                                        required: "Please enter password",
                                                        minLength: {
                                                            value: 6,
                                                            message: "Password is more than 5 charactor"
                                                        },
                                                    })}
                                                />
                                                <div className={"passwordicons"}>
                                                    {show1 ? <div className='mt-2' onClick={() => setShow1(!show1)}><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow1(!show1)}><Image src={eyeoff} alt="no image" /></div>}
                                                </div>
                                            </div>
                                            {errors.password && <span className="active">{errors.password.message}</span>}
                                        </Form.Group>

                                    </div>


                                    <div className={styles.forgetpassword} >
                                        <span onClick={handlePushForgetpassword}>
                                        {LoginText?.Forgotpassword}
                                        </span>
                                        </div>
                                    <Button className="loginbutton mt-3" type="submit">

                                        {error ? <>
                                            {/* {LoginText?.Login} */}
                                            Login

                                        </> : <>

                                            {loading ? <>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Loading...
                                            </> :
                                                <>

                                                    Login
                                                    {/* {LoginText?.Login} */}

                                                </>
                                            }
                                        </>}

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
                                        onClick={() => history.push(
                                            {
                                                pathname: '/signup',
                                                state: { name: history?.query?.redirect }
                                            }
                                        )}
                                    >
                                        {LoginText?.Signup}
                                    </span>
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
            </Fragment>
        );
    }

}

export default Login;
