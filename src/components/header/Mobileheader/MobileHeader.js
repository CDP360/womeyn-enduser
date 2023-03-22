import Image from 'next/image';
import React, { useState, Fragment, useEffect,useContext } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import styles from './styles/MobileHeader.module.scss';
import serachicon from '../../../assests/homepage-logos/serachicon.png'
import womeynlogo from '../../../assests/homepage-logos/Mobileviewlogoshort.png';
import profile from '../../../assests/homepage-logos/profile.png';
import closearrow from '../../../assests/homepage-logos/closearrow.png';
import cart from '../../../assests/homepage-logos/basket.png';
import { toast } from 'react-toastify';
import Link from 'next/link';
import { useRouter } from 'next/router';

function MobileHeader() {
    const router = useRouter();
    // const {state,dispatch}=useContext();
    // const {cart}=state;
    const [images, setImages] = useState("");
    const [tokens,setUserToken]=useState("");
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
        router.push("/women/profile")
    }

    useEffect(() => {
            const image = localStorage.getItem("womenUserToken");
            setUserToken(JSON.parse(image));
    }, [tokens]);

    const logoutHandler = async () => {
        toast.success("Logout User Successflly");
        localStorage.removeItem("womenUserid");
        localStorage.removeItem("womenUserToken");
        localStorage.removeItem("womenProfile");
        setTimeout(() => {
            router.push("/login");
        }, 400)

    };
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
                            <div className='profile-section'>
                                {images ?
                                    <img
                                        className={styles.editprofilesection}
                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${images}`}
                                        alt="profile-pic"
                                    />
                                    :
                                    <Image src={profile} alt="no image"  className={styles.editprofilesection} />}
                            </div>
                            <div className='nav-links-section'>
                                <div className={router.pathname == "/explore" ? "active" : "nav-link"} onClick={handleClose}>
                                    <Link href="/explore" className='nav-link'>
                                        {/* <Image src={iconmenu} alt="no image" className="menuicons" /> */}
                                        <span className='ms-1'>Explore</span>
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
                                                <Image src={cart} alt="no image" className={"carticons"} />
                                            </div>

                                            <div className={styles.cartlengthsection}>
                                                {/* {state?.length} */}
                                            </div>

                                        </div>
                                    </div>
                                    <div onClick={profilerouter}>
                                        Profile
                                    </div>
                                   
                                </div>
                               


                            </div>
                            <div>
                                        <div>
                                           {tokens?
                                           <div className={styles.loginbuttons} onClick={logoutHandler}>
                                           Logout
                                           </div>
                                           :<div onClick={Login} className={styles.loginbuttons}>
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