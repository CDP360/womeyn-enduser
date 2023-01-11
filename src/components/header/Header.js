import React, { Fragment } from 'react'
import styles from './styles/Header.module.scss';
import serachicon from '../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cart from '../../assests/homepage-logos/cart.png';
import profile from '../../assests/homepage-logos/profile.png';
import { Button } from 'react-bootstrap';
import iconmenu from '../../assests/homepage-logos/iconMenu.png';
import sun from '../../assests/homepage-logos/sun.png';
import moon from '../../assests/homepage-logos/moon.png';
import { signOut, useSession } from "next-auth/react"
import { useSelector } from 'react-redux';
function Header({ setdark, dark }) {
    const router = useRouter();
    const state = useSelector(state => state);
    const { status, data: session } = useSession();
    const logoutHandler = async () => {
        await signOut({ callbackUrl: "/" });
    };
    const userProfile=()=>{
        router.push("/women/profile")
    }
    return (
        <Fragment>
            <div className={styles.headermainsection}>
                <div className={styles.headerinsidesection}>
                    <div className="header">
                        <div className={styles.logoheadersection}>
                            <div onClick={() => router.push("/")}>
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
                                    <Image src={cart} alt="no image" className={styles.carticons} />
                                </div>
                                <div className="dropdown">
                                    <div>
                                        <Image src={profile} alt="no image" className={styles.carticons} />
                                    </div>
                                    <div>
                                        {status === "loading" && "Loading....."}
                                    </div>
                                    <div className="dropdowncontent">
                                        <div onClick={userProfile}>
                                            Profile
                                        </div>
                                        <div>
                                            Privacy Setting
                                        </div>
                                        <div onClick={logoutHandler}>
                                            Logout
                                        </div>
                                        <div>
                                            <div>
                                                {status === "loading" && "loading"}
                                                {session?.user?.name}
                                            </div>

                                        </div>
                                        <div onClick={() => setdark(!dark)}>
                                            {dark ? <Image src={moon} alt="no image sun" className="themebutton" /> : <Image src={sun} alt="no image" className="themebutton" />}
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.middleheadersection}>
                    <div className='header'>
                        <div className={styles.insidemiddlesectionheader}>
                            <div className={router.pathname == "/womeyn/explore" ? "active" : "nav-link"}>
                                <Link href="/womeyn/explore" className='nav-link'>
                                    <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />
                                    <span className='ms-2'>Explore</span>
                                </Link>
                            </div>
                            <div className={router.pathname == "/womeyn/womenpreneurs" ? "active" : ""}>

                                <Link href="/womeyn/womenpreneurs" className='nav-link'>
                                    {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}

                                    <span className='ms-2'>Our womenpreneurs</span>
                                </Link>
                            </div>
                            <div className={router.pathname == "/womeyn/events" ? "active" : ""}>
                                <Link href="/womeyn/events" className='nav-link'>
                                    {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}

                                    <span className='ms-2'>Events & updates</span>
                                </Link>
                            </div>
                            <div className={router.pathname == "/womeyn/abouts" ? "active" : ""}>
                                <Link href="/womeyn/abouts" className='nav-link'>
                                    {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}

                                    <span className='ms-2'></span> About us
                                </Link>
                            </div>
                            <div className={router.pathname == "/womeyn/getintouch" ? "active" : ""}>
                                <Link href="/womeyn/getintouch" className='nav-link'>
                                    {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}
                                    <span className='ms-2'>Get in touch</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </Fragment>
    )
}

export default Header;
