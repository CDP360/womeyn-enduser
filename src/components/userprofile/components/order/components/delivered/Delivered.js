import React, { useEffect, useState, Fragment } from 'react'
import styles from '../allorders/styles/Allorders.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import Reviewmodel from './reviewmodel/Reviewmodel';
import Returnreviewmodel from './returnreviewmodel/Returnreviewmodel';


function Delivered({ Orders, traking, loading }) {
  const [data, setData] = useState([])
  const [orderlist, setOrderlist] = useState({});

  const [returnlist,setReturnlist]=useState({});

  const history = useRouter();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);


  const handleShow2 = (data) => {
    setShow2(true);
    setReturnlist(data);
  }






  const handleClose1 = () => setShow1(false);
  const handleClose2 = () => setShow2(false);

  const handleShow1 = (data) => {
    setOrderlist(data)
    setShow1(true)

  };


  useEffect(() => {
    const datas = Orders?.filter((item) => item.stateId == 6);
    setData(datas)

  }, [Orders])


  const Productview = (data) => {
    history.push(`/product/${data}`)
  }

  return (
    <Fragment>
      {data?.map((item, index) => {
        return (
          <div>
            <div className={styles.orderstatussection}>
              <div>
                {item?.stateId === 6 && <button className={styles.confirmordersuccess}>Delivered </button>}

              </div>
              <div>
                {moment(data?.orderedDate).format("L")}
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
                                <div >
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
                        ${items?.price}
                      </div>

                      <div className="mb-4">

                        {
                          <button className={styles.trackingbuttons} onClick={() => handleShow2(items)}>Return</button>

                        }

                        <div className="mt-3">
                          {item?.stateId === 6 && <div>
                            <button className={styles.trackingbuttons} onClick={() => handleShow1(items)}>Review</button>
                          </div>}
                        </div>
                      </div>

                    </div>
                  )
                })}
              </div>

            </div>

          </div>
        )
      })}
      <div>
        <Reviewmodel orderlist={orderlist} show1={show1}
          handleClose1={handleClose1} />
      </div>
      <div>
        <Returnreviewmodel show2={show2}
          handleClose2={handleClose2} orderlist={returnlist}/>
      </div>

    </Fragment>

  )
}

export default Delivered