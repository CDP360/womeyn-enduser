import React, { Fragment, useState, useEffect,useContext } from 'react'
import styles from './styles/Checkout.module.scss';
import Image from 'next/image';
import usepromo from '../../assests/womeynlogos/cartprice.png';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Orderdetails from './components/orderdetails/Orderdetails';
import Payment from './components/payment/Payment';
import { ContextStore } from '../../Redux/store/Contextstore';
import dynamic from 'next/dynamic';
function Checkout() {
  const [step, setStep] = useState(0);
  const { state, dispatch } = useContext(ContextStore);

  const { cart } = state;
  const [price, setPrice] = useState(0);
  const [width, setWidth] = useState(0);
  const [width1, setWidth1] = useState(0);

  useEffect(() => {
    TotalPrice();
    handleprogress();
  }, [price, width])
  const TotalPrice = () => {
    let price = 0;
    cart.cartData.map((item) => {
      price = item.price + price;
    })
    setPrice(price);
  }

  const handleprogress = (id) => {
    let width = 0;
    if (step === 0) {
      width = width + 100
    }
    setWidth(width)
  }
  return (
    <Fragment>
      <div className={styles.maincheckoutsection}>
        <div className={styles.emptyboxsection}>
        </div>
        <div className={styles.emptyboxsectionleft}>
        </div>
        <div className={styles.insidesectioncheckout}>
          <div className={styles.leftcheckoutsection}>
            <div className="large-text mb-2">Checkout</div>
            <div className="mb-2">
              {step + 1} of 2 Step
            </div>
            <div className={styles.progressbarcheck}>

              <div className={styles.leftbarprogress}>
                <ProgressBar now={width} />
                <div className={styles.orderstepsection} onClick={() => setStep(0)}>
                  <div className={styles.numbercountorderstep}>1</div>
                  <div className={styles.setordertext}>Set the order</div>
                </div>
              </div>
              <div className={styles.rightbarprogress}>
                <ProgressBar now={step === 1 && width} />
                <div className={styles.orderstepsection} onClick={() => setStep(1)}>
                  <div className={`${step === 1 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>2</div>
                  <div className={styles.setordertext}>Set the payment</div>
                </div>

              </div>
            </div>

            {step === 0 && <div>
              <Orderdetails state={cart} />
            </div>}

            {step === 1 && <div>
              <Payment />
            </div>}
          </div>
          <div className={styles.rightcheckoutsection}>
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
                  <div className={styles.shoppingsummary}>Rs.{price}</div>
                </div>
                <div className="mt-4">
                  {step == 0 ? <div>
                    <Button className={styles.checkoutbutton} onClick={() => {
                      setStep(1)
                      handleprogress(1)
                    }}>Checkout</Button>
                  </div> : <div>
                    <Button className={styles.checkoutbutton}>Checkout</Button>
                  </div>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default dynamic(() => Promise.resolve(Checkout), { ssr: false })