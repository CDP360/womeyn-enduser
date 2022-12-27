import React, { Fragment } from 'react'
import styles from './styles/Header.module.scss';
import serachicon from '../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
function Header() {
    const router = useRouter();
    return (
        <Fragment>
            <div className={styles.headermainsection}>
                <div className={styles.headerinsidesection}>
                    <div className={styles.logoheadersection}>
                        <div>
                            <Image src={womeynlogo} alt="no image" className={styles.womeynlogo} />
                        </div>
                        <div className={styles.inputsearchsection}>
                            <input type="text" placeholder='Search here...' className="inputserach" />
                            <div>
                                <Image src={serachicon} alt="no image" className='serachicon' />
                            </div>
                        </div>
                        <div className={"d-flex gap-4"}>
                            <div className={styles.falight}>
                                <i class="fa-light fa-cart-shopping"></i>
                            </div>
                            <div className={styles.falight}>
                                <i class="fa-light fa-circle-user"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.middleheadersection}>
                    <div className={styles.insidemiddlesectionheader}>
                        <div className={router.pathname == "/explore" ? "active" : ""}>
                            <Link href="/explore">
                                Explore
                            </Link>

                        </div>
                        <div className={router.pathname == "/explore" ? "active" : ""}>
                            Our womenpreneur
                        </div>
                        <div className={router.pathname == "/events" ? "active" : ""}>
                            <Link href="/events">
                                Events & updates</Link>
                        </div>
                        <div>
                            About us
                        </div>
                        <div>
                            Get in touch
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Header
