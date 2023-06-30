import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { CheckoutSuccessUpdate, CheckoutSuccessUpdatePaypal } from '../../../../services/checkout-services/checkout-service';
import { useRouter } from 'next/router';
import styles from './styles/Checkout.module.scss';
import { useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';
import ordercomplete from '../../../../assests/cart-logos/Order complete.gif';
import Image from 'next/image';
function Checkoutsuccess() {
    const history = useRouter();
    const searchParams = useSearchParams();
    const Transaction_id = searchParams.get('transaction_id');
    const paymentId_id = searchParams.get('paymentId');
    const PayerID_id = searchParams.get('PayerID');
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setShow(false)
        history.push("/profile/orders");
    };
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (Transaction_id) {
            handleShow();
            CheckoutSuccessUpdate(Transaction_id).then((res) => {
                if (res?.data?.message == "Order completed successfully") {
                    Cookies.remove("CartDatas");
                    Cookies.clear();
                    setTimeout(() => {
                        history.push("/profile/orders");
                        handleClose();
                    }, 2000);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
        }
    }, [Transaction_id]);
    useEffect(() => {
        if (paymentId_id, PayerID_id) {
            handleShow();
            CheckoutSuccessUpdatePaypal(paymentId_id, PayerID_id).then((res) => {
                if (res?.data?.message == "Order completed successfully") {
                    Cookies.remove("CartDatas");
                    Cookies.clear();
                    setTimeout(() => {
                        history.push("/profile/orders");
                        handleClose();
                    }, 800);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [PayerID_id, paymentId_id])
    return (
        <>
            <div className={styles.success}>
                <Modal show={show} onHide={handleClose} centered>
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
                </Modal>
            </div>
        </>
    )
}

export default Checkoutsuccess