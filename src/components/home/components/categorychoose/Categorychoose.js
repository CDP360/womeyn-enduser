import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Categorychoose.module.scss';
import tropy from '../../../../assests/homepage-logos/trophy.png';
import shipping from '../../../../assests/homepage-logos/shipping.png';
import secure from '../../../../assests/homepage-logos/secure.png';
import chat from '../../../../assests/homepage-logos/chat1.png';
import Image from 'next/image';
import { Col, Row } from 'react-bootstrap';
import CarouselCategory from './carouselcategory/CarouselCategory';
import Skeleton from 'react-loading-skeleton';
import Slider from "react-slick";
import SlideNextArrow from './../../../middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/carouselproducts/slidenextarrow/SlideNextArrow';
import SlidePreArrow from './carouselcategory/slideprearrow/SlidePreArrow';
import { MyCouponList } from './../../../../services/mycoupon-service/mycoupon-service';
import couponoffers from '../../../../assests/homepage-logos/couponoffers.png';
import { useRouter } from 'next/router';
import coup1 from '../../../../assests/COUPONS/cou1.png';
import coup2 from '../../../../assests/COUPONS/cou2.png';
import coup3 from '../../../../assests/COUPONS/cou3.png';
import coup4 from '../../../../assests/COUPONS/cou4.png';
import coup5 from '../../../../assests/COUPONS/cou5.png';
import CarouselCategoryService from './carouselcategory/CarouselCategoryService';

function Categorychoose({ HomeTexts, bannerimages }) {
    const [datas, setDatas] = useState([]);

    const history = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
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

    const pushCatgorys = (data) => {

        window.open(data);

    }

    useEffect(() => {

        MyCouponList().then((res) => {
            setDatas(res?.data?.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <Fragment>
            <div className={styles.categoryhomesection}>
                {bannerimages[5]?.Coupons ? <>
                    <div className={styles.insidecategorysection}>
                        <div className={styles.supportcategorysection}>
                            {bannerimages[5]?.Coupons?.length > 2 ? <>
                                <Slider {...settings}>
                                    {bannerimages[5]?.Coupons?.map((item, index) => {
                                        return (
                                            <div className={styles.insideslides} onClick={() => pushCatgorys(item?.redirectUrl)} key={index}>
                                                {item?.imageName ? <>
                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.imageName}`} alt="no image" className='subbannerimage' onClick={() => pushCatgorys(item?.redirectUrl)} />
                                                </> : <>
                                                    <Skeleton className={styles.addimageboxs} />
                                                </>}


                                            </div>
                                        )
                                    })}
                                </Slider>
                            </> : <>
                                <div className="row d-flex gap-3">
                                    {bannerimages[5]?.Coupons?.slice(0, 2).map((item, index) => {
                                        return (
                                            <div className={styles.couponcardssection} onClick={() => pushCatgorys(item?.redirectUrl)}>

                                                {item?.imageName ? <>
                                                    <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.imageName}`} alt="no image" className='subbannerimage' onClick={() => pushCatgorys(item?.redirectUrl)} />
                                                </> : <>
                                                    <Skeleton className={styles.addimageboxs} />
                                                </>}

                                            </div>
                                        )
                                    })}
                                </div>

                            </>}


                        </div>

                    </div>
                </> : null}
                <div className={styles.categorybodysection}>
                    <div className='textseller mt-5 text-center'>
                        {HomeTexts?.Alotofcategoriestochoosefrom}
                    </div>
                    <div>
                        <CarouselCategory />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Categorychoose