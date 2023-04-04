import React from "react";
import styles from "./styles/Contactus.module.scss";
import Form from "react-bootstrap/Form";
import { ContactText } from "../../consttext/Contactconst";
import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'


function ContactForm() {
  const formSchema = Yup.object().shape({
    firstName: Yup.string()
      .required('First Name is Required!!!'),
    message: Yup.string()
      .required('Message is Required!!!'),
    lastName: Yup.string()
      .required('Last Name is Required!!!'),
    message: Yup.string()
      .required('Message is Required!!!'),
    email: Yup.string()
      .required('Email is Required!!!'),
    phone: Yup.string()
      .required('contactno is Required!!!'),
    help: Yup.string()
      .required('Help is Required!!!')


  })
  const formOptions = { resolver: yupResolver(formSchema) }
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(formOptions);

  const onSubmit = (data) => {
    console.log("data", data)
  }
  return (
    <div className={styles.contactformsections}>
      <form>
        <div className={styles.insidecontactforms}>
          <div className="col-lg-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.firstNametexts}>
                First Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                className={styles.contactformtextfield}
                {...register("firstName", {
                  required: "Please enter first Name",

                })}
              />
              {errors.firstName && <span className="active">{errors.firstName.message}</span>}

            </Form.Group>
          </div>
          <div className="col-lg-5">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.firstNametexts}>
                Last Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                className={styles.contactformtextfield}
                {...register("lastName", {
                  required: "Please enter last Name",

                })}
              />
              {errors.lastName && <span className="active">{errors.lastName.message}</span>}

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
                  placeholder="Enter Mail"
                  className={styles.contactformtextfield}
                  {...register("email", {
                    required: "Please enter email",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    },
                  })}
                />
                {errors.email && <span className="active">{errors.email.message}</span>}

              </Form.Group>
            </div>
            <div className="col-lg-5">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className={styles.firstNametexts}>Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Phone"
                  className={styles.contactformtextfield}
                  {...register("phone", {
                    required: "Please enter Phone Number",

                  })}
                />
                {errors.phone && <span className="active">{errors.phone.message}</span>}

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
          <div className={styles.checkboxs}>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              {/* <input {...register("gender", { required: true })} type="radio" value="Female" /> <span>Female</span> */}

              <input
                type="radio"

                className={styles.checkboxtext}
                {...register("help", { required: true })} value="Product"

              />    <span className="ms-2">Product</span>

            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <input
                type="radio"

                className={styles.checkboxtext}
                {...register("help", { required: true })} value="Service"

              />     <span className="ms-2">Service</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <input
                type="radio"

                className={styles.checkboxtext}
                {...register("help", { required: true })} value="Both Service & Product"

              />
              <span className="ms-2">Both Service & Product</span>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <input
                type="radio"

                className={styles.checkboxtext}
                {...register("help", { required: true })} value="Registrations"

              />
              <span className="ms-2">Registrations</span>
            </Form.Group>

          </div>
          {errors.help && <span className="active">{errors.help.message}</span>}

        </div>

        <div className="mt-3">
          <div className="col-lg-12">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={styles.firstNametexts}>Message</Form.Label>
              <Form.Control
                type="text"
                placeholder="Write your message..."
                className={styles.contactformtextfield}
                {...register("message", {
                  required: "Please enter Phone Number",

                })}
              />
              {errors.message && <span className="active">{errors.message.message}</span>}

            </Form.Group>
          </div>
        </div>

        <div className={styles.sendbuttoncontact}>
          <button className={styles.sendformsbutton} onClick={handleSubmit(onSubmit)}>SEND</button>
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
