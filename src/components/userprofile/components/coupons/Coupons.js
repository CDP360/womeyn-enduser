import React, { useEffect, useState } from 'react'
import styles from "./styles/Coupons.module.scss";
import { MyCouponList } from '../../../../services/mycoupon-service/mycoupon-service';
import moment from 'moment';
import { useRouter } from "next/router";
function Coupons({ error }) {
  const history = useRouter();
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
    if(error)
    {
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
        history.push("/login");
    }
  }, [error]);

  const NavigateRedirect = () => {
    history?.push("/login")
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
      <div className={styles.couponsContainer}>
        <div className="mb-4 mt-3">
          <div className={styles.couponsHeading}>Coupons</div>
        </div>

        {coupons?.length === 0 && <div>No Data Found!!!</div>}
        {loading ? <>

          Loading....
        </> : <>

          {
            coupons.map((data) =>
              <div>
                <div className={styles.couponsContentContainer}>
                  <div>
                    <div className={styles.couponsOfferName}>{data.title}</div>
                    <div className={styles.couponsOfferNames}>{data.couponCode}</div>
                    <div className={styles.couponsSubContent}>{data.couponDescription}</div>
                  </div>
                  <div >
                    <div className={styles.couponsValidDate}>
                      Valid {moment(data?.endDate).format("MMM Do YY",)}
                    </div>
                  </div>
                </div>
                <hr className={styles.couponsDottedLine} />
              </div>
            )
          }</>}


      </div>
    )
  }
}

export default Coupons