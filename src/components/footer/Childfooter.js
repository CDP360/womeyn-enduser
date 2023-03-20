import React, { Fragment } from 'react'
import styles from './styles/Childfooter.module.scss';
import { useRouter } from 'next/router';
function Childfooter() {

    const years = new Date();

    const router = useRouter();
    return (
        <Fragment>
            <div className={styles.childfootermainsection}>
                <div className='footercommon'>
                    <div className={styles.insidechildfooter}>
                        <div>
                            WOMEYN  -  © {years?.getFullYear()} All Rights Reserved
                        </div>
                        <div className={styles.childfootertext}>
                            <div className={styles.cursors}>
                                Privacy and Policy
                            </div>
                            <div  className={styles.cursors} onClick={()=>router.push("/terms-and-conditions")}>
                            Terms & Conditions
                                </div>
                            <div onClick={() => router.push("/abouts")} className={styles.cursors}>About Us</div>
                            <div onClick={() => router.push("/getintouch")} className={styles.cursors}>Contact Us</div>
                            {/* <div onClick={() => router.push("/womenpreneurs")} className={styles.cursors}>PRODUCTS</div> */}
                            {/* <div></div> */}
                        </div>
                    </div>
                </div>

            </div>
        </Fragment>
    )
}

export default Childfooter