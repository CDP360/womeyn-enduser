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
import { toast } from 'react-toastify';
import { cartContext } from '../../Redux/store/CartContext';
function Header() {
    const { state, dispatch } = useContext(cartContext);
    // const { cart } = state;
    const router = useRouter();
    const states = useSelector(state => state);
    const [showmega, setShowMega] = useState(false);
    const [userimage, setUserImage] = useState("");
    const logoutHandler = async () => {
        toast.success("Logout User Successflly");
        localStorage.removeItem("womenUserid");
        localStorage.removeItem("womenUserToken");
        localStorage.removeItem("womenProfile");
        setTimeout(() => {
            router.push("/login");
        }, 1000)

    };
    const userProfile = () => {
        router.push("/profile/youraccount")
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

    ]

    useEffect(() => {
        const image = localStorage.getItem("womenUserToken");
        setUserImage(JSON.parse(image));
    }, [userimage])
    return (
        <Fragment>
            <div className={styles.mainheadersection}>
                <div className={styles.insidesectionheader}>
                    <div className={styles.insidesplitheader}>
                        <div className={styles.leftlogo}>
                            <div onClick={() => router.push("/")}>
                                <Image src={womeynlogo} alt="no image" className={styles.womeynlogo} />
                            </div>
                        </div>
                        <div className={styles.middlelogo}>
                            <div className={styles.inputsearchsection}>
                                <input type="text" placeholder='Search here...' className="inputserach" />
                                <div>
                                    <Image src={serachicon} alt="no image" className='serachicon' />
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightlogo}>
                            <div className={styles.insiderightlogos}>

                                <div className={styles.falight} onClick={notificationsPush}>
                                    <Image src={notifications} alt="no image" className={styles.notifications} />
                                </div>
                                <div className={styles.falight} onClick={carts}>
                                    <div className={styles.maincartcount}>
                                        <div>
                                            <Image src={cartslogo} alt="no image" className={styles.notifications} />
                                        </div>
                                        {/* {cart?.cartData?.length > 0 ? <div className={styles.cartcountbox}>
                                            {cart.cartData?.length}
                                        </div>
                                            : <></>} */}
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <div className={styles.logintextsize}>
                                        {userimage ? <>
                                            <Image src={profile} alt="no image" className={styles.notificationsprofile} />

                                        </> : <>Login</>}
                                    </div>

                                    {userimage ?
                                        <>
                                            <div className="dropdowncontent">
                                                <div className={styles.headerprofile} onClick={userProfile}>
                                                    <div>
                                                        <Image src={myprofile} alt="no image" className={styles.profileimageover} />
                                                    </div>
                                                    <div className={styles.logouttexts}>
                                                        My Profile
                                                    </div>
                                                </div>
                                                <hr />
                                                <div className={styles.headerprofile} onClick={logoutHandler}>
                                                    <div>
                                                        <Image src={logout} alt="no image" className={styles.profileimageover} />
                                                    </div>
                                                    <div className={styles.logouttexts}>
                                                        Logout
                                                    </div>
                                                </div>
                                            </div>
                                        </> : <div className="dropdowncontent">
                                            <div>
                                                Create account / LogIn
                                                <button className='active mt-3 loginbuttonhome' onClick={Login}>
                                                    LogIn/SignUp
                                                </button>
                                            </div>
                                        </div>}
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
                        <ul className="dropdownmegamain">
                            <li>
                                <a>
                                    {/* <Image src={iconmenu} alt="no image" className={styles.menuicons} style={{ color: "blue" }} /> */}
                                    <span className='ms-2'>Explore</span>
                                </a>
                                <ul className="dropdownmega">
                                    <div className="maindropdown">
                                        <div className="firstsection">
                                            <li><a className="commontitle">TopWare</a></li>
                                            <div>

                                                {datas?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext" href="">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="secondsection">
                                            <li><a className="commontitle">TopWare</a></li>
                                            <div>

                                                {datas?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="thirdsection">
                                            <li><a className="commontitle">TopWare</a></li>
                                            <div>

                                                {datas?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="fourthsection">
                                            <li><a className="commontitle">TopWare</a></li>
                                            <div>

                                                {datas?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="fifthsection">
                                            <li><a className="commontitle">TopWare</a></li>
                                            <div>

                                                {datas?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>
                                </ul>

                            </li>
                        </ul>
                    </div>

                    <div className={router.pathname == "/womenpreneurs" ? "active" : ""}>
                        <Link href="/womenpreneurs" className='nav-link'>
                            <span className='ms-2'>Our WomenPreneurs</span>
                        </Link>
                    </div>
                    <div className={router.pathname == "/events" ? "active" : ""}>
                        <Link href="/events" className='nav-link'>
                            <span className='ms-2'>Events & Updates</span>
                        </Link>
                    </div>
                    <div className={router.pathname == "/abouts" ? "active" : ""}>
                        <Link href="/abouts" className='nav-link'>
                            <span className='ms-2'></span> About Us
                        </Link>
                    </div>
                    <div className={router.pathname == "/getintouch" ? "active" : ""}>
                        <Link href="/getintouch" className='nav-link'>
                            <span className='ms-2'>Get In Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });
// export default Header;
