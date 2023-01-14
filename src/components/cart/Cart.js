import React, { Fragment, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styles from './styles/Cart.module.scss';
function Cart() {
  const [price, setPrice] = useState(0);
  const [showlocal,setLocalData]=useState([]);

  const state = useSelector((state) => state.cart.cartitems);
  useEffect(() => {
    TotalPrice();
    const CartShowData=window.localStorage.getItem("Cart");
    setLocalData(JSON.parse(CartShowData))
  }, [price])

  const TotalPrice = () => {
    let price = 0;
    state.map((item) => {
      price=item.price +price;
    })
    setPrice(price);
  }

  

  return (
    <Fragment>
      <div className={styles.maincartsection}>
        <div className={styles.insidecartsectionmain}>
          <div className={styles.leftcartsection}>
            <div className='large-text'>
              Cart
            </div>
            <div>
              {state.map((item, index) => {
                return (
                  <div>
                    {item.name}

                  </div>
                )
              })}
            </div>
          </div>
          <div className={styles.rightcartsection}>
            right cart
            {price}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Cart