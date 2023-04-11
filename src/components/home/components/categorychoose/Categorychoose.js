import React, { Fragment } from 'react'
import styles from './styles/Categorychoose.module.scss';
import tropy from '../../../../assests/homepage-logos/trophy.png';
import shipping from '../../../../assests/homepage-logos/shipping.png';
import secure from '../../../../assests/homepage-logos/secure.png';
import chat from '../../../../assests/homepage-logos/chat1.png';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import CarouselCategory from './carouselcategory/CarouselCategory';
import Skeleton from 'react-loading-skeleton';
function Categorychoose() {
    return (
        <Fragment>
            <div className={styles.categoryhomesection}>
                <div className={styles.insidecategorysection}>
                    <div className={styles.supportcategorysection}>
                        <Row>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={tropy} alt="no image" />
                                    </div>
                                    <div>
                                        <div className={styles.textcategorysection}>
                                            Support womenpreneurs
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            crafted from top materials
                                        </div>
                                    </div>



                                </div>
                                {/* <div>
                                    <Skeleton className={styles.sketons} />
                                </div> */}
                            </Col>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={secure} alt="no image" />
                                    </div>

                                    <div>
                                        <div className={styles.textcategorysection}>
                                            Secure payment
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            Stripe & Paypal
                                        </div>
                                    </div>

                                </div>
                                {/* <div>
                                    <Skeleton className={styles.sketons} />
                                </div> */}
                            </Col>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={shipping} alt="no image" />
                                    </div>

                                    <div>
                                        <div className={styles.textcategorysection}>
                                            Track Shipping
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            Get real - time updates
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    {/* <Skeleton className={styles.sketons} /> */}
                                </div>
                            </Col>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={chat} alt="no image" />
                                    </div>

                                    <div>
                                        <div className={styles.textcategorysection}>
                                            24 / 7 Support
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            Dedicated support
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    {/* <Skeleton className={styles.sketons} /> */}
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className={styles.categorybodysection}>
                        <div className='large-text mt-5 text-center'>
                            A lot of categories to choose from
                        </div>
                        <div>
                            <CarouselCategory />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Categorychoose