import React, { Fragment, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import styles from '../../components/login/styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/login-logos/facebook image.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { LoginText } from '../../consttext/Loginconst';
import { toast } from 'react-toastify';
import { OTP } from '../../toastdata/Toastmessages';
import { userSignup } from '../../services/user-login-service/user-login-services';
import Spinner from 'react-bootstrap/Spinner';

function Signup() {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const url = process?.env?.NEXT_PUBLIC_URL;
    const [loading, setLoading] = useState(false);

    const [UserEmaiorphone, setUserEmailOrPhone] = useState("");
    const [errromessage, setErrorMessage] = useState("");

    const [tokenUser, setTokenUser] = useState("");


    const handleChange = (e) => {
        setUserEmailOrPhone(e.target.value);
    }


    const SubmitUserCheck = (e) => {
        e.preventDefault();
        let check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;
        if (check.test(UserEmaiorphone)) {
            const response = {
                emailOrPhoneNo: UserEmaiorphone
            }
            localStorage.setItem("signupuser", JSON.stringify(UserEmaiorphone))
            setLoading(true);
            userSignup(response).then((res) => {
                if (res) {
                    toast.success(OTP, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
                    localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
                    setTimeout(() => {
                        router.push("/otp");
                        setLoading(false);
                    }, 600)
                }

            }).catch((err) => {
                if (err?.response?.data?.message == LoginText?.YouarealreadyregisteredPleaselogin) {
                    toast.error(err?.response?.data?.message,
                        {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        });
                }
                setLoading(false);

            })
        }
        else {
            setErrorMessage("Please enter valid Email ID / Mobile Number")
        }
    }


    // const onSubmit = async (data) => {

    //     let check = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})|([0-9]{10})+$/;

    //     const response = {
    //         emailOrPhoneNo: data?.email
    //     }
    //     localStorage.setItem("signupuser", JSON.stringify(data?.email))
    //     setLoading(true);
    //     userSignup(response).then((res) => {
    //         if (res) {
    //             toast.success(OTP, {
    //                 position: "top-center",
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark",
    //             });
    //             localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
    //             localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
    //             setTimeout(() => {
    //                 router.push("/otp");
    //                 setLoading(false);
    //             }, 600)
    //         }

    //     }).catch((err) => {
    //         if (err?.response?.data?.message == LoginText?.YouarealreadyregisteredPleaselogin) {
    //             toast.error(err?.response?.data?.message,
    //                 {
    //                     position: "top-center",
    //                     autoClose: 3000,
    //                     hideProgressBar: false,
    //                     closeOnClick: true,
    //                     pauseOnHover: true,
    //                     draggable: true,
    //                     progress: undefined,
    //                     theme: "dark",
    //                 });
    //         }
    //         setLoading(false);

    //     })
    // };

    useEffect(() => {
        const TokenCheckUser = localStorage.getItem("auth");
        setTokenUser(JSON.parse(TokenCheckUser));

    }, [])


    const NavigateService = () => {
        router.push("/")
    }


    const handlePushTerms = () => {
        router.push("/terms-and-conditions")
    }

    const Googleoauth = () => {
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
                            <div className={styles.logintext}>
                                {LoginText?.Signup}
                            </div>
                            <div className="mt-3 mb-5">

                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type={"text"} placeholder="Email / Phone Number" className={styles.forms}

                                        onChange={handleChange} value={UserEmaiorphone} name="emailorphone"

                                    />
                                    {errromessage && <span className="active">{errromessage}</span>}
                                </Form.Group>

                                <button variant="primary" onClick={SubmitUserCheck} className="loginbutton mt-2 mb-2">
                                    {loading ? <>
                                        <Spinner
                                            as="span"
                                            animation="grow"
                                            size="sm"
                                            role="status"
                                            aria-hidden="true"
                                        />
                                        Loading...
                                    </> : <>
                                        {LoginText?.Signup}

                                    </>}
                                </button>

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
                <div className={styles.leftsection1}>

                </div>
                <div className={styles.righttopsection1}>

                </div>
                <div className={styles.rightbottomsection1}>

                </div>
            </Fragment>
        )
    }



}

export default Signup