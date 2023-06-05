import React, { useState, useEffect } from 'react'
import styles from './styles/Allcoupons.module.scss';

import { MyCouponList } from '../../services/mycoupon-service/mycoupon-service';
import moment from 'moment';
import { toast } from 'react-toastify';

function Allcoupons() {

    const [couponslist, setCouponsList] = useState([]);

    const copylink = (codes) => {
        toast.success("Coupon Code Copied",
        {
            position: "top-center",
            autoClose: 3300,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
        }
    );
    navigator.clipboard.writeText(codes)
    }


    useEffect(() => {
        MyCoupons();
    }, [])


    const MyCoupons = async () => {
        const response = await MyCouponList();
        setCouponsList(response?.data?.results);
    }
    return (
        <div className={styles.maincouponssection}>
            <div className={styles.insidemaincouponsections}>

                {couponslist?.map((item, index) => {
                    return (
                        <div className={styles.boxcoupons}>
<div className={styles.leftcoupons}>
<div className={styles.couponsOfferName}>{item.title}</div>
                  <div className={styles.couponsOfferNames}>{item.couponCode}</div>
                  <div className={styles.couponsSubContent}>{item.couponDescription}</div>
</div>
<div className={styles.rightcouons}>
<div className={styles.couponsValidDate}>
                    Valid {moment(item?.endDate).format("MMM Do YY",)}
                  </div>

                  <div onClick={()=>copylink(item.couponCode)} className={styles.couponcodecopy}>
                  <ion-icon name="copy-outline" size="small" ></ion-icon> <span className={styles.copycodecolor}>Copy</span>
                    </div>
</div>

                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default Allcoupons