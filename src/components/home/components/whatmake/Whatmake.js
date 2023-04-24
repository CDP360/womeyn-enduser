import React, { Fragment } from 'react'
import styles from './styles/Whatmake.module.scss';
import image1 from '../../../../assests/womeynlogos/Tropygreen.png';
import image2 from '../../../../assests/womeynlogos/24.png';
import image3 from '../../../../assests/womeynlogos/securepayment.png';
import Image from 'next/image';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';

import shop1 from '../../../../assests/whatmake/shop1.jpeg';
import shop2 from '../../../../assests/whatmake/shop2.jpg';
import shop3 from '../../../../assests/whatmake/shop4.jpg';
import shop4 from '../../../../assests/whatmake/shop5.jpg';
import shop5 from '../../../../assests/whatmake/shop6.jpg';
import shop6 from '../../../../assests/whatmake/shop7.png';
import shop7 from '../../../../assests/whatmake/shop8.jpg';
import shop8 from '../../../../assests/whatmake/shop9.jpg';
import shop9 from '../../../../assests/whatmake/shop10.jpg';
import shop10 from '../../../../assests/whatmake/shop11.jpg';
import { useRouter } from 'next/router';




function Whatmake() {


    const history=useRouter();


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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

    const datas = [
        {
            id: 1,
            name: "RARE Women's Synthetic a-line Knee-Long Dress",
            title: "crafted from top materials",
            image: shop1,
            colorbg: " #F0F8F3"
        },
        {
            id: 2,
            name: "KERI PERRY Women's Chiffon Western Dress(Sky Blue) Dress for Women, Dress ",
            title: "Stripe & Paypal",
            image: shop2,
            colorbg: " #FDF0F0"
        },
        {
            id: 3,
            name: "Lymio Dresses for Women Multi Color Women Dress (558",
            title: "Dedicated support",
            image: shop3,
            colorbg: " #FFF8F1"
        },
        {
            id: 4,
            name: " Myx Women's Cotton Short Kurti ",
            title: "Dedicated support",
            image: shop4,
            colorbg: " #FFF8F1"
        },
        {
            id: 5,
            name: "Eden & Ivy Women Pajama Set ",
            title: "Dedicated support",
            image: shop5,
            colorbg: " #FFF8F1"
        },
        {
            id: 6,
            name: "GoSriKi Women Kurta with Pant & Dupatta",
            title: "Dedicated support",
            image: shop6,
            colorbg: " #FFF8F1"
        },
        {
            id: 7,
            name: "Uptownie Lite Women's Knee Length Jumpsuit ",
            title: "Dedicated support",
            image: shop7,
            colorbg: " #FFF8F1"
        },
        {
            id: 8,
            name: "ANNI DESIGNER Women's Cotton Blend Printed Straight Kurta with Pant & Dupatta (Itta STY) ",
            title: "Dedicated support",
            image: shop8,
            colorbg: " #FFF8F1"
        },
        {
            id: 9,
            name: "Lymio Dresses for Women || Western Dresses for Women || Dress for Women || Dresses (632) ",
            title: "Dedicated support",
            image: shop9,
            colorbg: " #FFF8F1"
        },
        {
            id: 10,
            name: "Brand - Symbol Women Shirt ",
            title: "Dedicated support",
            image: shop10,
            colorbg: " #FFF8F1"
        },
        // {
        //     id: 11,
        //     name: "24 / 7 Support",
        //     title: "Dedicated support",
        //     image: shop11,
        //     colorbg: " #FFF8F1"
        // }
    ]


    const NavigatePathes=()=>{
        history.push("/womenpreneurs")
    }
    return (
        <Fragment>



            <div className={styles.mainslidesection}>


                <div className={styles.blogsectiontexts}>
                    <div className='large-text text-center mt-3 mb-2'>
                        What makes us unique
                    </div>
                    <div className={styles.allthebest}>
                        All the latest news, stories, events & workshops from our experts & influencers.
                    </div>
                </div>


                <div className={styles.insidemakesection}>


                    {datas?.length <= 4 ? <>
                        <div className={styles.insideslidess}>
                            {datas.map((item, index) => {
                                return (
                                    <div className={styles.cardsslide} key={index} style={{ backgroundColor: item.colorbg }}>
                                        <div>
                                            <Image src={item?.image} alt="no image" className={styles.whatmakeimage} />
                                        </div>
                                        <div className='mt-4' onClick={() => pushCatgorys(item?.slugName)} >
                                            <h6>{item?.name}</h6>
                                        </div>
                                        {/* <div onClick={() => pushCatgorys(item?.slugName)} >
                                        {item?.description}
                                    </div> */}
                                    </div>
                                )
                            })}
                        </div>
                    </> :
                        <Slider {...settings}>
                            {datas.map((item, index) => {
                                return (
                                    <div className={styles.insideslides} key={index} onClick={NavigatePathes}>
                                        <div>
                                            <Image src={item?.image} alt="no image" className={styles.whatmakeimage} />
                                        </div>
                                        <div className='mt-4' onClick={() => pushCatgorys(item?.slugName)} >
                                            {/* <h6>{item?.name}</h6> */}
                                            <h6>{item?.name?.length < 10 ? <>{item?.name}</> : <>      {item?.name.slice(0, 25)}...</>}</h6>

                                        </div>
                                        {/* <div onClick={() => pushCatgorys(item?.slugName)} >
                                        {item?.description?.length <= 10 ? <>{item?.description}</> : <>{item?.description.slice(0, 20)}...</>}
                                    </div> */}
                                    </div>
                                )
                            })}
                        </Slider>}
                </div>
            </div>





            {/* <div className={styles.blogsectiontexts}>
                        <div className='large-text text-center'>
                            What makes us unique
                        </div>
                        <div className='blogloream mt-2'>
                            All the latest news, stories, events & workshops from our experts & influencers.
                        </div>
                    </div>
                    <div className="whatmake-cards row d-flex justify-content-center mt-4 gap-4">
                        {data?.map((item, index) => {
                            return (
                                <div className={`cards-whatmake col-lg-4  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3`} style={{ backgroundColor: item.colorbg }} key={index}>
                                    <div>
                                        <Image src={item?.image} alt="no image" className={styles.whatmakeimage} />
                                    </div>
                                    <div className='mt-2'>
                                        <div className="mt-2 medium-text">
                                            {item?.name}
                                        </div>
                                    </div>
                                    <div className="smalltextgrey mt-2">
                                        {item?.title}
                                    </div>
                                </div>
                            )
                        })}
                    </div> */}

        </Fragment>
    )
}

export default Whatmake