import React, { Fragment, useState, useEffect, useRef } from 'react'
import styles from './styles/Orderdetails.module.scss';
import map from '../../../../assests/womeynlogos/map.png';
import cartshow from '../../../../assests/womeynlogos/cartshow.png';
import truck from '../../../../assests/womeynlogos/truck.png';
import fire from '../../../../assests/womeynlogos/fire.png';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import dynamic from 'next/dynamic';
import Spinner from 'react-bootstrap/Spinner';
import { toast } from 'react-toastify';
import { Addaddress, GetAddressData } from '../../../../services/user-profile-service/user-profile-services';
import ModelAddress from './ModelAddress';
import { useForm } from "react-hook-form";
function Addressdetail({ state, step, setStep, setName, name }) {



  let autoComplete;


  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [pincodes, setPincodes] = useState("");
  const [query, setQuery] = useState("");
  const autoCompleteRef = useRef(null);





  function handleScriptLoad(updateQuery, autoCompleteRef) {
    autoComplete = new window.google.maps.places.Autocomplete(
      autoCompleteRef.current,
      { types: ["postal_code"], componentRestrictions: { country: "AUS" } }
    );
    autoComplete.setFields([
      "address_components",
      "formatted_address",
      "geometry",
    ]);
    autoComplete.addListener("place_changed", () =>
      handlePlaceSelect(updateQuery)
    );

  }

  const getAddressFromGoogle = (event) => {
    let value = event.target.value;
    setQuery(value);
  };
  async function handlePlaceSelect(updateQuery) {
    const addressObject = autoComplete.getPlace();


    const query = addressObject;
    updateQuery(query);
    setPincodes(query);
    // console.log(addressObject);
  }

  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (
          script.readyState === "loaded" ||
          script.readyState === "complete"
        ) {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };
  useEffect(() => {
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );

    setPincodes(autoCompleteRef?.current?.value);



  }, []);

  useEffect(() => {
    if (query && query.address_components) {
      for (const component of query.address_components) {
        const componentType = component.types[0];
        if (componentType === "locality") {
          //   formikPersonalDetails.values.cityName = component.long_name;
          setLastName(component.long_name)
        }
        if (componentType === "administrative_area_level_1") {

        }
        if (componentType === "country") {
          if (component.long_name === "Australia") {
            setFirstName(component.long_name)
          }
        }
        if (componentType === "postal_code") {
          setQuery(component.long_name);
        }
      }

    }
  }, [query]);




















  const [selectAddress, setCheckAddress] = useState("");
  const [address, setAddress] = useState([]);
  const [topping, setTopping] = useState("");

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetAddressData().then((res) => {
      setAddress(res?.data?.results);
    }).catch((err) => {
      console.log(err);
    })
  }, [])



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
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setStep(step + 1);
      }, 1000)
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
    const addresss = {
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
    Addaddress(addresss).then((res) => {
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

  const onOptionChange = (e) => {
    // setTopping(e?.target.value)
    // setName(e?.target.value);
    setCheckAddress(e?.target.value);
    setName(e?.target.value);


  }

  console.log(address, "address")
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
              <>
                <div className={styles.questions} key={index}>
                  <div className={styles.questions__question}>
                    <input type="radio" name={item?.id} value={item?.id} id={item?.id} checked={name == item?.id} onChange={onOptionChange} />
                    <label for={item?.id}>
                      <div className={styles.shippingtextname}>
                        {item?.name} ,  <span> ContactNo : {item?.contactNumber}</span>
                      </div>
                      <div className="mb-2 mt-2">
                        <div className={styles.shippingtext}>
                          {item?.cityName},<>{item?.stateName}</>,<> {item?.countryName}</>
                        </div>
                      </div>
                      {/* <div className={`mt-2 mb-2 ${styles.nameaddress}`}>
                        {item?.countryName}
                      </div> */}
                      <div className={`mt-2 mb-2 ${styles.addressorders}`}>
                        {item?.fullAddress}
                      </div>

                    </label>
                  </div>
                </div>
              </>
            )
          })}
        </div>
        <div className="mt-5">
          {address?.length > 0 && <button className={styles.DeliveryHere} onClick={handleDeliverAddress}>
            {loading ? <>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />
              <span className="ms-3">Loading...</span>
            </> : <>
              Delivery Here

            </>}
          </button>}
        </div>
      </div>
    </Fragment>
  )
}

export default dynamic(() => Promise.resolve(Addressdetail), { ssr: false });