import React, { Fragment, useRef } from 'react'
import { Form } from 'react-bootstrap';
import styles from './styles/Userpassword.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import eye from '../../../../assests/login-logos/Eye.png';
import eyeoff from '../../../../assests/login-logos/Eye Off.png';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Changepassworduser } from '../../../../services/user-login-service/user-login-services';
import { signOut} from "next-auth/react"
function UserChangePassword() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [matchcheck1, setMatchCheck1] = useState(false);
    const [matchcheck2, setMatchCheck2] = useState(false);
    const [matchcheck3, setMatchCheck3] = useState(false);
    const [matchcheck4, setMatchCheck4] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const [show3, setShow3] = useState(false);

    const formSchema = Yup.object().shape({
        oldPassword: Yup.string()
            .required('Password is must ')
            .min(8, 'Password must be atleast 8 characters long'),
        newPassword: Yup.string()
            .required('Password is must ')
            .min(8, 'Password must be atleast 8 characters long'),

        confirmNewPassword: Yup.string()
            .required('Password is mendatory')
            .oneOf([Yup.ref('newPassword')], 'Passwords does not match'),
    })
    const formOptions = { resolver: yupResolver(formSchema) }
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm(formOptions);

    const onSubmit = async (data) => {
        const userid = localStorage.getItem("womenUserid");
        const check = {
            oldPassword: data?.oldPassword,
            newPassword: data?.newPassword,
            confirmNewPassword: data?.confirmNewPassword
        }




        var passwordRegex = /(?=^.{8,}$)(?=.{0,}[A-Z])(?=.{0,}[a-z])(?=.{0,}\W)(?=.{0,}\d)/g
        if (passwordRegex.test(check?.newPassword) || passwordRegex.test(check?.confirmNewPassword)) {
            console.log("data", check)
            setMatchCheck1(true);
            setMatchCheck2(false);
            Changepassworduser(check).then((res) => {
                toast.success("Change Password Successfully");
                setTimeout(()=>{
                    handlePushTerms();
                },500)
            }).catch((err) => {
                toast.error("error this page!!");
            })
        }
        else {
            setMatchCheck2(true);
        }
        // if (check?.password?.match(/[a-z]/)) {
        //     console.log("matched type 1");
        //     setMatchCheck1(true);
        // }

        // if (check?.password?.match(/[A-Z]/)) {
        //     console.log("matched type 2");
        //     setMatchCheck2(true);

        // }

        // if (check?.password?.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)) {
        //     console.log("matched type 3")
        //     setMatchCheck3(true);

        // }
        // if (check?.password?.match(/\d/)) {
        //     console.log("matched type 4");
        //     setMatchCheck4(true);

        // }
    };
    const handlePushTerms = async() => {
        setTimeout(() => {
            router.push("/login")
        }, 1000);
        toast.success("Logout User Successgully");
        await signOut({ callbackUrl: "/" });
        localStorage.removeItem("womenUserid");
        localStorage.removeItem("womenUserToken");
        localStorage.removeItem("womenProfile");
    }
    useEffect(() => {
    }, [matchcheck1, matchcheck2, matchcheck3, matchcheck4])
    return (
        <Fragment>
            <div className="mt-3">
                <div className={styles.Mainforgetpassword}>
                    <div className={styles.insidesectionforget}>
                        <div className={styles.insideforgetsplit}>
                            {/* <div className={styles.logintext}>
                                Change Password
                            </div> */}
                            <div>
                                {matchcheck1 ? <div className='text-success fw-1 fs-4'>
                                    Password Matched!
                                </div> : <>
                                </>}
                                {matchcheck2 && <div className='text-danger shorttexts'>
                                    At least one letter,
                                    one capital letter,
                                    one number,
                                    one special character,
                                </div>}
                            </div>
                            <div className='mb-4 mt-2'>


                                <Form onSubmit={handleSubmit(onSubmit)}>
                                    <div className={styles.passwordformsection}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>Old Password</Form.Label>
                                            <div className={"formsectioncommon"}>
                                                <Form.Control type={show1 ? "text" : "password"} placeholder="" className={styles.forms}
                                                    {...register('oldPassword', {
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "invalid email address"
                                                        },
                                                    })}
                                                />
                                                <div className={"passwordicons"}>
                                                    {show1 ? <div className='mt-2' onClick={() => setShow1(!show1)}><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow1(!show1)}><Image src={eyeoff} alt="no image" /></div>}
                                                </div>
                                            </div>
                                            {errors.oldPassword && <span className="active">{errors.oldPassword.message}</span>}
                                        </Form.Group>

                                    </div>

                                    <div className={styles.passwordformsection}>
                                        <Form.Group className="mb-2" controlId="formBasicEmail">
                                            <Form.Label>New Password</Form.Label>
                                            <div className={"formsectioncommon"}>
                                                <Form.Control type={show2 ? "text" : "password"} placeholder="" className={styles.forms}
                                                    {...register('newPassword', {
                                                        pattern: {
                                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                            message: "invalid email address"
                                                        },
                                                    })}
                                                />

                                                <div className={"passwordicons"}>
                                                    {show2 ? <div className='mt-2' onClick={() => setShow2(!show2)}><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow2(!show2)}><Image src={eyeoff} alt="no image" /></div>}
                                                </div>
                                            </div>
                                            {errors.newPassword && <span className="active">{errors.newPassword.message}</span>}
                                        </Form.Group>

                                    </div>
                                    <div className='mt-4'>
                                        <div className={styles.passwordformsection}>
                                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                                <Form.Label>Confirm New Password</Form.Label>
                                                <div className={"formsectioncommon"}>
                                                    <Form.Control type={show3 ? "text" : "password"} placeholder="" className={styles.forms}
                                                        {...register('confirmNewPassword')}

                                                    />
                                                    <div className={"passwordicons"}>
                                                        {show3 ? <div onClick={() => setShow3(!show3)} className="mt-2 ms-4"><Image src={eye} alt="no image" /></div> : <div className="mt-2" onClick={() => setShow3(!show3)}><Image src={eyeoff} alt="no image" /></div>}
                                                    </div>
                                                </div>
                                            </Form.Group>
                                            {errors.confirmNewPassword && <span className="active">{errors.confirmNewPassword.message}</span>}

                                        </div>
                                    </div>
                                    <button variant="primary" type="submit" className="changepassword mt-4">
                                        Change Password
                                    </button>

                                </Form>

                                {/* <button variant="primary" type="submit" className="cancelbutton mt-4 mb-3">
                                    Cancel
                                </button> */}

                                {/* <div className='text-center mb-5 mt-5'>
                                Already have an account?  <span className='active' onClick={() => router.push("/login")}>Sign up</span>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >
    )
}

export default UserChangePassword;



