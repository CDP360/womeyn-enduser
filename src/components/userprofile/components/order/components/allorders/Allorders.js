import React, { useState, useEffect } from 'react'
import styles from './styles/Allorders.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { CustomerOrderCancel } from "../../../../../../services/customer-order-service/customer-order-service";
import { toast } from 'react-toastify';
import Reviewmodel from './reviewmodel/Reviewmodel';
function Allorders({ Orders, traking }) {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);

  const [deleteid, setDeleteid] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };
  const handleClose1 = () => setShow1(false);
  const handleShow1 = () => {
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
  }, [deleteid])

  return (
    <div className={styles.allordermainsection}>

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
                  {item?.stateId === 5 && <button className={styles.confirmordersuccess}>Cancelled  </button>}
                  {item?.stateId === 6 && <button className={styles.confirmordersuccess}>Delivered </button>}

                </div>
                <div>
                  {moment(item?.orderedDate).format("MMM Do YY",)}
                </div>
              </div>

              <div className={styles.ordermapsectionlist}>
                <div className={styles.firstimagesection}>

                  {item?.itemsOrdered?.map((items, indedx) => {
                    return (
                      <div className={styles.firstsectioninside}>
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
                            Rs.{items?.price}
                          </div>
                        </div>

                      </div>
                    )
                  })}



                </div>
                <div className={styles.secondimagesection}>
                  ${item?.totalOrderAmount}
                </div>
                {item?.stateId === 4 || item?.stateId === 5 || item?.stateId == 6 ? <></> : <div className={styles.thirdimagesection}>
                  <div>
                    <button className={styles.trackingbutton} onClick={traking}>Track</button>
                  </div>
                  <div>
                    <div>
                      <button className={styles.trackingbutton} onClick={() => handleShow(item?.orderId)}>Cancel</button>
                    </div>
                  </div>
                </div>}

                {item?.stateId === 6 && <div>
                  <button className={styles.trackingbutton} onClick={handleShow1}>Rate & Review </button>
                </div>}
              </div>
            </div>
          )
        })}
      </div>

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
                  Remove Order
                </div>
                <div onClick={handleClose}>
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </div>
              </div>
              <div className={styles.removeitemname}>

                Are you sure want to remove this item from your Cancel Order ?
              </div>
              <div className={styles.buttonsections}>

                <button className={styles.buttonscancel} onClick={handleClose}>Cancel</button>
                <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>Remove</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>


      </>

      <>



        <Reviewmodel show1={show1}
          handleClose1={handleClose1} />
      </>

    </div>

  )
}

export default Allorders