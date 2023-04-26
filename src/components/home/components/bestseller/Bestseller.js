import React, { Fragment, useState } from 'react'
import styles from './styles/Bestseller.module.scss';
import imageadd from '../../../../assests/homepage-logos/add6.png';
import Image from 'next/image';
import Allcategories from './components/allcategories/Allcategories';
import Electronics from './components/electronics/Electronics';
import Healthcare from './components/healthcare/Healthcare';
import Healthfitness from './healthfitness/Healthfitness';
import Carouselseller from './carouselseller/Carouselseller';
function Bestseller({bannerimages,MovePageData,HomeTexts}) {
    const [index, setIndex] = useState(0);
    return (
        <Fragment>
            <div className={styles.mainsellersection}>
                <div className={styles.insidesellerimagesection}>
                    <div className={styles.insidesellerbreaksalary}>
                        <Carouselseller bannerimages={bannerimages} MovePageData={MovePageData}/>
                    </div>
                    <div className='large-text mb-5 mt-3 text-center'>
                        {HomeTexts?.Bestsellerstocheeryouup}
                    </div>
                    <div className={styles.buttonsellersection}>
                        <button className={index === 0 ? "selleractive" : "sellerinactive"} onClick={() => setIndex(0)}>{HomeTexts?.AllCategories}</button>
                        <button className={index === 1 ? "selleractive" : "sellerinactive"} onClick={() => setIndex(1)}>{HomeTexts?.Electronics}</button>     
                        <button className={index === 2 ? "selleractive" : "sellerinactive"} onClick={() => setIndex(2)}>{HomeTexts?.HealthCare}</button>     
                        <button className={index === 3 ? "selleractive" : "sellerinactive"} onClick={() => setIndex(3)}>{HomeTexts?.Healthfitness}</button>      
                    </div>
                    <div className={styles.borderseller}>
                        <div className={styles.insideborderseller}>

                        </div>
                    </div>
                    <div className='mt-5'>
                        <div hidden={index != 0}>
                            <Allcategories />
                        </div>
                        <div hidden={index != 1}>
                            <Electronics />
                        </div>
                        <div hidden={index != 2}>
                            <Healthcare />
                        </div>
                        <div hidden={index != 3}>
                            <Healthfitness />
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Bestseller