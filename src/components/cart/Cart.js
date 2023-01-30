import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartActionDelete } from '../../Redux/actions/cart/Cartdata';
import styles from './styles/Cart.module.scss';
import usepromo from '../../assests/womeynlogos/cartprice.png';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
import { CartActionClearDataAll } from './../../Redux/actions/cart/Cartdata';
function Cart() {

  const router = useRouter();

  const dispatch = useDispatch();
  const [price, setPrice] = useState(0);
  const [showlocal, setLocalData] = useState([]);
  const state = useSelector((state) => state.cart.cartitems);


  useEffect(() => {
    setLocalData(state);
    TotalPrice();
  }, [price])

  const TotalPrice = () => {
    let price = 0;
    state.map((item) => {
      price = item.price + price;
    })
    setPrice(price);
  }



  const shopping = () => {
    router.push("//womeyn/womenpreneurs/product/")
  }



  const handleDelete = (name) => {
    console.log(name, "name")
    if (name === "allselect") {
      const data = setLocalData([]);
      dispatch(CartActionClearDataAll(data));
    }
    else {
      dispatch(CartActionDelete(name == "allselect" ? "" : name))
    }
  }

  const handleChange = (e) => {
    const { name, checked } = e.target;
    handleDelete(name);
    if (name === "allselect") {
      let temp = showlocal.map((item) => {
        return { ...item, isChecked: checked }
      });
      setLocalData(temp);
    } else {
      let checkvalue = showlocal.map(item => item.id === name ? { ...item, isChecked: checked } : item);
      setLocalData(checkvalue);


    }

  }

  return (
    <Fragment>
      <div className={styles.maincartsection}>
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
                  {showlocal.length > 0 ?
                    <>
                      {showlocal.map((item, index) => {
                        return (
                          <>
                            <div className={styles.checkboxsectioncart}>
                              <div className={styles.insidestorenamesection}>
                                <div>
                                  <input type="checkbox" name={item?.id} checked={item?.isChecked || false} onChange={handleChange} />
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
                  <div className={styles.shoppingsummary}>Total Discount item(s)</div>
                  <div className={styles.shoppingsummary}>Rs. {price}</div>
                </div>
                <div className="mt-4">
                  <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout")}>Checkout</Button>
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







{/* <div>
{state.length>0 ?
 <>
 {state.map((item, index) => {
  return (
    <div>
      {item.name}
      <button onClick={() => handleDelete(item.id)}>delete</button>
    </div>
  )
})}
 </>:<div>No Data Found....</div>
}

</div> */}