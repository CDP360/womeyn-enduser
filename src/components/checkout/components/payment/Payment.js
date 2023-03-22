
import { ContextStore } from '../../../../Redux/store/Contextstore';
import styles from './styles/Payment.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import { CustomerOrders } from '../../../../services/customer-order-service/customer-order-service';
import { useRouter } from 'next/router';
function Payment({ totalPrice, addressid }) {

  const history = useRouter();

  const { state, dispatch } = useContext(ContextStore);

  const [orders, setOrders] = useState([]);

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
    cart?.cartData?.map((item, index) => {
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
        couponName: "SUMMER50",
      })
    })
    setOrders(storesfilter);
  }, [addressid]);

  const deliverOrderConfirm = () => {
    const userName = JSON.parse(localStorage.getItem("womenuser"));
    const overAllorders = {
      deliveryAddressId: addressid,
      itemsOrdered: orders,
      totalOrderAmount: totalPrice,
      customerName: userName
    }
    CustomerOrders(overAllorders).then((res) => {
      // toast.success(res?.data?.message, {
      //   position: "top-center",
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: "success",
      // })
      window.location = res?.data?.url;
    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <div className={styles.mainsectionpayment}>
      <div className={styles.paymentsections}>

        {paymentMethods?.map((item, index) => {
          return (
            <div key={index} className={styles.paymentsection}>
              <input type="radio" id="html" name="fav_language" value="HTML" />
              {item?.name}
            </div>
          )
        })}
        <div className="mt-5">
          <button className={styles.usepayments} onClick={deliverOrderConfirm}>
            {/* Use this payment method  */}
            Continue Payment
          </button>
        </div>
      </div>
    </div>


  )
}
export default Payment;