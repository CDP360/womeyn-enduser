import React, { Fragment, useState, useEffect } from 'react'
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
import { toast } from 'react-toastify';
import { Addaddress, GetAddressData } from '../../../../services/user-profile-service/user-profile-services';
import ModelAddress from './ModelAddress';
import { useForm } from "react-hook-form";
function Addressdetail({ state, step, setStep, setName }) {
  const [selectAddress, setCheckAddress] = useState("");
  const [address, setAddress] = useState([]);
  useEffect(() => {
    GetAddressData().then((res) => {
      setAddress(res?.data?.results);
      console.log(res?.data?.results, "kl")
    }).catch((err) => {
      console.log(err);
    })
  }, [])


  const overalladdress = address?.length > 1;
  const handleAddress = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    if (checked) {
      setCheckAddress(value);
    }
  };

  const handleDeliverAddress = () => {
    if (selectAddress.length === 0) {
      const overs = "Please Select Address";
      toast.error(overs,
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
    }
    if (selectAddress) {
      setName(selectAddress);
      setStep(step + 1);
    }
  }
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const SubmitsAddress = (data) => {
    const address = {
      name: data?.name,
      contactNumber: data?.contactno,
      alternateContactNumber: data?.alternatecontactno,
      fullAddress: data?.address,
      pinCode: data?.pincode,
      landMark: data?.landmark,
      cityName: data?.city,
      stateName: data?.state,
      countryName: "Australia",
    }
    Addaddress(address).then((res) => {
      toast.success("Address Added!!",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        }
      );
      window.location.reload();
      handleClose();

    }).catch((err) => {
      console.log(err);
    })
  }
  return (
    <Fragment>
      <div className={styles.mainorderpage}>
        <div className={styles.addnewaddressbutton}>
          <div className={styles.addnewaddressbuttonsubmenu}>
            <ModelAddress register={register} show={show} errors={errors} SubmitsAddress={SubmitsAddress} handleSubmit={handleSubmit} handleShow={handleShow} handleClose={handleClose} />

          </div>
        </div>
        <div className="mt-1">
          {address?.map((item, index) => {
            return (
              <div className="mb-2" key={index}>
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
                            {item?.cityName} <span>{item?.stateName}</span>
                          </div>
                          <div className={`mt-2 mb-2 ${styles.nameaddress}`}>
                            {item?.countryName}
                          </div>
                          <div className={`mt-2 mb-2 ${styles.addressorders}`}>

                            {item?.fullAddress}
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
          {address?.length > 0 && <button className={styles.DeliveryHere} onClick={handleDeliverAddress}>
            Delivery Here
          </button>}
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

export default dynamic(() => Promise.resolve(Addressdetail), { ssr: false });