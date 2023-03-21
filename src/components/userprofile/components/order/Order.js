import React, { useState, useEffect } from "react";
import styles from "./styles/Order.module.scss";
// import serachicon from '../../assests/homepage-logos/serachicon.png';
import serachicon from "../../../../assests/homepage-logos/serachicon.png";
import Image from "next/image";

import { useRouter } from "next/router";
import { GetOrders } from "../../../../services/user-profile-service/user-profile-services";
import Allorders from './components/allorders/Allorders'
const data = [
  {
    id: 1,
    status: "In process",
    delivery: "Delivery Date:3 July 2021",
    invoice: "INV/20210703/MPL/1374771502",
    subHead: "Shoes Waffle One",
    amount: "$24",
    subHeader: "Additional Details - Size / Color",
    button: "Track",
    cancelb: "Cancel",
  },
  {
    id: 2,
    status: "Delivered",
    delivery: "Delivery Date:3 July 2021",
    invoice: "INV/20210703/MPL/1374771502",
    subHead: "Shoes Waffle One",
    amount: "$24",
    subHeader: "Additional Details - Size / Color",
    button: "Review",
  },
];

function Order() {
  const history = useRouter();

  const [Orders,setOrders]=useState([]);
  const traking = () => {
    history.push("/order/tracking");
  };
  const [step, setStep] = useState(0);

  useEffect(() => {
    GetOrders().then((res) => {
console.log(res?.data?.results,"wrong");
setOrders(res?.data?.results);
    }).catch((err) => {
      console.log(err);
    })
  }, [])
  return (
    <div>
      {/* <div className={styles.middlelogo}>
        <div className={styles.inputsearchsection}>
          <input
            type="text"
            placeholder="Search here..."
            className="inputserach"
          />
          <div>
            <Image src={serachicon} alt="no image" className="serachicon" />
          </div>
        </div>
      </div> */}

      <div className={styles.couponsInputContainer}>
        <input className={styles.couponsSearch} placeholder="Search here..." />
        <Image src={serachicon} className={styles.searchImg} />
      </div>

      <div className={styles.middlecontainer}>
        <div className={styles.middlecontainer2}>
          <h5>Orders</h5>
          <div className={styles.subcontainer}>
            <div className={styles.subcontainer1}>
              <p
                className={
                  step == 0
                    ? `${styles.activeTabText}`
                    : `${styles.inActiveTabText}`
                }
                onClick={() => setStep(0)}
              >
                All
              </p>
              <p
                className={
                  step == 1
                    ? `${styles.activeTabText}`
                    : `${styles.inActiveTabText}`
                }
                onClick={() => setStep(1)}
              >
                Success
              </p>
              <p
                className={
                  step == 2
                    ? `${styles.activeTabText}`
                    : `${styles.inActiveTabText}`
                }
                onClick={() => setStep(2)}
              >
                In Progress
              </p>
              <p
                className={
                  step == 3
                    ? `${styles.activeTabText}`
                    : `${styles.inActiveTabText}`
                }
                onClick={() => setStep(3)}
              >
                Cancelled
              </p>
            </div>
            <hr className={styles.hrSub} />
          </div>

          {step === 0 && <div>

            <Allorders Orders={Orders}/>

            {/* {data.map((item, index) => {
              return (
                <>
                  <div className={styles.insidecontainer}>
                    <p
                      className={
                        item.status == "Delivered"
                          ? `${styles.statusDel}`
                          : `${styles.status}`
                      }
                    >
                      {item.status}
                    </p>
                    <p className={styles.delivery}>{item.delivery}</p>
                    <p className={styles.delivery}>
                      Invoice Number:
                      <span className={styles.invoicedata}>
                        {item.invoice}
                      </span>{" "}
                    </p>
                  </div>
                  <div className={styles.insidecontainer1}>
                    <div className={styles.trackbtndivider}>
                      <div className={styles.img}></div>
                      <div className={styles.insidecontainer2}>
                        <p className={styles.subHead}>{item.subHead}</p>
                        <p className={styles.subHeader}>{item.subHeader}</p>
                      </div>
                      <div className={styles.insidecontainer3}>
                        <h5>{item.amount}</h5>
                      </div>
                    </div>
                    <div className={styles.buttontrack} onClick={traking}>
                      <button className={styles.trackbutton} onClick={traking}>
                        {item.button}
                      </button>
                      {item.status == "Delivered" ? (
                        <></>
                      ) : (
                        <button className={styles.cancelbutton}>
                          {item.cancelb}
                        </button>
                      )}
                    </div>
                  </div>
                  <hr className={styles.hrcontainer} />
                </>
              );
            })} */}
          </div>}
        </div>
      </div>
    </div>
  );
}

export default Order;
