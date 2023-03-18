import React, { Fragment, useState } from 'react'
import styles from './styles/Orderdetails.module.scss';
import map from '../../../../assests/womeynlogos/map.png';
import cartshow from '../../../../assests/womeynlogos/cartshow.png';
import truck from '../../../../assests/womeynlogos/truck.png';
import fire from '../../../../assests/womeynlogos/fire.png';


import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import deleteicons from '../../../../assests/cart-logos/deleteicons.png';
function Orderdetails({ state,handleCheck }) {

  const [selectAddress, setCheckAddress] = useState("");

  const data = [
    {
      id: 1,
      address: "Shipping Address",
      city: "Azhar Ahmad Ar Rachman (Home)",
      mainaddress: "177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village."
    },
    {
      id: 2,
      address: "Shipping Address",
      city: "Azhar Ahmad Ar Rachman (Home)",
      mainaddress: "177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village."
    },
    {
      id: 3,
      address: "Shipping Address",
      city: "Azhar Ahmad Ar Rachman (Home)",
      mainaddress: "177A Bleecker Street, New York City, NY 10012-1406, on the corner of Bleecker Street and Fenno Place in the heart of Greenwich Village."
    }
  ]

  const handleAddress = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setCheckAddress(value);
    }
    // if (checked) {
    //   setCheckAddress([...selectAddress, value]);
    // } else {
    //   setCheckAddress(selectAddress.filter((e) => e != value));
    // }
  };

  return (
    <Fragment>
      <div className={styles.mainorderpage}>
        <div className={styles.addnewaddressbutton}>
          <div className={styles.addnewaddressbuttonsubmenu}>
            <button className={styles.addnewaddressbutton}>
              Add New Address
            </button>
          </div>
        </div>
        <div className="mt-1">
          {data?.map((item, index) => {
            return (
              <div className="mb-2">
                <div className={styles.addresspageorder}>
                  <div className={styles.insideaddresspadding}>
                    <label className={styles.control} name={item.id}>
                      <input
                        onChange={handleAddress}
                        type="checkbox"
                        name={item?.id}
                        value={item?.id}
                      />
                      <span className={styles.control__content}><div className={styles.leftorders}>
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
                        </div>
                      </span>
                    </label>
                  </div>


                </div>
              </div>
            )
          })}
        </div>

        <div>

          <button className={styles.DeliveryHere} onClick={handleCheck}>
            Delivery Here
          </button>
        </div>

        {/* <div>
              <div className={styles.editaddress}>
                Edit Address
              </div>
            </div> */}
        {/* <div className={styles.splitedits}>
             <div className={styles.editaddresss}>
             Edit Address
              </div>
              <div className={styles.editaddresss}>
             <div className={styles.removebuttonssection}>
             <div> 
                <Image src={deleteicons} alt="no image" className={styles.mapremove}/>
              </div>
             <div>
             Remove
              </div>
             </div>
              </div>
            </div> */}

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