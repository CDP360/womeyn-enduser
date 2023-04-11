import React, { useEffect, useState } from 'react'
import { ServiceBookingUsers } from './../../../../services/servicewomeyn/service-womeyn';
import styles from './styles/Servicedetails.module.scss';
import { Rate } from "antd";
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import Search from '../../../../assests/homepage-logos/serachicon.png';
import Image from "next/image";

function ServiceMaindetails({ error }) {

    const [serviceusers, setServiceusers] = useState([]);
  const [show, setShow] = useState(false);

    const [loading, setLoading] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = (id) => {
      setShow(true)
      setDeleteid(id);
    };
    const history = useRouter();

    useEffect(() => {
        setLoading(true);
        ServiceBookingUsers().then((res) => {

            if(res?.response?.data?.code===500)
            {
                alert("true");
            }
            console?.log(res, "kalai")
            setServiceusers(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 500)
        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })
    }, [])
    const NavigateRedirect = () => {
        history?.push("/errorboundary")
    }
    if (error) {
        return (
            <div>
                {NavigateRedirect()}
            </div>
        )
    }
    else {
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

{/* 
                                {
                                    favorts.map((data, index) =>
                                        <div className={styles.favortsInnerContainer} key={index}>
                                            <div className={styles.favortsLeftContainer} onClick={() => pushProductPage(data.productSlugName)}>
                                                <div className={styles.boximage}>

                                                    {data?.productThumbImage ? <>
                                                        <img
                                                            className={styles.favortsImg}
                                                            src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data?.productThumbImage}`}
                                                            alt="profile-pic"
                                                        />
                                                    </> : <>
                                                        <Skeleton className={styles.favortsImg} />
                                                    </>}
                                                </div>
                                                <div className={styles.favortsContentContainer}>
                                                    <p className={styles.favortsProductName}>{data.productName}</p>

                                                    <div className={styles.favortsRatingContainer}>



                                                        {data?.salePrice}

                                                    </div>
                                                </div>
                                            </div>
                                            <div className={styles.favortsRightContainer} onClick={() => handleShow(data?._id)}>
                                                <Image src={Delete} className={styles.removeitems} />
                                                <div className='d-none d-lg-block'>
                                                    <p className={styles.favortsDeleteText}>Remove</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } */}
                            </>}


                            {/* {favorts?.length === 0 && <div>No Favorites Data</div>} */}


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
                </>
            </>
        )
    }

}

export default ServiceMaindetails