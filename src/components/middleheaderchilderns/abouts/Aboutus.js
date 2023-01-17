import React, { Fragment } from 'react';
import styles from './styles/Abouts.module.scss';
import qua1 from '../../../assests/womeynlogos/qutation1.png';
import qua2 from '../../../assests/womeynlogos/quation2.png';
import maskup from '../../../assests/womeynlogos/Mask group.png';
import Image from 'next/image';

function Aboutus() {
    return (
        <Fragment>
            <div className={styles.mainaboutsection}>
                <div className={styles.bannersectionabout}>
                    {/* <Image src={maskup} alt="no image" className={styles.bannerimageabout} /> */}
                    <div className={styles.bannercontentsectionimage}>
                        <div className={styles.bannerinsidesection}>
                            <div className={styles.isidelogoproduct}>
                                    
                                        <Image src={qua2} alt="no image" className={styles.qua1}/>
                                   
                                  <div className={styles.we}>
                                        We aspire to see women entrepreneurs scale up their business locally and nationwide.

                                    </div>
                                    <div className={`text-grey text-center , ${styles.ceotext}`}>
                                    Anu Kulkarni, Founder & CEO
                                    </div>
                                    <Image src={qua1} alt="no image" className={styles.qua2}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <h1>welocme</h1>
                    <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1> <h1>welocme</h1>
                </div>
            </div>
        </Fragment>
    )
}

export default Aboutus