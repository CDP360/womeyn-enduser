import React, { useState, useEffect } from "react";
import style from "./styles/Ordertracking.module.scss";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Divider, Steps } from 'antd';
import { GetOrders } from "../../../../../../services/customer-order-service/customer-order-service";
import { useRouter } from 'next/router';
import { getShipmentTrack } from "../../../../../../services/shipping-service/shipping-service";
import moment from 'moment';
import LoaderLogo from "../../../../../loaderlogo/LoaderLogo";
import Modal from 'react-bootstrap/Modal';

function Ordertarcking({ Orders }) {
  // const [step, setIndex] = useState(2);



  const router = useRouter();
  const [deleteid, setDeleteid] = useState("");

  const [loadings, setLoadings] = useState(false);

  const [loading, setLoading] = useState(false);
  // console.log(,"id")

  const [tracks, setTracks] = useState([]);
  const [tracksorders, setTracksOrders] = useState([]);

  const TrackLoginCheck = () => {
    const checktoken = localStorage.getItem("userToken");
    if (checktoken) {

    }
    else {
      router.push("/login");
    }
  }
  useEffect(() => {
    GetOrders().then((res) => {
      res?.data?.results?.map((items, index) => {
      })
    }).catch((err) => {
      console.log(err);
    })
    TrackLoginCheck();
    // router?.query?.id
    setLoading(true);
    const cards = [];
    getShipmentTrack(router?.query?.id).then((res) => {
      setTimeout(() => {
        setLoading(false);
      }, 500)

      console.log(res, "res")
      setTracksOrders(res);
      res?.trackingDetails?.events?.map((item, index) => {
        const f = {
          description: `${item?.description} ${moment(item?.occurred_at).format('LLL')}`,
        }
        cards.push(f);
      })
      const datas = cards;
      const reversed = datas?.reverse();
      setTracks(datas);
    }).catch((err) => {
      console.log(err);
      setLoading(false);

    })



  }, [router?.query?.id])

  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };

  const handleDelete = (e) => {
    setTimeout(() => {
      handleClose();
      CustomerOrderCancel(e).then((res) => {
        toast.success(res?.data?.message);
        setLoadings(true);
      }).catch((err) => {
        console.log(err);
      })
    }, 500);
  }



  const ShopMore = () => {
    router.push("/");

  }
  return (
    <>
      {loading ? <>
        <LoaderLogo />
      </> : <>
        <div className="mainsection">
          <div className="insidesection">
            <div>
              <div className={style.inside}>
                <p className={style.product}>Product Tracking</p>
                <button className={style.show} onClick={ShopMore}>Shop More</button>
              </div>
            </div>
            <div className={style.insidecontainer}>
              <div className={style.leftinsidesection}>
                <div className={style.leftContainer1}>
                  <p className={style.shipmentpara}>Shipment Status</p>
                  <h6 className="mt-2">On Progress</h6>
                </div>
                <div className="mt-3 mb-4">
                  <Steps
                    progressDot
                    current={tracks?.length}
                    direction="vertical"
                    size="large"
                    items={tracks}
                  />
                </div>
                <div>
                </div>
              </div>
              <div className={style.rightinsidesection}>
                <div className={style.rightContainer1}>
                  <div className={style.rightContainersection1}>
                    <div className={style.rightContainersection2}>
                      <div className={style.rightinsidecontainer}>
                        <div>
                          <div >

                            {tracksorders?.orderDetails?.itemsOrdered[0]?.productThumbImage ? <>

                              <img
                                className={style.img1}
                                src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${tracksorders?.orderDetails?.itemsOrdered[0]?.productThumbImage}`}
                                alt="profile-pic"
                              />
                            </> : <></>}



                          </div>

                        </div>
                        <div className={style.rightinsidecontainer1}>
                          <p className={style.paracontent}>{tracksorders?.orderDetails?.itemsOrdered[0]?.productName}</p>
                          <p className={style.paracontent2}>

                            {tracksorders?.orderDetails?.itemsOrdered[0]?.variations?.map((item, index) => {
                              return (
                                <div>
                                  {item?.name}:{item?.value}
                                </div>
                              )
                            })}


                          </p>
                          <h5 className={style.dollar}>
                            A$ {tracksorders?.orderDetails?.itemsOrdered[0]?.price}
                          </h5>

                          {tracksorders?.trackingDetails?.events?.map((item, index) => {


                            {
                              item?.description == "Departed FedEx location" || item?.description == "At local FedEx facility" || item?.description == "On FedEx vehicle for delivery " || item?.description == "Delivered" ? <></> : <>
                                <div>
                                  <h6 className={style.cancel} onClick={() => handleShow(router?.query?.id)}>Cancel order</h6>

                                </div>
                              </>
                            }



                          })}
                          <div>


                          </div>
                        </div>

                      </div>

                    </div>
                    <hr className={style.hrcontain} />

                    <div>
                      <p className={style.receipt}>Receipt Number</p>
                      <div className="mt-2">
                        {router?.query?.id}
                      </div>
                    </div>
                    <hr className={style.hrcontain} />
                    <div>
                      <p className={style.receipt}>Seller</p>
                      <div className="mt-2">
                        {tracksorders?.orderDetails?.sellerBusinessName}
                        {/* sellerBusinessName */}
                      </div>
                    </div>
                    <hr className={style.hrcontain} />
                    <div>
                      <p className={style.receipt}>Buyer</p>
                      <div className="mt-2">
                        {tracksorders?.orderDetails?.customerName}
                      </div>
                      <p>
                        <span>

                          {tracksorders?.orderDetails?.deliveryAddress[0]?.cityName}
                        </span>,
                        <span>
                          {tracksorders?.orderDetails?.deliveryAddress[0]?.stateName}
                        </span>,
                        <span>
                          {tracksorders?.orderDetails?.deliveryAddress[0]?.landMark}

                        </span>,

                        <span>

                          {tracksorders?.orderDetails?.deliveryAddress[0]?.pinCode}

                        </span>

                      </p>
                    </div>
                    <hr className={style.hrcontain} />
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={style.emptyboxrightcolor}>
        </div>
        <div className={style.emptyboxleftcolor}>
        </div>
        <div className={style.emptyboxleftcolor1}>
        </div>
        <div className={style.emptyboxleftcolor2}>
        </div>
        <div className={style.emptyboxleftcolor3}>
        </div>
        <div className={style.emptyboxleftcolor4}>
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
            <div className={style.modelremove}>

              <div className={style.insidemodelpopup}>
                <div className={style.removetexts}>
                  Cancel Order
                </div>
                <div onClick={handleClose}>
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </div>
              </div>
              <div className={style.removeitemname}>

                Are you sure want to remove this item from your Cancel Order ?
              </div>
              <div className={style.buttonsections}>

                <button className={style.buttonscancel} onClick={handleClose}>NO</button>
                <button className={style.buttonsremove} onClick={() => handleDelete(deleteid)}>YES,I'M SURE</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>


      </>
    </>
  );
}

export default Ordertarcking;
