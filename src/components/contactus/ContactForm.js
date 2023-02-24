import React from 'react'
import styles from "./styles/Contactus.module.scss";
import Form from 'react-bootstrap/Form';
import { ContactText } from '../../consttext/Contactconst';

function ContactForm() {
    return (
        <div className={styles.contactformsections}>

            <form>
                <div className={styles.insidecontactforms}>
                    <div className="col-lg-5">

                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.firstNametexts}>First Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter First Name" className={styles.contactformtextfield} />
                        </Form.Group>
                    </div>
                    <div className="col-lg-5">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.firstNametexts}>Last Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Last Name" className={styles.contactformtextfield} />

                        </Form.Group>
                    </div>
                </div>


                <div className="mt-3">

                    <div className={styles.insidecontactforms}>
                        <div className="col-lg-5">

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={styles.firstNametexts}>Mail</Form.Label>
                                <Form.Control type="text" placeholder="Enter Mail" className={styles.contactformtextfield} />

                            </Form.Group>
                        </div>
                        <div className="col-lg-5">
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label className={styles.firstNametexts}>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Enter Phone" className={styles.contactformtextfield} />

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
                            <Form.Check type="radio" label="Product" className={styles.checkboxtext} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="radio" label="Service" className={styles.checkboxtext} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="radio" label="Registrations" className={styles.checkboxtext} />
                        </Form.Group>
                    </div>
                </div>

                <div className="mt-3">
                    <div className="col-lg-12">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={styles.firstNametexts}>Message</Form.Label>
                            <Form.Control type="text" placeholder="Write your message..." className={styles.contactformtextfield} />
                        </Form.Group>
                    </div>
                </div>

                <div className={styles.sendbuttoncontact}>
                    <button className={styles.sendformsbutton}>
                        SEND
                    </button>
                </div>
            </form>
        </div>
    )
}

export default ContactForm