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
import { useRouter } from 'next/router';
import { Topwomenprenuers } from '../../../../services/banner-image-service/banner-image-service';
import users from '../../../../assests/homepage-logos/usersimageprofile.png';
function Ourwomenpreneurs() {
    const [count, setCount] = useState("");
    const [datas, setDatas] = useState([]);
    const router = useRouter();
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
        Topwomenprenuers().then((res) => {
            setDatas(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [counts]);

    const SocialIconsOpen = (urldata) => {
        window.open(urldata);
    }

    const handleProductSeller = (id) => {
        router.push(`/womenpreneurs/${id}`);
    }
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
                                    {datas.map((item, index) => {
                                        return (
                                            <div className={styles.insideslides}  key={index}>
                                                <div className={styles.backgroundslidewomen}>
                                                </div>
                                                {item.image ? <>no data</> : <Image src={users} alt="no image" className={styles.slideimagesize} />}
                                            </div>
                                        )
                                    })}
                                </Slider>
                            </div>
                            <div className={styles.rightwomeynsection}>

                                <div className={styles.rightinsidewomentext}>
                                    <div className={styles.textsellers}>
                                        {datas[counts - 1]?.firstName} {datas[counts - 1]?.lastName}
                                    </div>
                                    {/* <div className='textgrey'>
                                        {datas[counts - 1]?.lastName}
                                    </div> */}
                                    {/* <div className='textgrey'>
                                        {datas[counts - 1]?.email}
                                    </div> */}
                                    <div className={styles.descriptioninwomeyn}>
                                        {datas[counts - 1]?.profileDescription}
                                    </div>
                                    <div className={styles.womenactiveprofiletext}>
                                        <div>
                                            <button className={styles.selleractives} onClick={()=>handleProductSeller(datas[counts - 1]?.businessSlugName)}> {datas[counts - 1]?.businessSlugName}</button>
                                        </div>
                                        <div className={styles.socialspacewomen}>
                                            {datas[counts - 1]?.linkedinUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.linked} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts - 1]?.linkedinUrl)} />
                                            </div> : <></>}
                                            {datas[counts - 1]?.twitterUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.twitter} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts - 1]?.twitterUrl)} />
                                            </div> : <></>}
                                            {datas[counts - 1]?.facebookUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.facebook} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts - 1]?.facebookUrl)} />
                                            </div> : <></>}
                                            {datas[counts - 1]?.instagramUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.instagram} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts - 1]?.instagramUrl)} />
                                            </div> : <></>}
                                            {datas[counts - 1]?.youtubeUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={data[counts - 1]?.instagram} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts - 1]?.youtubeUrl)} />
                                            </div> : <></>}
                                        </div>
                                    </div>
                                    <div className="textdashed">
                                    </div>
                                    <div className='mt-2'>
                                        <span className='active fs-2 fw-1'>{state?.slidercount?.counts}</span>/{datas.length}
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