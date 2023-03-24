
import { ContextStore } from '../../../../Redux/store/Contextstore';
import styles from './styles/Payment.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import { CustomerOrders } from '../../../../services/customer-order-service/customer-order-service';

function Payment({ totalPrice, addressid ,couponname}) {
  const { state} = useContext(ContextStore);
  const [orders, setOrders] = useState([]);
  const [paymentType, setPaymentType] = useState("");

  const { cart } = state;
  const paymentMethods = [
    {
      id: 1,
      name: "Paypal",

    },
    {
      id: 2,
      name: "Stripe"
    }
  ]

  useEffect(() => {
    let storesfilter = [];
    cart?.cartData?.map((item) => {
      storesfilter.push({
        productName: item?.productName,
        productId: item?.id,
        price: item?.salePrice,
        deliveryFee: "40",
        quantity: item?.quantity,
        variations: item?.variations,
        sellerId: item?.sellerId,
        sellerBusinessName: item?.sellerBusinessName,
        productThumbImage: item?.productThumbImage,
        couponName: couponname,
      })
    })
    setOrders(storesfilter);
  }, [addressid]);

  const deliverOrderConfirm = () => {
    const userName = JSON.parse(localStorage.getItem("womenuser"));
    const overAllorders = {
      deliveryAddressId: addressid,
      paymentMethod:paymentType,
      itemsOrdered: orders,
      totalOrderAmount: totalPrice,
      customerName: userName
    }
    // CustomerOrders(overAllorders).then((res) => {
      
    //   window.location = res?.data?.url;
    // }).catch((err) => {
    //   console.log(err);
    // })

    console.log(overAllorders,"overAllorders")
  }

  const onOptionChange=(e)=>{
    setPaymentType(e.target.value);
  }
  return (
    <div className={styles.mainsectionpayment}>
      <div className={styles.paymentsections}>
        
        {paymentMethods?.map((item, index) => {
          return (
            <div key={index} className={styles.paymentsection}>
              <input type="radio" name={item?.name} value={item?.name} checked={paymentType==item?.name}  onChange={onOptionChange} />
              {item?.name}
            </div>
          )
        })}
        <div className="mt-5">
          <button className={styles.usepayments} onClick={deliverOrderConfirm}>
            Continue Payment
          </button>
        </div>
      </div>
    </div>


  )
}
export default Payment;