import { useRouter } from 'next/router'
import React, { useEffect, Fragment, useState } from 'react'
import styles from './styles/Home.module.scss';
import Image from 'next/image';
import Slider from "react-slick";
import Womeynbanner from '../../../src/assests/homepage-logos/woymenbanner.png';
import ad1 from '../../../src/assests/homepage-logos/add2.png';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import Categorychoose from './components/categorychoose/Categorychoose';
import Summarybreaksalary from './components/summarybreaksalary/Summarybreaksalary';
import Bestseller from './components/bestseller/Bestseller';
import Ourwomenpreneurs from './components/ourwomenpreneurs/Ourwomenpreneurs';
import Eventlatestupdate from './components/eventslatestupdates/Eventlatestupdate';
import Signupnewsletter from './components/signupfornewsletter/Signupnewsletter';
import Footer from '../footer/Footer';
import Scrollbutton from '../scrollbutton/Scrollbutton';
import Blogs from './components/blogs/Blogs';
import { useSelector } from 'react-redux';
import Whatmake from './components/whatmake/Whatmake';
import LayoutHeader from '../Layoutheader/LayoutHeader';
import { Bannerimage } from '../../services/banner-image-service/banner-image-service';
import Skeleton from 'react-loading-skeleton';
function Home() {
    const history = useRouter();
    const [showTopBtn, setShowTopBtn] = useState(false);
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
                    slidesToScroll: 2,
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
        GetBannerimages()
    }, [state]);

    const GetBannerimages = () => {
        Bannerimage().then((res) => {
            console.log("kal", res?.data)
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

            <div className={styles.homesectionmain}>
                <div className={styles.emptyboxrightcolor}>
                </div>
                <div className={styles.emptyboxleftcolor}>
                </div>
                <div>

                </div>
                <div className={styles.insidesectionhome}>
                    <div className={styles.imagesectionhome}>
                        {bannerimages[0]?.HeroBanner?.length === 0 && <div>No Banner Image</div>}
                        <Slider {...settings}>
                            {bannerimages[0]?.HeroBanner?.map((item, index) => {
                                return (
                                    <div>
                                        <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.sliderimage} onClick={() => MovePageData(item.redirectUrl)} />
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
                                <Skeleton width={565} height={230} />
                            </>}
                        </div>
                        <div className={styles.addimagessectionright}>

                            {bannerimages[2]?.HeroBannerBottom2[0] ? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${bannerimages[2]?.HeroBannerBottom2[0]?.imageName}`} alt="no image" className={styles.add1} onClick={() => MovePageData(bannerimages[2]?.HeroBannerBottom2[0]?.redirectUrl)} />
                            </> : <>
                                <Skeleton width={565} height={230} />
                            </>}
                        </div>
                    </div>
                    <div>
                        <Categorychoose />
                    </div>
                </div>
                <div>
                    <Summarybreaksalary bannerimages={bannerimages[4]} />
                </div>
                <div>
                    <Bestseller bannerimages={bannerimages[3]} MovePageData={MovePageData} />
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