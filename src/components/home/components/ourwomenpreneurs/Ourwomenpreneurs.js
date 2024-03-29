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
import youtube from '../../../../assests/homepage-logos/youtube.png';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Topwomenprenuers } from '../../../../services/banner-image-service/banner-image-service';
import users from '../../../../assests/homepage-logos/usersimageprofile.png';
function Ourwomenpreneurs() {
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
 
    useEffect(() => {
        MainSectionWomens();
    }, []);


    const MainSectionWomens = () => {
        Topwomenprenuers().then((res) => {
            setDatas(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }

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
                        Our WomeynPreneur of the Month!
                    </div>
                    <div className={styles.womensectionslider}>
                        <div className={styles.insidewomensectionslider}>
                            <div className={styles.leftwomeynsection}>
                                <Slider {...settings}>
                                    {datas.map((item, index) => {
                                        return (
                                            <div className={styles.insideslides} key={index}>
                                                {/* <div className={styles.backgroundslidewomen}>
                                                </div>
                                                {item.profileImageName ? <>
                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.profileImageName}`} alt="no image" className={styles.slideimagesize} onClick={() => handleProductSeller(datas[counts - 1]?.businessSlugName)} />
                                                </> :
                                                    <Image src={users} alt="no image" className={styles.slideimagesize} onClick={() => handleProductSeller(datas[counts - 1]?.businessSlugName)} />
                                                } */}


                                                <div className={styles.backgroundslidewomen}>
                                                </div>
                                                <div className={styles.imageboxsections}>
                                                    {item.profileImageName ? <>
                                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.profileImageName}`} alt="no image" className={styles.slideimagesize} onClick={() => handleProductSeller(datas[counts - 1]?.businessSlugName)} />
                                                    </> :
                                                        <Image src={users} alt="no image" className={styles.slideimagesize} onClick={() => handleProductSeller(datas[counts - 1]?.businessSlugName)} />
                                                    }
                                                </div>
                                            </div>
                                        )
                                    })}
                                </Slider>

                                {/* <div className={styles.dummydots}>

                                </div>
                                <div className={styles.dummydots1}>

                                </div>

                                <div className={styles.dummybg}>

                                </div> */}

                                {/* <div>
                                    <Image src={roundscircles} alt="no image" className={styles.roundscirclesimage} />
                                </div> */}
                            </div>
                            <div className={styles.rightwomeynsection}>
                                <div className={styles.rightinsidewomentext}>
                                    <div className={styles.textsellers}>
                                    
                                            {datas[counts?.length===0?0:counts - 1]?.firstName} {datas[counts?.length===0?0:counts - 1]?.lastName}
                                        
                                        
                                    </div>

                                    {/* <div className='textgrey'>
                                        {datas[counts - 1]?.email}
                                    </div> */}
                                    <div className={styles.descriptioninwomeyn}>

                                        {datas[counts?.length===0?0:counts - 1]?.profileDescription.length >80 ? <>{datas[counts?.length===0?0:counts - 1]?.profileDescription.slice(0, 80)}...</> : <>

                                            {datas[counts?.length===0?0:counts - 1]?.profileDescription}
                                        </>}
                                    </div>
                                    <div className={styles.womenactiveprofiletext}>
                                        <div>
                                            <button className={styles.selleractives} onClick={() => handleProductSeller(datas[counts?.length===0?0:counts - 1]?.businessSlugName)}>VISIT HER STORE!
                                            </button>
                                        </div>
                                        <div className={styles.socialspacewomen}>
                                            {datas[counts?.length===0?0:counts - 1]?.linkedinUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={linkedin} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts?.length===0?0:counts - 1]?.linkedinUrl)} />
                                            </div> : <></>}
                                            {datas[counts?.length===0?0:counts - 1]?.twitterUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={twitter} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts?.length===0?0:counts - 1]?.twitterUrl)} />
                                            </div> : <></>}
                                            {datas[counts?.length===0?0:counts - 1]?.facebookUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={facebook} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts?.length===0?0:counts - 1]?.facebookUrl)} />
                                            </div> : <></>}
                                            {datas[counts?.length===0?0:counts - 1]?.instagramUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={instagram} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts?.length===0?0:counts - 1]?.instagramUrl)} />
                                            </div> : <></>}
                                            {datas[counts?.length===0?0:counts - 1]?.youtubeUrl ? <div className={styles.imagebackgroundwomen}>
                                                <Image src={youtube} alt='no image' className={styles.socialmdeiaicons} onClick={() => SocialIconsOpen(datas[counts?.length===0?0:counts - 1]?.youtubeUrl)} />
                                            </div> : <></>}
                                        </div>
                                    </div>
                                    <div className="textdashed">
                                    </div>
                                    <div className='mt-2 '>
                                        <span className='active fs-2 fw-1'>{state?.slidercount?.counts?.length===0?1:state?.slidercount?.counts}</span>/{datas.length}
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