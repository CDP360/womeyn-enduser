import React, { Fragment } from 'react'
import styles from './styles/Eventlateshupdate.module.scss';
import Image from 'next/image';
import fruit from '../../../../assests/homepage-logos/woymenbanner.png';
import fruit1 from '../../../../assests/womeynlogos/offruit.png';
import fruit2 from '../../../../assests/womeynlogos/fullfruit.png';

function Eventlatestupdate() {
    return (
        <Fragment>
            <div className={styles.eventupdatemainsection}>
                <div className={styles.emptyboxcolorsection}>

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
                            <div className='large-textsmall mb-4'>
                                Events & Workshops
                            </div>
                            <div className={styles.workshopimage}>
                                <Image src={fruit2} al="no image" className={styles.shopingimage} />
                            </div>
                            
                            <div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage}>
                                    <Image src={fruit1} al="no image" className={styles.shopingimagecontent} />
                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            FRUIT
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            5 mins read
                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        Simple Juice Recipes to boost your immune system
                                    </div>
                                </div>


                            </div>
                            </div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage}>
                                    <Image src={fruit1} al="no image" className={styles.shopingimagecontent} />

                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            FRUIT
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            5 mins read
                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        Simple Juice Recipes to boost your immune system
                                    </div>
                                </div>


                            </div>



                        </div>
                        <div className={styles.righteventfruit}>
                            <div className='large-textsmall mb-4'>
                                Events & Workshops
                            </div>
                            <div className={styles.workshopimage}>
                                <Image src={fruit2} al="no image" className={styles.shopingimage} />
                            </div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage}>
                                    <Image src={fruit1} al="no image" className={styles.shopingimagecontent} />

                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            FRUIT
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            5 mins read
                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        Simple Juice Recipes to boost your immune system
                                    </div>
                                </div>


                            </div>


                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage}>
                                    <Image src={fruit1} al="no image" className={styles.shopingimagecontent} />

                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            FRUIT
                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            5 mins read
                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        Simple Juice Recipes to boost your immune system
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </Fragment >
    )
}

export default Eventlatestupdate