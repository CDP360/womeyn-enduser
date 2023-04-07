import React ,{useState}from 'react'
import styles from './styles/Servicepayment.module.scss';
import banners from '../../../../assests/service-logos/servicebanner (2).png';
import Image from 'next/image';
import strip from '../../../../assests/cart-logos/Stripe-Logo1.png';
import paypal from '../../../../assests/cart-logos/PayPal-Logo1.png';
function Servicepayment() {
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
  const [paymentType, setPaymentType] = useState("");

  const onOptionChange = (e) => {
    setPaymentType(e.target.value);
  }

    return (
        <div className='mainsection'>
            <div className="insidesection">
                <div className={styles.mainservicepayment}>
                    <div className={styles.insideservicepayment}>
                        <div className={styles.leftservicepayment}>
                            <div className={styles.selectpayment}>

                                Select a payment method
                            </div>
                            <div className={styles.paymentmethod}>

                                Payments method
                            </div>
                            <div className="mt-3">

<div>

{paymentMethods?.map((item, index) => {
          return (
            <div key={index} className={styles.paymentsection}>
              <input type="radio" name={item?.name} value={item?.name} checked={paymentType == item?.name} onChange={onOptionChange} id={item?.name} className={styles.radiobuttons} />
              <label for={item?.name}><img src={item.image.src} alt="no image" className={styles.strips} /></label>
            </div>
          )
        })}
</div>

                            </div>
                        </div>
                        <div className={styles.rightservicepayment}>

                            <div className={styles.insideservicepaymentinright}>
                                <div className={styles.insiderightpaymentcard}>
                                    <div>

                                        <Image src={banners} alt="no image" className={styles.bannserpaymentservice} />
                                    </div>
                                    <div className={styles.servicepayment}>
                                        <div className={styles.quantity}>

                                            <div className={styles.price}>
                                                Quantity
                                            </div>
                                            <div className={styles.price}>
                                                1
                                            </div>
                                        </div>

                                        <div className={styles.bordersections}>

                                        </div>

                                    </div>
                                    <div className={styles.servicepayment}>
                                        <div className={styles.quantity}>
                                            <div className={styles.price}>
                                                Item price
                                            </div>
                                            <div className={styles.price}>
                                                A$ 24
                                            </div>
                                        </div>
                                        

                                        <div className={styles.bordersections}>

                                        </div>

                                    </div>

                                   <div className="mt-3 mb-3">

                                   <div className={styles.totalamount}>
                                        <div className={styles.price}>
                                            Total amount
                                        </div>
                                        <div className={styles.totalflex}>
                                            <div className={styles.price}>
                                                A$
                                            </div>

                                            <div>
                                                <span className={styles.total}>27</span>
                                            </div>                                        </div>
                                    </div>
                                    </div>

                                    <div className='mt-4 mb-3'>
                                        <button className={styles.confirmpay}>Confirm & Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Servicepayment