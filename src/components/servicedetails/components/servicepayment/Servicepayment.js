import React from 'react'
import styles from './styles/Servicepayment.module.scss';
import banners from '../../../../assests/service-logos/servicebanner (2).png';
import Image from 'next/image';
function Servicepayment() {
    return (
        <div className='mainsection'>
            <div className="insidesection">
                <div className={styles.mainservicepayment}>
                    <div className={styles.insideservicepayment}>
                        <div className={styles.leftservicepayment}>
                            <div className={styles.selectpayment}>

                                Select a payment method
                            </div>
                            <div className={styles.paymentmethod}>

                                Payments method
                            </div>
                        </div>
                        <div className={styles.rightservicepayment}>

                            <div className={styles.insideservicepaymentinright}>
                                <div className={styles.insiderightpaymentcard}>
                                    <div>

                                        <Image src={banners} alt="no image" className={styles.bannserpaymentservice} />
                                    </div>
                                    <div className={styles.servicepayment}>
                                        <div className={styles.quantity}>

                                            <div className={styles.price}>
                                                Quantity
                                            </div>
                                            <div className={styles.price}>
                                                1
                                            </div>
                                        </div>

                                        <div className={styles.bordersections}>

                                        </div>

                                    </div>
                                    <div className={styles.servicepayment}>
                                        <div className={styles.quantity}>
                                            <div className={styles.price}>
                                                Item price
                                            </div>
                                            <div className={styles.price}>
                                                A$ 24
                                            </div>
                                        </div>
                                        <div className={styles.quantity}>
                                            <div className={styles.price}>
                                                Estimated tax
                                            </div>
                                            <div className={styles.price}>
                                                A$ 3
                                            </div>
                                        </div>

                                        <div className={styles.bordersections}>

                                        </div>

                                    </div>

                                    <div className={styles.totalamount}>
                                        <div className={styles.amount}>
                                            Total amount
                                        </div>
                                        <div className={styles.totalflex}>
                                            <div className={styles.totals}>
                                                A$
                                            </div>

                                            <div>
                                                <span className={styles.total}>27</span>
                                            </div>                                        </div>
                                    </div>

                                    <div className='mt-4 mb-3'>
                                        <button className={styles.confirmpay}>Confirm & Pay</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Servicepayment