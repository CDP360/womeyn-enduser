import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartActionDelete } from '../../Redux/actions/cart/Cartdata';
import styles from './styles/Cart.module.scss';
function Cart() {

  const dispatch=useDispatch();
  const [price, setPrice] = useState(0);
  const [showlocal,setLocalData]=useState([]);

  const state = useSelector((state) => state.cart.cartitems);
  useEffect(() => {
    TotalPrice();
  const sample=JSON.parse(localStorage.getItem("Cart")); 

  if(localStorage.getItem("Cart"))
  {
  const sample=JSON.parse(localStorage.getItem("Cart")); 
  setLocalData(sample);
  }
  else
  {
    return [];
  }

  }, [price])

  const TotalPrice = () => {
    let price = 0;
    state.map((item) => {
      price=item.price +price;
    })
    setPrice(price);
  }


  const handleDelete=(id)=>{
    dispatch(CartActionDelete(id));
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
              {showlocal.map((item, index) => {
                return (
                  <div>
                    {item.name}
                    <button onClick={()=>handleDelete(item.id)}>delete</button>
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