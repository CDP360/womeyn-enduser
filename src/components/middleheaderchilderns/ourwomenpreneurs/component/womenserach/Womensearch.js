import React, { Fragment, useState } from 'react'
import styles from './styles/Womensearch.module.scss';
import product1 from '../../../../../assests/womeynlogos/i1.png';
import product2 from '../../../../../assests/womeynlogos/i2.png';
import product3 from '../../../../../assests/womeynlogos/i3.png';
import product4 from '../../../../../assests/womeynlogos/i4.png';
import Image from 'next/image';

function Womensearch({ id }) {
    const [indexs, setIndex] = useState(0);
    const data =
    {
        id: 1,
        images: [
            product1,
            product2,
            product3,
            product4
        ]
    }


    return (
        <Fragment>
            <div className={styles.mainsearchwomen}>
                <div className={styles.insidesearchwomen}>
                    <div className={styles.splitwomensearch}>
                        <div className={styles.leftwomensearchsection}>
                            <div>
                                <div >
                                    <Image src={data?.images[indexs]} alt="no image" className={styles.serachlargeimage} />
                                </div>
                                <div className={styles.searchimagesection}>
                                    {data?.images?.map((items, index) => {
                                        return (
                                            <div className={` ${styles.searchimagesection}`} onClick={() => setIndex(index)}>
                                                <Image src={items} alt="no image" className={`${indexs === index ? styles.activewomen : ""} ${styles.imagesearch}`} />
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightwomensearchsection}>
                            right section
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Womensearch