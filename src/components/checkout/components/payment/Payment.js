import React, { Fragment, useState, useEffect } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import styles from './styles/Payment.module.scss';
function Payment() {
  return (
    <Fragment>
      <div className={styles.payemntmethodmainsection}>
        <div className="mt-3 mb-4">
          <h3>  Payment Method </h3>
        </div>
        <div className={styles.mainpaymentsectioncards}>

          <div className={styles.creditcardsection}>
            <div className={styles.leftcreditcard}>
              <input type="radio" />
            </div>
            <div className={styles.rightcreditcard}>
              <div className={styles.visa}>
                <div>Credit Card</div>
                <div>VISA</div>

              </div>
              <div className="mt-3">
                <Row>
                  <Col>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>First Name</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                  <Col>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Last Name</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                </Row>
              </div>
              <div className="mt-2">
                <Row>
                  <Col lg={5}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Card Number</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                  <Col lg={3}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Expiry Date</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                  <Col lg={4}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>CVV</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                </Row>
              </div>


              <div className="mt-2">
                <Row>
                  <Col lg={9}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Country</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                  <Col lg={3}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Zip Code</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                 
                </Row>
              </div>
            </div>
          </div>
          <div className={styles.creditcardsection}>
            <div className={styles.leftcreditcard}>
              <input type="radio" />
            </div>
            <div className={styles.rightcreditcard}>
              <div className={styles.visa}>
                <div>Paypal</div>
                <div>PayPal</div>

              </div>
              <div className="mt-3">
                <Row>
                  <Col>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="text" className={styles.formborder} />

                    </Form.Group>

                  </Col>
                  
                </Row>
              </div>
            


            </div>
          </div>
          <div>
            third
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Payment