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
import Spinner from 'react-bootstrap/Spinner';

function Forgetpassword() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const [loading,setLoading]=useState(false);
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

        setLoading(true);
        UserForgetPassword(datas).then((res) => {
            handleShow();
            toast.success("Check Your Mail");
setTimeout(()=>{
    setLoading(false);
},500)
        }).catch((err) => {
            console.log(err);
    setLoading(false);

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
                                        <Form.Control type="email" placeholder="Enter Your Email" className={styles.forms}

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

                                    {loading ? <div className="d-flex gap-2 align-items-center justify-content-center">

<Spinner
  as="span"
  animation="border"
  size="sm"
  role="status"
  aria-hidden="true"
/>
<span className="ms-3">Loading...</span>
</div> : <>
Request Reset Password link
</>}
                                       
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
                    Reset Password 
                    </Modal.Header>
                    <Modal.Body>
                    <div className='mt-5 mb-5 text-center'>
                                        If you are a registered customer, you will receive a password reset link in your email. Please follow the instruction and Reset your password.
                                    </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button className={styles.okaybutton} onClick={handleClose}>Ok</button>
                    </Modal.Footer>
                </Modal>
            </>
        </Fragment>
    )
}

export default Forgetpassword;