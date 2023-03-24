import React, { useState, useEffect } from 'react'
import styles from './styles/Allorders.module.scss';
import Skeleton from 'react-loading-skeleton';
import { useRouter } from 'next/router';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { CustomerOrderCancel } from "../../../../../../services/customer-order-service/customer-order-service";
import { toast } from 'react-toastify';
function Allorders({ Orders, traking }) {
  const [show, setShow] = useState(false);
  const [deleteid, setDeleteid] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
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
                  {item?.stateId === 2 && <button className={styles.confirmorder}>Confirmed</button>}
                  {item?.stateId === 3 && <button className={styles.confirmorderprogress}>Progress</button>}
                  {item?.stateId === 4 && <button className={styles.confirmordercanceld}>Cancelled </button>}
                  {item?.stateId === 5 && <button className={styles.confirmordersuccess}>Delivered </button>}

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
                          {items?.productName}
                        </div>
                      </div>
                    )
                  })}



                </div>
                <div className={styles.secondimagesection}>
                  ${item?.totalOrderAmount}
                </div>
                <div className={styles.thirdimagesection}>
                  <div>
                    <button className={styles.trackingbutton}>Track</button>
                  </div>
                  <div>
                  {item?.stateId === 4 || item?.stateId === 5|| item?.stateId == 6 ?
                    <></>:<div>
                      <button className={styles.trackingbutton} onClick={() => handleShow(item?.orderId)}>Cancel</button>
                      </div>}
                  </div>
                </div>
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

                Are you sure remove this order?
              </div>
              <div className={styles.buttonsections}>

                <button className={styles.buttonscancel} onClick={handleClose}>Cancel</button>
                <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>Remove</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>
      </>

    </div>
    // <div>
    //   {Orders.map((item, index) => {
    //     return (
    //       <>
    //         <div className={styles.insidecontainer} key={index}>
    //           <p
    //             className={
    //               item.status == "Delivered"
    //                 ? `${styles.statusDel}`
    //                 : `${styles.status}`
    //             }
    //           >
    //             {item.status}
    //           </p>
    //           <p className={styles.delivery}>{item.delivery}</p>
    //           <p className={styles.delivery}>
    //             Invoice Number:
    //             <span className={styles.invoicedata}>
    //               {item?.id}
    //             </span>
    //           </p>
    //         </div>

    //         <div className={styles.insidecontainer1}>
    //           <div className={styles.trackbtndivider} onClick={NavigateOrderdetails}>

    //             <div className={styles.insidecontainer2}>

    //               {item?.itemsOrdered?.map((items, index) => {
    //                 return (
    //                   <>
    //                     <div>
    // <div >
    //   {item?.productThumbImage ? <>
    //     <img
    //       className={styles.img}
    //       src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
    //       alt="profile-pic"
    //     />
    //   </> : <>

    //     <Skeleton className={styles.img} />
    //   </>}
    //                       </div>
    //                       <div className={styles.subHead}>
    //                         {items?.productName}
    //                       </div>
    //                       <div className={styles.subHead}>
    //                         {items?.sellerBusinessName}
    //                       </div>
    //                     </div>
    //                   </>
    //                 )
    //               })}




    //             </div>
    //             <div className={styles.insidecontainer3}>
    //               <h5>{item.amount}</h5>
    //             </div>
    //           </div>
    //           <div className={styles.buttontrack} onClick={traking}>
    //             <button className={styles.trackbutton} onClick={traking}>
    //               tracking
    //             </button>
    //             {item.status == "Delivered" ? (
    //               <></>
    //             ) : (
    //               <button className={styles.cancelbutton}>
    //                 {item.cancelb}
    //               </button>
    //             )}
    //           </div>
    //         </div>
    //         <hr className={styles.hrcontainer} />
    //       </>
    //     );
    //   })}
    // </div>
  )
}

export default Allorders