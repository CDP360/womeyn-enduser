import React, { useEffect, useState } from 'react'
import styles from './styles/Categorycarousel.module.scss';
import Slider from "react-slick";
import { CategoryBanners } from './../../../services/category-services/category-service';
import SlideNextArrow from '../../home/slidenextarrow/SlideNextArrow';
import SlidePreArrow from '../../home/slideprearrow/SlidePreArrow';

function Categorycarouse() {

    const [banners, setBanners] = useState([]);

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
    useEffect(() => {
        CategoryBanners().then((res) => {
        
            setBanners(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);
    const MovePageData = (data) => {
        window.open(data);
    }
    return (
        <div>
            <div className={styles.imagesectionhome}>

                <Slider {...settings}>
                    {banners?.map((item, index) => {
                        return (
                            <div>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.sliderimage} onClick={() => MovePageData(item.redirectUrl)} />
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default Categorycarouse