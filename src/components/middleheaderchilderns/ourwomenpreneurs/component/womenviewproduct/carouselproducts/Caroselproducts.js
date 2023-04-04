import React, { Fragment,useState,useEffect } from 'react'
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import axios from 'axios';
import styles from './styles/Carouselproduct.module.scss';
function Caroselproducts() {
    const [datas, setDatas] = useState([]);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
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

  const data=[
    {
        id:1,
        title:"kalai",
        thumbnail:""
    },
    {
        id:2,
        title:"kalai",
        thumbnail:""
    },
    {
        id:3,
        title:"kalai",
        thumbnail:""
    },
    {
        id:4,
        title:"kalai",
        thumbnail:""
    }
  ]
    return (
        <Fragment>
            <>
                <div className={styles.carouselsectionrelatedproduct}>

                    <div className={styles.mainslidesection}>
                        <Slider {...settings}>
                            {datas.map((item, index) => {
                                return (
                                    <div className={styles.insideslides}>
                                        <img src={item?.thumbnail} alt="no image" className={styles.slideimagesize} />
                                        <div className='mt-4'>
                                            <h6>{item?.title}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </Slider>
                    </div>

                </div>
            </>
        </Fragment>
    )
}

export default Caroselproducts