import React from 'react'
import styles from './styles/LoaderLogo.module.scss';
import womeynlogo from '../../assests/homepage-logos/Mobileviewlogoshort.png';
import Image from 'next/image';

function LoaderLogo() {
  return (
    <div className={styles.mainloader}>
      <div className={styles.insideloader}>
        <div className={styles.loadersection}>
          <Image src={womeynlogo} alt="no image" className={styles.womeynlogo} />
        </div>
      </div>
    </div>
  )
}

export default LoaderLogo