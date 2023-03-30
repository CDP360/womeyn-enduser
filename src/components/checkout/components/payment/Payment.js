
import { ContextStore } from '../../../../Redux/store/Contextstore';
import styles from './styles/Payment.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import { CustomerOrders } from '../../../../services/customer-order-service/customer-order-service';
import strip from '../../../../assests/cart-logos/Stripe-Logo1.png';
import paypal from '../../../../assests/cart-logos/PayPal-Logo1.png';
import Spinner from 'react-bootstrap/Spinner';

function Payment({ totalPrice, addressid, couponname }) {
  const [loading,setLoading]=useState(false);
  const { state } = useContext(ContextStore);
  const [orders, setOrders] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const { cart } = state;
  const paymentMethods = [
    {
      id: 1,
      name: "paypal",
      image: paypal
    },
    {
      id: 2,
      name: "stripe",
      image: strip
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
        productSlugName: item?.productSlugName
      })
    })
    setOrders(storesfilter);
  }, [addressid]);

  const deliverOrderConfirm = () => {
    setLoading(true);
    const userName = JSON.parse(localStorage.getItem("womenuser"));
    const overAllorders = {
      deliveryAddressId: addressid,
      paymentMethod: paymentType,
      itemsOrdered: orders,
      totalOrderAmount: totalPrice,
      customerName: userName,
      couponName: couponname,
    }
    CustomerOrders(overAllorders).then((res) => {
      window.location = res?.data?.url;

      setTimeout(()=>{
        setLoading(false);
      },1000)
    }).catch((err) => {
      console.log(err);
    })
  }

  const onOptionChange = (e) => {
    setPaymentType(e.target.value);
  }
  return (
    <div className={styles.mainsectionpayment}>
      <div className={styles.paymentsections}>

        {paymentMethods?.map((item, index) => {
          return (
            <div key={index} className={styles.paymentsection}>
              <input type="radio" name={item?.name} value={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} />
              <span><img src={item.image.src} alt="no image" className={styles.strips} /></span>
            </div>
          )
        })}
        <div className="mt-5">
          <button className={styles.usepayments} onClick={deliverOrderConfirm}>

          {loading?<>
           
           <Spinner
         as="span"
         animation="border"
         size="sm"
         role="status"
         aria-hidden="true"
       />
       <span className="ms-3">Loading...</span>
          </>:<>
          Continue Payment
          
          </>}
          
          </button>
        </div>
      </div>
    </div>


  )
}
export default Payment;