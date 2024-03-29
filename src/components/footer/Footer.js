import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Footer.module.scss';
import womeynlogo from '../../assests/homepage-logos/womeyn_logo.png';
import Image from 'next/image';
import facebook from '../../assests/login-logos/facebook.png';
import youtube from '../../assests/homepage-logos/youtubered.png';
import instagram from '../../assests/login-logos/instagram.png';
import linkdin from '../../assests/login-logos/linkedin.png';
import twitter from '../../assests/login-logos/twitter.png';
import headphone from '../../assests/homepage-logos/headphonefooter.png';
import { useRouter } from 'next/router';
import { ConatctAdminInfor } from '../../services/contact-service/contact-service';
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
    const youtubelink = () => {
        window.open(`https://www.youtube.com/@Womeyn`);

    }
    const twitterlink = () => {
        window.open(`https://twitter.com/womeyn/`);
    }
    const homePage = () => {
        router.push("/");
    }
    const [information, setInformation] = useState([]);
    useEffect(() => {
        ConatctAdminInfor().then((res) => {
            setInformation(res?.data[0]);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <Fragment>

            <div className={styles.mainfootersection}>
                <div className={styles.insidefootersection}>
                    <div className={styles.splitinsidefootersection}>
                        <div className={styles.splitfootersection}>
                            <div className={styles.footersectionone}>
                                <div onClick={homePage}>
                                    <Image src={womeynlogo} alt="no image" />
                                </div>
                                <div className='footergreytext'>
                                    Womeyn is a new age eCommerce Platform. Please connect, like and follows us via social media.
                                </div>
                                <div className={styles.socailfootersection}>
                                    <div className={styles.footeremptysocialsection} onClick={youtubelink}>
                                        <Image src={youtube} alt="no image" className={styles.footersocialicons} />
                                    </div>
                                    <div className={styles.footeremptysocialsection}>
                                        <Image src={linkdin} alt="no image" className={styles.footersocialicons} onClick={linkedins} />
                                    </div>
                                    <div className={styles.footeremptysocialsection} onClick={twitterlink}>
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
                                        Products & Services
                                    </div>
                                    <div onClick={() => router.push("/login")} className={styles.footercontents}>
                                        Login
                                    </div>
                                    <div onClick={() => router.push("/signup")} className={styles.footercontents}>
                                        Join Us
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
                                    {/* <div onClick={() => router.push("/profile/youraccount")} className={styles.footercontents}>
                                        Order Tracking 
                                    </div> */}
                                    <div onClick={() => router.push("/order/tracking")} className={styles.footercontents}>
                                        Order Tracking
                                    </div>
                                    <div onClick={() => router.push("/profile/favorts")} className={styles.footercontents}>
                                        Favorites
                                    </div>
                                    <div onClick={() => router.push("/terms-and-conditions")} className={styles.footercontents}>
                                        Terms & Conditions
                                    </div>
                                    <div className={styles.footercontents}>
                                        Privacy Policy
                                    </div>

                                </div>
                            </div>
                            <div className={styles.footersectionfour}>
                                <div className='footertext' onClick={() => router.push("/getintouch")}>
                                    CONTACT
                                </div>
                                <div>
                                    Team Womeyn is open to ideas, suggestions and comments that will help us improve and grow as a community platform. We would love to hear from you
                                </div>
                                <div>
                                    Email : {information?.email}
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
                                            {`+61 ${information?.contactNo}`}
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