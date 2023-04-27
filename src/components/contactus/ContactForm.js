import React, { useState } from "react";
import styles from "./styles/Contactus.module.scss";
import Form from "react-bootstrap/Form";
import { ContactText } from "../../consttext/Contactconst";

import { toast } from 'react-toastify';
import { ConatctformsUser } from "../../services/contact-service/contact-service";
import Spinner from 'react-bootstrap/Spinner';

import { Element, Link } from 'react-scroll'

function ContactForm() {

  const [step1, setStep1] = useState(false)

  const [checks, setChecks] = useState([]);

  const [loading, setLoading] = useState(false);

  const [contactforms, setContactForms] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
    phone: "",
  })

  const { firstName, lastName, email, message, phone } = contactforms;
  const handlechange = (e) => {
    setContactForms({ ...contactforms, [e.target.name]: e.target.value });
  }

  const [auth, setAuth] = useState(true);


  const [error, setError] = useState(false);
  const [errorhelp, setErrorhelp] = useState(false);


  const Tests = () => {
    if (checks?.length === 0) {
      setErrorhelp(true);
    }
  }

  const onSubmit = (e) => {

    e.preventDefault();

    if (firstName?.length === 0 || lastName?.length === 0 || email?.length === 0 || message?.length === 0 || phone?.length === 0) {
      setError(true);
      Tests();
    }

    if (firstName && lastName && email && message && phone) {
      const forms = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        message: message,
        contactNo: phone,
        contactReasons: checks?.toString()
      }

      setLoading(true);

      ConatctformsUser(forms).then((res) => {
        toast.success("Thanks for contacting us. We will reach you shortly...", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        })

        setContactForms({
          firstName: "",
          lastName: "",
          email: "",
          message: "",
          phone: "",
        });
        if (res) {
          setChecks([]);
        }
        setAuth(false);
        setTimeout(() => {
          setLoading(false);
        }, 500)
      }).catch((err) => {
        console.log(err);
      })

    }






  }




  const handleVlaues = (e) => {
    const value = e.target.value;

    const checked = e.target.checked;
    if (checked) {
      setChecks([...checks, value]);
    } else {
      setChecks(checks.filter((e) => e != value));
    }
  }




  return (
    <div className={styles.contactformsections}>


      <div className={styles.element} id="skills" >
        Section one
      </div>
      <form>
        <div className={styles.insidecontactforms}>
          <div className="col-lg-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.firstNametexts}>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name..."
                className={styles.contactformtextfield}
                name="firstName"
                value={firstName}
                onChange={handlechange}
              />
              {error && firstName?.length <= 0 ? <span className="active">first Name is Required!!!</span> : <></>}

            </Form.Group>
          </div>
          <div className="col-lg-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.firstNametexts}>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name..."
                className={styles.contactformtextfield}
                name="lastName"
                value={lastName}
                onChange={handlechange}
              />
              {error && lastName?.length <= 0 ? <span className="active">Last Name is Required!!!</span> : <></>}


            </Form.Group>
          </div>
        </div>

        <div className="mt-3">
          <div className={styles.insidecontactforms}>
            <div className="col-lg-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.firstNametexts}>Mail</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Mail..."
                  className={styles.contactformtextfield}
                  name="email"
                  value={email}
                  onChange={handlechange}
                />
                {error && email?.length <= 0 ? <span className="active">email is Required!!!</span> : <></>}


              </Form.Group>
            </div>
            <div className="col-lg-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.firstNametexts}>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone..."
                  className={styles.contactformtextfield}
                  name="phone"
                  value={phone}
                  onChange={handlechange}
                />
                {error && phone?.length <= 0 ? <span className="active">Contact No is Required!!!</span> : <></>}


              </Form.Group>
            </div>
          </div>
        </div>

        <div>
          <div className="mt-3">
            <Form.Label className={styles.textshelptexts}>
              What do you want help with?
            </Form.Label>
          </div>
          <div>
            <div className={styles.checkboxs}>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">


                <input
                  type='checkbox'

                  className={styles.checkboxtext}

                  onChange={handleVlaues}

                  value="Products"

                />    <span className="ms-2">Products</span>

              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <input
                  type='checkbox'

                  className={styles.checkboxtext}

                  onChange={handleVlaues}
                  value="Services"

                />     <span className="ms-2">Services</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <input
                  type='checkbox'

                  className={styles.checkboxtext}

                  onChange={handleVlaues}


                  value="Partnership / Collaboration"

                />
                <span className="ms-2">Partnership / Collaboration</span>
              </Form.Group>


            </div>

            <div className={styles.checkboxs}>


              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <input
                  type='checkbox'

                  className={styles.checkboxtext}

                  value="Volunteers"
                  onChange={handleVlaues}

                />
                <span className="ms-2">Volunteers</span>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <input
                  type='checkbox'

                  className={styles.checkboxtext}

                  value="Trainees"
                  onChange={handleVlaues}

                />
                <span className="ms-2">Trainees</span>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <input
                  type='checkbox'

                  className={styles.checkboxtext}

                  value="Others"
                  onChange={handleVlaues}

                />
                <span className="ms-2">Others</span>
              </Form.Group>
            </div>
          </div>





          {errorhelp && checks?.length <= 0 ? <span className="active">Help is Required!!!</span> : <></>}
        </div>






        <div className="mt-3">
          <div className="col-lg-12">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.firstNametexts}>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write your message..."
                className={styles.contactformtextfield}
                name="message"
                value={message}
                onChange={handlechange}
                as="textarea" rows={4}
              />

              {error && message?.length <= 0 ? <span className="active">message is Required!!!</span> : <></>}


            </Form.Group>
          </div>
        </div>

        <div className={styles.sendbuttoncontact} >
          {auth ? <>
            <button className={styles.sendformsbutton} onClick={onSubmit}>
              {loading ? <>
                <Spinner
                  as="span"
                  animation="grow"
                  size="sm"
                  role="status"
                  aria-hidden="true"
                />
                Loading...
              </> :
                <>SEND</>
              }

            </button>

          </> : <>
            <button className={styles.sendformsbuttondisabled} disabled>SEND</button>

          </>}


        </div>
      </form>
    </div>
  );
}

export default ContactForm;
