import React from 'react'
import { useEffect } from 'react';
import { CheckoutSuucessUpdate } from '../../../../services/checkout-services/checkout-service';
import { useRouter } from 'next/router';
import styles from './styles/Checkout.module.scss';
import { useSearchParams } from 'next/navigation';
function Checkoutsuccess() {
    const history = useRouter();
    const searchParams = useSearchParams();
    const Transaction_id = searchParams.get('transaction_id');
    useEffect(() => {
        CheckoutSuucessUpdate(Transaction_id).then((res) => {
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
                history?.push("/profile/orders");
            }, 500);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className={styles.success}>
            <LoaderLogo />

        </div>
    )
}

export default Checkoutsuccess