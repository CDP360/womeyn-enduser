import React, { Fragment, useState, useEffect, useContext } from 'react'
import styles from './styles/Checkout.module.scss';
import Image from 'next/image';
import usepromo from '../../assests/womeynlogos/cartprice.png';
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Addressdetail from './components/addressdetails/Addressdetail';
import Payment from './components/payment/Payment';
import { ContextStore } from '../../Redux/store/Contextstore';
import dynamic from 'next/dynamic';
import Confirmorders from './components/confirmorders/Confirmorders';
import { useRouter } from 'next/router';
function Checkout() {
  const history = useRouter();
  const [tokens, seTokens] = useState();
  const [step, setStep] = useState(0);
  const { state, dispatch } = useContext(ContextStore);
  const [name, setName] = useState("");
  const { cart } = state;
  const [width, setWidth] = useState(0);
  const [width1, setWidth1] = useState(0);
  const [step1, setStep1] = useState('');
  const [step2, setStep2] = useState('');
  const [step3, setStep3] = useState('');
  const [couponname, setCouponName] = useState("");
  const [discountamount, setDiscountAmount] = useState("");



  const [checkshippingamount, setShippingAmount] = useState([]);
  const totalPrice = cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0);

  const [totalvalue, setTotalValue] = useState(0);
  const cartpricevaues = state?.cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0);

  const values = Math.max(
    0,
    Math.round(
      cartpricevaues - (cartpricevaues) * 10 / 100
    )
  );


  const deliveryChargeAmount = checkshippingamount.reduce((acc, current) => acc + Number(current.deliveryCharge), 0)
  const DeliveryChargeAmount = Math.max(
    0,
    Math.round(
      deliveryChargeAmount - (deliveryChargeAmount) * 10 / 100
    )
  );

  const chargeDelivery = deliveryChargeAmount - DeliveryChargeAmount;



  const GSTValue = cartpricevaues - values;


  const GSTTotalValue = Number(GSTValue) + Number(chargeDelivery)


  // const deliveryChargeAmount = state?.cart?.cartData?.reduce((acc, current) => acc + current.deliverycharge, 0)
  // const deliveryChargeAmount = checkshippingamount.reduce((acc, current) => acc + Number(current.deliveryCharge), 0)
  // const DeliveryChargeAmount = Math.max(
  //   0,
  //   Math.round(
  //     deliveryChargeAmount - (deliveryChargeAmount) * 10 / 100
  //   )
  // );
  const Sample = cartpricevaues - values;
  // const chargeDelivery = deliveryChargeAmount - DeliveryChargeAmount;
  const AllchargeCount = Number(cartpricevaues) + Number(deliveryChargeAmount);
  const OverallTotalPrice = Number(Sample) + Number(chargeDelivery);


  // coupon value calculate
  const toatalpricecart = discountamount?discountamount?.message ? (Math.round(Number(AllchargeCount) + Number(OverallTotalPrice))) :
    (Math.round(Number(AllchargeCount) + Number(OverallTotalPrice)) - Number(discountamount?.result))
    :Math.round(Number(AllchargeCount) + Number(OverallTotalPrice));
  useEffect(() => {
    if (step === 0) {
      setStep1("active")
    }
    if (step === 2) {
      setStep2("active")
    }
    if (step === 3) {
      setStep3("active")
    }
    const authcheck = localStorage.getItem("userToken");
    if (!authcheck) {
      seTokens(true);
    }

  }, [width, step1, step2, step3, step, totalvalue, discountamount]);

  const NavigatePath = () => {
    history.push("/login");
  }



  console.log(toatalpricecart, "toatalpricecart")



  if (tokens) {
    return (
      <div>
        {NavigatePath()}
      </div>
    )
  }
  else {
    return (
      <Fragment>
        <div className='mainsection'>
          <div className="insidesection">
            <div className={styles.cartsectiontextss}>
              Checkout
            </div>
            <div className={styles.cartsection}>
              <div className={styles.leftcartsection}>
                <div className={styles.progressbarcheck}>
                  <div className={styles.leftbarprogress}>
                    <div className={styles.orderstepsection} onClick={() => setStep(0)}>
                      <div className={styles.numbercountorderstep}>1</div>
                      <div className={styles.setordertextactive} >Select Address</div>
                    </div>
                  </div>
                  <div className={styles.rightbarprogress} onClick={() => setStep(step > 1 ? step - 1 : step)}>
                    <div className={styles.orderstepsection} >
                      <div className={`${step === 1 || step === 2 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>2</div>
                      <div className={`${step === 1 || step === 2 ? styles.setordertextactive : styles.setordertext}`}>Order Summary</div>
                    </div>
                  </div>
                  <div className={styles.rightbarprogress} onClick={() => setStep(step)}>
                    <div className={styles.orderstepsection} >
                      <div className={`${step === 2 ? styles.numbercountorderstep : styles.numbercountdisabled}`}>3</div>
                      <div className={`${step === 2 ? styles.setordertextactive : styles.setordertext}`}>Select the payment</div>
                    </div>
                  </div>
                </div>
                <div className="mt-3 mb-3">
                  {step === 0 && <div>
                    <Addressdetail state={cart} setStep={setStep} step={step} setName={setName} name={name} />
                  </div>}
                  {step === 1 && <div>
                    {/* <Payment /> */}
                    <Confirmorders name={name} totalPrice={totalPrice} setStep={setStep} step={step} setCouponName={setCouponName} addressid={name}
                      setShippingAmount={setShippingAmount}
                      overallamount={Math.round(Number(AllchargeCount) + Number(OverallTotalPrice))}
                      setDiscountAmount={setDiscountAmount}
                      discountamount={discountamount}
                    />
                  </div>}
                  {step === 2 && <div>
                    <Payment addressid={name} totalPrice={toatalpricecart} couponname={couponname} totalvalue={totalvalue}
                      checkshippingamount={checkshippingamount}
                      toatalpricecart={toatalpricecart}
                      
                    />
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
                        {cart?.cartData?.reduce((acc, current) => acc + current.quantity, 0)}
                      </div>
                    </div>
                    <div className={styles.splitcartsections}>
                      <div>
                        Price</div>
                      <div className={styles.textprice}>
                        A${cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0)}
                      </div>
                    </div>
                    {/* <div className={styles.splitcartsections}> */}
                    {/* <div>
                        Discount</div>
                      <div className={styles.textprice}>
                        ${cart?.cartData?.reduce((acc, current) => acc + Number(current.salePrice - current.actualPrice), 0)}
                      </div> */}
                    {/* </div> */}

                    {deliveryChargeAmount ? <>
                      <div className={styles.splitcartsections}>
                        <div>
                          Delivery Charges</div>
                        <div className={styles.textprice}>
                          A${deliveryChargeAmount}
                        </div>
                      </div>
                    </> : <></>}




                    <div className={styles.splitcartsections}>
                      <div>
                        GST</div>
                      <div className={styles.textprice}>
                        {/* A${Number(Sample) + Number(chargeDelivery)} */}
                        A${GSTTotalValue}
                      </div>
                    </div>

                    {discountamount?.result ? <>
                      <div className={styles.splitcartsections}>
                        <div>
                          Item Discount
                        </div>
                        <div className={styles.textpricegreen}>
                          {/* A${Number(Sample) + Number(chargeDelivery)} */}
                          - A${discountamount?.result}
                        </div>
                      </div>
                    </> : null}
                  </div>
                  <div className={styles.borderdashedsection}>
                    <div className={styles.insideborderdashedsection}></div>
                  </div>
                  <div className={styles.splitcartsections}>
                    <div className={styles.pricetextss}>
                      Total Payable</div>
                    <div className={styles.textprices}>

                      {discountamount?.message ? <>
                        A${Math.round(Number(AllchargeCount) + Number(OverallTotalPrice))}
                      </> : <>

                        {discountamount?.result ? <>
                          A${Math.round(Number(AllchargeCount) + Number(OverallTotalPrice)) - Number(discountamount?.result)}

                        </> : <>
                          A${Math.round(Number(AllchargeCount) + Number(OverallTotalPrice))}

                        </>}
                      </>}


                      {/* A${cart?.cartData?.reduce((acc, current) => acc + current.quantity * current.salePrice, 0) + Number(Sample) + Number(deliveryChargeAmount)} */}

                    </div>
                  </div>


                  <div className="mt-3 mb-3">

                    {/* {tokes ?
                      <Button className={styles.checkoutbutton} onClick={() => router.push("/checkout")}>Place Order</Button> :
                      <Button className={styles.checkoutbutton} onClick={() => router.push("/login?redirect=/checkout", { kalai: "thala" })}>Place Order</Button>
                    } */}
                  </div>


                </div>
              </div>
            </div>
          </div>
        </div>


        <div className={styles.emptyboxrightcolor}>
        </div>
        <div className={styles.emptyboxleftcolor}>
        </div>
        <div className={styles.emptyboxleftcolor1}>
        </div>
        <div className={styles.emptyboxleftcolor2}>
        </div>
        <div className={styles.emptyboxleftcolor3}>
        </div>
        <div className={styles.emptyboxleftcolor4}>
        </div>
      </Fragment>
    )
  }

}

export default dynamic(() => Promise.resolve(Checkout), { ssr: false })