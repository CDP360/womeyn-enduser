import React, { Fragment,useState} from 'react'
import { Form } from 'react-bootstrap';
import styles from './styles/Forgetpassword.module.scss';
import google from '../../assests/homepage-logos/google.png';
import facebook from '../../assests/homepage-logos/loginfacebook.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { UserForgetPassword } from '../../services/user-login-service/user-login-services';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
function Forgetpassword() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        toast.success("Login Page!!");
        setTimeout(() => {
            handlePushTerms();
        }, 1000)
        setShow(false)
    }

    const handleShow = () => setShow(true);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const onSubmit = async (data) => {
        console.log('data', data)

        const datas = {
            email: data?.email
        }

        UserForgetPassword(datas).then((res) => {
            handleShow();
            toast.success("Check Your Mail");

        }).catch((err) => {
            console.log(err);
        })
    };

    const handlePushTerms = () => {
        router.push("/")
    }
    return (
        <Fragment>
            <div className="mt-3">
                <div className={styles.Mainforgetpassword}>
                    <div className={styles.insidesectionforget}>
                        <div className={styles.insideforgetsplit}>
                            <div className={styles.logintext}>
                                Forgot Password
                            </div>
                            <div>
                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="User@gmail.com" className={styles.forms}

                                            {...register("email", {
                                                required: "Please enter your registered email",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "invalid email address"
                                                },
                                            })}
                                        />
                                        {errors.email && <span className="active">{errors.email.message}</span>}
                                    </Form.Group>
                                    <button variant="primary" type="submit" className="loginbutton mt-4 mb-3">
                                        Request Reset Password link
                                    </button>
                                </Form>

                                {/* <div className='text-center mb-5 mt-5'>
                                Already have an account?  <span className='active' onClick={() => router.push("/login")}>Sign up</span>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <>
                <Modal
                    show={show}
                    onHide={handleClose}
                    backdrop="static"
                    keyboard={false}
                    centered
                >
                    <Modal.Header closeButton>
            
                    </Modal.Header>
                    <Modal.Body>
                    <div className='mt-5 mb-5'>
                                        If you are a registered customer, you will receive a password reset link in your email. Please follow the instruction and Reset your password.
                                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={handleClose}>Ok</Button>
                    </Modal.Footer>
                </Modal>
            </>
        </Fragment>
    )
}

export default Forgetpassword;