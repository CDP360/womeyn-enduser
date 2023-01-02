import React, { Fragment, useState } from 'react'
import { Form } from 'react-bootstrap';
import styles from './styles/Login.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import Layout from '../../../pages/layout';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

function Login() {
    const history = useRouter();
    const [logindata, setLogindata] = useState({
        email: "",
        password: ""
    });

    const { email, password } = logindata;

    const handleChange = (e) => {
        setLogindata({ ...logindata, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => {
            toast.success("Login Success")
            history("/");
            Cookies.set("womeyntoken", "token");
        }, 1000);
    }
    if (Cookies.get("womentoken")) {
        return history.push("/")
    }
    else {
        return (
            <Fragment>
                <div className={styles.mainloginsection}>
                    <div>
                        <Layout />
                    </div>
                    <div className={styles.insidesectionlogin}>
                        <div className={styles.insideloginsplit}>
                            <div className={styles.logintext}>
                                Login
                            </div>
                            <div>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Email" className={styles.forms} name="email" value={email} onChange={handleChange} />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" className={styles.forms} name="password" value={password} onChange={handleChange} />
                                    </Form.Group>
                                    <div className={styles.forgetpassword}>
                                        Forgot password?
                                    </div>
                                    <button variant="primary" type="submit" className="loginbutton" onClick={handleSubmit}>
                                        Login
                                    </button>
                                </Form>
                                <div className="text-center mt-3 mb-4">
                                    or login with
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
                                    Don’t have an account? <span className='active'>Sign up</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Login