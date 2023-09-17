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
import Skeleton from 'react-loading-skeleton';

function Servicepayment({ id }) {
    const history = useRouter();
    const [loading, setLoading] = useState(false);
    const [errors, setError] = useState(false);
    const [totalvalue, setTotalValue] = useState(0);
    const [payements, setPayments] = useState([]);
    const [tokens, setTokens] = useState("");
    const [paymentType, setPaymentType] = useState("");
    const [serviceimages, setServiceimages] = useState("");

    const [selectworkdays, setSelectworkdays] = useState("");
    const [readmores, setReadMore] = useState(false);


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

        setLoading(false);

    }

    useEffect(() => {
        const formtoken = localStorage.getItem("userToken");
        if (formtoken) {
            setTokens(formtoken);
        }
        ServiceusersGetSingleId(id).then((res) => {
            if (res?.response?.data?.message == "Please authenticate") {
                setError(true);
            }
            else {
                setPayments(res?.data[0])
                setServiceimages(res?.data[0]?.serviceImages[0]?.name)
            }
        }).catch((err) => {
            console.log(err);
            setError(false);

        })

    }, [id, serviceimages, tokens, paymentType, totalvalue, errors]);

    useEffect(() => {
        const values = Math.max(
            0,
            Math.round(
                payements?.price - (payements?.price) * 10 / 100
            )
        );
        const Sample = payements?.price - values;
        setTotalValue(Sample);
    }, [totalvalue, payements?.price])


    const ServicePaymentMethod = () => {
        setLoading(true);



        if (selectworkdays?.length === 0) {
            toast.error("Please Select Slots",
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
            setLoading(false);

        }


        if (selectworkdays) {
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
                setLoading(false);

            }
        }

        if (selectworkdays) {

            if (paymentType) {

                const userid = localStorage.getItem("userid");
                const datas = {
                    serviceId: payements?.serviceId,
                    variationId: payements?.variationId,
                    sellerId: payements?.sellerId,
                    price: payements?.price,
                    gstAmount: totalvalue,
                    totalOrderAmount: (Number(totalvalue) + (Number(payements?.price))),
                    serviceName: payements?.serviceName,
                    variationName: payements?.title,
                    paymentMethod: paymentType,
                    slotDetails:
                    {
                        slotId: selectworkdays?._id,
                        slotTiming: `${selectworkdays?.dayName} ${selectworkdays?.workingHours}`
                    }
                }

                ServiceBooking(datas).then((res) => {
                    window.location = res?.data?.url;
                    setLoading(false);

                }).catch((err) => {
                    console.log(err);

                })
            }


        }













    }


    const LoginNavigate = () => {
        const pathnames = `/services/payment/${id}`;
        localStorage.setItem("whish", JSON.stringify(pathnames));
        history.push("/login");

    }


    const NavigatePathUser = () => {
        history?.push("/login");
    }

    const datass = [
        {
            id: 1,
            name: "womeyn"
        },
        {
            id: 2,
            name: "womeyn1"
        },
        {
            id: 3,
            name: "womeyn2"
        },
        {
            id: 4,
            name: "womeyn3"
        }
    ];


    const handleChangeList = (data) => {
        const filtersdata = payements?.workingDays?.map((item, index) => {
            if (item?._id == data?._id) {
                setSelectworkdays(item);
            }
        })

    }

    return (
        <div className='mainsection'>
            <div className="insidesection">
                <div className={styles.mainservicepayment}>
                    <div className={styles.insideservicepayment}>
                        <div className={styles.leftservicepayment}>
                        <div className={styles.selectpayment}>
                                Select a Slot
                            </div>
                        <div className={styles.paymentmethod}>
                                Slots
                            </div>
                          

                            <div className={styles.kalia}>
                                {readmores?<>
                                    <div className={"row gap-2 mt-4 mb-3  "}>
                                {payements?.workingDays?.map((item, index) => {
                                    return (
                                        <div className={selectworkdays?._id === item?._id ? styles.activeworkingbox : styles.workingdaysbox} onClick={() => handleChangeList(item)}>
                                            <div className="d-flex gap-3">
                                           <div> {item?.dayName}</div>
                                           <div>
                                           {item?.workingHours}
                                           </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                                </>:<>
                                
                                <div className={"row gap-2 mt-4 mb-3"}>
                                {payements?.workingDays?.slice(0,4).map((item, index) => {
                                    return (
                                        <div className={selectworkdays?._id === item?._id ? styles.activeworkingbox : styles.workingdaysbox} onClick={() => handleChangeList(item)}>
                                            <div className="d-flex gap-3">
                                           <div> {item?.dayName}</div>
                                           <div>
                                           {item?.workingHours}
                                           </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                                </>}
                                
                                <div className="mb-4">
                                    {payements?.workingDays?.length>4?<>
                                        <div className={styles.readmoretext} onClick={()=>setReadMore(!readmores)}>{readmores?"Less More Slots...":"Read More Slots..."}</div>
                                    </>:null}
                                </div>
                            </div>
                            <div className={styles.selectpayment}>
                                Select a payment method
                            </div>
                           
                            <div className={styles.paymentmethod}>
                                Payments method
                            </div>
                            <div className="mt-3">

                                <div>

                                    {paymentMethods?.map((item, index) => {
                                        return (
                                            // <div key={index} className={styles.paymentsection}>
                                            //     <input type="radio" name={item?.name} value={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} id={item?.name} className={styles.radiobuttons} />
                                            //     <label for={item?.name}><img src={item.image.src} alt="no image" className={styles.strips} /></label>
                                            // </div>
                                            <div className={styles.questions} key={index}>
                                                <div className={styles.questions__question}>
                                                    <input type="radio" name={item?.name} value={item?.name} id={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} />
                                                    <label for={item?.name} className={styles.paymentbox}>
                                                        <div className={styles.paymentboxinside}>
                                                            <div className={paymentType == item?.name ? styles.activebox : styles.inactive}>
                                                            </div>
                                                            <div>
                                                                <img src={item.image.src} alt="no image" className={styles.strips} />
                                                            </div>
                                                        </div>
                                                    </label>
                                                    <div>
                                                    </div>
                                                </div>

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
                                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${serviceimages}`}
                                                alt="profile-pic"
                                            />
                                        </> : <>
                                            <Skeleton
                                                className={styles.bannserpaymentservice}
                                            />
                                        </>}
                                    </div>
                                    {tokens ? <div>
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

                                            <div className={styles.quantity}>
                                                <div className={styles.price}>
                                                    GST
                                                </div>
                                                <div className={styles.price}>
                                                    A$ {totalvalue}
                                                </div>
                                            </div>

                                            <div className={styles.bordersections}>

                                            </div>

                                        </div>

                                        <div className="mt-3 mb-5">

                                            <div className={styles.totalamount}>
                                                <div className={styles.price}>
                                                    Total amount
                                                </div>
                                                <div className={styles.totalflex}>
                                                    <div className={styles.price}>
                                                        A$
                                                    </div>

                                                    <div>
                                                        <span className={styles.total}>{(Number(totalvalue)) + (Number(payements?.price))}</span>
                                                    </div>                                        </div>
                                            </div>
                                        </div>
                                    </div> : <div></div>}


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
}

export default Servicepayment