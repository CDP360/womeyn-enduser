import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap';
import styles from '../../components/login/styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import OtpInput from 'react-otp-input';

function Otp() {
    const router = useRouter();
    const [otp, setOtp] = useState("");
    const handleChange = (otp) => setOtp(otp);
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
                            <Form>
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
                                </div>
                                <div className={styles.verifyotpsection}>
                                <button type="submit" className="loginbutton mt-5 mb-3">
                                    Verify
                                </button>
                                <button className="resendbutton mt-2 mb-3">
                                    Resend link
                                </button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Otp;