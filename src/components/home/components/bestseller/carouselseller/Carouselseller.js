import React from 'react'
import styles from './styles/Carouselseller.module.scss';
import Slider from "react-slick";
import SlideNextArrow from '../../summarybreaksalary/slidenextarrow/SlideNextArrow';
import SlidePreArrow from '../../summarybreaksalary/slideprearrow/SlidePreArrow';
function Carouselseller({ bannerimages, MovePageData }) {
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
    return (
        <div className={styles.summarymainsection}>
            <div className={styles.insidesummarysection}>
                <Slider {...settings}>
                    {bannerimages?.PromotionBanner?.map((item, index) => {
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

export default Carouselseller