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

function Confirmorders({ name, totalPrice, step, setStep, setCouponName }) {
  const { state, dispatch } = useContext(ContextStore);
  const [carts, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [loading,setLoading]=useState(false);
  const [deleteid, setDeleteid] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };

  const history = useRouter()
  const { cart } = state;
  const deliverOrderConfirm = () => {
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    setStep(step + 1);
    },1000)
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
      setCouponcodetrue(true);
      setCouponName(couponscode);
      setCouponerror(false);
    }
  }


  const Closecoupons = () => {
    setCouponcode("");
    setCouponcodetrue(false);
  }


  return (
    // <div className={styles.mainconfirmorders}>
    //     <div className={styles.insideconfirmorrders}>
    //         {cart?.cartData?.length > 0 ? <>
    //             {cart?.cartData?.map((item, index) => {
    //                 return (
    //                     <div className={styles.splitorderconfirm} >
    //                         <div className={styles.boxsectionimage} onClick={()=>handlePush(item?.productSlugName)}>
    //                             <img
    //                                 className={styles.editprofilesection}
    //                                 src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
    //                                 alt="profile-pic"
    //                             />
    //                         </div>
    //                         <div>
    //                             <div className={styles.productNamesize} onClick={()=>handlePush(item?.productSlugName)}>
    //                                 {item?.productName}
    //                             </div>
    //                             <div>
    //                                 Rs.{item?.salePrice} <span>
    //                                     {item?.offerPercentag == 0 ? <span></span> : <>
    //                                         <del>
    //                                             <span>{item?.actualPrice}</span>
    //                                         </del>
    //                                     </>}
    //                                     {item?.offerPercentag == 0 ? <></> : <> {item?.offerPercentag} off</>}
    //                                 </span>
    //                             </div>
    //                             <div>
    //                                 {item?.productDescription}
    //                             </div>
    //                         </div>

    //                     </div>

    //                 )
    //             })}
    //             <div className="mt-4">
    //                 <button className={styles.continuebutton} onClick={deliverOrderConfirm}>Continue</button>
    //             </div>
    //         </> : <>
    //         </>}
    //     </div>
    // </div>


    <Fragment>



      <div className={styles.cartsection}>
        <div className={styles.leftcartsection}>
          <div className="d-none d-lg-block">
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
                            <span className="saleprice"> Rs.{item?.salePrice}</span> <span>
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

                  Your cart is empty!

                </div>
                <div className={styles.yourcarttexts}>
                  Please add your products to the cart
                </div>
                <div className="mt-4 mb-5">
                  <button className={styles.shopbutton} onClick={shopping}>Shop Now</button>
                </div>
              </div>
            </>}
          </div>

          <div className="d-block d-lg-none">

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
                            Rs.{item?.salePrice} <span>
                              {item?.offerPercentag == 0 ? <span></span> : <>
                                <del>
                                  <span>{item?.actualPrice}</span>
                                </del>
                              </>}
                              {item?.offerPercentag == 0 ? <></> : <> {item?.offerPercentag} off</>}
                            </span>
                          </div>
                          <div>
                            {/* {item?.productDescription} */}
                          </div>
                        </div>
                      </div>
                      <div className={styles.mobilecartresponsive}>

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


          </div>
        </div>



      </div>


      <div>


        {couponsectiontrue ? <>
          <div className={styles.couponcreatedsection}>
            <div className={styles.insidecouponsdeletesection}>
              <div className={styles.iconandcontentsection}>
                <div>
                  <Image src={coupons} alt="no image" className={styles.couponimage} />
                </div>
                <div>
                  <div className={styles.couponname}>
                    Earlybird
                  </div>
                  <div className={styles.offercoupon}>
                    5% savings with this promo code
                    applied on this booking
                  </div>
                </div>
              </div>
              <div className={styles.deleteiconsection} onClick={Closecoupons}>
                <ion-icon name="close-outline" className={styles.crs}></ion-icon>
              </div>
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
        <div className="mt-4">
          <button className={styles.continuebutton} onClick={deliverOrderConfirm}>
            
            
            


            {loading?<>
           
           <Spinner
         as="span"
         animation="border"
         size="sm"
         role="status"
         aria-hidden="true"
       />
       <span className="ms-3">Loading...</span>
          </>:<>
          Continue
          </>}
            </button>
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