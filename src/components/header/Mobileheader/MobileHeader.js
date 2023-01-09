import Image from 'next/image';
import React, { useState, Fragment } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import bar from '../../../assests/homepage-logos/bar.png';
import styles from './styles/MobileHeader.module.scss';
import serachicon from '../../../assests/homepage-logos/serachicon.png'
import womeynlogo from '../../../assests/homepage-logos/Mobileviewlogoshort.png';
import profile from '../../../assests/homepage-logos/profile.png';
import closearrow from '../../../assests/homepage-logos/closearrow.png';
import iconmenu from '../../../assests/homepage-logos/iconMenu.png';

import Link from 'next/link';
import { useRouter } from 'next/router';
function MobileHeader() {
    const router = useRouter();
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Fragment>
            <div className={styles.mainmobilesection}>
                <div className={styles.mobileleftsection} onClick={()=>router.push("/")}>
                    <Image src={womeynlogo} alt="no image" className={styles.logomobilewomwyn} />
                </div>
                <div className={styles.mobilemiddlesection}>

                    <div className={styles.inputsearchsectionss}>
                        <input type="text" placeholder='Search here...' className="inputserach" />
                        <div>
                            <Image src={serachicon} alt="no image" className='serachicon' />
                        </div>
                    </div>
                </div>

                <div className={styles.mobilerightsection}>
                    <div onClick={handleShow}>
                        <Image src={profile} alt="no image" className={styles.barsection} />
                    </div>
                    <Offcanvas show={show} onHide={handleClose}>
                        <div className="offcanvebodysection">
                            <div className='arrowend' onClick={handleClose}>
                                <Image src={closearrow} alt="no image" className='closearrow' />
                            </div>
                            <div className='profile-section'>
                                <Image src={profile} alt="no image" className="profile-image" />
                            </div>
                            <div className='nav-links-section'>
                                <div className={router.pathname == "/womeyn/explore" ? "active" : "nav-link"} onClick={handleClose}>
                                    <Link href="/womeyn/explore" className='nav-link'>
                                        {/* <Image src={iconmenu} alt="no image" className="menuicons" /> */}
                                        <span className='ms-1'>Explore</span>
                                    </Link>
                                </div>
                                <div className={router.pathname == "/womeyn/womenpreneurs" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/womeyn/womenpreneurs" className='nav-link'>
                                        Our womenpreneurs
                                    </Link>
                                </div>
                                <div className={router.pathname == "/womeyn/events" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/womeyn/events" className='nav-link'>
                                        Events & updates
                                    </Link>
                                </div>
                                <div className={router.pathname == "/womeyn/abouts" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/womeyn/abouts" className='nav-link'>
                                        About us
                                    </Link>
                                </div>
                                <div className={router.pathname == "/womeyn/getintouch" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/womeyn/getintouch" className='nav-link'>
                                        Get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </Offcanvas>
                </div>
            </div>
        </Fragment>
    )
}

export default MobileHeader 