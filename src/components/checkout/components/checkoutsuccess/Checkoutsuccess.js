import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CheckoutSuccessUpdate, CheckoutSuccessUpdatePaypal } from '../../../../services/checkout-services/checkout-service';
import { useRouter } from 'next/router';
import styles from './styles/Checkout.module.scss';
import { useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import ordercomplete from '../../../../assests/cart-logos/Order complete.gif';
import Image from 'next/image';
import { toast } from 'react-toastify';
import LoaderLogo from './../../../loaderlogo/LoaderLogo';
function Checkoutsuccess() {
    const history = useRouter();
    const searchParams = useSearchParams();
    const Transaction_id = searchParams.get('transaction_id');
    const paymentId_id = searchParams.get('paymentId');
    const PayerID_id = searchParams.get('PayerID');


    const [show, setShow] = useState(false);
    // const handleClose = () => {
    //     setShow(false)
    //     history.push("/profile/orders");
    // };
    // const handleShow = () => setShow(true);
    useEffect(() => {

        if (Transaction_id) {

            setShow(true);
            CheckoutSuccessUpdate(Transaction_id).then((res) => {


                if (res?.data?.message == "Order completed successfully") {

                    setShow(false)

                    toast.success(res?.data?.message, {
                        position: "top-center",
                        autoClose: 3300,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })
                    Cookies.remove("CartDatas");
                    Cookies.clear();

                    history.push("/profile/orders");

                }

            }).catch((err) => {
                console.log(err);
                setShow(false);

            })
        }

    }, [Transaction_id]);
    useEffect(() => {
        if (paymentId_id, PayerID_id) {

            setShow(true)
            CheckoutSuccessUpdatePaypal(paymentId_id, PayerID_id).then((res) => {
                if (res?.data?.message == "Order completed successfully") {
                    Cookies.remove("CartDatas");
                    Cookies.clear();
                    toast.success(res?.data?.message, {
                        position: "top-center",
                        autoClose: 3300,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    })

                    setShow(false)

                    history.push("/profile/orders");


                }
            }).catch((err) => {
                console.log(err);
                setShow(false);

            })
        }
    }, [PayerID_id, paymentId_id])
    return (
        <>

            {show ? <>

                <LoaderLogo />
            </> : <></>}
            <div className={styles.success}>
                <div>
                    <div className="mb-3">
                    </div>
                    <div>
                        <Image src={ordercomplete} alt="no image" className={styles.ordercompleimages} />
                    </div>
                    <div>
                        <h3 className={styles.compleordertexts}>Order completed successfully !</h3>
                    </div>
                    <div className={styles.youwill}>
                        You will be receiving a confirmation email order details.
                    </div>
                    <div className="mt-3 mb-5">
                    </div>
                </div>
                {/* <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton className="modalheader">
                    </Modal.Header>
                    <Modal.Body>
                        <div>
                            <div className="mb-3">
                            </div>
                            <div>
                                <Image src={ordercomplete} alt="no image" className={styles.ordercompleimages} />
                            </div>
                            <div>
                                <h3 className={styles.compleordertexts}>Order completed successfully !</h3>
                            </div>
                            <div className={styles.youwill}>
                                You will be receiving a confirmation email order details.
                            </div>
                            <div className="mt-3 mb-5">
                            </div>
                        </div>
                    </Modal.Body>
                </Modal> */}
            </div>
        </>
    )
}

export default Checkoutsuccess