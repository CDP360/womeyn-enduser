import React, { Fragment } from 'react'
import styles from './styles/Ourteam.module.scss';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import anuwomen from '../../../../assests/homepage-logos/anuwomeyn.png';
import Image from 'next/image';

import h1 from '../../../../assests/abouts-logos/g1-removebg-preview.png';
import h2 from '../../../../assests/abouts-logos/g2-removebg-preview.png';
import h3 from '../../../../assests/abouts-logos/g3-removebg-preview.png';
import h4 from '../../../../assests/abouts-logos/g4-removebg-preview.png';
import h5 from '../../../../assests/abouts-logos/g5-removebg-preview.png';


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
            name: "Addison",
            title: "crafted from top materials",
            image: h1,
            colorbg: "#ECF2FB"
        },
        {
            id: 3,
            name: "Adeline",
            title: "crafted from top materials",
            image: h2,
            colorbg: " #F0F8F3"

        },
        {
            id: 4,
            name: "Alexis",
            title: "crafted from top materials",
            image: h3,
            colorbg: "#FDF0F0"
        },
        {
            id: 5,
            name: "Alice",
            title: "crafted from top materials",
            image: h4,
            colorbg: "#ECF2FB"
        },
        {
            id: 6,
            name: "Amelia",
            title: "crafted from top materials",
            image: h5,
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