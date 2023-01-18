import React, { Fragment } from 'react'
import styles from './styles/Ourvission.module.scss';
import aboutimage from '../../../../assests/womeynlogos/aboutimages.png';
import Image from 'next/image';
function Ourvision() {
    return (
        <Fragment>
            <div className={styles.ourmainsection}>
                <div className="text-center">
                    <div className={styles.ourvissiontext}>
                        Our Vision & Mission
                    </div>
                    <div className={styles.womeynpurpose}>
                        To be the leading eCommerce platform for
                        “Women by Womeyn".
                    </div>
                </div>
            </div>

          
                <div className={styles.aboutimagesection}>
                    <div className={styles.aboutimagheinside}>
                        <div><Image src={aboutimage} alt="no image" className={styles.aboutimagesplit} /></div>
                        
                    </div>
                    <div className={styles.rightaboutsection}>
                            <div className={styles.ourmision}>
                                OUR MISSION
                            </div>
                            <div className={styles.topro}>
                                To provide a comprehensive eCommerce platform for enterprising women of our community, disadvantaged or otherwise limited by the knowledge of technology, social media, organizational skills and lack of equal opportunity.
                            </div>
                        </div>
                </div>
           

        </Fragment>
    )
}

export default Ourvision