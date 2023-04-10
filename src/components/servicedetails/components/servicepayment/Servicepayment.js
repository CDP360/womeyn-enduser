import React, { useState, useEffect } from 'react'
import styles from './styles/Servicepayment.module.scss';
import banners from '../../../../assests/service-logos/servicebanner (2).png';
import Image from 'next/image';
import strip from '../../../../assests/cart-logos/Stripe-Logo1.png';
import paypal from '../../../../assests/cart-logos/PayPal-Logo1.png';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import { ServiceBooking, ServiceusersGetSingleId } from '../../../../services/servicewomeyn/service-womeyn';
import Spinner from 'react-bootstrap/Spinner';

function Servicepayment({ id }) {
    const history = useRouter();
    const [loading, setLoading] = useState(false);

    const [totalvalue, setTotalValue] = useState(0);
    const [payements, setPayments] = useState([]);
    const [tokens, setTokens] = useState("");
    const [paymentType, setPaymentType] = useState("");

    const [serviceimages, setServiceimages] = useState("");
    const paymentMethods = [
        {
            id: 1,
            name: "paypal",
            image: paypal
        },
        {
            id: 2,
            name: "stripe",
            image: strip
        }
    ]

    const onOptionChange = (e) => {
        setPaymentType(e.target.value);
    }

    useEffect(() => {
        const formtoken = localStorage.getItem("userToken");


        if (formtoken) {
            setTokens(formtoken);
        }




        ServiceusersGetSingleId(id).then((res) => {
            console.log("res", res?.data)
            setPayments(res?.data[0])
            setServiceimages(res?.data[0]?.serviceImages[0]?.name)
        }).catch((err) => {
            console.log(err);
        })

    }, [id, serviceimages, tokens, paymentType, totalvalue]);


    useEffect(() => {
        const values = Math.max(
            0,
            Math.round(
                payements?.price - (payements?.price) * 10 / 100
            )
        );
        setTotalValue(values);
    }, [totalvalue, payements?.price])


    console.log(totalvalue, "total")

    const ServicePaymentMethod = () => {

        setLoading(true);

        if (paymentType?.length === 0) {
            toast.error("Please Select Payment Type",
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

        if (paymentType) {
            const userid = localStorage.getItem("userid");
            const datas = {
                serviceId: 2,
                variationId: "12476j",
                sellerId: JSON.parse(userid),
                price: payements?.price,
                gstAmount: totalvalue,
                totalOrderAmount: (Number(totalvalue) + (Number(payements?.price))),
                serviceName: payements?.serviceName,
                variationName: "service",
                paymentMethod: paymentType
            }

            setLoading(true);

            ServiceBooking(datas).then((res) => {
                // window.location = res?.data?.url;
                console.log(res, "ko")
                setTimeout(() => {
                    setLoading(false);
                }, 400)
            }).catch((err) => {
                console.log(err);
                setLoading(false);
            })
        }

    }

    const NavigatePath = () => {
        history.push("/errorboundary");
    }

    const LoginNavigate = () => {
        const pathnames = `/service/payment/${id}`;
        localStorage.setItem("whish", JSON.stringify(pathnames));

        setTimeout(() => {
            history.push("/login");
        }, 300)
    }

    //     if (tokens) {
    //         return (
    //             <div>
    //                 {NavigatePath()};
    //             </div>
    //         )
    //     }
    // else
    // {
    return (
        <div className='mainsection'>
            <div className="insidesection">
                <div className={styles.mainservicepayment}>
                    <div className={styles.insideservicepayment}>
                        <div className={styles.leftservicepayment}>
                            <div className={styles.selectpayment}>

                                Select a payment method {tokens ? "true" : "false"}
                            </div>
                            <div className={styles.paymentmethod}>

                                Payments method
                            </div>
                            <div className="mt-3">

                                <div>

                                    {paymentMethods?.map((item, index) => {
                                        return (
                                            <div key={index} className={styles.paymentsection}>
                                                <input type="radio" name={item?.name} value={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} id={item?.name} className={styles.radiobuttons} />
                                                <label for={item?.name}><img src={item.image.src} alt="no image" className={styles.strips} /></label>
                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                        <div className={styles.rightservicepayment}>

                            <div className={styles.insideservicepaymentinright}>
                                <div className={styles.insiderightpaymentcard}>
                                    <div>

                                        {/* <Image src={banners} alt="no image" className={styles.bannserpaymentservice} /> */}

                                        {serviceimages ? <>
                                            <img
                                                className={styles.bannserpaymentservice}
                                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${serviceimages}`}
                                                alt="profile-pic"
                                            />
                                        </> : <></>}
                                    </div>
                                    <div className={styles.servicepayment}>
                                        <div className={styles.quantity}>

                                            <div className={styles.price}>
                                                Quantity
                                            </div>
                                            <div className={styles.price}>
                                                1
                                            </div>
                                        </div>

                                        <div className={styles.bordersections}>

                                        </div>

                                    </div>
                                    <div className={styles.servicepayment}>
                                        <div className={styles.quantity}>
                                            <div className={styles.price}>
                                                Item price
                                            </div>
                                            <div className={styles.price}>
                                                A$ {payements?.price}
                                            </div>
                                        </div>


                                        <div className={styles.bordersections}>

                                        </div>

                                    </div>

                                    <div className="mt-3 mb-3">

                                        <div className={styles.totalamount}>
                                            <div className={styles.price}>
                                                Total amount
                                            </div>
                                            <div className={styles.totalflex}>
                                                <div className={styles.price}>
                                                    A$
                                                </div>

                                                <div>
                                                    <span className={styles.total}>27</span>
                                                </div>                                        </div>
                                        </div>
                                    </div>

                                    <div className='mt-4 mb-3'>
                                        {tokens ? <>
                                            <button className={styles.confirmpay} onClick={ServicePaymentMethod}>
                                                {loading ? <>

                                                    <Spinner
                                                        as="span"
                                                        animation="border"
                                                        size="sm"
                                                        role="status"
                                                        aria-hidden="true"
                                                    />
                                                    <span className="ms-3">Loading...</span>
                                                </> : <>
                                                    Confirm & Pay

                                                </>}
                                            </button>

                                        </> : <>

                                            <button className={styles.confirmpay} onClick={LoginNavigate}>Login</button>

                                        </>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
    // }
}
export default Servicepayment