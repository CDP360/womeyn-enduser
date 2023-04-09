import React, { useState, useEffect } from "react";
import styles from "./styles/Order.module.scss";
import serachicon from "../../../../assests/homepage-logos/serachicon.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Allorders from './components/allorders/Allorders'
import { GetOrders } from "../../../../services/customer-order-service/customer-order-service";
import Inprogress from "./components/inprogress/Inprogress";
import Cancelled from "./components/cancelled/Cancelled";
import Delivered from "./components/delivered/Delivered";
import CancelledBySeller from "./components/cancelledbyseller/CancelledBySeller";
function Order({error}) {
  const history = useRouter();
  const [Orders, setOrders] = useState([]);
  const [loading,setLoading]=useState(false);
  const traking = () => {
    history.push("/order/tracking");
  };
  const [step, setStep] = useState(0);
  useEffect(() => {
    setLoading(true);
    GetOrders().then((res) => {
      setOrders(res?.data?.results);
      setTimeout(()=>{
        setLoading(false);
      },500)
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })
  }, [error]);

  const NavigateRedirect = () => {
    history?.push("/errorboundary")
}
  if(error)
  {
    return (
      <div>
          {NavigateRedirect()}
      </div>
  )
  }
  else
  {
    return (
      <div>
        <div className={styles.couponsInputContainer}>
          <input className={styles.couponsSearch} placeholder="Search here..." />
          <Image src={serachicon} className={styles.searchImg} />
        </div>
        <div className={styles.middlecontainer}>
          <div className={styles.middlecontainer2}>
            <h5 className={styles.orderstexts}>Orders</h5>
            <div className={styles.subcontainer}>
              <div className={styles.subcontainer1}>
                <div
                  className={
                    step == 0
                      ? `${styles.activeTabText}`
                      : `${styles.inActiveTabText}`
                  }
                  onClick={() => setStep(0)}
                >
                  All
                </div>
                <div
                  className={
                    step == 1
                      ? `${styles.activeTabText}`
                      : `${styles.inActiveTabText}`
                  }
                  onClick={() => setStep(1)}
                >
                  In Progress
                </div>
                <div
                  className={
                    step == 2
                      ? `${styles.activeTabText}`
                      : `${styles.inActiveTabText}`
                  }
                  onClick={() => setStep(2)}
                >
                  Cancelled By Seller
                </div>
                <div
                  className={
                    step == 3
                      ? `${styles.activeTabText}`
                      : `${styles.inActiveTabText}`
                  }
                  onClick={() => setStep(3)}
                >
                  Cancelled
                </div>
  
                <div
                  className={
                    step == 4
                      ? `${styles.activeTabText}`
                      : `${styles.inActiveTabText}`
                  }
                  onClick={() => setStep(4)}
                >
                  Delivered
                </div>
              </div>
              <hr className={styles.hrSub} />
            </div>
            {step === 0 && <div>
              <Allorders Orders={Orders} traking={traking} loading={loading}/>
            </div>}
            {step === 1 && <div>
              <Inprogress Orders={Orders} traking={traking} loading={loading}/>
            </div>}
            {step === 2 && <div>
              <CancelledBySeller Orders={Orders} traking={traking} loading={loading}/>
            </div>}
            {step === 3 && <div>
              <Cancelled Orders={Orders} traking={traking} loading={loading}/>
  
            </div>} 
            {step===4 && <div>
              <Delivered Orders={Orders} traking={traking} loading={loading}/>
              
              </div>}
          </div>
        </div>
      </div>
    );
  }
  
}

export default Order;
