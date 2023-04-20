import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Aboutusubscribe.module.scss';
import sub from '../../../../assests/abouts-logos/subscribe.png';
import Image from 'next/image';
import { SubscribeUser } from './../../../../services/subscribe-service/subscribe-service';

import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
function AboutusSubscribe() {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false);


    const onSubmit = (data) => {
        setLoading(true);

        const forms = {
            email: data?.email
        }
        SubscribeUser(forms).then((res) => {
            toast.success("Subscribed successfully..!");
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
            <div className={styles.mainsubscribepage}>
                <div className={styles.leftSubscribePage}>
                    <div className={styles.dontwanttexts}>
                        Don’t want to miss anything?
                    </div>
                    <div className={styles.gets}>
                        Get updates on the newest stories, events, launchs and enterprises right in your mailbox. Subscribe Now!
                    </div>

                    <div className='mt-5'>
                        <div className={styles.emailbox}>

                            <div>
                                <input type="email" placeholder='Enter your email here' className={styles.inputs}

                                    name="email"
                                    {...register("email", {
                                        required: "Please Enter Email Id",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid Email Address"
                                        },
                                    })}
                                />
                            </div>
                            <div>
                                <button className={styles.buttonsubscribes} onClick={handleSubmit(onSubmit)}>
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
                        </div>
                       <div className={styles.errosemailtexts}>
                       <div className='d-flex justify-content-start mt-2'>
                            {errors.email && <span className="active">{errors.email.message}</span>}

                        </div>
                       </div>
                    </div>
                </div>
                <div className={styles.rightSubscribePage}>
                    <Image src={sub} alt="no image" className={styles.subscribepagesimages} />
                </div>
            </div>
        </Fragment>
    )
}

export default AboutusSubscribe