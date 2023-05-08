import React, { useState, useEffect } from 'react'
import styles from './styles/Allorders.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { CustomerOrderCancel } from "../../../../../../services/customer-order-service/customer-order-service";
import { toast } from 'react-toastify';
import Reviewmodel from './reviewmodel/Reviewmodel';
import LoaderLogo from '../../../../../loaderlogo/LoaderLogo';
function Allorders({ Orders, traking, loading }) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [deleteid, setDeleteid] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };
  const [orderlist, setOrderlist] = useState({});
  const handleClose1 = () => setShow1(false);
  const handleShow1 = (data) => {
    setOrderlist(data)
    setShow1(true)

  };
  const history = useRouter();
  const handleDelete = (e) => {
    setTimeout(() => {
      handleClose();
      CustomerOrderCancel(e).then((res) => {
        toast.success(res?.data?.message);
        window.location.reload();
      }).catch((err) => {
        console.log(err);
      })
    }, 500);
  }
  const NavigateOrderdetails = () => {
    history.push("/order/detail")
  }
  const Productview = (data) => {
    history.push(`/product/${data}`)
  }
  useEffect(() => {
  }, [deleteid, Orders]);


  useEffect(() => {

  

  }, [orderlist])


  return (
    <div className={styles.allordermainsection}>

      {Orders?.length === 0 && <div>No Data Found!!</div>}

      {loading ? <>
        <LoaderLogo />

      </> : <>
        <div className={styles.insidemainordersection}>
          {Orders?.map((item, index) => {
            return (
              <div className={styles.insideordersectionlist}>
                <div className={styles.orderstatussection}>
                  <div>
                    {item?.stateId === 1 && <button className={styles.confirmorder}>New Order</button>}
                    {item?.stateId === 2 && <button className={styles.confirmorder}>Confirmed</button>}
                    {item?.stateId === 3 && <button className={styles.confirmorderprogress}>Progress</button>}
                    {item?.stateId === 4 && <button className={styles.confirmordercanceld}>Cancelled </button>}
                    {item?.stateId === 5 && <button className={styles.confirmordersuccess}>Cancelled By Seller  </button>}
                    {item?.stateId === 6 && <button className={styles.confirmordersuccess}>Delivered </button>}

                  </div>
                  <div>
                    {moment(item?.orderedDate).format("MMM Do YY",)}
                  </div>
                </div>
                {item?.stateId === 6 ? <>
                  <div className={styles.ordermapsectionlists}>
                    <div className={styles.firstimagesections}>
                      {item?.itemsOrdered?.map((items, index) => {
                        return (
                          <div className={styles.firstsectioninsidess} key={index}>
                            <div className={styles.leftorderdelivery}>
                              <div onClick={NavigateOrderdetails}>
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
                                <div className='carttextsmall' onClick={() => Productview(items?.productSlugName)}>
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
                                  A${items?.price}
                                </div>
                              </div>
                            </div>
                            <div className={styles.secondimagesections}>
                              A${items?.price}
                            </div>

                            <div>

                              {item?.stateId === 6 && <div>
                                <button className={styles.trackingbuttons} onClick={() => handleShow1(items)}>Review</button>
                              </div>}
                            </div>

                          </div>
                        )
                      })}
                    </div>

                  </div>

                </> : <>


                  <div className={styles.ordermapsectionlists}>
                    <div className={styles.firstimagesections}>
                      {item?.itemsOrdered?.map((items, index) => {
                        return (
                          <div className={styles.firstsectioninsidess} key={index}>
                            <div className={styles.leftorderdelivery}>

                              <div onClick={NavigateOrderdetails}>
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
                                <div className='carttextsmall' onClick={() => Productview(items?.productSlugName)}>
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
                                      <button className={styles.trackingbuttonss} onClick={() => handleShow(item?.orderId)}>Cancel</button>
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



                </>}


              </div>
            )
          })}
        </div>


      </>}



      <>
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
        >

          <Modal.Body>
            <div className={styles.modelremove}>

              <div className={styles.insidemodelpopup}>
                <div className={styles.removetexts}>
                  Cancel Order
                </div>
                <div onClick={handleClose}>
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </div>
              </div>
              <div className={styles.removeitemname}>

                Are you sure want to remove this item from your Cancel Order ?
              </div>
              <div className={styles.buttonsections}>

                <button className={styles.buttonscancel} onClick={handleClose}>NO</button>
                <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>YES,I'M SURE</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>


      </>

      <>



        <Reviewmodel show1={show1}
          handleClose1={handleClose1} orderlist={orderlist} />
      </>

    </div>

  )
}

export default Allorders