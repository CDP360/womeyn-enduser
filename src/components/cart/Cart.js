import React, { Fragment, useContext, useEffect, useState } from 'react'
import styles from './styles/Cart.module.scss';
import delteteicon from '../../assests/cart-logos/deleteicons.png';
import addicon from '../../assests/cart-logos/addcart.png';
import minusicon from '../../assests/cart-logos/minuscart.png';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { ContextStore } from './../../Redux/store/Contextstore';
import cartempty from '../../assests/cart-logos/emptycartlogo.png';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';

function Cart() {
  const [show, setShow] = useState(false);
  const [deleteid, setDeleteid] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true)
    setDeleteid(id);
  };
  const { state, dispatch } = useContext(ContextStore);
  const { cart } = state;
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [tokes, setTokens] = useState("");
  const [carts, setCart] = useState([]);
  const [totalvalue, setTotalValue] = useState(0);
  const TotalPrice = () => {
    let prices = 0;
    cart?.cartData?.map((item) => {
      prices = Number(item.salePrice) + prices;
    });
    setPrice(prices);
  }
  useEffect(() => {
    const checktoken = localStorage.getItem("userToken");
    setTokens(JSON.parse(checktoken));
    TotalPrice();
  }, [tokes, price, totalvalue]);
  const cartpricevaues = state?.cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0)
  const values = Math.max(
    0,
    Math.round(
      cartpricevaues - (cartpricevaues) * 10 / 100
    )
  );
  const deliveryChargeAmount = state?.cart?.cartData?.reduce((acc, current) => acc + current.deliverycharge, 0)
  const DeliveryChargeAmount = Math.max(
    0,
    Math.round(
      deliveryChargeAmount - (deliveryChargeAmount) * 10 / 100
    )
  );
  const Sample = cartpricevaues - values;
  const chargeDelivery = deliveryChargeAmount - DeliveryChargeAmount;

  const AllchargeCount = Number(cartpricevaues) + Number(deliveryChargeAmount);

  const OverallTotalPrice = Number(Sample) + Number(chargeDelivery);

  useEffect(() => {
    setCart(state?.cart?.cartData);


   

  }, [deleteid, totalvalue])
  const shopping = () => {
    router.push("/")
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
  const handleLoginUser = () => {
    const PathQuery = router?.asPath
    localStorage.setItem("whish", JSON.stringify(PathQuery));
    router.push(`/login?redirect=/cart`)
  }


  const CartNavigateProductView=(productSlugName)=>{
    router.push(`/product/${productSlugName}`)
  }


  const CallCount=(items)=>{
    if(items?.quantity==Number(items?.quantityLeft)-Number(1))
    {
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

  return (
    <Fragment>
      <div className='mainsection'>
        <div className="insidesection">
          <div className={styles.cartsectiontexts}>
            Cart
          </div>
          <div className={styles.cartsection}>
            <div className={styles.leftcartsection}>
              <div className="d-none d-lg-block">
                {cart?.cartData?.length > 0 ? <div className={styles.bordersectioncart}>
                  {cart?.cartData?.map((item, index) => {
                    return (
                      <>

                        <div className={styles.cartlistsection} key={index}>

                          <div className={styles.cartimagesection}>
                            <div className={styles.deliverycharge}>

                              {item?.deliverycharge ? <>
                                Delivery Charge : A$ {item?.deliverycharge}
                              </> : <>FREE Delivery</>}
                            </div>
                            <div onClick={()=>CartNavigateProductView(item?.productSlugName)}>
                              <img
                                className={styles.editprofilesection}
                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                                alt="profile-pic"
                              />
                            </div>
                            <div>
                              <div className="carttext"  onClick={()=>CartNavigateProductView(item?.productSlugName)}>{item?.productName}
                              </div>
                              <div>
                                <span className="saleprice"> A${item?.salePrice}</span> <span>
                                  {item?.offerPercentag == 0 ? <span></span> : <>
                                    <del className="dim">
                                      <span >{item?.actualPrice}</span>
                                    </del>
                                  </>}
                                  {item?.offerPercentag == 0 ? <></> : <span className="offersection"> ( {item?.offerPercentag} off )</span>}
                                </span>
                              </div>
                              <div className="mt-2">
                                {/* {item?.productDescription} */}
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
                            {item?.quantity==1 ?<>
                                  <Image src={minusicon} alt="no image" className={styles.carticonsadds} 
                                //   onClick={() =>
                                //   handleRemove(index, item)
                                // }
                                 />
                                </>:<>
                                <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                                  handleRemove(index, item)
                                } />
                                </>}
                            </div>
                            <div >{item?.quantity}</div>
                            <div>

                            {item?.quantity==item?.quantityLeft ?<>
                              <Image src={addicon} alt="no image" className={styles.carticonsadds} 
                              // onClick={() =>
                              //   handleAdd(index, item)
                              // } 
                              />
                                </>:<>
                                <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() =>{
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
                              <div className="carttext">{item?.productName}
                              </div>
                              <div>
                                <span className="saleprice"> Rs.{item?.salePrice}</span> <span>
                                  {item?.offerPercentag == 0 ? <span></span> : <>
                                    <del className="dim">
                                      <span>{item?.actualPrice}</span>
                                    </del>
                                  </>}
                                  {item?.offerPercentag == 0 ? <></> : <span className="offersection">( {item?.offerPercentag} off )</span>}
                                </span>
                              </div>
                              <div>
                                {item?.variations?.map((items, index) => {
                                  return (
                                    <div >
                                      <span className="sizecolor">{items?.name}</span> : {items?.value}
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobilecartresponsive}>

                            <div className={styles.cartaddsection}>
                              <div>
                                {item?.quantity==1 ?<>
                                  <Image src={minusicon} alt="no image" className={styles.carticonsadds} 
                                //   onClick={() =>
                                //   handleRemove(index, item)
                                // }
                                 />
                                </>:<>
                                <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() =>
                                  handleRemove(index, item)
                                } />
                                </>}
                              
                              </div>
                              <div>{item?.quantity}</div>
                              <div >
                              {item?.quantity==5 ?<>
                              <Image src={addicon} alt="no image" className={styles.carticonsadds} 
                              // onClick={() =>
                              //   handleAdd(index, item)
                              // } 
                              />
                                </>:<>
                                <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() =>{
                                    handleAdd(index, item)
                                    CallCount(item?.quantity)
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
            </div>
            {cart?.cartData?.length > 0 ? <div className={styles.rightcartsection}>
              <div className={styles.insiderigthcartsection}>
                <div className={styles.pricetexts}>
                  Price details
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.cartdetailsection}>
                  <div className={styles.splitcartsections}>
                    <div>
                      Quantity
                    </div>
                    <div className={styles.textprice}>
                      {cart?.cartData?.reduce((acc, current) => acc + current.quantity, 0)}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Price</div>
                    <div className={styles.textprice}>
                      A${cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0)}
                    </div>
                  </div>
                  {/* {cart?.cartData?.offerPercentag === 0 ? <></> : <div className={styles.splitcartsections}>
                    <div>
                      Discount</div>
                    <div className={styles.textprice}>
                      ${cart?.cartData?.reduce((acc, current) => acc + Number(current.salePrice - current.actualPrice), 0)}
                    </div>
                  </div>} */}
                  {/* <div className={styles.splitcartsections}>
                    <div>
                      Delivery Charges</div>
                    <div className={styles.textprice}>
                      A${deliveryChargeAmount}
                    </div>
                  </div> */}
                  <div className={styles.splitcartsections}>
                    <div>
                      GST</div>
                    <div className={styles.textprice}>
                      A${Number(Sample) 
                      // + Number(chargeDelivery)
                      }
                    </div>
                  </div>
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.splitcartsections}>
                  <div className={styles.pricetextss}>
                    Total Payable
                    {/* {(Number(Sample))+(Number(chargeDelivery))} */}
                  </div>
                  <div className={styles.textprices}>
                    A${Number(AllchargeCount) + Number(OverallTotalPrice)}
                    {/* A${cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0)} */}
                  </div>
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className="mt-3 mb-3">
                  {tokes ?
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Place Order</Button> :
                    <Button className={styles.checkoutbutton} onClick={handleLoginUser}>Login</Button>
                  }
                </div>
              </div>
            </div> : <></>}
          </div>
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

                Are you sure want to remove this item from your cart?
              </div>
              <div className={styles.buttonsections}>

                <button className={styles.buttonscancel} onClick={handleClose}>Cancel</button>
                <button className={styles.buttonsremove} onClick={() => handleDelete(deleteid)}>Remove</button>
              </div>
            </div>
          </Modal.Body>

        </Modal>
      </>
      <div className={styles.emptyboxrightcolor}>
                </div>
                <div className={styles.emptyboxleftcolor}>
                </div>
                <div className={styles.emptyboxleftcolor1}>
                </div>
                <div className={styles.emptyboxleftcolor2}>
                </div>
                <div className={styles.emptyboxleftcolor3}>
                </div>
                <div className={styles.emptyboxleftcolor4}>
                </div>
    </Fragment>
  )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });





