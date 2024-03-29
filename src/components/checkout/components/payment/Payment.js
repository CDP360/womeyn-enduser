
import { ContextStore } from '../../../../Redux/store/Contextstore';
import styles from './styles/Payment.module.scss';
import React, { useState, useEffect, useContext } from 'react';
import { CustomerOrders } from '../../../../services/customer-order-service/customer-order-service';
import strip from '../../../../assests/cart-logos/Stripe-Logo1.png';
import paypal from '../../../../assests/cart-logos/PayPal-Logo1.png';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
function Payment({ totalPrice, addressid, couponname, totalvalue, checkshippingamount, discountamount }) {
  const [loading, setLoading] = useState(false);
  const { state } = useContext(ContextStore);
  const [orders, setOrders] = useState([]);
  const [paymentType, setPaymentType] = useState("");
  const { cart } = state;

  const userprofile = useSelector((state) => state?.loginUser?.logindata?.firstName);
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
    checkshippingamount?.map((item) => {
      storesfilter.push({
        productName: item?.productName,
        productId: item?.productId,
        price: item?.salePrice,
        deliveryFee: item?.deliveryCharge,
        quantity: item?.quantity,
        variations: item?.variations,
        sellerId: item?.sellerId,
        sellerBusinessName: item?.businessName,
        productThumbImage: item?.imageName,
        productSlugName: item?.productSlugName,
        rateId: item?.rateId,
        expectedDeliveryDate: item?.expectedDeliveryDate,
        salePriceGST: item?.salePriceGST,
        deliveryChargeGST: item?.deliveryChargeGST
      })
    })
    setOrders(storesfilter);
  }, [addressid]);



  const deliverOrderConfirm = () => {
    setLoading(true);
    const overAllorders = {
      deliveryAddressId: addressid,
      paymentMethod: paymentType,
      itemsOrdered: orders,
      totalOrderAmount: totalPrice.toFixed(2),
      customerName: userprofile,
      couponCode: couponname,
      couponName: couponname,
      discountAmount: discountamount?.result?discountamount?.result:null
    }

    if (paymentType?.length === 0) {
      toast.error("Please select Payment Type!!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      })
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }

    if (paymentType) {
      CustomerOrders(overAllorders).then((res) => {
        window.location = res?.data?.url;
        setTimeout(() => {
          setLoading(false);
        }, 1000)
      }).catch((err) => {
        console.log(err);
        setLoading(false);

      })
    }
  }

  const onOptionChange = (e) => {
    setPaymentType(e.target.value);
  }

  return (
    <div className={styles.mainsectionpayment}>
      <div className={styles.paymentsections}>

        {paymentMethods?.map((item, index) => {
          return (
            // <div key={index} className={styles.paymentsection}>
            //   <input type="radio" name={item?.name} value={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} id={item?.name} className={styles.radiobuttons} />
            //   <label for={item?.name}><img src={item.image.src} alt="no image" className={styles.strips} /></label>
            // </div>
            <div className={styles.questions} key={index}>
            <div className={styles.questions__question}>
              <input type="radio" name={item?.name} value={item?.name} id={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} />
              <label for={item?.name} className={styles.paymentbox}>
             <div className={styles.paymentboxinside}>
             <div className={paymentType==item?.name?styles.activebox:styles.inactive}>
             </div>
             <div>
              <img src={item.image.src} alt="no image" className={styles.strips} />
             </div>
             </div>
              </label>
              <div>
              </div>
            </div>
           
          </div>
          )
        })}
        <div className="mt-5">
          <button className={styles.usepayments} onClick={deliverOrderConfirm}>

            {loading ? <>

              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-3">Loading...</span>
            </> : <>
              Continue Payment 

            </>}

          </button>
        </div>
      </div>
    </div>


  )
}
export default Payment;