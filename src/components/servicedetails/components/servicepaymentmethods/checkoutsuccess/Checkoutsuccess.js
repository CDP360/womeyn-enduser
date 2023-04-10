import React from 'react'
import { useEffect } from 'react';
import { CheckoutServicePayment, CheckoutSuccessUpdate, CheckoutSuccessUpdatePaypal } from '../../../../services/checkout-services/checkout-service';
import { useRouter } from 'next/router';
import styles from './styles/Checkout.module.scss';
import { useSearchParams } from 'next/navigation';

import { toast } from 'react-toastify';
import Cookies from 'js-cookie';
import LoaderLogo from './../../../../loaderlogo/LoaderLogo';
function Checkoutsuccess() {
    const history = useRouter();
    const searchParams = useSearchParams();
    const Transaction_id = searchParams.get('transaction_id');
    const paymentId_id = searchParams.get('paymentId');
    const PayerID_id = searchParams.get('PayerID');
   

    useEffect(() => {
        if (Transaction_id) {
            CheckoutSuccessUpdate(Transaction_id).then((res) => {
                if (res?.data?.message == "Service completed successfully") {
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
                   
                    setTimeout(() => {
                        history.push("/profile/services");
                    }, 500);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
        else {

        }
    }, [Transaction_id, checkoutId]);

    useEffect(() => {
        if (paymentId_id, PayerID_id) {
            CheckoutSuccessUpdatePaypal(paymentId_id, PayerID_id).then((res) => {
                if (res?.data?.message == "Service completed successfully") {
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
          
                    setTimeout(() => {
                        history.push("/profile/services");
                    }, 500);
                }
            }).catch((err) => {
                console.log(err);
            })
        }
    }, [PayerID_id, paymentId_id, checkoutId])


    return (
        <div className={styles.success}>
            <LoaderLogo />
        </div>
    )
}

export default Checkoutsuccess