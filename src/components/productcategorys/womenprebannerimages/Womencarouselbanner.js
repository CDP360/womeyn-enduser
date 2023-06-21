import React, { useState, useEffect } from 'react'
import Slider from "react-slick";
import styles from './styles/Womenprecarouse.module.scss';
import SlideNextArrow from '../../home/slidenextarrow/SlideNextArrow';
import SlidePreArrow from '../../home/slideprearrow/SlidePreArrow';
import Skeleton from 'react-loading-skeleton';
import { Getwomenpreneursbanner } from '../../../services/womenpreneurs-services/womenpreneurs-services';
import w1 from '../../../assests/sellerbanners/w1.jpg';
import w2 from '../../../assests/sellerbanners/w2.jpg';
import w3 from '../../../assests/sellerbanners/w3.jpg';
import w4 from '../../../assests/sellerbanners/w4.jpg';
import w5 from '../../../assests/sellerbanners/w5.jpg';
import w6 from '../../../assests/sellerbanners/w6.jpg';
import w7 from '../../../assests/sellerbanners/w7.jpg';

function Womencarouselbanner() {
    const [banners, setBanners] = useState([]);
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


    const ImageSellers = [
        {
            id: 1,
            image: w7
        },
        {
            id: 2,
            image: w6
        },
        {
            id: 3,
            image: w5
        },
        {
            id: 4,
            image: w4
        },
        {
            id: 5,
            image: w3
        },
        {
            id: 6,
            image: w2
        },
        {
            id: 7,
            image: w1
        },

    ]

    useEffect(() => {

        const data='Product Banner'
        if(data)
        {
            Getwomenpreneursbanner(data).then((res) => {
                setBanners(res?.data);
            }).catch((err) => {
                console.log(err);
            })
        }
       

    }, [])

    const MovePageData = (data) => {
        window.open(data);
    }
    const dataCarousel = [
        {
            id: 1,
            name: "no names"
        },
        {
            id: 2,
            name: "no names"
        },
        {
            id: 3,
            name: "no names"
        }
    ]


    return (
        <div>
            <div className={styles.imagesectionhome}>

                {banners?.length===0 ? <>
                    <div>
                        <Slider {...settings}>
                            {ImageSellers?.map((item, index) => {
                                return (
                                    <div key={index}>
                                        {item.image ? <img src={item?.image?.src} alt="no image" className={"allbanners"} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                            <Skeleton className={styles.homebanner} />
                                        </>}
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>
                </> :
                    <Slider {...settings}>
                        {banners?.map((item, index) => {
                            return (
                                <div key={index}>
                                    {item?.imageName?<>
                                        <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.sliderimage} onClick={() => MovePageData(item.redirectUrl)} />
                                    
                                    </>:<>
                                    <Skeleton className={styles.homebanner} />
                                    
                                    </>}
                                </div>
                            )
                        })}
                    </Slider>
                }
            </div>
        </div>
    )
}

export default Womencarouselbanner