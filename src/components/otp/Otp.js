import React, { Fragment, useState, useEffect } from 'react'
import { Form } from 'react-bootstrap';
import styles from '../../components/login/styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import OtpInput from 'react-otp-input';
import { toast } from 'react-toastify';
import { OTPSend, OTPResend } from '../../services/user-login-service/user-login-services';
import Spinner from 'react-bootstrap/Spinner';
function Otp() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [tokenUser, setTokenUser] = useState("");
    const [tokenUser1, setTokenUser1] = useState("");

    const [otp, setOtp] = useState("");
    const [minutes, setMinutes] = useState(1);
    const [seconds, setSeconds] = useState(59);
    const [error, setError] = useState(false);
    const handleChange = (otp) => {
        setOtp(otp);
    };
    useEffect(() => {
        const interval = setInterval(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(interval);
                } else {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            }
        }, 1000);

        return () => {
            clearInterval(interval);
        };

    }, [seconds]);


    const SummitOtp = (e) => {
        if (otp.length === 0) {
            setError(true);
        }
        const userIds = localStorage.getItem("userid");
        const otpSend = {
            userId: JSON.parse(userIds),
            otpValue: otp
        }
        setLoading(true);
        if (otp) {
            OTPSend(otpSend).then((res) => {
                if (res?.data?.message == "OTP verification success") {
                    toast.success(res?.data?.message)
                    setTimeout(() => {
                        router.push("/passwordcreate");
                        setLoading(false);
                    }, 1000)
                }

            }).catch((err) => {
                console.log(err);
                setLoading(false);
                toast.error(err?.response?.data?.message);

            })
        }
    }

    const ResendVerifyCheck = () => {
        const userIds = localStorage.getItem("userid");
        const verify = {
            userId: JSON.parse(userIds)
        }
        OTPResend(verify
        ).then((res) => {
            toast.success("Resend OTP Success Check Your Mail");
        }).catch((err) => {
            console.log(err);
            toast.error(err?.response?.data?.message);
        })
    }

    const resendOTP = () => {
        setMinutes(1);
        setSeconds(59);
        ResendVerifyCheck();
    };



    useEffect(() => {
        const TokenCheckUser = localStorage.getItem("auth");
        const TokenCheckUser1 = localStorage.getItem("userToken");
        // setTokenUser1(JSON.parse(TokenCheckUser1))
        setTokenUser(JSON.parse(TokenCheckUser));

    }, [])

    const NavigateService = () => {
        router.push("/")
    }
    const NavigateLogin = () => {
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
                <div className={styles.mainloginsection}>
                    <div className={styles.insidesectionlogin}>
                        <div className={styles.insideloginsplit}>
                            <div className={styles.verifytexts}>
                                Verify account using OTP
                            </div>
                            <div className={styles["loraemlogin"]}>
                                <div className="mb-5">
                                    Lorem ipsum sit dolor ametLorem ipsum sit dolor ametLorem ipsum sit dolor ametLorem ipsum sit dolor ametLorem ipsum sit dolor amet
                                </div>
                            </div>
                            <div>
                                <div className='otp-box-inputss'>
                                    <OtpInput
                                        value={otp}
                                        onChange={handleChange}
                                        numInputs={4}
                                        separator={<div className="inputgap"></div>}
                                        inputStyle="inputStyles"
                                        focusStyle="focusStyle"
                                        shouldAutoFocus={true}
                                    />

                                    {error && otp?.length <= 0 ? <div className="text-danger mt-3">Otp Filed Is Empty</div> : <>{otp?.length >= 4 ? <div className="text-success text-center mt-3">

                                    </div> : <></>}</>}
                                </div>
                                <div>
                                    <div className='mt-3 text-center'>
                                        {seconds > 0 || minutes > 0 ? (
                                            <span className='minutes-section'>
                                                {minutes < 10 ? `0${minutes}` : minutes}:
                                                {seconds < 10 ? `0${seconds}` : seconds}
                                            </span>
                                        ) : (
                                            <p style={{ color: "#121E49" }}>Didn't recieve code?</p>
                                        )}
                                    </div>
                                </div>
                                <div className={styles.verifyotpsection}>
                                    <button onClick={SummitOtp} className="loginbutton mt-2 mb-3">
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
                                            Verify
                                        </>}

                                    </button>
                                    <button className={`${seconds > 0 || minutes > 0 ? "resendbuttondisable" : "resendbutton"}`} disabled={seconds > 0 || minutes > 0}
                                        style={{
                                            color: seconds > 0 || minutes > 0 ? "#e75b5e" : "#e75b5e",
                                            // backgroundColor: seconds > 0 || minutes > 0 ? "red" : "orange",
                                            border: "2px solid #e75b5e",
                                            outline: "none",
                                        }}
                                        onClick={resendOTP}>
                                        Resend OTP
                                    </button>
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
        )

    }



}

export default Otp;