import React, { Fragment, useState } from 'react'
import styles from './styles/Leftsidebar.module.scss';
import bank from '../../../../assests/womeynlogos/bankcase.png';

import Image from 'next/image';
function Leftsidebaruser() {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);


    return (
        <Fragment>
            <div className={styles.leftsidebarsection}>
                <div className={styles.balancesection}>
                    <div className={styles.imageshowsection}>
                        <div className={styles.smallimageuser}>
                        </div>
                        <div>
                            <div className='profile-text-sizes'>
                                kalaiNazriya
                            </div>
                            <div className='verify'>
                                Verified
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.imageshowsection1}>
                    <div className={styles.leftbalance}>
                        <div className='profile-text-sizes'>
                            <Image src={bank} alt="no image" width={35} height={35} />
                            &nbsp; Balance
                        </div>
                    </div>
                    <div className={styles.rightsection}>
                        <div>
                            Rs.10000
                        </div>
                        <div>
                            Wallet
                        </div>
                    </div>
                </div>
                <div className={styles.bordertopsectionleftsidebar}>
                    <div className={styles.bordertopinbalance}>
                    </div>
                </div>
                <div className={styles.dropdownsection} onClick={() => {
                    setDropdown1(!dropdown1)
                    setDropdown2(false)
                    setDropdown3(false)
                }}>
                    <div className={styles.transactionsize}>Transaction</div>
                    {dropdown1 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon>}
                </div>
                {dropdown1 && <div className={styles.gapsectiondropdown}>
                    <div>Pending transactions</div>
                    <div>All transaction</div>
                </div>}

                <div className={styles.bordertopsectionleftsidebar}>
                    <div className={styles.bordertopinbalance}>
                    </div>
                </div>
                <div className={styles.dropdownsection} onClick={() => {

                    setDropdown2(!dropdown2)
                    setDropdown1(false)
                    setDropdown3(false)
                }}>
                    <div className={styles.transactionsize}>Orders</div>
                    {dropdown2 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown2(!dropdown2)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown2(!dropdown2)}></ion-icon>}
                </div>
                {dropdown2 && <div className={styles.gapsectiondropdown}>
                    <div>Ongoing Orders</div>
                    <div>All Orders</div>
                    <div>Reviews</div>
                    <div>Customer help</div>

                </div>}

                <div className={styles.bordertopsectionleftsidebar}>
                    <div className={styles.bordertopinbalance}>
                    </div>
                </div>
                <div className={styles.dropdownsection} onClick={() => {
                    setDropdown3(!dropdown3)
                    setDropdown2(false)
                    setDropdown1(false)
                }}>
                    <div className={styles.transactionsize}>Favorites</div>
                    {dropdown3 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
                </div>
                {dropdown3 && <div className={styles.gapsectiondropdown}>
                    <div>Wishlist</div>
                    <div>Recently viewed</div>
                    <div>Review</div>
                </div>}
            </div>
        </Fragment>
    )
}

export default Leftsidebaruser