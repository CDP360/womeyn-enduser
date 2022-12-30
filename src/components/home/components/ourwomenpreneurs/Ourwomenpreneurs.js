import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Ourwomen.module.scss';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import { useSelector } from 'react-redux';
import anu from '../../../../assests/homepage-logos/anuwomeyn.png';

import facebook from '../../../../assests/homepage-logos/facebook.png';
import linkedin from '../../../../assests/homepage-logos/linkedin.png';
import twitter from '../../../../assests/homepage-logos/twitter.png';
import instagram from '../../../../assests/homepage-logos/instagram.png';

import Image from 'next/image';
function Ourwomenpreneurs() {
    const [count, setCount] = useState("");
    const [datas, setDatas] = useState([]);

    const state = useSelector((state) => state);
    const counts = state?.slidercount?.counts;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,  
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
    const data = [
        {
            id: 1,
            image: anu,
            title: "ANU KULKARNI 0",
            title1: 'FOUNDER & DIRECTOR - WOMEYN',
            description: "With over 25 years of corporate and business experience ranging from fashion, jewelry to fitness. ",
            button: "VISIT HER STORE!",
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            linked: linkedin,
        },
        {
            id: 2,
            image: anu,
            title: "ANU KULKARNI 1",
            title1: 'FOUNDER & DIRECTOR - WOMEYN',
            description: "With over 25 years of corporate and business experience ranging from fashion, jewelry to fitness. ",
            button: "VISIT HER STORE!",
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            linked: linkedin,
        },
        {
            id: 3,
            image: anu,
            title: "ANU KULKARNI 2",
            title1: 'FOUNDER & DIRECTOR - WOMEYN',
            description: "With over 25 years of corporate and business experience ranging from fashion, jewelry to fitness. ",
            button: "VISIT HER STORE!",
            facebook: facebook,
            twitter: twitter,
            instagram: instagram,
            linked: linkedin,
        }

    ]
    useEffect(() => {

    }, [counts])
    return (
        <Fragment>
            <div className={styles.maonourwomensection}>
                <div className={styles.insideourwomensection}>
                    <div className={styles.topdasahed}>
                        <div className='textdashed'>
                        </div>
                    </div>
                    <div className='textseller mt-5'>
                        Our Womenpreneurs of the Month!
                    </div>
                    <div className={styles.womensectionslider}>
                        <div className={styles.insidewomensectionslider}>
                            <div className={styles.leftwomeynsection}>
                                <Slider {...settings}>
                                    {data.map((item, index) => {
                                        return (
                                            <div className={styles.insideslides}>
                                                <div className={styles.backgroundslidewomen}>
                                                </div>
                                                <Image src={item?.image} alt="no image" className={styles.slideimagesize} />

                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                            <div className={styles.rightwomeynsection}>

                                <div className={styles.rightinsidewomentext}>
                                    <div className='textseller'>
                                        {data[counts - 1]?.title}
                                    </div>
                                    <div className='textgrey'>
                                        {data[counts - 1]?.title1}
                                    </div>
                                    <div className={styles.descriptioninwomeyn}>
                                        {data[counts - 1]?.description}
                                    </div>
                                    <div className={styles.womenactiveprofiletext}>
                                        <div>
                                            <button className={styles.selleractives}> {data[counts - 1]?.button}</button>
                                        </div>
                                        <div className={styles.socialspacewomen}>
                                            <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.linked} alt='no image' className={styles.socialmdeiaicons} />
                                            </div>
                                            <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.twitter} alt='no image' className={styles.socialmdeiaicons} />
                                            </div>
                                            <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.facebook} alt='no image' className={styles.socialmdeiaicons} />
                                            </div>
                                            <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.instagram} alt='no image' className={styles.socialmdeiaicons} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="textdashed">
                                    </div>
                                    <div className='mt-2'>
                                        <span className='active fs-2 fw-1'>{state?.slidercount?.counts}</span>/{data.length}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Ourwomenpreneurs 