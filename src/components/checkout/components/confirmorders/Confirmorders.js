import React, { useEffect, useState, useContext, Fragment } from 'react'
import styles from './styles/ConfirmOrders.module.scss';
import { ContextStore } from '../../../../Redux/store/Contextstore';
import { useRouter } from 'next/router';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import coupons from '../../../../assests/cart-logos/coupincodeimage.png';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import cartempty from '../../../../assests/cart-logos/emptycartlogo.png';
import { postShipmentcreate } from '../../../../services/shipping-service/shipping-service';
import LoaderLogo from '../../../loaderlogo/LoaderLogo';
import { couponApply, MyCouponList } from '../../../../services/mycoupon-service/mycoupon-service';
import moment from 'moment';
function Confirmorders({ name, totalPrice, step, setStep, setCouponName, addressid, setShippingAmount, overallamount, setDiscountAmount,
  discountamount
}) {
  const { state, dispatch } = useContext(ContextStore);
  const [carts, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deleteid, setDeleteid] = useState("");
  const [loader, setLoader] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };


  const [finalorders, setFinalOrders] = useState([]);
  const [coupnslist, setCouponsList] = useState([]);




  const history = useRouter()
  const { cart } = state;
  const deliverOrderConfirm = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep(step + 1);
    }, 1000)
  }


  const shopping = () => {
    history.push("/")
  }

  const handlePush = (path) => {
    history.push(`/product/${path}`)
  }


  const handleDelete = (e) => {
    setTimeout(() => {
      handleClose();
      dispatch({ type: "CART_REMOVE", payload: e })
    }, 500);
  }
  const handleAdd = (index1, item) => {
    const CARTS = carts?.map((carts, index) => {
      return index1 === index ? { ...carts, quantity: item?.quantity + 1 } : carts
    })
    setCart(CARTS);
    dispatch({
      type: "ADD_CART",
      payload: CARTS
    })
  }
  const handleRemove = (index1, item) => {
    const CARTS = carts?.map((carts, index) => {
      return index1 === index ? { ...carts, quantity: item?.quantity > 1 ? item?.quantity - 1 : 1 } : carts
    })
    setCart(CARTS);
    dispatch({
      type: "REMOVE_CART",
      payload: CARTS
    })
  }

  useEffect(() => {
    setCart(state?.cart?.cartData);
    ShippingOrders();

    MyCouponList().then((res) => {
      setCouponsList(res?.data?.results);
    }).catch((err) => {
      console.log(err);
    })

  }, [deleteid]);





  const [couponscode, setCouponcode] = useState("");
  const [couponerror, setCouponerror] = useState(false);

  const [couponsectionloading, setCouponcodeloading] = useState(false);

  const couponcodeSubmit = (e) => {
    e.preventDefault();
    if (couponscode?.length === 0) {
      setCouponerror(true);
    }
    if (couponscode) {
      // setCouponcodetrue(true);
      setCouponName(couponscode);
      // setCouponerror(false);


      const couponnames = {
        couponCode: couponscode,
        orderAmount: overallamount

      }

      setCouponcodeloading(true);



      couponApply(couponnames).then((res) => {
        console.log(res, "data")
        setDiscountAmount(res);

        setTimeout(() => {
          setCouponcodeloading(false);
        }, 400)
      }).catch((err) => {
        console.log(err);
        setCouponcodeloading(false);
      })
    }
  }


  const Closecoupons = () => {
    setCouponcode("");
    setCouponcodetrue(false);
  }



  const CallCount = (items) => {
    if (items?.quantity == Number(items?.quantityLeft) - Number(1)) {
      toast.warning(` We're sorry! Only ${items?.quantityLeft} unit(s) allowed in Quantity`,
        {
          position: "top-center",
          autoClose: 3300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      )
    }

  }




  const ShippingOrders = () => {


    const pushShippingCart = [];

    state?.cart?.cartData.map((item, index) => {
      const filtercart = {
        productId: item?.id,
        quantity: item?.quantity,
        variations: item?.variations
      }
      pushShippingCart.push(filtercart)
    })

    const sendShippData = {
      products: pushShippingCart,
      addressId: addressid
    }
    setLoader(true);
    postShipmentcreate(sendShippData).then((res) => {
      setFinalOrders(res);
      setShippingAmount(res);
      setTimeout(() => {
        setLoader(false);
      }, 800)
    }).catch((err) => {
      console.log(err);
      setLoader(false);
      toast.error("Order Something Error..!",
        {
          position: "top-center",
          autoClose: 3300,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    })
  }


  const ViewCoupons = () => {
    window.open('https://www.womeyn.cdp360.in/coupons');
  }

  const copylink = (codes) => {
    toast.success("Coupon Code Copied",
      {
        position: "top-center",
        autoClose: 3300,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      }
    );
    navigator.clipboard.writeText(codes)
  }

  return (

    <Fragment>
      <div className={styles.cartsection}>
        <div className={styles.leftcartsection}>


          {loader ? <>
            <LoaderLogo />
          </> : <>

            {finalorders?.length > 0 ? <>
              <div className="">
                {finalorders?.length > 0 ? <div className={styles.bordersectioncart}>
                  {finalorders?.map((item, index) => {
                    return (
                      <>
                        <div className={styles.cartlistsection} key={index}>

                          <div className={styles.cartimagesection}>
                            <div className={styles.deliverycharge}>
                              {item?.deliveryCharge ? <>
                                Delivery Charge : A$ {item?.deliveryCharge}
                              </> : <>FREE Delivery</>}
                            </div>
                            <div>
                              <img
                                className={styles.editprofilesection}
                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.imageName}`}
                                alt="profile-pic"
                              />
                            </div>
                            <div>
                              <div className="carttext">{item?.productName}
                              </div>
                              <div>
                                <span className="saleprice"> A${item?.salePrice}</span> <span>
                                  {item?.offerPercentag == 0 ? <span></span> : <>
                                    <del className="dim">
                                      <span>{item?.actualPrice}</span>
                                    </del>
                                  </>}
                                  {item?.offerPercentag == 0 ? <></> : <span className="offersection"> ( {item?.offerPercentag} off )</span>}
                                </span>
                              </div>
                              <div>
                                {item?.variations?.map((items, index) => {
                                  return (
                                    <div >
                                      <span className="sizecolor">{items?.name} : {items?.value}</span>
                                    </div>
                                  )
                                })}
                              </div>


                            </div>
                          </div>
                          {/* <div className={styles.cartaddsection}>
                        <div >
                          <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                            handleRemove(index, item)
                          } />
                        </div>
                        <div>{item?.quantity}</div>
                        <div>
                          <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                            handleAdd(index, item)
                          } />
                        </div>
                      </div> */}

                          <div className={styles.cartaddsection}>
                            {/* <div >
                          {item?.quantity == 1 ? <>
                            <Image src={minusicon} alt="no image" className={styles.carticonsadds}
                              onClick={() =>
                              handleRemove(index, item)
                            }
                            />
                          </> : <>
                            <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                              handleRemove(index, item)
                            } />
                          </>}
                        </div> */}
                            {/* <div className="text-center">
                            <div className="sizecolor">
                              Quantity
                            </div>
                            <div className={styles.quntitytext}>
                              {item?.quantity}
                            </div>

                          </div> */}
                            {/* <div>

                          {item?.quantity == item?.quantityLeft ? <>
                            <Image src={addicon} alt="no image" className={styles.carticonsadds}
                            onClick={() =>
                              handleAdd(index, item)
                            } 
                            />
                          </> : <>
                            <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() => {
                              handleAdd(index, item)
                              CallCount(item)
                            }

                            } />
                          </>}


                        </div> */}
                          </div>
                          <div className={styles.cartremovesection} onClick={() => handleShow(item)}>
                            {/* <div>
                            <Image src={delteteicon} alt="no image" className={styles.deleteicons} />
                          </div>
                          <div>
                            Remove
                          </div> */}


                            <div className="sizecolor">
                              Quantity
                            </div>
                            <div className={styles.quntitytext}>
                              {item?.quantity}
                            </div>

                          </div>
                        </div>
                      </>
                    )
                  })}
                </div> : <>
                  <div className={styles.cartemptysection}>

                    <div>
                      <Image src={cartempty} alt="no image" className={styles.cartimage} />
                    </div>

                    <div className={styles.yourcarttexts}>

                      No Item to checkout please explore

                    </div>

                    <div className="mt-4 mb-5">
                      <button className={styles.shopbutton} onClick={shopping}>Shop Now</button>
                    </div>
                  </div>

                  {/* <div className={styles.cartemptysection}>

                  <div>
                    <Image src={cartempty} alt="no image" className={styles.cartimage} />
                  </div>

                  <div className={styles.yourcarttexts}>

                    No Item to checkout please explore

                  </div>
                 
                  <div className="mt-4 mb-5">
                    <button className={styles.shopbutton} onClick={shopping}>Shop Now</button>
                  </div>
                </div> */}


                </>}
              </div>
            </> : <>

              {/* <div className="d-none d-lg-block">
              {cart?.cartData?.length > 0 ? <div className={styles.bordersectioncart}>
                {cart?.cartData?.map((item, index) => {
                  return (
                    <>
                      <div className={styles.cartlistsection} key={index}>
                        <div className={styles.cartimagesection}>
                          <div>
                            <img
                              className={styles.editprofilesection}
                              src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                              alt="profile-pic"
                            />
                          </div>
                          <div>
                            <div className="carttext">{item?.productName}
                            </div>
                            <div>
                              <span className="saleprice"> A${item?.salePrice}</span> <span>
                                {item?.offerPercentag == 0 ? <span></span> : <>
                                  <del className="dim">
                                    <span>{item?.actualPrice}</span>
                                  </del>
                                </>}
                                {item?.offerPercentag == 0 ? <></> : <span className="offersection"> ( {item?.offerPercentag} off )</span>}
                              </span>
                            </div>
                            <div>
                              {item?.variations?.map((items, index) => {
                                return (
                                  <div >
                                    <span className="sizecolor">{items?.name} : {items?.value}</span>
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        </div>
                        <div className={styles.cartaddsection}>
                          <div >
                            <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                              handleRemove(index, item)
                            } />
                          </div>
                          <div>{item?.quantity}</div>
                          <div>
                            <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                              handleAdd(index, item)
                            } />
                          </div>
                        </div>

                        <div className={styles.cartaddsection}>
                          <div >
                            {item?.quantity == 1 ? <>
                              <Image src={minusicon} alt="no image" className={styles.carticonsadds}
                                onClick={() =>
                                  handleRemove(index, item)
                                }
                              />
                            </> : <>
                              <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                                handleRemove(index, item)
                              } />
                            </>}
                          </div>
                          <div className="text-center">
                            <div className="sizecolor">
                              Quantity
                            </div>
                            <div className={styles.quntitytext}>
                              {item?.quantity}
                            </div>

                          </div>
                          <div>

                            {item?.quantity == item?.quantityLeft ? <>
                              <Image src={addicon} alt="no image" className={styles.carticonsadds}
                                onClick={() =>
                                  handleAdd(index, item)
                                }
                              />
                            </> : <>
                              <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() => {
                                handleAdd(index, item)
                                CallCount(item)
                              }

                              } />
                            </>}


                          </div>
                        </div>
                        <div className={styles.cartremovesection} onClick={() => handleShow(item)}>
                          <div>
                            <Image src={delteteicon} alt="no image" className={styles.deleteicons} />
                          </div>
                          <div>
                            Remove
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div> : <>
                <div className={styles.cartemptysection}>

                  <div>
                    <Image src={cartempty} alt="no image" className={styles.cartimage} />
                  </div>

                  <div className={styles.yourcarttexts}>

                    No Item to checkout please explore

                  </div>

                  <div className="mt-4 mb-5">
                    <button className={styles.shopbutton} onClick={shopping}>Shop Now</button>
                  </div>
                </div>
              </>}
            </div> */}

              {/* <div className="d-block d-lg-none">

              {cart?.cartData?.length > 0 ? <div className={styles.bordersectioncart}>
                {cart?.cartData?.map((item, index) => {
                  return (
                    <>
                      <div className={styles.cartlistsection} key={index}>
                        <div className={styles.cartimagesection}>
                          <div>
                            <img
                              className={styles.editprofilesection}
                              src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                              alt="profile-pic"
                            />
                          </div>
                          <div>
                            <div>{item?.productName}
                            </div>
                            <div>
                              A${item?.salePrice} <span>
                                {item?.offerPercentag == 0 ? <span></span> : <>
                                  <del>
                                    <span>{item?.actualPrice}</span>
                                  </del>
                                </>}
                                {item?.offerPercentag == 0 ? <></> : <> {item?.offerPercentag} off</>}
                              </span>
                            </div>
                            <div>
                              {item?.productDescription}
                            </div>
                          </div>
                        </div>
                        <div className={styles.mobilecartresponsive}>


                          <div className={styles.cartaddsection}>
                            <div >
                            {item?.quantity == 1 ? <>
                              <Image src={minusicon} alt="no image" className={styles.carticonsadds}
                                onClick={() =>
                                handleRemove(index, item)
                              }
                              />
                            </> : <>
                              <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                                handleRemove(index, item)
                              } />
                            </>}
                          </div>
                            <div >{item?.quantity}</div>
                            <div>

                            {item?.quantity == item?.quantityLeft ? <>
                              <Image src={addicon} alt="no image" className={styles.carticonsadds}
                              onClick={() =>
                                handleAdd(index, item)
                              } 
                              />
                            </> : <>
                              <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() => {
                                handleAdd(index, item)
                                CallCount(item)
                              }

                              } />
                            </>}


                          </div>
                          </div>

                          <div className={styles.cartaddsection}>
                          <div>
                            <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                              handleRemove(index, item)
                            } />
                          </div>
                          <div>{item?.quantity}</div>
                          <div >
                            <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                              handleAdd(index, item)
                            } />
                          </div>
                        </div>
                          <div className={styles.cartremovesection} onClick={() => handleShow(item)}>
                            <div>
                              <Image src={delteteicon} alt="no image" className={styles.deleteicons} />
                            </div>
                            <div className="d-none d-md-block">
                              Remove
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )
                })}
              </div> : <>
                <div className={styles.cartemptysection}>
                  Cart Is Empty. <span className={styles.shoppingcartempty} onClick={shopping}>Go Shopping</span>
                </div>
              </>}


            </div> */}
            </>
            }


            {/* <div className="mt-3 mb-2">
  <div className={styles.viewcouponslist} onClick={ViewCoupons}>View Coupons</div>
</div> */}

{coupnslist?.length===0 ?null:<div className="mt-3">
  <div className={styles.couponsectionsplit}>
                <div>
                  <input type="text" placeHolder="Enter Coupon Code" className={styles.couponform} name={couponscode} value={couponscode} onChange={(e) => setCouponcode(e.target.value)} />
                </div>

                <div>
                  <button className={styles.applycoupons} onClick={couponcodeSubmit}>




                    {couponsectionloading ? <div className="d-flex gap-2 align-items-center justify-content-center">

                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="ms-3">Loading...</span>
                    </div> : <>
                      Apply
                    </>}
                  </button>
                </div>
              </div>
              <div className="mt-2">
                {couponerror && couponscode?.length <= 0 ? <span className="active">Coupon Code field is Required</span> : <></>}
              </div>



              {couponsectionloading ? <></> : <>
                {discountamount?.message ? <>
                  <span className="text-danger mt-2 mb-3">
                    {discountamount?.message}
                  </span>
                </> : <div>

                  {discountamount?.result ? <div className="mt-3">
                    <div className={styles.couponcreatedsection}>
                      <div className={styles.insidecouponsdeletesection}>
                        <div className={styles.iconandcontentsection}>
                          <div>
                            <Image src={coupons} alt="no image" className={styles.couponimage} />
                          </div>
                          <div>
                            <div className={styles.couponname}>
                              A${discountamount?.result} Saved! With applied coupon
                            </div>

                          </div>
                        </div>

                      </div>
                    </div>
                  </div> : null}
                </div>}

              </>}

</div>}

            <div className='mt-4'>

            






              {finalorders?.length > 0 &&

                <div className="mt-4">
                  <button className={styles.continuebutton} onClick={deliverOrderConfirm}>

                    {loading ? <>

                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="ms-3">Loading...</span>
                    </> : <>
                      Continue
                    </>}
                  </button>
                </div>
              }


            </div>



          </>}


          {coupnslist?.length===0?null:
          
          <div className="mt-5">
          <h5>Coupons</h5>


          <div className={styles.couponlistorders}>


            <div className={styles.approvalstatuscoupon}>
              {coupnslist?.map((item, index) => {
                return (






                  <div className={styles.boxcoupons}>
                    <div className={styles.leftcoupons}>
                      <div className={styles.couponsOfferName}>{item.title}</div>
                      <div className={styles.couponsOfferNames}>{item.couponCode}</div>
                      <div className={styles.couponsSubContent}>{item.couponDescription}</div>
                    </div>
                    <div className={styles.rightcouons}>
                      <div className={styles.couponsValidDate}>
                        Valid {moment(item?.endDate).format("MMM Do YY",)}
                      </div>

                      <div onClick={() => copylink(item.couponCode)} className={styles.couponcodecopy}>
                        <ion-icon name="copy-outline" size="small" ></ion-icon> <span className={styles.copycodecolor}>Copy</span>
                      </div>
                    </div>

                  </div>

                )
              })}
            </div>



          </div>
        </div>
          
          }

        




        </div>



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
                  Remove Item
                </div>
                <div onClick={handleClose}>
                  <ion-icon name="close-outline" size="large"></ion-icon>
                </div>
              </div>
              <div className={styles.removeitemname}>
                Are you sure want to remove this item?
              </div>
              <div className={styles.buttonsections}>

                <button className={styles.buttonscancel} onClick={handleClose}>Cancel</button>
                <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>Remove</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>
      </>
    </Fragment>
  )
}

export default Confirmorders