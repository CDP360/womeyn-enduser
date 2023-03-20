import React from 'react'
import styles from "./styles/Coupons.module.scss";

function Coupons() {
  const CouponData=[
    {
      offerName:'Extra 5% off on Nakpro',
      extraOffer:'Get extra off on 1 item',
      validDate:'Valid till 5 Apr, 2023',
      terms:'View T&C',
    },
    {
      offerName:'Extra 5% off on Nakpro',
      extraOffer:'Get extra off on 1 item',
      validDate:'Valid till 5 Apr, 2023',
      terms:'View T&C',
    },
  ]
  return (
    <div className={styles.couponsContainer}>
      <p className={styles.couponsHeading}>Coupons</p>
      {
        CouponData.map((data)=>
        <div>
        <div className={styles.couponsContentContainer}>
        <div>
          <p className={styles.couponsOfferName}>{data.offerName}</p>
          <p className={styles.couponsSubContent}>{data.extraOffer}</p>
        </div>
        <div>
          <p className={styles.couponsValidDate}>{data.validDate}</p>
          <p className={styles.couponsSubContent}>{data.terms}</p>
        </div>
      </div>
      <hr className={styles.couponsDottedLine}/>
      </div>
        )
      }
     
    </div>
  )
}

export default Coupons