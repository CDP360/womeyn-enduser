import React, { Fragment, useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartActionDelete, Cartactions } from '../../Redux/actions/cart/Cartdata';
import styles from './styles/Cart.module.scss';
import usepromo from '../../assests/womeynlogos/cartprice.png';
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

  const [tokes,setTokens]=useState("");
  // const state = useSelector((state) => state.cart.cartitems);
  useEffect(() => {
    setLocalData(state);
    TotalPrice();
    const checktoken=localStorage.getItem("womenUserToken");
    setTokens(JSON.parse(checktoken));
  }, [price,tokes])

  const TotalPrice = () => {
    let price = 0;
    cart.cartData.map((item) => {
      price = item.price + price;
    })
    setPrice(price);
  }

  const shopping = () => {
    router.push("/womeyn/womenpreneurs/product")
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
      <div className={styles.maincartsection}>
        {/* <div className={styles.emptyboxsection}>
        </div>
        <div className={styles.emptyboxsectionleft}>
        </div> */}
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
                                    {item.name}
                                  </div>
                                  <div>
                                    {item.price}
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
                              <div>
                                <button onClick={() => handleDelete(item)}>delete</button>
                              </div>
                            </div>

                            {/* <button onClick={() => handleDelete(item.id)}>delete</button> */}
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
      </div>
    </Fragment>
  )
}

export default dynamic(() => Promise.resolve(Cart), { ssr: false });







