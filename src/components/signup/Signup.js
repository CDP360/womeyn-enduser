import React, { Fragment } from 'react'
import { Form } from 'react-bootstrap';
import styles from '../../components/login/styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import Layout from '../../../pages/layout';
function Signup() {
    return (
        <Fragment>
            <div className={styles.mainloginsection}>
                <div>
                    <Layout />

                </div>
                <div className={styles.insidesectionlogin}>
                    <div className={styles.insideloginsplit}>
                        <div className={styles.logintext}>
                            Sign up
                        </div>
                        <div>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Control type="text" placeholder="Email / Phone Number" className={styles.forms} />
                                </Form.Group>
                                <button variant="primary" type="submit" className="loginbutton">
                                    Sign up
                                </button>
                            </Form>
                            <div className="text-center mt-3 mb-4">
                                or you can use
                            </div>
                            <div className={styles.socialloginbutton}>
                                <div>
                                    <Image src={google} alt="no image" className={styles.googleiconsectionlogin} />
                                </div>
                                <div>
                                    Google
                                </div>
                            </div>
                            <div className={styles.socialloginbutton}>
                                <div>
                                    <Image src={facebook} alt="no image" className={styles.googleiconsectionlogin} />
                                </div>
                                <div>
                                    Facebook
                                </div>
                            </div>
                            <div className='text-center'>
                                Already have an account?  <span className='active'>Log in</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signup