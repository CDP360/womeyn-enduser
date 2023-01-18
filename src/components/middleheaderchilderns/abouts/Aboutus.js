import React, { Fragment } from 'react';
import styles from './styles/Abouts.module.scss';
import qua1 from '../../../assests/womeynlogos/qutation1.png';
import qua2 from '../../../assests/womeynlogos/quation2.png';
import maskup from '../../../assests/womeynlogos/Mask group.png';
import Image from 'next/image';
import bubble1 from '../../../assests/womeynlogos/bubble1.png';
import bubble2 from '../../../assests/womeynlogos/bubble2.png';
import bubble3 from '../../../assests/womeynlogos/bubble3.png';
import Ourvision from './ourvision/Ourvision';
import Ourteam from './ourteam/Ourteam';

function Aboutus() {

    const data = [
        {
            id: 1,
            name: "Customer value is our fuel",
            title: "Value is making a difference for our customers each and every day. That's what powers our business and energizes us.",
            image: bubble1,
            colorbg: " #F0F8F3"
        },
        {
            id: 2,
            name: "Experience is a superpower",
            title: "We are a team of experts who know how to work together to tackle real challenges and create success.",
            image: bubble2,
            colorbg: " #ECF2FB"
        },
        {
            id: 3,
            name: "Actions speak louder than words",
            title: "When challenges arise, we rise to the occasion. We roll up our sleeves, get to work, and get the job done",
            image: bubble3,
            colorbg: " #FDF0F0"
        }
    ]

    return (
        <Fragment>
            <div className={styles.mainboutus}>
                <div className={styles.exptyboxleft}>

                </div>
                <div className={styles.exptyboxright}>

                </div>
                <div className={styles.exptyboxleftblue}>

                </div>
                <div className={styles.mainaboutsection}>
                    <div className={styles.mainimageabout}>
                        <div className={styles.bannersectionabout}>
                            {/* <Image src={maskup} alt="no image" className={styles.bannerimageabout} /> */}
                            <div className={styles.bannercontentsectionimage}>
                                <div className={styles.bannerinsidesection}>
                                    <div className={styles.isidelogoproduct}>
                                        <Image src={qua2} alt="no image" className={styles.qua1} />
                                        <div className={styles.we}>
                                            We aspire to see women entrepreneurs scale up their business locally and nationwide.
                                        </div>
                                        <div className={`text-grey text-center mt-2 , ${styles.ceotext}`}>
                                            Anu Kulkarni, Founder & CEO
                                        </div>
                                        <Image src={qua1} alt="no image" className={styles.qua2} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.anecommercetext}>An E-Commerce Platform for Women by Womeyn.</div>
                        <div>
                            <div className={styles.womeynpurpose}>
                                Womeyn is a purpose-driven social impact advocacy-based initiative that aims to empower women by providing economic support by means of an eCommerce platform for Women by Womeyn.
                            </div>

                            <div className={styles.througth}>
                                Through the platform, we aim to empower women entrepreneurs by building, nurturing and thereby growing a Women Entrepreneur community. Womeyn further seeks to transcend all barriers that are commonly faced with women entrepreneurs. We aspire to see women entrepreneurs scale up their business locally and nationwide.
                            </div>
                        </div>
                    </div>
                    <div className={styles.ourcontentsection}>
                        <div className={styles.anecommercetexts}>Our core values </div>
                        <div className={styles.alltexts}>All the latest news, stories, events & workshops from our experts & influencers.</div>
                    </div>

                    <div>
                        <div className="abouts-cards row d-flex justify-content-center mt-4 gap-4">
                            {data?.map((item, index) => {
                                return (
                                    <div className={`cards-aboutus col-lg-4  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3`} style={{ backgroundColor: item.colorbg }}>
                                        <div className='ms-2'>
                                            <Image src={item?.image} alt="no image" className={styles.whatmakeimage} />
                                        </div>
                                        <div className='ms-4'>
                                            <div className='mt-2'>
                                                <div className="mt-2 aboutus-text">
                                                    {item?.name}
                                                </div>
                                            </div>
                                            <div className="smalltextgrey mt-2">
                                                {item?.title}
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div>
                        <Ourvision />
                    </div>
                    <div>
                        <Ourteam/>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Aboutus