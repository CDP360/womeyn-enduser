import React, { Fragment, useContext, useEffect, useState } from 'react'
import { decrement, deleteProduct, increment } from "../../Redux/actions";
import { cartContext } from './../../Redux/store/CartContext';
import { useDispatch, useSelector } from 'react-redux';
import { CartActionDelete, Cartactions } from '../../Redux/actions/cart/Cartdata';
import styles from './styles/Cart.module.scss';
import usepromo from '../../assests/womeynlogos/cartprice.png';
import delteteicon from '../../assests/cart-logos/deleteicons.png';
import addicon from '../../assests/cart-logos/addcart.png';
import minusicon from '../../assests/cart-logos/minuscart.png';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { ContextStore } from '../../Redux/store/Contextstore';
function Cart() {
  // const { state, dispatch } = useContext(cart);
  const { shoppingCart, dispatch, qty, totalPrice } = useContext(cartContext);
  // const { cart } = state;
  const router = useRouter();
  // const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [deleteselect, setDeleteselect] = useState("");
  const [showlocal, setLocalData] = useState([]);
  const [count, setCount] = useState(0);
  const [tokes, setTokens] = useState("");
  // const state = useSelector((state) => state.cart.cartitems);
  const TotalPrice = () => {
    let prices = 0;
    shoppingCart?.map((item, index) => {
      prices = Number(item.salePrice) + prices;
    });
    setPrice(prices);
  }
  useEffect(() => {
    // setLocalData(state);
    const checktoken = localStorage.getItem("womenUserToken");
    setTokens(JSON.parse(checktoken));
    TotalPrice();
  }, [tokes, price])





  const shopping = () => {
    router.push("/womenpreneurs")
  }



  const handleDelete = (e) => {
    dispatch({ type: "CART_REMOVE", payload: e })
    console.log("io", e)
    // const value = e.target.value;
    // const checked = e.target.checked;
    // dispatch(CartActionDelete(e))
    // dispatch(Cartactions(showlocal));
  }

  const Handleadded = (item, id) => {
    const datas = {
      ...item,
      quantity: 1
    }
    dispatch({ type: "CART_QUANTITY_ADDED", payload: datas })
  }
  const handleChange = (e) => {
    // handleDelete(e);
    // const { name, checked } = e.target;
    // handleDelete(name);
    // if (name === "allselect") {
    //   let temp = showlocal.map((item) => {
    //     return { ...item, isChecked: checked }
    //   });
    //   setLocalData(temp);
    // } else {
    //   let checkvalue = showlocal.map(item => item.id === name ? { ...item, isChecked: checked } : item);
    //   setLocalData(checkvalue);
    // }
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setDeleteselect(value)
    }
    else {
      // setDeleteselect(deleteselect.filter((e) => e != value));
    }
  }








  return (
    <Fragment>


      <div className='mainsection'>
        <div className="insidesection">
          <div className={styles.cartsectiontexts}>
            Carts
          </div>
          <div className={styles.cartsection}>
            <div className={styles.leftcartsection}>
              <div className={styles.selectcartsection}>
                <div className={styles.sellectallsection}>
                  <input type="checkbox" name="allselect" onChange={handleChange} />
                  <div>
                    Select All
                  </div>
                </div>
                <div className={styles.removesection} onClick={handleDelete}>
                  Remove
                </div>

              </div>

              <div className="d-none d-lg-block">
                {shoppingCart?.length > 0 ? <div className={styles.bordersectioncart}>
                  {shoppingCart?.map((item, index) => {
                    return (
                      <>
                        <div className={styles.cartlistsection}>
                          <div className={styles.cartimagesection}>
                            <div className={"d-flex align-items-center justify-content-center"}>
                              <input type="checkbox" name={item?.name} value={item?.id} onChange={handleDelete} />
                            </div>
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
                                Rs.{item?.salePrice}
                              </div>
                              <div>
                                {item?.productDescription}
                              </div>
                            </div>
                          </div>
                          <div className={styles.cartaddsection}>
                            <div >
                              <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() => dispatch(decrement(item?.id))} />
                            </div>
                            <div>{item?.qty}</div>
                            <div>
                              <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() => dispatch(increment(item?.id))} />
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
                    Cart Is Empty. <span className={styles.shoppingcartempty} onClick={shopping}>Go Shopping</span>
                  </div>
                </>}
              </div>

              <div className="d-block d-lg-none">

                {shoppingCart.length > 0 ? <div className={styles.bordersectioncart}>
                  {shoppingCart?.map((item, index) => {
                    return (
                      <>
                        <div className={styles.cartlistsection}>
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
                                Rs.{item?.salePrice}
                              </div>
                              <div>
                                {item?.productDescription}
                              </div>
                            </div>
                          </div>
                          <div className={styles.mobilecartresponsive}>

                            <div className={styles.cartaddsection}>
                              <div>
                                <Image src={minusicon} alt="no image" className={styles.carticonsadd} onClick={() => dispatch(decrement(item?.id))} />
                              </div>
                              <div>1</div>
                              <div >
                                <Image src={addicon} alt="no image" className={styles.carticonsadd} onClick={() => dispatch(increment(item?.id))} />
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
                      {qty}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Price</div>
                    <div className={styles.textprice}>
                      {totalPrice}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Discount</div>
                    <div className={styles.textprice}>
                      2
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Delivery Charges</div>
                    <div className={styles.textprice}>
                      2
                    </div>
                  </div>
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.splitcartsections}>
                  <div className={styles.pricetexts}>
                    Total Payable</div>
                  <div className={styles.textprice}>
                    2
                  </div>
                </div>

                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className="mt-3 mb-3">

                  {tokes ?
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Place Order</Button> :
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout", { kalai: "thala" })}>Place Order</Button>
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





