import React, { Fragment, useEffect } from 'react'
import styles from './styles/Header.module.scss';
import serachicon from '../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cartslogo from '../../assests/homepage-logos/basket.png';
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
import { useState } from 'react';
import facebook from '../../assests/homepage-logos/facebookfooter.png';
import youtube from '../../assests/homepage-logos/youtubered.png';
import instagram from '../../assests/homepage-logos/newinstagramfooter.png';
import linkdin from '../../assests/homepage-logos/linkedinfooter.png';
import twitter from '../../assests/homepage-logos/twitterfooter.png';

function Header({ setdark, dark }) {
    const { state, dispatch } = useContext(ContextStore);
    const { cart } = state;
    const router = useRouter();
    const states = useSelector(state => state.cart.cartitems);
    const { status, data: session } = useSession();
    const [showmega, setShowMega] = useState(true);
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

    const [hovers, setHovers] = useState(false);

    const notificationsPush = () => {
        router.push("/notifications")
    }
    const NaigateHover = () => {
        setHovers(true);
    }
    const pushCategory = (data) => {
        router.push(`/category/${data}`);
       
    }




    const datas = [
        {
            id: 1,
            name: "Blazers"
        },
        {
            id: 2,
            name: "Dresses | Jumpsuits"
        },
        {
            id: 3,
            name: "Shirts"
        },
        {
            id: 4,
            name: "Trousers"
        },
        {
            id: 5,
            name: "Tops | Corsets"
        },
        {
            id: 6,
            name: "Bodysuits"
        },
        {
            id: 7,
            name: "Tshirts"
        },
        {
            id: 8,
            name: "Jeans"
        },
        {
            id: 9,
            name: "Skirts"
        },
        {
            id: 10,
            name: "Suits"
        },
        {
            id: 11,
            name: "Indian Wear"
        },
        {
            id: 12,
            name: "Jacket | Overcoats"
        }
    ]
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
                            <div className={styles.maincartcount}>
                   <div>
                   <Image src={cartslogo} alt="no image" className={styles.carticons} />
                    </div>
                            <div className={styles.cartcountbox}>
                            {cart.cartData?.length}
                            </div>
                            </div>
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

                <div className={styles.emptyboxleftcolor}>
                </div>


                <div className={styles.insidemiddlesections}>
                    <div className={router.pathname == "/explore" ? "active" : "nav-link"}>
                        {/* <Link href="/explore" className='nav-link' onMouseOver={NaigateHover}>
                            <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />
                            <span className='ms-2'>Explore</span>
                        </Link> */}


                        <ul className="dropdownmegamain">
                            <li><a href="#">
                                <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} />
                                <span className='ms-2'>Explore</span>
                            </a>
                                <ul class="dropdownmega">
                                    <div>
                                        <li><a className="kalais">Fashion & Lifestyle</a></li>
                                    </div>
                                    {datas.map((item, index) => {
                                        return (
                                            <div className="mt-2" onClick={() => pushCategory(item?.name)}>
                                                <li><a className="" href="">{item?.name}</a></li>
                                            </div>
                                        )
                                    })}


                                    <li className="d-flex align-items-center justify-content-center">
                                        <a>
                                            <div className={styles.socailfootersection}>
                                                <div className={styles.footeremptysocialsection}>
                                                    <Image src={youtube} alt="no image" className={styles.footersocialicons} />
                                                </div>
                                                <div className={styles.footeremptysocialsection}>
                                                    <Image src={linkdin} alt="no image" className={styles.footersocialicons} />
                                                </div>
                                                <div className={styles.footeremptysocialsection}>
                                                    <Image src={twitter} alt="no image" className={styles.footersocialicons} />
                                                </div>
                                                <div className={styles.footeremptysocialsection}>
                                                    <Image src={facebook} alt="no image" className={styles.footersocialicons} />
                                                </div>
                                                <div className={styles.footeremptysocialsection}>
                                                    <Image src={instagram} alt="no image" className={styles.footersocialicons} />
                                                </div>

                                            </div>
                                        </a>
                                    </li>
                                </ul>

                            </li>




                        </ul>





                    </div>
                    <div className={styles.bordercolors}>
                        |
                    </div>
                    <div className={router.pathname == "/womenpreneurs" ? "active" : ""}>
                        <Link href="/womenpreneurs" className='nav-link'>
                            <span className='ms-2'>Our womenpreneurs</span>
                        </Link>
                    </div>
                    <div className={router.pathname == "/events" ? "active" : ""}>
                        <Link href="/events" className='nav-link'>
                            <span className='ms-2'>Events & updates</span>
                        </Link>
                    </div>
                    <div className={router.pathname == "/abouts" ? "active" : ""}>
                        <Link href="/abouts" className='nav-link'>
                            <span className='ms-2'></span> About us
                        </Link>
                    </div>
                    <div className={router.pathname == "/getintouch" ? "active" : ""}>
                        <Link href="/getintouch" className='nav-link'>
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
