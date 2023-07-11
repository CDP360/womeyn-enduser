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
import heart1 from '../../assests/heartlogos/heart1.png';
import heart2 from '../../assests/heartlogos/heart2.png';

import { ContextStore } from './../../Redux/store/Contextstore';
import { GetFavoritsList } from './../../services/user-favorits-service/User-favorits-service';
import { ExploreCategorys } from '../../services/explore-service/explore-service';
import { useDispatch, useSelector } from 'react-redux';
import { FavortActions } from '../../Redux/actions/favortactions/Favortactions';
import Searchbar from './serachcategorys/Searchbar';
import Dropdown from 'react-bootstrap/Dropdown';
import aroepath from '../../assests/homepage-logos/path.png';
import GetAboutusCount from '../../Redux/actions/aboutuscounts/Aboutuscounts';
import { SearchProductCategorys, SearchProductUser } from '../../services/category-services/category-service';
import serviceactive from '../../assests/profile-logo/service_c.png';
import helpss from '../../assests/profile-logo/help_c.png';
import profiles from '../../assests/profile-logo/Profile_w.png';
import couponsactive from '../../assests/profile-logo/ticketactive.png';
import favortsactive from '../../assests/profile-logo/favortsactive.png';
import orderactive from '../../assests/profile-logo/orderactive.png';
import * as Scroll from 'react-scroll';
// import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
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
    const [searchDatacategory1, setSearchDataCategory1] = useState([]);
    const [loadingserach, setLoaderserach] = useState(false);
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
        localStorage.removeItem("userTokens");

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
    const pushServices = (data) => {
        router.push(`/service/${data}`);

    }


    const heartpushdata = () => {
        router.push(`/profile/favorts`);
    }

    const [explorecategorysProductmenu, setCatgorysproductmenu] = useState([]);
    const [explorecategorysservice, setCatgorysproductmenuservices] = useState([]);


    useEffect(() => {
        const auth = localStorage.getItem("auth");
        setUserAuth(auth);
        ExploreCategorys().then((res) => {
            setCatgorys(res?.data);
            setCatgorysproductmenu(res?.data?.productMenus);
            setCatgorysproductmenuservices(res?.data?.serviceMenus)
        }).catch((err) => {
            console.log(err);
        })
        // FavortActions(dispatch);
        FilterData();
        SearchProductCategorys().then((res) => {
            setSearchDataCategory(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [userauth, loadingserach]);

    const SellerLogin = () => {
        window.open('https://eseller.cdp360.in/sign-up')
    }
    const [serachcategory, setSerachCategory] = useState("");
    const [serachdata, setSearchData] = useState([]);
    const handleChange = (e) => {
        setSerachCategory(e?.target?.value)
        FilterData(e?.target?.value);

    }

    const FilterData = (value) => {
        const filtersoverall = searchDatacategory.filter((user) => {
            return value && user && user?.name && user?.name.toLowerCase().includes(value);
        });
        setSearchData(filtersoverall)
    }


    const SearchUserSomething = () => {


        router.push({
            pathname: '/category',
            query: { search: serachcategory },
        })

    }



    const AboutusCountName = (data) => {
        dispatch(GetAboutusCount(data));
    }


    const Orders = (data) => {
        router.push(`/profile/orders`);

    }



    const Services = (data) => {
        router.push(`/profile/services`);
    }

    const Whishlists = (data) => {
        router.push(`/profile/favorts`);
    }


    const Coupons = (data) => {
        router.push(`/profile/coupons`);
    }

    const HelpPage = () => {
        router.push(`/profile/faq`);
    }




    return (
        <Fragment>

            <div className={styles.mainheadersection}>
                <div className={styles.insideheadersplitbox}>
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
                                                    <Image src={serachicon} alt="no image" className={styles.cursorserach} onClick={SearchUserSomething} />
                                                </div>
                                            </div>
                                            <div className={styles.barsectiontop}>
                                                {serachcategory ? <Searchbar serachdata={serachdata} serachicon={serachicon} searchDatacategory={searchDatacategory1} loadingserah={loadingserach} serachcategory={serachcategory} /> : <></>}

                                            </div>
                                        </div>

                                        <div className={styles.rightheaderbox}>
                                            <div className={styles.Seller} onClick={SellerLogin}>
                                                Become a WomeynPreneurs
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightlogo}>
                                <div className={styles.insiderightlogos}>

                                    {/* <div className={styles.falight} onClick={notificationsPush}>
                                    <Image src={notifications} alt="no image" className={styles.notifications} />
                                </div> */}
                                    <div className={styles.falight} >

                                        {router.asPath == "/profile/favorts" ? <>
                                            <div className={styles.maincartcount} onClick={heartpushdata}>
                                                <div>
                                                    <Image src={heart1} alt="no image" className={styles.notifications} />
                                                </div>
                                                {favortcountdataredux?.favorts?.favortsdata?.length > 0 ? <div className={styles.cartcountbox}>
                                                    {favortcountdataredux?.favorts?.favortsdata?.length}
                                                </div>
                                                    : <></>}
                                            </div>
                                        </> : <>
                                            <div className={styles.maincartcount} onClick={heartpushdata}>
                                                <div>
                                                    <Image src={heart2} alt="no image" className={styles.notifications} />
                                                </div>
                                                {favortcountdataredux?.favorts?.favortsdata?.length > 0 ? <div className={styles.cartcountbox}>
                                                    {favortcountdataredux?.favorts?.favortsdata?.length}
                                                </div>
                                                    : <></>}

                                            </div>
                                        </>}

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
                                                            <div className={styles.headerprofile} onClick={Orders}>
                                                                <div>
                                                                    <Image src={orderactive} alt="no image" className={styles.profileimageover} />
                                                                </div>
                                                                <div className={styles.logouttexts}>
                                                                    Product Orders
                                                                </div>
                                                            </div>
                                                            <div className={styles.headerprofile} onClick={Services}>
                                                                <div>
                                                                    <Image src={serviceactive} alt="no image" className={styles.profileimageover} />
                                                                </div>
                                                                <div className={styles.logouttexts}>
                                                                    Service Orders
                                                                </div>
                                                            </div>

                                                            <div className={styles.headerprofile} onClick={Whishlists}>
                                                                <div>
                                                                    <Image src={favortsactive} alt="no image" className={styles.profileimageover} />
                                                                </div>
                                                                <div className={styles.logouttexts}>
                                                                    Whishlist
                                                                </div>
                                                            </div>





                                                            <div className={styles.headerprofile} onClick={Coupons}>
                                                                <div>
                                                                    <Image src={couponsactive} alt="no image" className={styles.profileimageover} />
                                                                </div>
                                                                <div className={styles.logouttexts}>
                                                                    Coupons
                                                                </div>
                                                            </div>


                                                            <div className={styles.headerprofile} onClick={HelpPage}>
                                                                <div>
                                                                    <Image src={helpss} alt="no image" className={styles.profileimageover} />
                                                                </div>
                                                                <div className={styles.logouttexts}>
                                                                    FAQ
                                                                </div>
                                                            </div>


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
                                                        <div className='p-2'>
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

                                                <div>
                                                    <li><a className="commontitles ms-3 fs-5">Products</a></li>
                                                </div>
                                                {explorecategorysProductmenu.slice(0, 200)?.map((item, index) => {
                                                    return (
                                                        <div className="insideservices">

                                                            <div>
                                                                {item?.categoryName === item?.categoryName && <>
                                                                    <li><a className="commontitle">{item?.categoryName}</a></li>
                                                                </>}
                                                            </div>

                                                            <br />
                                                            <div>
                                                                {item?.subCategories?.map((items, index) => {
                                                                    return (
                                                                        <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                                            <li><a className="unactivetext">{items?.name}</a></li>
                                                                        </div>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>


                                                    )
                                                })}

                                            </div>


                                            {explorecategorysProductmenu.length > 200 ? <>

                                                <div className="secondsection">



                                                    {/* <li><a className="commontitles ms-3 fs-5"></a></li> */}



                                                    {explorecategorysProductmenu.slice(200, 400)?.map((item, index) => {
                                                        return (
                                                            <div className="insideservices">

                                                                <div>
                                                                    {item?.categoryName === item?.categoryName && <>
                                                                        <li><a className="commontitle">{item?.categoryName}</a></li>
                                                                    </>}
                                                                </div>

                                                                <br />
                                                                <div>
                                                                    {item?.subCategories?.map((items, index) => {
                                                                        return (
                                                                            <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                                                <li><a className="unactivetext">{items?.name}</a></li>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </> : <>

                                            </>}


                                            {explorecategorysProductmenu.length > 400 ? <>
                                                <div className="thirdsection">
                                                    {/* <li><a className="commontitle">{explorecategorys[4]?.categoryName}</a></li>
                                                <div>
                                                    {explorecategorys[4]?.subCategories?.map((item, index) => {
                                                        return (
                                                            <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                                <li><a className="unactivetext">{item?.name}</a></li>
                                                            </div>
                                                        )
                                                    })}
                                                </div> */}

                                                    <li><a className="commontitles ms-3 fs-5"></a></li>



                                                    {explorecategorysProductmenu.slice(400, 1000)?.map((item, index) => {
                                                        return (
                                                            <div className="insideservices">

                                                                <div>
                                                                    {item?.categoryName === item?.categoryName && <>
                                                                        <li><a className="commontitle">{item?.categoryName}</a></li>
                                                                    </>}
                                                                </div>

                                                                <br />
                                                                <div>
                                                                    {item?.subCategories?.map((items, index) => {
                                                                        return (
                                                                            <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                                                <li><a className="unactivetext">{items?.name}</a></li>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>


                                                        )
                                                    })}



                                                </div>


                                            </> : <></>}

                                            {explorecategorysservice.length > 0 ? <>

                                                <div className="fourthsection">
                                                    {/* <li><a className="commontitle">{explorecategorys[5]?.categoryName}</a></li>
                                                <div>

                                                    {explorecategorys[5]?.subCategories?.map((item, index) => {
                                                        return (
                                                            <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                                <li><a className="unactivetext">{item?.name}</a></li>
                                                            </div>
                                                        )
                                                    })}
                                                </div> */}
                                                    <li><a className="commontitles ms-3 fs-5">Services</a></li>

                                                    {explorecategorysservice.slice(0, 200)?.map((item, index) => {
                                                        return (
                                                            <div className="insideservices">

                                                                <div>
                                                                    {item?.categoryName === item?.categoryName && <>
                                                                        <li><a className="commontitle">{item?.categoryName}</a></li>
                                                                    </>}
                                                                </div>

                                                                <br />
                                                                <div>
                                                                    {item?.subCategories?.map((items, index) => {
                                                                        return (
                                                                            <div className="flexdirections" onClick={() => pushServices(item?.slugName)} key={index}>
                                                                                <li><a className="unactivetext">{items?.name}</a></li>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>


                                                        )
                                                    })}
                                                </div>

                                            </> : <></>}


                                            {explorecategorysservice.length > 200 ? <>

                                                <div className="fifthsection">
                                                    {/* <li><a className="commontitle">{explorecategorys[6]?.categoryName}</a></li>
                                                <div>

                                                    {explorecategorys[6]?.subCategories?.map((item, index) => {
                                                        return (
                                                            <div className="flexdirections" onClick={() => pushCategory(item?.slugName)} key={index}>
                                                                <li><a className="unactivetext">{item?.name}</a></li>
                                                            </div>
                                                        )
                                                    })}
                                                </div> */}

                                                    {explorecategorysservice.slice(400, 800)?.map((item, index) => {
                                                        return (
                                                            <div className="insideservices">

                                                                <div>
                                                                    {item?.categoryName === item?.categoryName && <>
                                                                        <li><a className="commontitle">{item?.categoryName}</a></li>
                                                                    </>}
                                                                </div>

                                                                <br />
                                                                <div>
                                                                    {item?.subCategories?.map((items, index) => {
                                                                        return (
                                                                            <div className="flexdirections" onClick={() => pushServices(item?.slugName)} key={index}>
                                                                                <li><a className="unactivetext">{items?.name}</a></li>
                                                                            </div>
                                                                        )
                                                                    })}
                                                                </div>
                                                            </div>


                                                        )
                                                    })}
                                                </div>
                                            </> : <></>}



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
                                <span className='ms-2 hovertexts'>Our WomeynPreneurs</span>
                            </div>
                        </div>
                        <div className={router.pathname == "/events" ? "active" : ""}>
                            <div className='nav-link' onClick={() => router?.push("/events")}>
                                <span className='ms-2 hovertexts'>Events & Blogs</span>
                            </div>
                        </div>
                        <div className={router.pathname == "/abouts" ? "active" : ""}>
                            <div class="dropdownabout" >
                                <button class="dropbtnabout" ><span className={router?.pathname == "/abouts" ? "active" : ""}>About Us</span> <span><Image src={aroepath} alt="no image" className="patharrow" /></span></button>
                                <div class="dropdown-contentabut">

                                    <Link href="/abouts#WhatisWomeyn" scroll={false} >
                                        What is Womeyn
                                    </Link>

                                    <Link href="/abouts#OurMission&Vision" scroll={false} >
                                        Our Mission & Vision
                                    </Link>
                                    <Link href="/abouts#TheLogoSignificance" scroll={false} >
                                        The Logo Significance
                                    </Link>


                                    <Link href="/abouts#TheTeam" scroll={false} >
                                        Our Team
                                    </Link>

                                    <Link href="/abouts#PartnersCollaborations" scroll={false} >
                                        Partners & Collaborations
                                    </Link>
                                    <Link href="/abouts#JoinWomeyn" scroll={false} >
                                        Join Womeyn
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className={router.pathname == "/getintouch" ? "active" : ""}>
                            <div className='nav-link' onClick={() => router?.push("/getintouch")}>
                                <span className='ms-2 hovertexts'>Get In Touch</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </Fragment>
    )
}

export default dynamic(() => Promise.resolve(Header), { ssr: false });

