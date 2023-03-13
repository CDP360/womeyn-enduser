import React, { Fragment } from 'react'
import styles from './styles/Whatmake.module.scss';
import image1 from '../../../../assests/womeynlogos/Tropygreen.png';
import image2 from '../../../../assests/womeynlogos/24.png';
import image3 from '../../../../assests/womeynlogos/securepayment.png';
import Image from 'next/image';

function Whatmake() {

    const data = [
        {
            id: 1,
            name: "Support womenpreneurs",
            title: "crafted from top materials",
            image: image1,
            colorbg: " #F0F8F3"
        },
        {
            id: 2,
            name: "Secure payment",
            title: "Stripe & Paypal",
            image: image2,
            colorbg: " #FDF0F0"
        },
        {
            id: 3,
            name: "24 / 7 Support",
            title: "Dedicated support",
            image: image3,
            colorbg: " #FFF8F1"
        }
    ]
    return (
        <Fragment>
            <div className={styles.makehomesection}>
                <div className={styles.insidemakesection}>
                    <div className={styles.blogsectiontexts}>
                        <div className='large-text text-center'>
                            What makes us unique
                        </div>
                        <div className='blogloream mt-2'>
                            All the latest news, stories, events & workshops from our experts & influencers.
                        </div>
                    </div>
                    <div className="whatmake-cards row d-flex justify-content-center mt-4 gap-4">
                        {data?.map((item, index) => {
                            return (
                                <div className={`cards-whatmake col-lg-4  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3`} style={{ backgroundColor: item.colorbg }} key={index}>
                                    <div>
                                        <Image src={item?.image} alt="no image" className={styles.whatmakeimage} />
                                    </div>
                                    <div className='mt-2'>
                                        <div className="mt-2 medium-text">
                                            {item?.name}
                                        </div>
                                    </div>
                                    <div className="smalltextgrey mt-2">
                                        {item?.title}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Whatmake