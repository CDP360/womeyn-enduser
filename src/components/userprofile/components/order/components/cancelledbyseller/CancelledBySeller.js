import React, { useEffect, useState } from 'react'
import styles from '../allorders/styles/Allorders.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';
import LoaderLogo from '../../../../../loaderlogo/LoaderLogo';
import { Nodatafoundimage } from '../../../../../nodatafoundimage/Nodatafound';

function CancelledBySeller({ Orders, traking, loading }) {
    const [data, setData] = useState([])
    const history = useRouter();
  
    useEffect(() => {
      Orders?.filter((item, index) => {
        if (item?.stateId === 5) {
          setData(item)
        }
      })
    }, [Orders])
  
   
    const Productview = (data) => {
      history.push(`/product/${data}`)
    }
  return (
    <div>
    <div className={styles.ordermapsectionlists}>
      <div className={styles.firstimagesections}>

        {data?.length===0 && <div>
          <Nodatafoundimage
          title={"No Orders CancelBySeller"}
          />
          </div>}
        <div className={styles.orderstatussection}>
          <div>
            {data?.stateId === 4 && <button className={styles.confirmordercanceld}>Cancelled </button>}
          </div>
          <div>
            {/* {moment(data?.orderedDate).format("MMM Do YY",)} */}
          </div>
        </div>
        {loading?<>
        
        <LoaderLogo/>
        kalai
    
        </>:<>
        
        {data?.itemsOrdered?.map((items, index) => {
          return (
            <div className={styles.firstsectioninsidess} key={index}>
              <div className={styles.leftorderdelivery}>
                <div>
                  {items?.productThumbImage ? <>
                    <img
                      className={styles.img}
                      src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${items?.productThumbImage}`}
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
            </div>
          )
        })}
        </>}
        
      </div>
    </div>
  </div>
  )
}

export default CancelledBySeller