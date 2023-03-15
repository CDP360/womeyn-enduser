import React, { Fragment, useContext, useEffect, useState } from 'react'
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
  const { state, dispatch } = useContext(ContextStore);
  const { cart } = state;
  const router = useRouter();
  // const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [deleteselect, setDeleteselect] = useState("");
  const [showlocal, setLocalData] = useState([]);

  const [tokes, setTokens] = useState("");
  // const state = useSelector((state) => state.cart.cartitems);
  useEffect(() => {
    setLocalData(state);
    TotalPrice();
    const checktoken = localStorage.getItem("womenUserToken");
    setTokens(JSON.parse(checktoken));
  }, [price, tokes])

  const TotalPrice = () => {
    let price = 0;
    cart.cartData.map((item) => {
      price = item?.salePrice + price;
    })
    setPrice(price);
  }

  const shopping = () => {
    router.push("/womenpreneurs")
  }


  console.log("showlocal", cart)
  const handleDelete = (e) => {
    dispatch({ type: "CART_REMOVE", payload: e })
    console.log("io", e)
    // const value = e.target.value;
    // const checked = e.target.checked;
    // dispatch(CartActionDelete(e))
    // dispatch(Cartactions(showlocal));
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
      {/* <div className={styles.maincartsection}>
        <div className={styles.emptyboxsection}>
        </div>
        <div className={styles.emptyboxsectionleft}>
        </div>
        <div className={styles.insidecartsectionmain}>
          <div className={styles.leftcartsection}>
            <div className='large-text mb-4'>
              Cart
            </div>
            <div className={styles.removesectioncart}>
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
            <div className='mt-3'>
              <div className={styles.cartshowsection}>

                <div>
                  {cart.cartData.length > 0 ?
                    <>
                      {cart.cartData.map((item, index) => {
                        return (
                          <>
                            <div className={styles.checkboxsectioncart} key={index}>
                              <div className={styles.insidestorenamesection}>
                                <div>
                                  <input type="checkbox" name={item?.name} value={item?.id} onChange={handleDelete} />
                                </div>
                                <div classsName={styles.storename}>
                                  Store Name {item?.id}
                                </div>
                              </div>
                              <div>
                                <div className={styles.usepromocartmap}>
                                  <div>
                                    <Image src={usepromo} alt="no image" className={styles.promoimage} />
                                  </div>
                                  <div className={styles.codepromo}>
                                    Use Promo Code
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.cartimageaddsection}>
                              <div className={styles.imagecart}>
                                <div className={styles.cartimagedummy}>
                                </div>
                                <div className={styles.controlcontentcart}>
                                  <div>
                                    {item.name} Shoes Waffle One
                                  </div>
                                  <div>
                                    {item.price} Rs. 8000 (100000)   10% off
                                  </div>
                                </div>
                              </div>
                              <div className={styles.cartaddandaddqunatity}>
                                <div className={styles.addcounts}>
                                  -
                                </div>
                                <div>
                                  1
                                </div>

                                <div className={styles.addcount}>
                                  +
                                </div>
                              </div>
                              <div className={styles.removesectioncart}>
                                <div className={styles.add}>
                                <Image src={delteteicon} alt="no image" className={styles.removeiconsection}/>
                                </div>
                                <div className={styles.add}>
                                Remove
                                </div>
                              </div>
                              <div>
                                <button onClick={() => handleDelete(item)}>delete</button>
                              </div>
                            </div>

                            <button onClick={() => handleDelete(item.id)}>delete</button>
                          </>
                        )
                      })}
                    </> : <div>
                      <div className={styles.cartemptysection}>
                        Cart Is Empty. <span className={styles.shoppingcartempty} onClick={shopping}>Go Shopping</span>
                      </div>
                    </div>
                  }

                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightcartsection}>

            <div className={styles.cartpricesectionright}>
              <div className={styles.usepromocart}>
                <div>
                  <Image src={usepromo} alt="no image" className={styles.promo} />
                </div>
                <div className={styles.codepromo}>
                  Use Promo Code
                </div>
              </div>
              <div className="mt-3">
                <div className={styles.shoppingsummary}>
                  Shopping summary
                </div>
                <div className={styles.totalpricesection}>
                  <div>Total Price (items)</div>
                  <div>Rs. {price}</div>
                </div>
                <div className={styles.totalpricesection}>
                  <div>Total Discount item(s)</div>
                  <div>Rs. 10000</div>
                </div>
                <div className={styles.bordersection}></div>
                <div className={styles.totalpricesection}>
                  <div className={styles.shoppingsummary}>Total Price (item)</div>
                  <div className={styles.shoppingsummary}>Rs. {price}</div>
                </div>
                <div className="mt-4">
                  {tokes?
                  <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Checkout</Button>:
                  <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout")}>Checkout</Button>
                  }
                </div>
              </div>

            </div>
          </div>
        </div>
      </div> */}

      <div className='mainsection'>
        <div className="insidesection">
          <div className={styles.cartsectiontexts}>
            Cart
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
                          <div className={styles.cartaddsection}>
                            <div >
                              <Image src={minusicon} alt="no image" className={styles.carticonsadd} />
                            </div>
                            <div>1</div>
                            <div>
                              <Image src={addicon} alt="no image" className={styles.carticonsadd} />
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
                                <Image src={minusicon} alt="no image" className={styles.carticonsadd} />
                              </div>
                              <div>1</div>
                              <div>
                                <Image src={addicon} alt="no image" className={styles.carticonsadd} />
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
                      2
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
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout")}>Place Order</Button>
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







