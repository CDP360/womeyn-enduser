import { useRouter } from 'next/router'
import React, { useEffect, Fragment } from 'react'
import Cookies from 'js-cookie';
import styles from './styles/Home.module.scss';
import Image from 'next/image';
import Slider from "react-slick";
import Womeynbanner from '../../../src/assests/homepage-logos/woymenbanner.png';
import ad1 from '../../../src/assests/homepage-logos/ad1.svg';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import Categorychoose from './components/categorychoose/Categorychoose';
import Summarybreaksalary from './components/summarybreaksalary/Summarybreaksalary';
import Bestseller from './components/bestseller/Bestseller';
import Ourwomenpreneurs from './components/ourwomenpreneurs/Ourwomenpreneurs';
import Eventlatestupdate from './components/eventslatestupdates/Eventlatestupdate';
import Signupnewsletter from './components/signupfornewsletter/Signupnewsletter';
import Footer from '../footer/Footer';
import Layout from '../../../pages/layout/index'
function Home({ womeyntheme, setWomeynTheme }) {
    const history = useRouter();
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

    const handleRemoves = () => {
        Cookies.remove("nextauth");
        setTimeout(() => {
            history.push("/");
        }, 1000);
    }
    return (
        <Fragment>
            <div className={styles.homesectionmain}>
                <div className={styles.insidehomesection}>
                    <div className={styles.headersectionhome}>
                        <Layout />
                    </div>
                    <div className={styles.emptysectionbox}>
                    </div>
                    <div className={styles.emptysectionboxorange}>
                    </div>

                    <div className={styles.bodysectionhome}>
                        <div className={styles.insidehomesectionbody}>
                            <div className={styles.widthsectionhome}>
                                <div className={styles.imagesectionhome}>
                                    <Slider {...settings}>
                                        <div>
                                            <Image src={Womeynbanner} alt="no image" className={styles.sliderimage} />
                                        </div>
                                        <div>
                                            <Image src={Womeynbanner} alt="no image" className={styles.sliderimage} />
                                        </div>
                                        <div>
                                            <Image src={Womeynbanner} alt="no image" className={styles.sliderimage} />
                                        </div>
                                        <div>
                                            <Image src={Womeynbanner} alt="no image" className={styles.sliderimage} />
                                        </div>
                                        <div>
                                            <Image src={Womeynbanner} alt="no image" className={styles.sliderimage} />
                                        </div>
                                    </Slider>
                                </div>
                                <div className={styles.addimagetagss}>
                                    <div className={styles.addimagessectionleft}>
                                        <Image src={ad1} alt="no image" className={styles.add1} />
                                    </div>
                                    <div className={styles.addimagessectionright}>
                                        <Image src={ad1} alt="no image" className={styles.add1} />
                                    </div>
                                </div>
                                <div>
                                    <Categorychoose />
                                </div>
                            </div>
                            <div>
                                <Summarybreaksalary />
                            </div>
                            <div>
                                <Bestseller />
                            </div>
                            <div>
                                <Ourwomenpreneurs />
                            </div>
                            <div>
                                <Eventlatestupdate />
                            </div>
                            <div>
                                <Signupnewsletter />
                            </div>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment >

    )
}

export default Home