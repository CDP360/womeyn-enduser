import React, { useEffect, useState, Fragment } from 'react'
import styles from '../allorders/styles/Allorders.module.scss';
import { useRouter } from 'next/router';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import Reviewmodel from './reviewmodel/Reviewmodel';
import Returnreviewmodel from './returnreviewmodel/Returnreviewmodel';
import Skeleton from 'react-loading-skeleton';
import { Nodatafoundimage } from '../../../../../nodatafoundimage/Nodatafound';

import { Invoicedownload } from '../../../../../../services/invoice-services/invoice_services';


function Delivered({ Orders, traking, loading }) {
  const [data, setData] = useState([])

  const [newdate, setNewDate] = useState("");
  const [orderlist, setOrderlist] = useState({});
  const [returnlist, setReturnlist] = useState({});

  const history = useRouter();
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);

  const [invoiceprint, setInvoicePrint] = useState("");


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
    var d = Date();
    const formates = (moment(d).format("L").slice(0, 10)).replace("/", '');
    console.log(formates.replace("/", ''), "kl")
    // setNewDate(moment(d).format("L").slice(0, 10));

  }, [Orders, newdate])


  const Productview = (data) => {
    history.push(`/product/${data}`)
  }


  const downloadinvoice = (data) => {
    Invoicedownload(data).then((res) => {
      setInvoicePrint(res?.data?.url)
    }).catch((err) => {
      console.log(err);
    })
  }


  return (
    <Fragment>

      {data?.length === 0 && <div>
        <Nodatafoundimage
          title="No Order Deliverd"
        />
      </div>}
      {data?.map((item, index) => {
        return (
          <div>
            <div className={styles.orderstatussection}>
              <div>
                {item?.stateId === 6 && <button className={styles.confirmordersuccess}>Delivered </button>}

              </div>
              <div>

                {(moment(item?.orderedDate).format("L"))}

                {/* {moment(item?.orderedDate).format('L')}-------
                New Date----{newdate} */}

                {/* {moment(item?.orderedDate).format("L").slice(0, 10)} */}
                <br />
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
                        {/* {Number(item?.orderedDate.slice(8, 10)) + Number(10) === 31?"kalai":"nazriya"} */}
                        {/* {Number(item?.orderedDate.slice(0, 5)) + Number(10) === 31 && 1 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 32 && 2 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 33 && 3 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 34 && 4 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 35 && 5 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 36 && 6 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 37 && 7 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 38 && 8 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 39 && 9 ||
                          Number(item?.orderedDate.slice(0, 5)) + Number(10) === 40 && 10
                          === Number(newdate) ? <></> : <>
                          {
                            <button className={styles.trackingbuttons} onClick={() => handleShow2(items)}>Return</button>

                          }
                        </>} */}


                        <button className={styles.trackingbuttons} onClick={() => handleShow2(items)}>Return</button>



                        <button className={styles.trackingbuttons} onClick={() => downloadinvoice(item?.orderId)}>

                          <a href={invoiceprint} target="_blank" download className={styles.linka} title="Invoice">Invoice</a>
                        </button>



                        {/* {Number(item?.orderedDate.slice(0, 10))===Number(04/14/2023)?"kalai success":"kalai not success"} */}

                        {/* {Number(item?.orderedDate.slice(0, 10)) + Number(10) === Number(32) && 2 || Number(newdate) ? "kalai" : "nazriya"} */}

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
          handleClose2={handleClose2} orderlist={returnlist} />
      </div>

    </Fragment>

  )
}

export default Delivered