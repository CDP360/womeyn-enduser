import React, { Fragment } from 'react'
import styles from './styles/Childfooter.module.scss';
function Childfooter() {
    return (
        <Fragment>
            <div className={styles.childfootermainsection}>
                <div className='footercommon'>
                <div className={styles.insidechildfooter}>
                    <div>
                        WOMEYN  -   © 2020 All Rights Reserved
                    </div>
                    <div className={styles.childfootertext}>
                        <div>VASI</div>
                        <div>MASTERKARD</div>
                        <div>PEYPOL</div>
                        <div>BITKOIN</div>
                    </div>
                </div>
                </div>
               
            </div>
        </Fragment>
    )
}

export default Childfooter