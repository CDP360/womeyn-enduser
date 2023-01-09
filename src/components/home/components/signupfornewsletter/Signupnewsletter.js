import React, { Fragment } from 'react'
import { Button, Form } from 'react-bootstrap';
import styles from './styles/Signupnewsletter.module.scss';
function Signupnewsletter() {
    return (
        <Fragment>
            <div className={styles.signupnewmainsection}>
                <div className="signupheader">
                    <div className={styles.insidesignupnewsection}>
                        <div className={styles.mainsplitsignupnew}>
                            <div className={styles.leftmainsplitsignup}>
                                <div className='textseller'>
                                    Sign Up for Newsletter
                                </div>
                                <div className='textgreysmall mt-3'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>

                            <div className={styles.rightmainsplitsignup}>
                                <div className={styles.formsectionborder}>
                                    <Form.Group className={styles.emailsectionform}>
                                        <Form.Control
                                            name="lastName"
                                            type="text"
                                            placeholder='Enter your email here'
                                            className={styles.emailsectionform}
                                        />
                                    </Form.Group>
                                    <button className='selleractive'>
                                        SUBSCRIBE
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Signupnewsletter