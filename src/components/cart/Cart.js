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
function Cart() {
  const { state, dispatch } = useContext(ContextStore);
  const { cart } = state;
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [tokes, setTokens] = useState("");
  const [carts, setCart] = useState([]);
  const TotalPrice = () => {
    let prices = 0;
    cart?.cartData?.map((item) => {
      prices = Number(item.salePrice) + prices;
    });
    setPrice(prices);
  }
  useEffect(() => {
    const checktoken = localStorage.getItem("womenUserToken");
    setTokens(JSON.parse(checktoken));
    TotalPrice();
  }, [tokes, price])
  useEffect(() => {
    setCart(state?.cart?.cartData);
  }, [])
  const shopping = () => {
    router.push("/womenpreneurs")
  }
  const handleDelete = (e) => {
    dispatch({ type: "CART_REMOVE", payload: e })

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
    localStorage.setItem("productwhishlist", JSON.stringify(PathQuery));
    router.push(`/login?redirect=/cart`)
  }

  console.log(cart, "res1")
  return (
    <Fragment>
      <div className='mainsection'>
        <div className="insidesection">
          <div className={styles.cartsectiontexts}>
            Carts
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
                                {item?.productDescription}
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
                          <div className={styles.cartremovesection} onClick={() => handleDelete(item)}>
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
                                {item?.productDescription}
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
                            <div className={styles.cartremovesection} onClick={() => handleDelete(item)}>
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
                    Cart Is Empty. <span className={styles.shoppingcartempty} onClick={shopping}>Go Shopping</span>
                  </div>
                </>}

              </div>
            </div>
            <div className={styles.rightcartsection}>
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
                      ${cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0)}
                    </div>
                  </div>
                  {cart?.cartData?.offerPercentag === 0 ? <></> : <div className={styles.splitcartsections}>
                    <div>
                      Discount</div>
                    <div className={styles.textprice}>
                      ${cart?.cartData?.reduce((acc, current) => acc + Number(current.salePrice - current.actualPrice), 0)}
                    </div>
                  </div>}
                  <div className={styles.splitcartsections}>
                    <div>
                      Delivery Charges</div>
                    <div className={styles.textprice}>
                      $100
                    </div>
                  </div>
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.splitcartsections}>
                  <div className={styles.pricetexts}>
                    Total Payable</div>
                  <div className={styles.textprices}>
                    ${cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0)}
                  </div>
                </div>

                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className="mt-3 mb-3">
                  {tokes ?
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Place Order</Button> :
                    <Button className={styles.checkoutbutton} onClick={handleLoginUser}>Place Order</Button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });





