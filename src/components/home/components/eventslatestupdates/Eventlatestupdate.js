import React, { Fragment } from 'react'
import styles from './styles/Eventlateshupdate.module.scss';
import Image from 'next/image';
import fruit from '../../../../assests/homepage-logos/woymenbanner.png';
function Eventlatestupdate() {
    return (
        <Fragment>
            <div className={styles.eventupdatemainsection}>
                <div className={styles.emptyboxcolorsection}>
                    kalai
                </div>
                <div className={styles.insideventupdatesection}>
                    <div className={styles.bordertopsectionevents}>
                        <div className='textdashed'>
                        </div>
                    </div>

                    <div className='textseller'>
                        Events & latest updates
                    </div>

                    <div className={styles.eventfruitsection}>
                        <div className={styles.lefteventfruit}>
                            <div className='large-textsmall'>
                                Events & Workshops
                            </div>
                            <div className={styles.imageeventsection}>
                                <div>
                                    <Image src={fruit} alt="no image" className={styles.fruitimage} />
                                </div>
                                <div>
                                    <Image src={fruit} alt="no image" className={styles.fruitimage} />
                                </div><div>
                                    <Image src={fruit} alt="no image" className={styles.fruitimage} />
                                </div>
                            </div>
                        </div>
                        <div className={styles.righteventfruit}>
                            <div className='large-textsmall'>
                                Events & Workshops
                            </div>
                            <div className={styles.imageeventsection}>
                                <div>
                                    <Image src={fruit} alt="no image" className={styles.fruitimage} />
                                </div>
                                <div>
                                    <Image src={fruit} alt="no image" className={styles.fruitimage} />
                                </div><div>
                                    <Image src={fruit} alt="no image" className={styles.fruitimage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Eventlatestupdate