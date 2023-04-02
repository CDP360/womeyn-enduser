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
import { useContext, useState } from 'react';

import dynamic from 'next/dynamic';

import facebook from '../../assests/homepage-logos/facebookfooter.png';
import youtube from '../../assests/homepage-logos/youtubered.png';
import instagram from '../../assests/homepage-logos/newinstagramfooter.png';
import linkdin from '../../assests/homepage-logos/linkedinfooter.png';
import twitter from '../../assests/homepage-logos/twitterfooter.png';
import { toast } from 'react-toastify';
import heart from '../../assests/homepage-logos/hearticon.png';
import { ContextStore } from './../../Redux/store/Contextstore';
import { GetFavoritsList } from './../../services/user-favorits-service/User-favorits-service';
function Header() {
    const { state, dispatch } = useContext(ContextStore);
    const { cart } = state;
    const router = useRouter();
    const states = useSelector(state => state);
    const [showmega, setShowMega] = useState(false);
    const [userauth, setUserAuth] = useState("");
    const [favortscount, setFavortcount] = useState([]);
    const logoutHandler = async () => {
        toast.success("Logout Successfull!!",
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            }
        );
        localStorage.removeItem("womenUserid");
        localStorage.removeItem("womenUserToken");
        localStorage.removeItem("womenProfile");
        localStorage.removeItem("productwhishlist");
        localStorage.removeItem("womenuser");
        localStorage.removeItem("womenauth");
        localStorage.removeItem("womenproductid");
        setShowMega(false);
        setTimeout(() => {
            router.push("/login");
        }, 1000)

    };
    const userProfile = () => {
        router.push("/profile/youraccount")
        setShowMega(false);
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

    const heartpushdata = () => {
        router.push(`/profile/favorts`);

    }

    useEffect(() => {
        const auth = localStorage.getItem("womenauth");
        setUserAuth(auth);
        Favortscount();
    }, [userauth]);

    const Favortscount = () => {
        GetFavoritsList().then((res) => {
            setFavortcount(res?.data[0]?.results);
        }).catch((err) => {
            console.log(err);
        })
    }
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
                                <div className={styles.falight} >
                                    <div className={styles.maincartcount} onClick={heartpushdata}>
                                        <div>
                                            <Image src={heart} alt="no image" className={styles.notifications} />
                                        </div>
                                        {favortscount?.length > 0 ? <div className={styles.cartcountbox}>
                                            {favortscount?.length}
                                        </div>
                                            : <></>}

                                    </div>
                                </div>

                                <div className={styles.falight} onClick={carts}>
                                    <div className={styles.maincartcount}>
                                        <div>
                                            <Image src={cartslogo} alt="no image" className={styles.notifications} />
                                        </div>
                                        {cart?.cartData?.length > 0 ? <div className={styles.cartcountbox}>
                                            {cart.cartData?.length}
                                        </div>
                                            : <></>}
                                    </div>
                                </div>
                                <div className={styles.dropdownsectionkalai}>
                                    <div onClick={() => setShowMega(!showmega)}>
                                        {userauth ? <>
                                            <Image src={profile} alt="no image" className={styles.notificationsprofile} />

                                        </> : <div className={styles.logintexts}>Login</div>}
                                    </div>
                                    {showmega &&

                                        <div className={styles.bordersections}>
                                            {userauth ?
                                                <>
                                                    <div className="dropdowncontents">
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
                                                </> : <div className="dropdowncontents">
                                                    <div>
                                                        Create account / LogIn
                                                        <button className='active mt-3 loginbuttonhome' onClick={Login}>
                                                            LogIn/SignUp
                                                        </button>
                                                    </div>
                                                </div>}
                                        </div>
                                    }

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
                                    <span className='ms-2'>Explore</span>
                                </a>
                                <ul className="dropdownmega">
                                    <div className="maindropdown">
                                        <div className="firstsection">
                                            <li><a className="commontitle">Fashion & Lifestyle</a></li>
                                            <div>

                                                {datas?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext" href="">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <li><a className="commontitle">Educational Services</a></li>
                                            <div>

                                                {datas?.slice(0, 2).map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="secondsection">
                                            <li><a className="commontitle">Consumer Services</a></li>
                                            <div>

                                                {datas?.slice(0, 5).map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <li><a className="commontitle">Consumer Services</a></li>
                                            <div>

                                                {datas?.slice(0, 2).map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.name)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="thirdsection">
                                            <li><a className="commontitle">Health & Wellbeing</a></li>
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
                                            <li><a className="commontitle">Dance & Fitness</a></li>
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
                                            <li><a className="commontitle">Consumer Services</a></li>
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

