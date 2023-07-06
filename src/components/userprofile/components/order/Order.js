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
import Ordertarcking from './components/ordertracking/Ordertarcking';
function Order({ error }) {
  const history = useRouter();
  const [Orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);
  const [trackid, setTrackId] = useState("");


  const traking = () => {


    //   history.push({
    //     pathname: '/order/tracking',
    //     query:{id:"WOD1230423135443632"},
    // })
  };
  const [step, setStep] = useState(0);
  useEffect(() => {
    setLoading(true);
    GetOrders().then((res) => {
      setOrders(res?.data?.results);
      setTimeout(() => {
        setLoading(false);
      }, 500)
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    })

    if (error) {
      localStorage.removeItem("userid");
      localStorage.removeItem("userToken");
      localStorage.removeItem("whish");
      localStorage.removeItem("user");
      localStorage.removeItem("auth");
      localStorage.removeItem("productid");
      localStorage.removeItem('signupuser');
      history.push("/login");
    }
  }, [error, trackid]);


  const [serachordersname,setSearchOrdersname]=useState("");


  


  return (
    <div>
      <div className={styles.couponsInputContainer}>
        <input className={styles.couponsSearch} placeholder="Search here..." onChange={(e)=>setSearchOrdersname(e?.target?.value)} value={serachordersname}/>
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
            <Allorders Orders={Orders} traking={traking} loading={loading} setTrackId={setTrackId} serachordersname={serachordersname}/>
          </div>}
          {step === 1 && <div>
            <Inprogress Orders={Orders} traking={traking} loading={loading} serachordersname={serachordersname}/>
          </div>}
          {step === 2 && <div>
            <CancelledBySeller Orders={Orders} traking={traking} loading={loading} />
          </div>}
          {step === 3 && <div>
            <Cancelled Orders={Orders} traking={traking} loading={loading} />

          </div>}
          {step === 4 && <div>
            <Delivered Orders={Orders} traking={traking} loading={loading} />
          </div>}


        </div>
      </div>
    </div>
  );
}



export default Order;
