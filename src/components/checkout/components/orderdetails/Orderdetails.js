import React, { Fragment } from 'react'
import styles from './styles/Orderdetails.module.scss';
import map from '../../../../assests/womeynlogos/map.png';
import cartshow from '../../../../assests/womeynlogos/cartshow.png';
import truck from '../../../../assests/womeynlogos/truck.png';
import fire from '../../../../assests/womeynlogos/fire.png';


import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
function Orderdetails({ state }) {
  return (
    <Fragment>
      <div className={styles.mainorderpage}>
        <div className={styles.addresspageorder}>
          <div className={styles.leftorders}>
            <Image src={map} alt="no image" className={styles.map} />
          </div>
          <div className={styles.rightorders}>
            <div className={styles.shippingtext}>
              Shipping Address
            </div>
            <div className={`mt-2 mb-2 ${styles.nameaddress}`}>
              Azhar Ahmad Ar Rachman (Home)
            </div>
            <div className={`mt-2 mb-2 ${styles.addressorders}`}>
              177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village.
            </div>
            <div>
              <div>
                Edit Address
              </div>
            </div>
          </div>

        </div>

        {/* <div className={styles.addresspageorder}>
          <div className={styles.leftorders}>
            <Image src={cartshow} alt="no image" className={styles.map} />
          </div>
          <div className={styles.rightorders}>
            <div className={styles.shippingtext}>
              Nike Official
            </div>
            <div>
              Azhar
            </div>

            {state?.cartData?.map((item, index) => {
              return (
                <>
                  <div className={`mt-3 mb-4 ${styles.ordersectiondetailsorder}`}>
                    <div className={styles.splitorderitems}>
                      <div>
                        <div className={styles.orderimagebox}></div>
                      </div>
                      <div className={styles.gapsectiontext}>
                        <div className={styles.ordertitlename}>{item.name.slice(0, 10)}</div>
                        <div>Rs.{item.price}</div>
                        <div>{item?.title?.slice(0, 15)}</div>
                      </div>
                    </div>
                    <div className={styles.oneitems}>{1} Item(s)</div>
                  </div>
                </>
              )
            })}

          </div>

        </div> */}

        {/* <div className={styles.addresspageorder}>
          <div className={styles.leftorders}>
            <Image src={truck} alt="no image" className={styles.maps} />
          </div>
          <div className={styles.rightorders}>
            <div className={styles.shippingtext}>
              Shipment
            </div>


            <div className="mt-4 mb-4">
              <Form.Select aria-label="Default select example" className="orders-form-select">
                <option>Regular (2-4 Work days)</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </div>

            <div className={`"mt-4 mb-4 ${styles.couries}`}>
              <div className={styles.insidesectionsplitorder}>
                <div className={styles.leftcouries}>Courier</div>
                <div className={styles.rightcouries}>

                  <Form.Select aria-label="Default select example" className="orders-form-selectnew">
                    <option>Rp 23.000</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>  
                    <option value="3">Three</option>
                  </Form.Select>
                </div>

              </div>
              <div className="d-flex gap-2">

                <div >
                  <Image src={fire} alt="no image" className={styles.fire} />
                </div>
                <div>
                  Flaship
                </div>
              </div>
            </div>


          </div>

        </div> */}
      </div>
    </Fragment>
  )
}

export default dynamic(() => Promise.resolve(Orderdetails), { ssr: false });