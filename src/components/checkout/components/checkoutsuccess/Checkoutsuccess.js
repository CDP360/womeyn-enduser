import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { CheckoutSuccessUpdate, CheckoutSuccessUpdatePaypal } from '../../../../services/checkout-services/checkout-service';
import { useRouter } from 'next/router';
import styles from './styles/Checkout.module.scss';
import { useSearchParams } from 'next/navigation';
import LoaderLogo from './../../../loaderlogo/LoaderLogo';
import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import ordercomplete from '../../../../assests/cart-logos/Order complete.gif';
function Checkoutsuccess() {
    const history = useRouter();
    const searchParams = useSearchParams();
    const Transaction_id = searchParams.get('transaction_id');
    const paymentId_id = searchParams.get('paymentId');
    const PayerID_id = searchParams.get('PayerID');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    useEffect(() => {
        if (Transaction_id) {
            CheckoutSuccessUpdate(Transaction_id).then((res) => {
                if (res?.data?.message == "Order completed successfully") {
                    toast.success(res?.data?.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    Cookies.remove("CartDatas");
                    handleShow();
                    setTimeout(() => {
                        history.push("/profile/orders");
                    }, 1000);
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
            CheckoutSuccessUpdatePaypal(paymentId_id, PayerID_id).then((res) => {
                if (res?.data?.message == "Order completed successfully") {
                    toast.success(res?.data?.message, {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    Cookies.remove("CartDatas");
                    handleShow();
                    setTimeout(() => {
                        history.push("/profile/orders");
                    }, 1000);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [PayerID_id, paymentId_id])


    return (
        <>
            <div className={styles.success}>
                {/* <LoaderLogo /> */}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}

export default Checkoutsuccess