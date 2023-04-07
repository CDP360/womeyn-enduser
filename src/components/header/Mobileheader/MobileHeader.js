import Image from 'next/image';
import React, { useState, Fragment, useEffect, useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './styles/MobileHeader.module.scss';
import serachicon from '../../../assests/homepage-logos/serachicon.png'
import womeynlogo from '../../../assests/homepage-logos/Mobileviewlogoshort.png';
import profile from '../../../assests/homepage-logos/profile.png';
import closearrow from '../../../assests/homepage-logos/closearrow.png';
import cartss from '../../../assests/homepage-logos/basket.png';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ContextStore } from '../../../Redux/store/Contextstore';
import heart from '../../../assests/homepage-logos/hearticon.png';
import { GetFavoritsList } from './../../../services/user-favorits-service/User-favorits-service';


function MobileHeader() {
    const router = useRouter();
    const [favortscount, setFavortcount] = useState([]);
    const { state, dispatch } = useContext(ContextStore);
    const { cart } = state;
    const [images, setImages] = useState("");
    const [tokens, setUserToken] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Login = () => {
        router.push("/login");
    }
    const carts = () => {
        router.push("/cart")
    }
    const profilerouter = () => {
        router.push("/profile/youraccount")
    }

    useEffect(() => {
        const image = localStorage.getItem("userToken");
        setUserToken(JSON.parse(image));
    }, [tokens]);

    const logoutHandler = async () => {
        toast.success("Logout User Successflly");
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
        setTimeout(() => {
            router.push("/login");
        }, 400)

    };

    const Becomeaseller=()=>{
        window.open('https://eseller.cdp360.in/')
    }

    const heartpushdata = () => {
        router.push(`/profile/favorts`);

    }

    useEffect(()=>{
        const auth = localStorage.getItem("auth");
        if (auth) {
            Favortscount();

        }
    },[])


    const Favortscount = () => {

        GetFavoritsList().then((res) => {
            setFavortcount(res?.data[0]?.results);
        }).catch((err) => {
            console.log(err);
        })
    }
    return (
        <Fragment>
            <div className={styles.mainmobilesection}>
                <div className={styles.mobileleftsection} onClick={() => router.push("/")}>
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
                    <div onClick={handleShow} >
                        <Image src={profile} alt="no image" className={styles.barsection} />

                    </div>
                    <Offcanvas show={show} onHide={handleClose}>
                        <div className="offcanvebodysection">
                            <div className='arrowend mt-2 p-2' onClick={handleClose}>
                                {/* <Image src={closearrow} alt="no image" className='closearrow' /> */}
                                <ion-icon name="close-outline" className='closearrow' size="large"></ion-icon>
                            </div>
                           <div className="ms-4">

                           <div className='profile-section' onClick={profilerouter}>
                                {images ?
                                    <img
                                        className={styles.editprofilesection}
                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${images}`}
                                        alt="profile-pic"
                                    />
                                    :
                                    <Image src={profile} alt="no image" className={styles.editprofilesection} />}
                            </div>
                            </div>
                            <div className='nav-links-section'>
                                <div className={router.pathname == "/explore" ? "active" : "nav-link"} onClick={handleClose}>
                                    <Link href="/explore" className='nav-link'>
                                        {/* <Image src={iconmenu} alt="no image" className="menuicons" /> */}
                                        <span className='ms-1'>Explore</span>
                                    </Link>
                                </div>
                                <div className={router.pathname == "/service" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/service" className='nav-link'>
                                    Services
                                    </Link>
                                </div>
                                <div className={router.pathname == "/womenpreneurs" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/womenpreneurs" className='nav-link'>
                                        Our womenpreneurs
                                    </Link>
                                </div>
                                <div className={router.pathname == "/events" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/events" className='nav-link'>
                                        Events & updates
                                    </Link>
                                </div>
                                <div className={router.pathname == "/abouts" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/abouts" className='nav-link'>
                                        About us
                                    </Link>
                                </div>
                                <div className={router.pathname == "/getintouch" ? "active" : ""} onClick={handleClose}>
                                    <Link href="/getintouch" className='nav-link'>
                                        Get in touch
                                    </Link>
                                </div>
                            </div>
                            <div className="profilesettings">

                                <div className="insideprofilemobile">

                                    <div onClick={carts}>

                                        <div className={styles.cartlogolength}>
                                            <div className={styles.cartimageposition}>
                                                <Image src={cartss} alt="no image" className={styles.notifications} />
                                            </div>

                                            <div className={styles.cartlengthsection}>
                                                {cart?.cartData?.length > 0 ? <div className={styles.cartcountbox}>
                                                    {cart.cartData?.length}
                                                </div>
                                                    : <></>}
                                            </div>

                                        </div>
                                    </div>
                                   <div className="mt-3 mb-2">
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
                                </div>
                                    {/* <div onClick={profilerouter}>
                                        Profile
                                    </div> */}

                                </div>



                            </div>

                            <div>

                            <div onClick={Becomeaseller} className={styles.loginbuttons}>
                                            Become A Seller
                                        </div>

                            </div>
                            <div>
                                <div>
                                    {tokens ?
                                        <div className={styles.loginbuttons} onClick={logoutHandler}>
                                            Logout
                                        </div>
                                        : <div onClick={Login} className={styles.loginbuttons}>
                                            Login
                                        </div>}
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