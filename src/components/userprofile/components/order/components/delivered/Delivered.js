import React, { useEffect, useState } from 'react'
import styles from '../allorders/styles/Allorders.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';

function Delivered({ Orders, traking, loading }) {
  const [data, setData] = useState([])
  const history = useRouter();

  useEffect(() => {
    Orders?.filter((item, index) => {
      if (item?.stateId === 6) {
        setData(item)
      }
    })
  }, [Orders])

  // const NavigateOrderdetails = () => {
  //   history.push("/order/detail")
  // }

  const Productview = (data) => {
    history.push(`/product/${data}`)
  }
  return (
    <div>

      {data?.length===0 && <div>No Data Found!!</div>}
       <div className={styles.orderstatussection}>
            <div>
            {data?.stateId === 6 && <button className={styles.confirmordersuccess}>Delivered </button>}

            </div>
            <div>
              {/* {moment(data?.orderedDate).format("MMM Do YY",)} */}
            </div>
          </div>
       <div className={styles.ordermapsectionlists}>
        
                    <div className={styles.firstimagesections}>
                      {data?.itemsOrdered?.map((items, index) => {
                        return (
                          <div className={styles.firstsectioninsidess} key={index}>
                            <div className={styles.leftorderdelivery}>

                              <div >
                                {items?.productThumbImage ? <>
                                  <img
                                    className={styles.img}
                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${items?.productThumbImage}`}
                                    alt="profile-pic"
                                  />
                                </> : <>
                                  <Skeleton className={styles.img} />
                                </>}
                              </div>
                              <div>
                                <div className='carttextsmall' onClick={() => Productview(item?.productSlugName)}>
                                  {items?.productName}
                                </div>
                                <div>
                                  {items?.variations?.map((itemss, index) => {
                                    return (
                                      <div >
                                        <span className="sizecolor">{itemss?.name}</span> : {itemss?.value}
                                      </div>
                                    )
                                  })}
                                </div>
                                <div>
                                  {/* Rs.{items?.price} */}
                                </div>
                              </div>
                            </div>


                            <div className={styles.secondimagesections}>
                              ${items?.price}
                            </div>

                            <div>

                              {data?.stateId === 6 && <div>
                                <button className={styles.trackingbuttons} onClick={() => handleShow1(items)}>Review</button>
                              </div>}
                            </div>

                          </div>
                        )
                      })}
                    </div>

                  </div>
    </div>
  )
}

export default Delivered