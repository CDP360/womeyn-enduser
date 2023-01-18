import React, { Fragment } from 'react'
import styles from './styles/Ourteam.module.scss';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import anuwomen from '../../../../assests/homepage-logos/anuwomeyn.png';
import Image from 'next/image';

function Ourteam() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
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

    const data = [
        {
            id: 1,
            name: "Customer value is our fuel",
            title: "Value is making a difference for our customers each and every day. That's what powers our business and energizes us.",
            image: anuwomen,
            colorbg: "#FFF8F1"
        },
        {
            id: 2,
            name: "Experience is a superpower",
            title: "We are a team of experts who know how to work together to tackle real challenges and create success.",
            image: anuwomen,
            colorbg: "#ECF2FB"
        },
        {
            id: 3,
            name: "Actions speak louder than words",
            title: "When challenges arise, we rise to the occasion. We roll up our sleeves, get to work, and get the job done",
            image: anuwomen,
            colorbg: " #F0F8F3"
        },
        {
            id: 4,
            name: "Actions speak louder than words",
            title: "When challenges arise, we rise to the occasion. We roll up our sleeves, get to work, and get the job done",
            image: anuwomen,
            colorbg: "#FDF0F0"
        },
        {
            id: 5,
            name: "Actions speak louder than words",
            title: "When challenges arise, we rise to the occasion. We roll up our sleeves, get to work, and get the job done",
            image: anuwomen,
            colorbg: " #FDF0F0"
        }
    ]

    return (
        <Fragment>
            <div>
                Ourteam
            </div>

            <div className={styles.mainslidesection}>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div>
                                <div className={styles.insideslides} style={{ background: item.colorbg }}>
                                    <div className={styles.imagesectionour}>
                                        <div className={styles.slideaboutimage}>
                                            <Image src={item?.image} alt="no image" className={styles.slideimagesize} />
                                        </div>
                                        <div className='mt-4'>
                                            <h6>{item?.title}</h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>
        </Fragment>
    )
}

export default Ourteam