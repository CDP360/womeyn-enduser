import React, { useEffect, useState, useContext, Fragment } from 'react'
import styles from './styles/ConfirmOrders.module.scss';
import { ContextStore } from '../../../../Redux/store/Contextstore';
import { useRouter } from 'next/router';
import addicon from '../../../../assests/cart-logos/addcart.png';
import minusicon from '../../../../assests/cart-logos/minuscart.png';
import delteteicon from '../../../../assests/cart-logos/deleteicons.png';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';
import coupons from '../../../../assests/cart-logos/couponicon.png';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';


import cartempty from '../../../../assests/cart-logos/emptycartlogo.png';
import { postShipmentcreate } from '../../../../services/shipping-service/shipping-service';
import LoaderLogo from '../../../loaderlogo/LoaderLogo';
import { couponApply } from '../../../../services/mycoupon-service/mycoupon-service';





function Confirmorders({ name, totalPrice, step, setStep, setCouponName, addressid, setShippingAmount, overallamount,setDiscountAmount ,
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

  }, [deleteid]);





  const [couponscode, setCouponcode] = useState("");
  const [couponerror, setCouponerror] = useState(false);

  const [couponsectiontrue, setCouponcodetrue] = useState(false);

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



      couponApply(couponnames).then((res) => {
        console.log(res, "data")
        setDiscountAmount(res);
      }).catch((err) => {
        console.log(err);
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

  console.log(finalorders, "finalorders")

  return (

    <Fragment>
      <div className={styles.cartsection}>
        <div className={styles.leftcartsection}>


          {loader ? <>
            <LoaderLogo />
          </> : <>

            {finalorders?.length > 0 ? <>
              <div className="d-none d-lg-block">
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

                            <div className="text-center mt-4">
                              <div className="sizecolor">
                                Quantity
                              </div>
                              <div className={styles.quntitytext}>
                                {item?.quantity}
                              </div>

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


            <div className='mt-5'>

              {discountamount?.message && <>
                <div className={styles.couponsectionsplit}>
                  <div>
                    <input type="text" placeHolder="EARLY BIRD" className={styles.couponform} name={couponscode} value={couponscode} onChange={(e) => setCouponcode(e.target.value)} />
                  </div>

                  <div>
                    <button className={styles.applycoupons} onClick={couponcodeSubmit}>Apply</button>
                  </div>
                </div>
                <div>
                  {couponerror && couponscode?.length <= 0 ? <span className="active">Coupon field is reuired!!!</span> : <></>}
                </div>
              </>}
              {discountamount?.message?<>
              <span className="text-danger">
                {discountamount?.message}
              </span>
              </>:<>
              
              {discountamount?.result ? <>
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
                        {/* <div className={styles.offercoupon}>
                          5% savings with this promo code
                          applied on this booking
                        </div> */}
                      </div>
                    </div>
                    {/* <div className={styles.deleteiconsection} onClick={Closecoupons}>
                      <ion-icon name="close-outline" className={styles.crs}></ion-icon>
                    </div> */}
                  </div>
                </div>
              </> : <>
                <div className={styles.couponsectionsplit}>
                  <div>
                    <input type="text" placeHolder="EARLY BIRD" className={styles.couponform} name={couponscode} value={couponscode} onChange={(e) => setCouponcode(e.target.value)} />
                  </div>

                  <div>
                    <button className={styles.applycoupons} onClick={couponcodeSubmit}>Apply</button>
                  </div>
                </div>
                <div>
                  {couponerror && couponscode?.length <= 0 ? <span className="active">Coupon field is reuired!!!</span> : <></>}
                </div>
              </>}
              </>}


             


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