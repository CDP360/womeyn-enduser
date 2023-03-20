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
import { ContextStore } from './../../Redux/store/Contextstore';
function Cart() {
  const { state,dispatch} = useContext(ContextStore);
  const { cart } = state;
  const router = useRouter();
  const [price, setPrice] = useState(0);
  const [tokes, setTokens] = useState("");
  const [carts, setCart] = useState([]);
  const TotalPrice = () => {
    let prices = 0;
    cart?.cartData?.map((item, index) => {
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
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setDeleteselect(value)
    }
    else {
      // setDeleteselect(deleteselect.filter((e) => e != value));
    }
  }

  const handleAdd = (index1, item) => {
    const CARTS = carts?.map((forms, index) => {
        return index1 === index ? { ...forms, quantity: item?.quantity + 1 } : forms
    })
    setCart(CARTS);
    dispatch({
        type: "ADD_CART",
        payload: CARTS
    })
}
const handleRemove = (index1, item) => {
    const CARTS = carts?.map((forms, index) => {
        return index1 === index ? { ...forms, quantity: item?.quantity - 1 } : forms
    })
    setCart(CARTS);
    dispatch({
        type: "REMOVE_CART",
        payload: CARTS
    })
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
                {cart?.cartData?.length > 0 ? <div className={styles.bordersectioncart}>
                  {cart?.cartData?.map((item, index) => {
                    return (
                      <>
                        <div className={styles.cartlistsection} key={index}>
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
                              <Image src={minusicon} alt="no image" className={styles.carticonsadd}    onClick={() =>
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
                    Cart Is Empty. <span className={styles.shoppingcartempty} onClick={shopping}>Go Shopping</span>
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
                                <Image src={minusicon} alt="no image" className={styles.carticonsadd}    onClick={() =>
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
                      {/* {item?.quantity} */}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Price</div>
                    <div className={styles.textprice}>
                      {price}
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





