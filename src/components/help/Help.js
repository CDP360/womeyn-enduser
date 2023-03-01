import React, { useState } from 'react'
import styles from './styles/Help.module.scss';
import helpimage from '../../assests/category-logos/helpimage.png';
import Image from 'next/image';
function Help() {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    return (
        <div className="mainsection">
            <div className="insidesection">


                <div className={styles.mainsectionhelp}>

                    <div className={styles.howcanhelp}>

                        Hello? How Can we help you.

                    </div>

                    <div className={styles.borderboxhelp}>
                       
                       <div className={styles.ordersslice}>

                       <div className={styles.imagesectionhelp}>
                            <div>
                                <Image src={helpimage} alt="no image" className={styles.imagehelp} />
                            </div>
                            <div className={styles.yours}>
                                Your orders
                            </div>
                        </div>
                        <div className={styles.arrowsection}>
                            <ion-icon name="chevron-up-outline" size="large" onClick={() => setDropdown1(!dropdown1)}></ion-icon>
                            <ion-icon name="chevron-down-outline" size="large" onClick={() => setDropdown1(!dropdown1)}></ion-icon>
                        </div>

                        </div>

                        {dropdown1 && <div className={styles.bordertopsection}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sodales dapibus laoreet. Morbi arcu dolor, euismod ullamcorper nulla non, suscipit consequat justo. Duis urna orci, interdum vel mauris nec, rhoncus accumsan massa. Integer maximus accumsan sagittis. Morbi suscipit, tortor eget suscipit pellentesque, ante urna commodo mi, id consectetur justo metus vel dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in tortor aliquam, convallis augue et, elementum velit. In placerat rhoncus arcu ut ultrices. Integer neque elit, scelerisque sed eros vel, vehicula pretium velit. Duis id congue felis. Suspendisse potenti. Etiam nec dolor dictum, accumsan metus in, eleifend mi. Nulla ultrices accumsan leo mattis eleifend. Cras at neque non dui condimentum molestie. Integer condimentum quam a dolor bibendum, a suscipit risus auctor. Curabitur augue ligula, mattis id cursus eu, pulvinar ut nisl.
                        </div>}

                    </div>


                </div>

            </div>
        </div>
    )
}

export default Help