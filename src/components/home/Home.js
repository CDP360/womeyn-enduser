import React, { useEffect, Fragment, useState } from 'react'
import styles from './styles/Home.module.scss';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import Categorychoose from './components/categorychoose/Categorychoose';
import Summarybreaksalary from './components/summarybreaksalary/Summarybreaksalary';
import Bestseller from './components/bestseller/Bestseller';
import Ourwomenpreneurs from './components/ourwomenpreneurs/Ourwomenpreneurs';
import Eventlatestupdate from './components/eventslatestupdates/Eventlatestupdate';
import Blogs from './components/blogs/Blogs';
import { useSelector } from 'react-redux';
import Whatmake from './components/whatmake/Whatmake';
import { Bannerimage } from '../../services/banner-image-service/banner-image-service';
import Skeleton from 'react-loading-skeleton';
import { UserProfileInformation } from '../../services/user-login-service/user-login-services';
import { HomeTexts } from '../../consttext/Homeconst';
import Head from "next/head";

import womenlog from '../../assests/homepage-logos/Mobileviewlogoshort.png';
import { NavigatePage } from '../../config/PageNavigate';

import jwt_decode from "jwt-decode";




function Home() {
    const [bannerimages, setBannerImages] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const gototop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
    const state = useSelector(state => state);
    useEffect(() => {
        GetBannerimages();
        CheckTokens();

        

        const token =
      
        JSON.parse(localStorage.getItem("userToken"));

        const g=jwt_decode(token);
        console.log(g,"g")
    if (jwt_decode(token).exp < Date.now() / 1000) {
        localStorage.clear();
    }

       

    }, [state]);

    const CheckTokens = async () => {
        try {
            const userid = localStorage.getItem("userid");
            await UserProfileInformation(JSON.parse(userid));
        }
        catch (err) {
            if (err?.response?.data?.message == "Please authenticate" || err?.response?.data?.message == "Forbidden") {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("userTokens");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                localStorage.removeItem('signupuser');
            
            }

            if (state?.loginUser?.error?.code === 401 || state?.loginUser?.error?.code === 403) {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("userTokens");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                localStorage.removeItem('signupuser');
            }


            if (state?.loginUser?.error?.message == "Please authenticate" || state?.loginUser?.error?.message == "unAuthorized User") {
                localStorage.removeItem("userid");
                localStorage.removeItem("userToken");
                localStorage.removeItem("userTokens");
                localStorage.removeItem("whish");
                localStorage.removeItem("user");
                localStorage.removeItem("auth");
                localStorage.removeItem("productid");
                localStorage.removeItem('signupuser');
            }
        }

    }


    const GetBannerimages = () => {
        Bannerimage().then((res) => {
            setBannerImages(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }
    const MovePageData = (data) => {
        window.open(data);
    }

    return (
        <Fragment>
            <Head>
                <title>Womeyn Home</title>
                <meta name="title" content="Womeyn Home" />
                <meta name="description" content="Team Womeyn is open to ideas, suggestions and comments that will help us improve and grow as a community platform. We would love to hear from you" />
                <meta name="viewport" content="initial-scale=1, width=device-width" />
                <meta name="author" content="Maxime Courtaigne" />
                <meta property="og:type" content="Womeyn Home" />
                <meta property="og:url" content="https://www.womeyn.cdp360.in/" />
                <meta property="og:title" content="Womeyn Home" />
                <meta property="og:description" content="Team Womeyn is open to ideas, suggestions and comments that will help us improve and grow as a community platform. We would love to hear from you" />
                <meta property="og:image" content="https://www.womeyn.cdp360.in/Mobileviewlogoshort.png" />
                <meta property="og:image:width" content="100" />
                <meta property="og:image:height" content="100" />
                <meta property="twitter:card" content="https://www.womeyn.cdp360.in/" />
                <meta property="twitter:url" content="https://www.womeyn.cdp360.in/" />
                <meta property="twitter:title" content="Womeyn Home" />
                <meta property="twitter:description" content="Team Womeyn is open to ideas, suggestions and comments that will help us improve and grow as a community platform. We would love to hear from you" />
                <meta property="twitter:image" content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75" />
            </Head>
            <div className={styles.homesectionmain}>
                <div className={styles.emptyboxrightcolor}>
                </div>
                <div className={styles.emptyboxleftcolor}>
                </div>
                <div className={styles.emptyboxleftcolor1}>
                </div>
                <div className={styles.emptyboxleftcolor2}>
                </div>
                <div className={styles.emptyboxleftcolor3}>
                </div>
                <div className={styles.emptyboxleftcolor4}>
                </div>

                <div>
                </div>
                <div className={styles.insidesectionhome}>
                    <div className={styles.imagesectionhome}>
                        {bannerimages[0]?.HeroBanner?.length === 0 && <div>
                            <Skeleton className={styles.skeltonbox} />
                        </div>}
                        <Slider {...settings}>
                            {bannerimages[0]?.HeroBanner?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.imageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.sliderimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                            <Skeleton className={styles.homebanner} />
                                        </>}
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                    <div className={styles.addimagetagss}>
                        <div className={styles.addimagessectionleft}>
                            {bannerimages[1]?.HeroBannerBottom1[0] ? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${bannerimages[1]?.HeroBannerBottom1[0]?.imageName}`} alt="no image" className={styles.add1} onClick={() => MovePageData(bannerimages[1]?.HeroBannerBottom1[0]?.redirectUrl)} />
                            </> : <>
                                <Skeleton className={styles.addimageboxs} />
                            </>}
                        </div>
                        <div className={styles.addimagessectionright}>
                            {bannerimages[2]?.HeroBannerBottom2[0] ? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${bannerimages[2]?.HeroBannerBottom2[0]?.imageName}`} alt="no image" className={styles.add1} onClick={() => MovePageData(bannerimages[2]?.HeroBannerBottom2[0]?.redirectUrl)} />
                            </> : <>
                                <Skeleton className={styles.addimageboxs} />
                            </>}
                        </div>
                    </div>
                    <div>
                        <Categorychoose HomeTexts={HomeTexts} bannerimages={bannerimages} />
                    </div>
                </div>
                <div>
                    <Summarybreaksalary bannerimages={bannerimages[4]} />
                </div>
                <div>
                    <Bestseller bannerimages={bannerimages[3]} MovePageData={MovePageData} HomeTexts={HomeTexts} />
                </div>
                <div>
                    <Ourwomenpreneurs />
                </div>
                <div>
                    <Eventlatestupdate />
                </div>
                <div>
                    <Blogs />
                </div>
                <div>
                    <Whatmake />
                </div>
            </div>
        </Fragment >

    )
}

export default Home