import React, { Fragment, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import styles from './styles/Signupnewsletter.module.scss';
import { useEffect } from 'react';
import { SubscribeUser } from '../../../../services/subscribe-service/subscribe-service';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';

function Signupnewsletter() {

    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {

    }, []);

    const onSubmit = (data) => {
        setLoading(true);

        const forms = {
            email: data?.email
        }
        SubscribeUser(forms).then((res) => {
            toast.success("subscribe successfully!!!");
            setTimeout(() => {
                setLoading(false);
                setValue("email", "");
            }, 700)
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <Fragment>
            <div className={styles.signupnewmainsection}>
                <div className="signupheader">
                    <div className={styles.insidesignupnewsection}>
                        <div className={styles.mainsplitsignupnew}>
                            <div className={styles.leftmainsplitsignup}>
                                <div className='textseller'>
                                    Sign Up for Newsletter
                                </div>
                                <div className='textgreysmall mt-3'>
                                Sign up to know more about Womeynpreneures, their inspiring stories, events, partnerships and exciting products.
                                </div>
                            </div>

                            <div className={styles.rightmainsplitsignup}>

                                <div className={styles.formsectionborder}>
                                    <Form.Group className={styles.emailsectionform}>
                                        <Form.Control
                                            name="email"
                                            type="email"
                                            placeholder='Enter your email here'
                                            className={styles.emailsectionform}
                                            {...register("email", {
                                                required: "Please Enter Email Id",
                                                pattern: {
                                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                    message: "Invalid Email Address"
                                                },
                                            })}
                                        />

                                    </Form.Group>
                                    <button className='selleractive' onClick={handleSubmit(onSubmit)}>
                                        {loading ? <>
                                            <Spinner
                                                as="span"
                                                animation="grow"
                                                size="sm"
                                                role="status"
                                                aria-hidden="true"
                                            />
                                            Loading...
                                        </> :
                                            <> SUBSCRIBE</>
                                        }

                                    </button>

                                </div>

                                <div className='d-flex justify-content-start mt-2'>
                                    {errors.email && <span className="active">{errors.email.message}</span>}

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signupnewsletter