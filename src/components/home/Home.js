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
import womenlog from '../../assests/womeynlogos/womeyn small logo.png';
import { NavigatePage } from '../../config/PageNavigate';
import jwt_decode from "jwt-decode";
import Image from 'next/image'
import { NextSeo } from 'next-seo';
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
        const token = localStorage.getItem("userToken");
        var tokenDate = new Date(parseInt(token) * 1000)
        var date = new Date();
        if (tokenDate) {
            if (tokenDate.exp < date.getTime() / 1000) {
                localStorage.clear();

            } else {
                console.log('The token is still valid');

            }
        }
    }, []);

    const CheckTokens = async () => {
        try {
            const userid = localStorage.getItem("userid");
            await UserProfileInformation(JSON.parse(userid));
        }
        catch (err) {

            if (err?.response?.data?.message == "Please authenticate" || err?.response?.data?.message == "Forbidden" || err?.response?.data?.message == "Not found") {
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


            if (state?.loginUser?.error?.message == "Please authenticate" || state?.loginUser?.error?.message == "unAuthorized User" || state?.loginUser?.logindata == []) {
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

    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 20,
            behavior: "smooth",
        });
    };
    return (
        <Fragment>
            <NextSeo
                title="Womeyn Home"
                description="This is a demo description"
                canonical="https://www.womeyn.cdp360.in/"
                openGraph={{
                    // url: f,
                    title: "Womeyn Home",
                    description: 'Womeyn Home Page  https://www.womeyn.cdp360.in/',
                    images: [
                        {
                            url: 'https://imgtr.ee/images/2023/06/23/mXlXl.png',
                            width: "20px",
                            height: "20px",
                            alt: 'Og Image Alt',
                            type: 'image/jpeg',
                        },
                        {
                            url: 'https://imgtr.ee/images/2023/06/23/mXlXl.png',


                            width: "20px",
                            height: "20px",
                            alt: 'Og Image Alt Second',
                            type: 'image/jpeg',
                        },

                    ],
                    site_name: 'YourSiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

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
                <div className="mainsection">
                    <div className="insidesection">
                        <div className={styles.insidesectionhome}>
                            <div className={styles.imagesectionhome}>
                                {bannerimages[0]?.HeroBanner?.length === 0 && <div>
                                    <Skeleton className={styles.skeltonbox} />
                                </div>}
                                <Slider {...settings}>
                                    {bannerimages[0]?.HeroBanner?.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                {item.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.imageName}`} alt="no image" className="allbanners" onClick={() => MovePageData(item.redirectUrl)} quality={80}
                                                /> : <>
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
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${bannerimages[1]?.HeroBannerBottom1[0]?.imageName}`} alt="no image" className={styles.add1} onClick={() => MovePageData(bannerimages[1]?.HeroBannerBottom1[0]?.redirectUrl)} />
                                    </> : <>
                                        <Skeleton className={styles.addimageboxs} />
                                    </>}
                                </div>
                                <div className={styles.addimagessectionright}>
                                    {bannerimages[2]?.HeroBannerBottom2[0] ? <>
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${bannerimages[2]?.HeroBannerBottom2[0]?.imageName}`} alt="no image" className={styles.add1} onClick={() => MovePageData(bannerimages[2]?.HeroBannerBottom2[0]?.redirectUrl)} />
                                    </> : <>
                                        <Skeleton className={styles.addimageboxs} />
                                    </>}
                                </div>
                            </div>
                            <div>
                                <Categorychoose HomeTexts={HomeTexts} bannerimages={bannerimages} />
                            </div>
                        </div>
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
                {/* <div>
                    <Eventlatestupdate />
                </div> */}
                <div>
                    <Blogs />
                </div>
                <div>
                    <Whatmake />
                </div>
                <div>
                </div>
            </div>
        </Fragment >

    )
}

export default Home