import React, { useEffect, useState } from 'react'
import { ServiceBookingUsers } from './../../../../services/servicewomeyn/service-womeyn';
import styles from './styles/Servicedetails.module.scss';
import { Rate } from "antd";
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import Search from '../../../../assests/homepage-logos/serachicon.png';
import Image from "next/image";
import Reviewmodel from './reviewmodel/Reviewmodel';
import moment from 'moment';


function ServiceMaindetails({ error }) {

    const [serviceusers, setServiceusers] = useState([]);
    const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);

    const [servicedata, setServiceData] = useState({});
    const handleClose = () => setShow(false);
    
    const history = useRouter();

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


        if(error)
        {
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
   


    const pushProductPage=(data)=>{
        // history?.push(`/service/${data}`);
         
        history.push({
        pathname: '/profile/servicedetail',
        query:{id:data},
    })

    }

    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = (data) => {
        setServiceData(data)
        setShow1(true)

    };

   
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
                                            <div className={styles.favortsLeftContainer} onClick={() => pushProductPage(data.serviceSlugName)}>
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
                                                <div>
                                {moment(data?.endDate).isAfter(moment(data?.startDate)) ?<>
                                    <button className={styles.trackingbuttons} onClick={() => pushProductPage(data.serviceSlugName)}>Book Now</button>

                                </>:<>

                                <button className={styles.trackingbuttons} onClick={() => handleShow1(data)}>Review</button>

                                </> }


                                                   
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                                

                            </>}


                            {serviceusers?.length === 0 && <div>No Favorites Data</div>}


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