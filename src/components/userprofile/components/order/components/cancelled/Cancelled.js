import React, { useEffect, useState } from 'react'
import styles from '../allorders/styles/Allorders.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';

function Cancelled({ Orders, traking, loading }) {

  const [data, setData] = useState([])
  const history = useRouter();

  useEffect(() => {
    const datas=Orders?.filter((item) => item.stateId===4 );
    setData(datas)
  }, [Orders])

 
  const Productview = (data) => {
    history.push(`/product/${data}`)
  }


  return (
   <>
    <div className={styles.allordermainsection}>

{Orders?.length === 0 && <div>No Data Found!!</div>}

{loading ? <>
  <LoaderLogo />

</> : <>
  <div className={styles.insidemainordersection}>
    {data?.map((item, index) => {
      return (
        <div className={styles.insideordersectionlist}>
          <div className={styles.orderstatussection}>
            <div>
           
              {item?.stateId === 4 && <button className={styles.confirmordercanceld}>Cancelled </button>}
         

            </div>
            <div>
              {moment(item?.orderedDate).format("MMM Do YY",)}
            </div>
          </div>

        

        


            <div className={styles.ordermapsectionlists}>
              <div className={styles.firstimagesections}>
                {item?.itemsOrdered?.map((items, index) => {
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
                                <div key={index} >
                                  <span className="sizecolor">{itemss?.name}</span> : {itemss?.value}
                                </div>
                              )
                            })}
                          </div>
                          <div>

                          </div>
                        </div>

                      </div>


                      <div className={styles.secondimagesections}>
                        A${items?.price}
                      </div>

                      <div className={styles.rightimagesections}>



                        {index === 0 ? <>

                          {item?.stateId === 4 || item?.stateId === 5 || item?.stateId == 6 ? <></> : <div className={styles.thirdimagesection}>
                            <div>
                              <button className={styles.trackingbuttons} onClick={traking}>Track</button>
                            </div>
                            <div className="mt-3">
                              <div>
                                <button className={styles.trackingbuttons} onClick={() => handleShow(item?.orderId)}>Cancel</button>
                              </div>
                            </div>
                          </div>}
                        </> : <></>}


                     
                      </div>

                    </div>
                  )
                })}
              </div>

            </div>

          

          


        </div>
      )
    })}
  </div>


</>}






</div>
   </>
  )
}

export default Cancelled