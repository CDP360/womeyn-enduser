import React from "react";
import styles from "./styles/Order.module.scss";
// import serachicon from '../../assests/homepage-logos/serachicon.png';
import serachicon from "../../../../assests/homepage-logos/serachicon.png";
import Image from "next/image";
import Button from "react-bootstrap/Button";
import { useRouter } from "next/router";

const data = [
  {
    id: 1,
    status: "in process",
    delivery: " Delivery Date:3 July 2021",
    invoice: "INV/20210703/MPL/1374771502",
    subHead: "Shoes Waffle One",
    amount: "$24",
    subHeader: "Additional Details - Size / Color",
    button: "Track",
    cancelb: "cancel",
  },
  {
    id: 2,
    status: "Delivered",
    delivery: " Delivery Date:3 July 2021",
    invoice: "INV/20210703/MPL/1374771502",
    subHead: "Shoes Waffle One",
    amount: "$24",
    subHeader: "Additional Details - Size / Color",
    button: "Review",
  },
];

function Order() {
  const history = useRouter();
  const traking = () => {
    history.push("/order/tracking");
  };
  return (
    <div>
      <div className={styles.middlelogo}>
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
      </div>

      <div className={styles.middlecontainer}>
        <div className={styles.middlecontainer2}>
          <h5>Orders</h5>

          <div className={styles.subcontainer}>
            <div className={styles.subcontainer1}>
              <p>All</p>
              <p>success</p>
              <p>In Progress</p>
              <p>Cancelled</p>
            </div>
            <hr className={styles.hrSub} />
          </div>
          {data.map((item, index) => {
            return (
              <>
                <div className={styles.insidecontainer}>
                  <p className={styles.status}>{item.status}</p>
                  <p className={styles.delivery}>{item.delivery}</p>
                  <p className={styles.delivery}>
                    Invoice Number:
                    <span className={styles.invoicedata}>{item.invoice}</span>{" "}
                  </p>
                </div>
                <div className={styles.insidecontainer1}>
                  <div className={styles.img}></div>
                  <div className={styles.insidecontainer2}>
                    <h6>{item.subHead}</h6>
                    <p>{item.subHeader}</p>
                  </div>
                  <div className={styles.insidecontainer3}>
                    <h5>{item.amount}</h5>
                  </div>
                  <div className={styles.buttontrack} onClick={traking}>
                    <button className={styles.trackbutton} onClick={traking}>
                      {item.button}
                    </button>
                    {/* <button className={styles.trackbutton}>
                      {item.cancelb}
                    </button> */}
                  </div>
                </div>
                <hr className={styles.hrcontainer} />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Order;
