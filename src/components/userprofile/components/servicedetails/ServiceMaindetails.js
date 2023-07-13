import React, { useEffect, useState } from 'react'
import { ServiceBookingUsers, InvoicedownloadService } from './../../../../services/servicewomeyn/service-womeyn';
import styles from './styles/Servicedetails.module.scss';
import { Rate } from "antd";
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import Search from '../../../../assests/homepage-logos/serachicon.png';
import Image from "next/image";
import Reviewmodel from './reviewmodel/Reviewmodel';
import moment from 'moment';
import Spinner from "react-bootstrap/Spinner";
import { useForm } from "react-hook-form";


function ServiceMaindetails({ error }) {

    const {
        register,
        handleSubmit,
        watch,
        setValue,
        reset,
        formState: { errors },
    } = useForm();

    const [serviceusers, setServiceusers] = useState([]);
    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);
    const [invoiceloading, setInvoiceLoading] = useState(false);
    const [invoiceNumber, setInvoiceNumber] = useState("");




    const [servicedata, setServiceData] = useState({});
    const handleClose = () => setShow(false);

    const history = useRouter();


    const g1 = moment('2010-10-20').isAfter('2009-12-31', 'year');
    const g = moment('Jun 5th 23').isAfter(moment('Jun 10th 23', "year"));



    useEffect(() => {
        setLoading(true);
        ServiceBookingUsers().then((res) => {
            setServiceusers(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 500)


        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })


        if (error) {
            localStorage.removeItem("userid");
            localStorage.removeItem("userToken");
            localStorage.removeItem("whish");
            localStorage.removeItem("user");
            localStorage.removeItem("auth");
            localStorage.removeItem("productid");
            localStorage.removeItem('signupuser');

            history.push("/login");
        }
    }, [error])



    const pushProductPage = (data) => {
        // history?.push(`/service/${data}`);

        const datas=data?.orderId;

        const slugnames=data?.serviceSlugName;


        const forms=`${slugnames}/search=${datas}`;


        history.push({
            pathname: '/profile/servicedetail',
            query: { id: slugnames,searchorderid:datas},
        })


      


        // console.log(forms,"data")

    }

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => {setShow1(false)
        reset({
            username:"",
            ratingValue:"",
            title:"",
            message:"",
            serviceId:"",
            upl:""
        })
    };
    const handleShow1 = (data) => {
        setServiceData(data)
        setShow1(true)

    };



    const ServiceInvoiceDownload = (orderids) => {
        setInvoiceLoading(true);
        InvoicedownloadService(orderids).then((res) => {
            window.open(res?.data?.url);
            setTimeout(() => {
                setInvoiceLoading(false);
            }, 600);
        }).catch((err) => {
            console.log(err);
            setInvoiceLoading(false);
        })
    }





    return (
        <>
            <div>
                <div className={styles.favortsInputContainer}>
                    <input className={styles.favortsSearch}
                        placeholder="Search your favorites" />
                    <Image src={Search} className={styles.searchImg} />
                </div>
                <div className={styles.favortsContainer}>
                    <p className={styles.favortsText}>Services</p>



                    <div>
                        {loading ? <>
                            loading...
                        </> : <>
                            {
                                serviceusers.map((data, index) =>
                                    <div className={styles.favortsInnerContainer} key={index}>
                                        <div className={styles.favortsLeftContainer} onClick={() => pushProductPage(data)}>
                                            <div className={styles.boximage}>
                                                {data?.serviceThumbImage ? <>
                                                    <img
                                                        className={styles.favortsImg}
                                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data?.serviceThumbImage}`}
                                                        alt="profile-pic"
                                                    />
                                                </> : <>
                                                    <Skeleton className={styles.favortsImg} />
                                                </>}
                                            </div>
                                            <div className={styles.favortsContentContainer}>
                                                <div className={styles.favortsProductName}>{data.serviceName}</div>
                                                <div className={styles.favortsProductprice}>Price : {data.price}</div>

                                                <div className="mt-2">
                                                    <div className={styles.favortsProductprice}>GST : {data.gstAmount}</div>

                                                </div>


                                                <div className={styles.favortsRatingContainer}>

                                                    {data?.salePrice}

                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.favortsRightContainer} >
                                            {/* <Image src={Delete} className={styles.removeitems} />
                                                <div className='d-none d-lg-block'>
                                                    <p className={styles.favortsDeleteText}>Remove</p>
                                                </div> */}

{/* <button className={styles.trackingbuttons} onClick={() => handleShow1(data)}>Review</button> */}
                                            <div>
                                                {data?.startDate}
                                                {moment(data?.startDate).isAfter(moment(data?.endDate)) ? <>

                                                    {/* <button className={styles.trackingbuttons} onClick={() => handleShow1(data)}>Review</button> */}
                                                </> : <>
                                                    <button className={styles.trackingbuttons} onClick={() => pushProductPage(data)}>Booked</button>

                                                </>}
{/* 
                                                <div className="mt-2">
                                                    <button className={styles.viewdetailsbuttons} onClick={() => {
                                                        ServiceInvoiceDownload(data?.orderId)
                                                        setInvoiceNumber(index + 1)
                                                    }}>

                                                        {index + 1 === invoiceNumber ? <>

                                                            {invoiceloading ? <>
                                                                <Spinner
                                                                    as="span"
                                                                    animation="border"
                                                                    size="sm"
                                                                    role="status"
                                                                    aria-hidden="true"
                                                                />
                                                                <span className="ms-2">Loading...</span>
                                                            </> : <>

                                                                Download Invoice

                                                            </>}
                                                        </> : <>
                                                            Download Invoice
                                                        </>}


                                                    </button>
                                                </div> */}
                                            </div>
                                        </div>
                                    </div>
                                )
                            }


                        </>}


                        {serviceusers?.length === 0 && <div>No Services Data...</div>}


                    </div>


                </div>
            </div>
            {/* <>
                    <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                        centered
                    >

                        <Modal.Body>
                            <div className={styles.modelremove}>

                                <div className={styles.insidemodelpopup}>
                                    <div className={styles.removetexts}>
                                        Remove Item
                                    </div>
                                    <div onClick={handleClose}>
                                        <ion-icon name="close-outline" size="large"></ion-icon>
                                    </div>
                                </div>
                                <div className={styles.removeitemname}>
                                    Are you sure want to remove this item from your Wish List?
                                </div>
                                <div className={styles.buttonsections}>
                                    <button className={styles.buttonscancel} onClick={handleClose}>Cancel</button>
                                    <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>Remove</button>
                                </div>
                            </div>
                        </Modal.Body>

                    </Modal>
                </> */}

            <>
                <Reviewmodel
                    show1={show1}
                    handleClose1={handleClose1} servicedata={servicedata}
                />
            </>
        </>
    )


}

export default ServiceMaindetails