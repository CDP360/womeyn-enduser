import { useRouter } from 'next/router'
import React, { useEffect, Fragment, useState } from 'react'
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
import Scrollbutton from '../scrollbutton/Scrollbutton';
import Blogs from './components/blogs/Blogs';
import { useSelector } from 'react-redux';
function Home() {
    const history = useRouter();
    const [showTopBtn, setShowTopBtn] = useState(false);

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

    const state = useSelector(state => state);
    console.log(state, "logindata");
    useEffect(() => {

    }, [state])
    return (
        <Fragment>
            <Scrollbutton />
            <div className={styles.homesectionmain}>
                <div className={styles.insidehomesection}>
                    <div className="emptyboxrightcolor">
                    </div>
                    <div className="emptyboxleftcolor">
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
                                <Blogs />
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