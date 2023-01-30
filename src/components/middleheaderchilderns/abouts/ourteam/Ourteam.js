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
        slidesToScroll: 1,
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
            name: " Anu Kulkarni",
            title: "crafted from top materials",
            image: anuwomen,
            colorbg: "#FFF8F1"
        },
        {
            id: 2,
            name: " Anu Kulkarni",
            title: "crafted from top materials",
            image: anuwomen,
            colorbg: "#ECF2FB"
        },
        {
            id: 3,
            name: " Anu Kulkarni",
            title: "crafted from top materials",
            image: anuwomen,
            colorbg: " #F0F8F3"

        },
        {
            id: 4,
            name: " Anu Kulkarni",
            title: "crafted from top materials",
            image: anuwomen,
            colorbg: "#FDF0F0"
        },
        {
            id: 5,
            name: " Anu Kulkarni",
            title: "crafted from top materials",
            image: anuwomen,
            colorbg: "#ECF2FB"
        }
    ]

    return (
        <Fragment>
            <div className='mt-5'>
                <div className={styles.blogsectiontexts}>
                    <div className='large-text text-center'>
                        Our Team
                    </div>
                    <div className='blogloream mt-2'>
                        All the latest news, stories, events & workshops from our experts & influencers.
                    </div>
                </div>


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

                                    </div>
                                    <div className={styles.nameshadowsection}>
                                        <span className={styles.namecustomers}>{item?.name}</span>

                                        <span className={styles.desc}>{item?.title}</span>

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