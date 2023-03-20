import React from "react";
import style from "./styles/Ordertracking.module.scss";
function Ordertarcking() {
  return (
    <div className="mainsection">
      <div className="insidesection">
        <div>
      <div className={style.inside}>
        <p className={style.product}>Product Tracking</p>
        <button className={style.show}>Shop More</button>
        </div>
      </div>
      <div className={style.insidecontainer}>
        <div className={style.leftinsidesection}>
          <div className={style.leftContainer1}>
            <p className={style.shipmentpara}>Shipment Status</p>
            <h6>On Progress</h6>
          </div>
        </div>
        <div className={style.rightinsidesection}>
          <div className={style.rightContainer1}>
            <div className={style.rightContainersection1}>
              <div className={style.innerstyle}>
                <p className={style.innercorrier}>Courier</p>
                <p>Flaship</p>
              </div>
              <div className={style.inner}>
                <p className={style.innercorrier}>Service</p>
                <p>Regular (ETA 3-4 days)</p>
              </div>
              <hr className={style.hrcontain} />

              <div>
                <p className={style.receipt}>Receipt Number</p>
                <p>1000162584972</p>
              </div>
              <hr className={style.hrcontain} />
              <div>
                <p className={style.receipt}>Seller</p>
                <p>Niki Official</p>
              </div>
              <hr className={style.hrcontain} />
              <div>
                <p className={style.receipt}>Buyer</p>
                <p>Achmad Fiqrih Ar Rachman</p>
                <p>
                  177A Bleecker Street, New York City, NY 10012-1406, on the
                  corner of Bleecker Street and Fenno Place in the heart of
                  Greenwich Village.
                </p>
              </div>
              <hr className={style.hrcontain} />
            </div>
            <div className={style.rightContainersection2}>
              <div className={style.rightinsidecontainer}>
                <div>
                <div className={style.img1}></div>

                </div>
                <div className={style.rightinsidecontainer1}>
                <p className={style.paracontent}>Nikki Waffel one</p>
                <p className={style.paracontent2}>Color: Blue</p>
                <h5 className={style.dollar}>$24</h5>
                <h6 className={style.cancel}>Cancel order</h6>
                </div>
               
              </div>
              
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Ordertarcking;
