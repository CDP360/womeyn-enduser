import React, { Fragment, useState } from 'react'
import styles from './styles/Leftsidebar.module.scss';
import bank from '../../../../assests/womeynlogos/bankcase.png';
import Image from 'next/image';
import userprofile from '../../../../assests/womeynlogos/userprofile.png';
function Leftsidebaruser({ indexsidebar, setShow, indexcheck, user }) {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [dropdown4, setDropdown4] = useState(false);

    return (
        <Fragment>
            <div className="leftcardsidebar">
            <div className={styles.leftsidebarsection}>
                <div className={styles.balancesection}>
                    <div className={styles.imageshowsection}>

                        <div className={styles.leftcircleprofiles}>


                            {user?.profileImageName ? <>
                                <img
                                    
                                    className={"circleuserprofile"}
                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${user?.profileImageName}`}
                                    alt="profile-pic"
                                    onClick={() => {
                                        indexsidebar(0)
                                        setShow(false)
                                    }}
                                />
                            </> : <Image src={userprofile} alt="no image" className={styles.smallimageuser} onClick={() => {
                                indexsidebar(0)
                                setShow(false)
                            }} />}

                        </div>
                        <div onClick={() => {
                            indexsidebar(0)
                            setShow(false)
                        }}
                            className={styles.rightprofilecircle}

                        >
                            <div className='profile-text-sizes'>
                                {user?.firstName}
                            </div>
                            <div className='verify'>
                                Verified
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={styles.imageshowsection1}>
                    <div className={styles.leftbalance}>
                        <div className='profile-text-sizes'>
                            <Image src={bank} alt="no image" className={styles.balanceimage} />
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
                </div> */}
                <div className={styles.bordertopsectionleftsidebar}>
                    <div className={styles.bordertopinbalance}>
                    </div>
                </div>

                <div className={styles.transactionlistflex}>

                <div onClick={() => indexsidebar(1)} className={`${indexcheck === 1 ? "actives" : "transactionsize"}`}>Transaction</div>
                <div onClick={() => indexsidebar(2)} className={`${indexcheck === 2 ? "actives" : "transactionsize"}`}>Orders</div>
                <div onClick={() => indexsidebar(3)} className={`${indexcheck === 3 ? "actives" : "transactionsize"}`}>Favorites</div>
                <div onClick={() => indexsidebar(4)} className={`${indexcheck === 4 ? "actives" : "transactionsize"}`}>My Coupons</div>
                </div>
                {/* <div onClick={() => indexsidebar(4)} className="logout">Logout</div> */}


                {/* <div className={styles.dropdownsection} onClick={() => {
                    setDropdown1(!dropdown1)
                    setDropdown2(false)
                    setDropdown3(false)
                }}>
                    <div className={styles.transactionsize}>Transaction</div>
                    {dropdown1 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown1(!dropdown1)}></ion-icon>}
                </div>
                {dropdown1 && <div className={styles.gapsectiondropdown}>
                    <div onClick={() => indexsidebar(1)} className={`${indexcheck === 1 ? "active" : ""}`}>Pending transactions</div>
                    <div onClick={() => indexsidebar(2)} className={`${indexcheck === 2 ? "active" : ""}`}>All transaction</div>
                </div>} */}

                {/* <div className={styles.bordertopsectionleftsidebar}>
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
                    <div onClick={() => indexsidebar(3)} className={`${indexcheck === 3 ? "active" : ""}`}>Ongoing Orders</div>
                    <div onClick={() => indexsidebar(4)} className={`${indexcheck === 4 ? "active" : ""}`}>All Orders</div>
                    <div onClick={() => indexsidebar(5)} className={`${indexcheck === 5 ? "active" : ""}`}>Reviews</div>
                    <div onClick={() => indexsidebar(6)} className={`${indexcheck === 6 ? "active" : ""}`}>Customer help</div>
                </div>}
                <div className={styles.bordertopsectionleftsidebar}>
                    <div className={styles.bordertopinbalance}>
                    </div>
                </div> */}
                {/* <div className={styles.dropdownsection} onClick={() => {
                    setDropdown3(!dropdown3)
                    setDropdown2(false)
                    setDropdown1(false)
                    setDropdown4(false)

                }}>
                    <div className={styles.transactionsize}>Favorites</div>
                    {dropdown3 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
                </div>
                {dropdown3 && <div className={styles.gapsectiondropdown}>
                    <div onClick={() => indexsidebar(7)} className={`${indexcheck === 7 ? "active" : ""}`}>Wishlist</div>
                    <div onClick={() => indexsidebar(8)} className={`${indexcheck === 8 ? "active" : ""}`}>Recently viewed</div>
                    <div onClick={() => indexsidebar(9)} className={`${indexcheck === 9 ? "active" : ""}`}>Review</div>
                </div>} */}



                {/* <div className={styles.bordertopsectionleftsidebar}>
                    <div className={styles.bordertopinbalance}>
                    </div>
                </div>
                <div className={styles.dropdownsection} onClick={() => {
                    setDropdown4(!dropdown4)
                    setDropdown3(false)
                    setDropdown2(false)
                    setDropdown1(false)


                }}>
                    <div className={styles.transactionsize}>My Stuff</div>
                    {dropdown4 ? <ion-icon name="chevron-up-outline" className="ion-icon" onClick={() => setDropdown4(!dropdown4)}></ion-icon> : <ion-icon name="chevron-down-outline" className="ion-icon" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
                </div>
                {dropdown4 && <div className={styles.gapsectiondropdown}>
                    <div onClick={() => indexsidebar(10)} className={`${indexcheck === 10 ? "active" : ""}`}>My Coupons</div>
                    <div onClick={() => indexsidebar(8)} className={`${indexcheck === 8 ? "active" : ""}`}>Recently viewed</div>
                    <div onClick={() => indexsidebar(9)} className={`${indexcheck === 9 ? "active" : ""}`}>Review</div>
                </div>} */}
            </div>
            </div>
        </Fragment>
    )
}

export default Leftsidebaruser