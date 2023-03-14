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


function Otp() {
    const router = useRouter();

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
        const userIds = localStorage.getItem("womenUserid");
        const otpSend = {
            userId: JSON.parse(userIds),
            otpValue: otp
        }
        if (otp) {
            OTPSend(otpSend).then((res) => {
                if (res?.data?.message == "OTP verification success") {
                    toast.success(res?.data?.message)
                    setTimeout(() => {
                        router.push("/passwordcreate")
                    }, 1000)
                }
                else {
                    toast.error("OTP Not Matched",
                        {
                            position: "top-center",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                        }
                    );
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }




    const ResendVerifyCheck = () => {
        const userIds = localStorage.getItem("womenUserid");
        const verify = {
            userId: JSON.parse(userIds)
        }
        OTPResend(verify
        ).then((res) => {
            toast.success("Resend OTP Success Check Your Mail");
        }).catch((err) => {
            console.log(err);
        })
    }

    const resendOTP = () => {
        setMinutes(1);
        setSeconds(59);
        ResendVerifyCheck();
        // loginServices.logout();
    };
    return (
        <Fragment>
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
                                    Looks Good! 😎
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
                                    Verify
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
        </Fragment>
    )
}

export default Otp;