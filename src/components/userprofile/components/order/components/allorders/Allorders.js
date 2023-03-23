import React from 'react'
import styles from '../../styles/Order.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';

function Allorders({ Orders, traking }) {

  const history = useRouter();

  const NavigateOrderdetails = () => {
    history.push("/order/detail")
  }
  return (
    <div>
      {Orders.map((item, index) => {
        return (
          <>
            <div className={styles.insidecontainer} key={index}>
              <p
                className={
                  item.status == "Delivered"
                    ? `${styles.statusDel}`
                    : `${styles.status}`
                }
              >
                {item.status}
              </p>
              <p className={styles.delivery}>{item.delivery}</p>
              <p className={styles.delivery}>
                Invoice Number:
                <span className={styles.invoicedata}>
                  {item?.deliveryAddressId}
                </span>{" "}
              </p>
            </div>

            <div className={styles.insidecontainer1}>
              <div className={styles.trackbtndivider} onClick={NavigateOrderdetails}>

                <div className={styles.insidecontainer2}>

                  {item?.itemsOrdered?.map((items, index) => {
                    return (
                      <>
                        <div>
                          <div >
                            {item?.productThumbImage ? <>
                              <img
                                className={styles.img}
                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                                alt="profile-pic"
                              />
                            </> : <>

                              <Skeleton className={styles.img} />
                            </>}
                          </div>
                          <div className={styles.subHead}>
                            {items?.productName}
                          </div>
                          <div className={styles.subHead}>
                            {items?.sellerBusinessName}
                          </div>
                        </div>
                      </>
                    )
                  })}




                </div>
                <div className={styles.insidecontainer3}>
                  <h5>{item.amount}</h5>
                </div>
              </div>
              <div className={styles.buttontrack} onClick={traking}>
                <button className={styles.trackbutton} onClick={traking}>
                  tracking
                </button>
                {/* {item.status == "Delivered" ? (
                  <></>
                ) : (
                  <button className={styles.cancelbutton}>
                    {item.cancelb}
                  </button>
                )} */}
              </div>
            </div>
            <hr className={styles.hrcontainer} />
          </>
        );
      })}
    </div>
  )
}

export default Allorders