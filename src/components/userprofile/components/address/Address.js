import React from 'react'
import styles from './styles/Address.module.scss';
function Address() {
    return (
        <div className={styles.mainaddresspage}>
            <div className={styles.insideaddresspage}>
                <div className={styles.topsectionaddress}>
                    <div className={styles.leftaddresssection}>
                        Search address or receiver name
                    </div>
                    <div className={styles.rightaddresssection}>Add new Address</div>
                </div>
            </div>
        </div>
    )
}

export default Address