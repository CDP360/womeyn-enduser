import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap';
import styles from './styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
function Login() {
    return (
        <Fragment>
            <div className={styles.mainloginsection}>
                <div className={styles.insidesectionlogin}>
                    <div className={styles.insideloginsplit}>
                        <div className={styles.logintext}>
                            Login
                        </div>
                        <div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="email" placeholder="Email" className={styles.forms} />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Control type="password" placeholder="Password" className={styles.forms} />
                                </Form.Group>
                                <div className={styles.forgetpassword}>
                                    Forgot password?
                                </div>
                                <button variant="primary" type="submit" className="loginbutton">
                                    Login
                                </button>
                            </Form>
                            <div className="text-center mt-3 mb-4">
                                or login with
                            </div>
                            <div className={styles.socialloginbutton}>
                                <div>
                                    <Image src={google} alt="no image" className={styles.googleiconsectionlogin}/>
                                </div>
                                <div>
                                    Google
                                </div>
                            </div>
                            <div className={styles.socialloginbutton}>
                                <div>
                                    <Image src={facebook} alt="no image" className={styles.googleiconsectionlogin}/>
                                </div>
                                <div>
                                Facebook
                                </div>
                            </div>
                            <div className='text-center'>
                            Don’t have an account? <span className='active'>Sign up</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Login