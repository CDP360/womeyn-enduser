import React, { useState, useEffect } from "react";
import style from "./styles/Ordertracking.module.scss";
import { ProgressBar, Step } from "react-step-progress-bar";
import { Divider, Steps } from 'antd';
import { GetOrders } from "../../../../../../services/customer-order-service/customer-order-service";
function Ordertarcking({ Orders }) {
  const [step, setIndex] = useState(2);
  const dataes="Fri ,7th Apr 23"
  const data = [
    {
      id: 1,
      name: 1
    },
    {
      id: 2,
      name: 2
    },
    {
      id: 3,
      name: 3
    },
    {
      id: 4,
      name: 4
    },
    {
      id: 5,
      name: 5
    }
  ]

  useEffect(() => {
    GetOrders().then((res) => {
      res?.data?.results?.map((items, index) => {
      })
    }).catch((err) => {
      console.log(err);
    })
    // data.map((item, index) => {
    //   if (item?.stateId === 1) {
    //     setIndex(item?.stateId);
    //   }
    //   else if (item?.stateId === 2) {
    //     setIndex(item?.stateId);
    //   }
    //   else if (item?.stateId === 3) {
    //     setIndex(item?.stateId);
    //   }
    //   else if (item?.stateId === 4) {
    //     setIndex(item?.stateId);
    //   }
    //   else {
    //     setIndex(item?.stateId);
    //   }
    // })

  }, [])

  const description = 'This is a description.';
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
              <h6 className="mt-2">On Progress</h6>
            </div>


            <div className="mt-3 mb-4">

              <Steps
                progressDot
                current={step}
                direction="vertical"
                // className={style.kalai}
                size="large"
                items={[
                  {
                    title: `Order Confirmed  ${dataes}`,
                    description,
                    subTitle:"",
               
                  },
                  {
                    title: 'Shipped',
                    description: 'Parcel menuju ke Staging SS Kab. Sleman - Sardonoharjo.',
                    subTitle:"",
                   
                    // status:"process"

                  },
                  {
                    title: 'In Progress',
                    description: 'Parcel menuju ke Hub Karanganyar (proses transit).',
                    subTitle:"",
                   
                    // status:"error"
                  },
                  {
                    title: 'Out For Delivery',
                    description: 'Parcel sudah tiba di SS Kota Surabaya - Sawahan untuk menuju ke hub.',
                    // icon:"no image",
                    // status:"process"
                  },
                  {
                    title: 'Delivered',
                    description: 'Parcel menuju ke Staging SS Kab. Sleman - Sardonoharjo.',
                    subTitle:"",
                    // icon:"no image",
                    // status:"process"
                  },
                ]}
              />
            </div>


            <div>

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
