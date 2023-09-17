import React, { Fragment, useState } from 'react'
import styles from './styles/Bestseller.module.scss';
import imageadd from '../../../../assests/homepage-logos/add6.png';
import Image from 'next/image';
import Allcategories from './components/allcategories/Allcategories';
import Electronics from './components/electronics/Electronics';
import Healthcare from './components/healthcare/Healthcare';
import Healthfitness from './healthfitness/Healthfitness';
import Carouselseller from './carouselseller/Carouselseller';
function Bestseller({ bannerimages, MovePageData, HomeTexts }) {
    const [index, setIndex] = useState(0);
    return (
        <Fragment>
            <div className={styles.mainsellersection}>
                <div className={styles.insidesellerimagesection}>
                    <div className={styles.insidesellerbreaksalary}>
                        <Carouselseller bannerimages={bannerimages} MovePageData={MovePageData} />
                    </div>
                    <div className='mt-4'>
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