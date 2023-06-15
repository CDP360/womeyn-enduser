import React, { useEffect, useState } from 'react'
import styles from '../allorders/styles/Allorders.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';
import { Nodatafoundimage } from '../../../../../nodatafoundimage/Nodatafound';

function Inprogress({ Orders, traking, loading }) {

  const [data, setData] = useState([])
  const history = useRouter();

  useEffect(() => {
    Orders?.map((item, index) => {
      if (item?.stateId ===3 ) {
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

      {data?.length===0 && <div>
        <Nodatafoundimage
        title="No Order Inprogress"
        />
        
        </div>}
       <div className={styles.orderstatussection}>
            <div>
            {data?.stateId === 3 && <button className={styles.confirmorderprogress}>Progress</button>}
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

                  <div>
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

                <div className={styles.rightimagesections}>


                  {data?.stateId === 4 || data?.stateId === 5 || data?.stateId == 6 ? <></> : <div className={styles.thirdimagesection}>
                    <div>
                      <button className={styles.trackingbuttons} onClick={traking}>Track</button>
                    </div>
                    <div className="mt-3">
                      <div>
                        <button className={styles.trackingbuttons} onClick={() => handleShow(item?.orderId)}>Cancel</button>
                      </div>
                    </div>
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

export default Inprogress