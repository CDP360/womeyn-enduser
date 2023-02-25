import React, { Fragment } from 'react'
import styles from './styles/Header.module.scss';
import serachicon from '../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cartslogo from '../../assests/homepage-logos/cart.png';
import profile from '../../assests/homepage-logos/profile.png';
import iconmenu from '../../assests/homepage-logos/iconMenu.png';
import { signOut, useSession } from "next-auth/react"
import { useSelector } from 'react-redux';
import myprofile from '../../assests/login-logos/myprofile.png';
import logout from '../../assests/login-logos/logout.png';
import notifications from '../../assests/login-logos/notifications.png';
import { useContext } from 'react';
import { ContextStore } from '../../Redux/store/Contextstore';
import dynamic from 'next/dynamic';

function Header({ setdark, dark }) {

    const { state, dispatch } = useContext(ContextStore);
    const { cart } = state;
    const router = useRouter();
    const states = useSelector(state => state.cart.cartitems);
    const { status, data: session } = useSession();
    const logoutHandler = async () => {
        await signOut({ callbackUrl: "/" });
    };
    const userProfile = () => {
        router.push("/women/profile")
    }
    const Login = () => {
        router.push("/login");
    }
    const carts = () => {
        router.push("/cart")
    }

    const notificationsPush = () => {
        router.push("/notifications")
    }
    return (
        <Fragment>
            <div className={styles.mainheadersection}>
                <div className={styles.insidesectionheader}>
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

                        <div className={styles.falight} onClick={notificationsPush}>
                            <Image src={notifications} alt="no image" className={styles.notifications} />
                        </div>
                        <div className={styles.falight} onClick={carts}>
                            <Image src={cartslogo} alt="no image" className={styles.carticons} />
                            {cart.cartData?.length}
                        </div>
                        <div className="dropdown">
                            <div>
                                <Image src={profile} alt="no image" className={styles.carticons} />
                            </div>
                            <div>
                                {status === "loading" && "Loading....."}
                            </div>
                            <div className="dropdowncontent">
                                <div>
                                    Create account / LogIn
                                    <button className='active mt-3 loginbuttonhome' onClick={Login}>
                                        LogIn/SignUp
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.middleheadersection}>

                <div className={styles.insidemiddlesections}>
                    <div className={router.pathname == "/explore" ? "active" : "nav-link"}>
                        <Link href="/explore" className='nav-link'>
                            <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />
                            <span className='ms-2'>Explore</span>
                        </Link>
                    </div>
                    <div className={styles.bordercolors}>
                        |
                    </div>
                    <div className={router.pathname == "/womenpreneurs" ? "active" : ""}>

                        <Link href="/womenpreneurs" className='nav-link'>
                            {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}

                            <span className='ms-2'>Our womenpreneurs</span>
                        </Link>
                    </div>
                    <div className={router.pathname == "/events" ? "active" : ""}>
                        <Link href="/events" className='nav-link'>
                            {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}

                            <span className='ms-2'>Events & updates</span>
                        </Link>
                    </div>
                    <div className={router.pathname == "/abouts" ? "active" : ""}>
                        <Link href="/abouts" className='nav-link'>
                            {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}

                            <span className='ms-2'></span> About us
                        </Link>
                    </div>
                    <div className={router.pathname == "/getintouch" ? "active" : ""}>
                        <Link href="/getintouch" className='nav-link'>
                            {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}
                            <span className='ms-2'>Get in touch</span>
                        </Link>
                    </div>

                    
                </div>
            </div>
            {/* <div className={styles.headermainsection}>
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

                                <div className={styles.falight} onClick={notificationsPush}>
                                    <Image src={notifications} alt="no image" className={styles.notifications} />
                                </div>
                                <div className={styles.falight} onClick={carts}>
                                    <Image src={cartslogo} alt="no image" className={styles.carticons} />
                                    {cart.cartData?.length}
                                </div>
                                <div className="dropdown">
                                    <div>
                                        <Image src={profile} alt="no image" className={styles.carticons} />
                                    </div>
                                    <div>
                                        {status === "loading" && "Loading....."}
                                    </div>
                                    <div className="dropdowncontent">
                                        <div>
                                            Create account / LogIn
                                            <button className='active mt-3 loginbuttonhome' onClick={Login}>
                                                LogIn/SignUp
                                            </button>
                                        </div>
                                      

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
               

            </div> */}

            {/* <div>

            <div className={styles.middleheadersection}>
                    <div className='header'>
                        <div className={styles.insidemiddlesectionheader}>
                            <div className={router.pathname == "/explore" ? "active" : "nav-link"}>
                                <Link href="/explore" className='nav-link'>
                                    <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />
                                    <span className='ms-2'>Explore</span>
                                </Link>
                            </div>
                            <div className={styles.bordercolors}>
                                |
                            </div>
                            <div className={router.pathname == "/womenpreneurs" ? "active" : ""}>

                                <Link href="/womenpreneurs" className='nav-link'>
                                    <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />

                                    <span className='ms-2'>Our womenpreneurs</span>
                                </Link>
                            </div>
                            <div className={router.pathname == "/events" ? "active" : ""}>
                                <Link href="/events" className='nav-link'>
                                    <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />

                                    <span className='ms-2'>Events & updates</span>
                                </Link>
                            </div>
                            <div className={router.pathname == "/abouts" ? "active" : ""}>
                                <Link href="/abouts" className='nav-link'>
                                    <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />

                                    <span className='ms-2'></span> About us
                                </Link>
                            </div>
                            <div className={router.pathname == "/getintouch" ? "active" : ""}>
                                <Link href="/getintouch" className='nav-link'>
                                    <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />
                                    <span className='ms-2'>Get in touch</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
// export default Header;
