import React, { Fragment } from 'react'
import styles from './styles/Footer.module.scss';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import Image from 'next/image';
import facebook from '../../assests/homepage-logos/facebookfooter.png';
import youtube from '../../assests/homepage-logos/youtubered.png';
import instagram from '../../assests/homepage-logos/newinstagramfooter.png';
import linkdin from '../../assests/homepage-logos/linkedinfooter.png';
import twitter from '../../assests/homepage-logos/twitterfooter.png';
import headphone from '../../assests/homepage-logos/headphonefooter.png';
import { useRouter } from 'next/router';
function Footer() {
    const router = useRouter();

    const instagrams = () => {
        window.open(`https://www.instagram.com/womeyn/`);
    }

    const facebooks = () => {
        window.open(`https://www.facebook.com/Womeyn`);
    }

    const linkedins = () => {
        window.open(`https://www.linkedin.com/company/womeyn/`);
    }
    return (
        <Fragment>
            <div className={styles.mainfootersection}>

                <div className={styles.insidefootersection}>
                    <div className={styles.splitinsidefootersection}>
                        <div className={styles.splitfootersection}>
                            <div className={styles.footersectionone}>
                                <div>
                                    <Image src={womeynlogo} alt="no image" />
                                </div>
                                <div className='footergreytext'>
                                    Womeyn is a new age eCommerce Platform. Please connect, like and follows us via social media.
                                </div>
                                <div className={styles.socailfootersection}>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={youtube} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={linkdin} alt="no image" className={styles.footersocialicons} onClick={linkedins} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={twitter} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={facebook} alt="no image" className={styles.footersocialicons} onClick={facebooks} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={instagram} alt="no image" className={styles.footersocialicons} onClick={instagrams} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footersectiontwo}>
                                <div className='footertext'>
                                    QUICK LINKS
                                </div>
                                <div className="gapsectionfooter">
                                    <div onClick={() => router.push("/abouts")} className={styles.footercontents}>
                                        About us
                                    </div>
                                    <div onClick={() => router.push("/getintouch")} className={styles.footercontents}>
                                        Contact us
                                    </div>
                                    <div onClick={() => router.push("/womenpreneurs")} className={styles.footercontents}>
                                        Products
                                    </div>
                                    <div onClick={() => router.push("/login")} className={styles.footercontents}>
                                        Login
                                    </div>
                                    <div onClick={() => router.push("/signup")} className={styles.footercontents}>
                                        Sign Up
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footersectionthree}>
                                <div className='footertext'>
                                    CUSTOMER AREA
                                </div>
                                <div className="gapsectionfooter">
                                    <div onClick={() => router.push("/profile/youraccount")} className={styles.footercontents}>
                                        My Account
                                    </div>
                                    <div onClick={() => router.push("/profile/youraccount")} className={styles.footercontents}>
                                        Orders
                                    </div>
                                    <div onClick={() => router.push("/order/tracking")} className={styles.footercontents}>
                                        Tracking List
                                    </div>
                                    <div onClick={() => router.push("/terms-and-conditions")} className={styles.footercontents}>
                                        Terms
                                    </div>
                                    <div className={styles.footercontents}>
                                        Privacy Policy
                                    </div>
                                    <div onClick={() => router.push("/cart")} className={styles.footercontents}>
                                        My Cart
                                    </div>
                                </div>
                            </div>
                            <div className={styles.footersectionfour}>
                                <div className='footertext' onClick={() => router.push("/getintouch")} className={styles.footercontents}>
                                    CONTACT
                                </div>
                                <div>
                                    Team Womeyn is open to ideas, suggestions and comments that will help us improve and grow as a community platform. We would love to hear from you
                                </div>
                                <div>
                                    Email : Contactus@womeyn.com
                                </div>
                                <div className={styles.headphonesectionfooter}>
                                    <div>
                                        <Image src={headphone} alt="nmo image" className={styles.headephoneimage} />
                                    </div>

                                    <div>
                                        <div>
                                            Have any question?
                                        </div>
                                        <div className='active mb-3'>
                                            +61434557191
                                        </div>
                                    </div>
                                </div>
                                {/* <div>
                                    <button className={styles.livechat}>LIVE CHAT</button>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footerrightemptybox}>
            </div>
        </Fragment>
    )
}

export default Footer