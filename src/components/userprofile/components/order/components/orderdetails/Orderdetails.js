import React, { useState, useRef, useEffect } from "react";
import styles from "./styles/Orderdetails.module.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
function Orderdetails() {


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [topping, setTopping] = useState("");

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
      `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}&libraries=places`,
      () => handleScriptLoad(setQuery, autoCompleteRef)
    );

    setPincodes(autoCompleteRef?.current?.value);



  }, [pincodes, query]);

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




  return (
    <div className="mainsection">

      <div>
        <input type="text"
          value={query}
          ref={autoCompleteRef}
          onChange={getAddressFromGoogle}
        />

      </div><br />

      <div>
        <input type="text" value={lastname} />

      </div><div><br />
        <input type="text" value={firstname} />

      </div>

      <div className='mt-3'>
        <button>submit</button>
      </div>


      <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input type="text"
              value={query}
              ref={autoCompleteRef}
              onChange={getAddressFromGoogle}
            />




          </div><br />

          <div>
            <input type="text" value={lastname} />

          </div><div><br />
            <input type="text" value={firstname} />

          </div>

          <div className='mt-3'>
            <button>submit</button>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>







    </div>
  );
}

export default Orderdetails;
