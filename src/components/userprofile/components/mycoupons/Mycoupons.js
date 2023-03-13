import axios from 'axios';
import React from 'react'
import { useEffect, useState } from 'react';
import { MyCouponList } from '../../../../services/mycoupon-service/mycoupon-service';
import moment from 'moment';
import styles from './styles/Mycoupons.module.scss';
import LoaderLogo from '../../../loaderlogo/LoaderLogo';
function Mycoupons() {
    const [coupons, setCoupons] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        MyCouponList().then((res) => {
            setCoupons(res?.data?.results)
            setTimeout(() => {
                setLoading(false);
            }, 400)
        }).catch((err) => {
            console.log(err);
        })
    }, []);

    return (
        <div className={styles.mycouponsmainsection}>
            <h4 className={styles.availablecopons}>Available Coupons</h4>
            <div className={styles.insidecoupons}>
                <div className={styles.insidecontentcoupons}>

                    {loading ?
                        <>
                            <LoaderLogo />
                        </> : <>

                            {coupons?.map((item, index) => {
                                return (
                                    <div className={styles.borderssection} key={index}>
                                        <div className={styles.splitsection}>
                                            <div className={styles.leftsplitcoupons}>
                                                {item.title}
                                            </div>
                                            <div className={styles.rightsplitcoupons}>
                                                Valid     {moment(item?.endDate).format("MMM Do YY",)}
                                            </div>
                                        </div>
                                        <div className={styles.couponcode}>
                                            {item.couponCode}
                                        </div>
                                        <div className={styles.splitsection}>
                                            <h6 className="mt-2">
                                                {item.couponDescription}
                                            </h6>
                                            <div className={styles.rightsplitcoupons}>
                                                {/* {item?.date} */}
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                        </>}

                </div>

            </div>
        </div>
    )
}

export default Mycoupons