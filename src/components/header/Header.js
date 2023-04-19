import React, { Fragment, useEffect } from 'react'
import styles from './styles/Header.module.scss';
import serachicon from '../../assests/homepage-logos/serachicon.png';
import Image from 'next/image';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import { useRouter } from 'next/router';
import Link from 'next/link';
import cartslogo from '../../assests/homepage-logos/basket.png';
import profile from '../../assests/homepage-logos/profile.png';
import myprofile from '../../assests/login-logos/myprofile.png';
import logout from '../../assests/login-logos/logout.png';
import notifications from '../../assests/login-logos/notifications.png';
import { useContext, useState } from 'react';
import dynamic from 'next/dynamic';
import { toast } from 'react-toastify';
import heart from '../../assests/homepage-logos/hearticon.png';
import { ContextStore } from './../../Redux/store/Contextstore';
import { GetFavoritsList } from './../../services/user-favorits-service/User-favorits-service';
import { ExploreCategorys } from '../../services/explore-service/explore-service';
import { useDispatch, useSelector } from 'react-redux';
import { FavortActions } from '../../Redux/actions/favortactions/Favortactions';
import Searchbar from './serachcategorys/Searchbar';
import Dropdown from 'react-bootstrap/Dropdown';
import aroepath from '../../assests/homepage-logos/path.png';
import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll } from 'react-scroll'
import GetAboutusCount from '../../Redux/actions/aboutuscounts/Aboutuscounts';
import { SearchProductCategorys } from '../../services/category-services/category-service';
function Header() {
    const { state } = useContext(ContextStore);
    const dispatch = useDispatch();
    const favortcountdataredux = useSelector((state) => state);
    const { cart } = state;
    const router = useRouter();
    const [showmega, setShowMega] = useState(false);
    const [userauth, setUserAuth] = useState("");
    const [favortscount, setFavortcount] = useState([]);
    const [explorecategorys, setCatgorys] = useState([]);

    const [searchDatacategory, setSearchDataCategory] = useState([]);
    const logoutHandler = async () => {
        toast.success("Logout Successfull!!",
            {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                progress: undefined,
                theme: "dark",
                draggable: false
            }
        );
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
        localStorage.removeItem('signupuser');
        setShowMega(false);
        setTimeout(() => {
            router.push("/");
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
    const NaigateHoverAboutus = () => {
        router.push(`/abouts`);

    }
    const pushCategory = (data) => {
        router.push(`/category/${data}`);

    }

    const heartpushdata = () => {
        router.push(`/profile/favorts`);
    }
    useEffect(() => {
        const auth = localStorage.getItem("auth");
        setUserAuth(auth);

        ExploreCategorys().then((res) => {
            setCatgorys(res?.data);
        }).catch((err) => {
            console.log(err);
        })
        FavortActions(dispatch);
        FilterData();


        SearchProductCategorys().then((res) => {
          
            setSearchDataCategory(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [userauth]);



    const SellerLogin = () => {
        window.open('https://eseller.cdp360.in/sign-up')
    }


    const [serachcategory, setSerachCategory] = useState("");

    const [serachdata, setSearchData] = useState([]);

    const handleChange = (e) => {
        setSerachCategory(e?.target?.value)
        FilterData(e?.target?.value)
    }

    


    const FilterData = (value) => {
        const filtersoverall = searchDatacategory.filter((user) => {
            return value && user && user?.name && user?.name.toLowerCase().includes(value);
        });
        setSearchData(filtersoverall)
    }



    const AboutusCountName = (data) => {
        dispatch(GetAboutusCount(data));
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
                            <div className={styles.insidemiddlelogo}>
                                <div className={styles.boxinside}>
                                    <div className={styles.leftheaderbox}>
                                        <div className={styles.inputsearchsection}>
                                            <input type="text" placeholder='Search for products,brands and more....' className="inputserach" onChange={handleChange} value={serachcategory} />
                                            <div>
                                                <Image src={serachicon} alt="no image" className='serachicon' />
                                            </div>
                                        </div>
                                        <div className={styles.barsectiontop}>
                                            {serachcategory ? <Searchbar serachdata={serachdata} serachicon={serachicon} /> : <></>}

                                        </div>
                                    </div>

                                    <div className={styles.rightheaderbox}>
                                        <div className={styles.Seller} onClick={SellerLogin}>
                                            Become a WomeynPreneur
                                        </div>
                                    </div>
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
                                        {favortcountdataredux?.favorts?.favortsdata?.length > 0 ? <div className={styles.cartcountbox}>
                                            {favortcountdataredux?.favorts?.favortsdata?.length}
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
                                            {favortcountdataredux?.loginUser?.logindata?.profileImageName ? <>
                                                <img
                                                    className={styles.notificationsprofile}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${favortcountdataredux?.loginUser?.logindata?.profileImageName}`}
                                                    alt="profile-pic"
                                                />

                                            </> : <>
                                                <Image src={profile} alt="no image" className={styles.notificationsprofile} />

                                            </>}

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
                                            <li><a className="commontitle">{explorecategorys[0]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[0]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <li><a className="commontitle">{explorecategorys[1]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[1]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="secondsection">
                                            <li><a className="commontitle">{explorecategorys[2]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[2]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                            <li><a className="commontitle">{explorecategorys[3]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[3]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="thirdsection">
                                            <li><a className="commontitle">{explorecategorys[4]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[4]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="fourthsection">
                                            <li><a className="commontitle">{explorecategorys[5]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[5]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                            <li><a className="unactivetext">{item?.name}</a></li>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="fifthsection">
                                            <li><a className="commontitle">{explorecategorys[6]?.categoryName}</a></li>
                                            <div>

                                                {explorecategorys[6]?.subCategories?.map((item, index) => {
                                                    return (
                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
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
                    <div className={router.pathname == "/products" ? "active" : ""}>
                        <div className='nav-link' onClick={() => router?.push("/products")}>
                            <span className='ms-2 hovertexts'>Products</span>
                        </div>
                    </div>
                    <div className={router.pathname == "/service" ? "active" : ""}>
                        <div className='nav-link' onClick={() => router?.push("/service")}>
                            <span className='ms-2 hovertexts'>Services</span>
                        </div>
                    </div>

                    <div className={router.pathname == "/womenpreneurs" ? "active" : ""}>
                        <div className='nav-link' onClick={() => router?.push("/womenpreneurs")}>
                            <span className='ms-2 hovertexts'>Our WomenPreneur</span>
                        </div>
                    </div>
                    <div className={router.pathname == "/events" ? "active" : ""}>
                        <div className='nav-link' onClick={() => router?.push("/events")}>
                            <span className='ms-2 hovertexts'>Events & Updates</span>
                        </div>
                    </div>
                    <div className={router.pathname == "/abouts" ? "active" : ""}>

                        <div class="dropdownabout" onClick={NaigateHoverAboutus}>
                            <button class="dropbtnabout">Dropdown <span><Image src={aroepath} alt="no image" className="patharrow" /></span></button>
                            <div class="dropdown-contentabut">
                                {/* <Link to="firstInsideContainer" onClick={() => AboutusCountName("firstInsideContainer")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>
                                    The Story Behind Womeyn
                                </Link>
                                <Link to="secondInsideContainer" onClick={() => AboutusCountName("secondInsideContainer")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>What is Womeyn</Link>
                                <Link to="c" onClick={() => AboutusCountName("c")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Our Mission & Vision</Link>
                                <Link to="d" onClick={() => AboutusCountName("d")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>The Logo Significance</Link>
                                <Link to="e" onClick={() => AboutusCountName("e")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>The Team</Link>
                                <Link to="g" onClick={() => AboutusCountName("g")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Partners & Collaborations</Link>
                                <Link to="h" onClick={() => AboutusCountName("h")} activeClass="active" spy={true} smooth={true} offset={50} duration={500}>Join Womeyn</Link> */}

                                {/* <Link href="/about#the-team">
      <a>The Team</a>
    </Link> */}
                            </div>
                        </div>
                        {/* <Link href="/abouts" className='nav-link'>
                            <span className='ms-2 hovertexts'>About Us</span>
                        </Link> */}
                        {/* <Dropdown>
                            <Dropdown.Toggle variant="success" id="dropdown-basic" className="kalais">
                                About Us
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> */}


                    </div>
                    <div className={router.pathname == "/getintouch" ? "active" : ""}>
                        <Link href="/getintouch" className='nav-link'>
                            <span className='ms-2 hovertexts'>Get In Touch</span>
                        </Link>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });

