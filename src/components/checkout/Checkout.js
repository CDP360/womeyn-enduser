import React, { Fragment, useState, useEffect, useContext } from 'react'
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
import { cartContext } from './../../Redux/store/CartContext';
function Checkout() {
  const [step, setStep] = useState(0);
  const { shoppingCart, dispatch, qty, totalPrice } = useContext(cartContext);

  // const { cart } = state;
  const [price, setPrice] = useState(0);
  const [width, setWidth] = useState(0);
  const [width1, setWidth1] = useState(0);

  const [step1, setStep1] = useState('');
  const [step2, setStep2] = useState('');

  const [step3, setStep3] = useState('');


  useEffect(() => {
    TotalPrice();
    handleprogress();

    if (step === 0) {
      setStep1("active")
    }
    if (step === 2) {
      setStep2("active")

    }
    if (step === 3) {
      setStep3("active")

    }
  }, [price, width, step1, step2, step3, step])
  const TotalPrice = () => {
    let price = 0;
    shoppingCart.map((item) => {
      price = item.salePrice + price;
    })
    setPrice(price);
  }

  const handleprogress = (id) => {
    // let width = 0;
    // if (step === 0) {
    //   width = width + 50
    // }
    // setWidth(width)
  }

  const handleAddressNavigate=()=>{
  
      setStep(1)
      // handleprogress(1)
 
  }
  return (
    <Fragment>
      {/* <div className={styles.maincheckoutsection}>
      <div className="large-text mb-2">Checkout</div>

        <div className={styles.emptyboxsection}>
        </div>
        <div className={styles.emptyboxsectionleft}>
        </div>
        <div className={styles.insidesectioncheckout}>

          <div className={styles.leftcheckoutsection}>
           
            <div className="mb-2">
              {step + 1} of 2 Step
            </div>
            <div className={styles.progressbarcheck}>

              <div className={styles.leftbarprogress}>
                <ProgressBar now={width} />
                <div className={styles.orderstepsection} onClick={() => setStep(0)}>
                  <div className={styles.numbercountorderstep}>1</div>
                  <div className={styles.setordertext}>Select Address</div>
                  <div>
{step1}
                  </div>
                </div>
              </div>
              <div className={styles.rightbarprogress}>
                <ProgressBar now={step === 1 && width} />
                <div className={styles.orderstepsection} onClick={() => setStep(1)}>
                  <div className={`${step === 1 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>2</div>
                  <div className={styles.setordertext}>Order Summary</div>
                  <div>
{step2}
                  </div>
                </div>

              </div>
              <div className={styles.rightbarprogress}>
                <ProgressBar now={step === 2 && width} />
                <div className={styles.orderstepsection} onClick={() => setStep(2)}>
                  <div className={`${step === 2 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>3</div>
                  <div className={styles.setordertext}>Select the payment</div>
                  <div>
{step3}
                  </div>
                </div>

              </div>
            </div>

            {step === 0 && <div>
              <Orderdetails state={shoppingCart} />
            </div>}
            {step === 1 && <div>
              <Payment />
            </div>}
            {step === 2 && <div>
              third section
            </div>}
          </div>
          <div className={styles.rightcheckoutsection}>


          <div className={styles.insiderigthcartsection}>
                <div className={styles.pricetexts}>
                  Price details
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.cartdetailsection}>
                  <div className={styles.splitcartsections}>
                    <div>
                      Quantity
                    </div>
                    <div className={styles.textprice}>
                      {qty}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Price</div>
                    <div className={styles.textprice}>
                      {totalPrice}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Discount</div>
                    <div className={styles.textprice}>
                      2
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Delivery Charges</div>
                    <div className={styles.textprice}>
                      2
                    </div>
                  </div>
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.splitcartsections}>
                  <div className={styles.pricetexts}>
                    Total Payable</div>
                  <div className={styles.textprice}>
                    2
                  </div>
                </div>

                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className="mt-3 mb-3">

                  {tokes ?
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Place Order</Button> :
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout", { kalai: "thala" })}>Place Order</Button>
                  }
                </div>
              </div>



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
      </div> */}

      <div className='mainsection'>
        <div className="insidesection">
          <div className={styles.cartsectiontexts}>
            Checkout
          </div>
          <div className={styles.cartsection}>
            
            <div className={styles.leftcartsection}>
              <div className={styles.progressbarcheck}>

                <div className={styles.leftbarprogress}>
                  {/* <ProgressBar now={width} /> */}
                  <div className={styles.orderstepsection} onClick={() => setStep(0)}>
                    <div className={styles.numbercountorderstep}>1</div>
                    <div className={styles.setordertext}>Select Address</div>
                   
                  </div>
                </div>
                <div className={styles.rightbarprogress}>
                  {/* <ProgressBar now={step === 1 && width} /> */}
                  <div className={styles.orderstepsection} onClick={() => setStep(1)}>
                    <div className={`${step === 1 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>2</div>
                    <div className={styles.setordertext}>Order Summary</div>
                    
                  </div>

                </div>
                <div className={styles.rightbarprogress}>
                  {/* <ProgressBar now={step === 2 && width} /> */}
                  <div className={styles.orderstepsection} onClick={() => setStep(2)}>
                    <div className={`${step === 2 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>3</div>
                    <div className={styles.setordertext}>Select the payment</div>
                    
                  </div>

                </div>
              </div>
              <div>
              {step === 0 && <div>
              <Orderdetails state={shoppingCart} handleCheck={handleAddressNavigate()} />
            </div>}
            {step === 1 && <div>
              <Payment />
            </div>}
            {step === 2 && <div>
              third section
            </div>}
                </div>
            </div>
            <div>

              
            </div>
            <div className={styles.rightcartsection}> 
            
            <div className={styles.insiderigthcartsection}>
                <div className={styles.pricetexts}>
                  Price details
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.cartdetailsection}>
                  <div className={styles.splitcartsections}>
                    <div>
                      Quantity
                    </div>
                    <div className={styles.textprice}>
                      {qty}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Price</div>
                    <div className={styles.textprice}>
                      {totalPrice}
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Discount</div>
                    <div className={styles.textprice}>
                      2
                    </div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div>
                      Delivery Charges</div>
                    <div className={styles.textprice}>
                      2
                    </div>
                  </div>
                </div>
                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className={styles.splitcartsections}>
                  <div className={styles.pricetexts}>
                    Total Payable</div>
                  <div className={styles.textprice}>
                    2
                  </div>
                </div>

                <div className={styles.borderdashedsection}>
                  <div className={styles.insideborderdashedsection}></div>
                </div>
                <div className="mt-3 mb-3">

                  {/* {tokes ?
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Place Order</Button> :
                    <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout", { kalai: "thala" })}>Place Order</Button>
                  } */}
                </div>

                <div>
              <div className="mb-3">

              Promotions
                </div>

                <div className={styles.promotioninputsectionapply}>

<div>
<input type="text"  placeHolder="EARLY BIRD" className={styles.birdinput}/>
  </div>
  <div>
<button className={styles.Apply}>Apply</button>
  </div>
                  </div>
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