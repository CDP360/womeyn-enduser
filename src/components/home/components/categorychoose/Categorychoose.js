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

function Categorychoose({HomeTexts,bannerimages}) {
    const [datas, setDatas] = useState([]);

    const history = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
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
                <div className={styles.insidecategorysection}>
                    <div className={styles.supportcategorysection}>


                        {bannerimages[5]?.Coupons?.length > 4 ? <>

                            <Slider {...settings}>
                                {bannerimages[5]?.Coupons?.map((item, index) => {
                                    return (
                                        <div className={styles.insideslides} onClick={()=>pushCatgorys(item?.redirectUrl)} key={index}>


{item?.imageName? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.imageName}`} alt="no image" className={styles.slideimagesizes} onClick={() => pushCatgorys(item?.redirectUrl)} />
                            </> : <>
                                <Skeleton className={styles.addimageboxs} />
                            </>}
                                            {/* {index + 1 === 1 && <Image src={coup1} alt="no image" className={styles.slideimagesizes} />}
                                            {index + 1 === 2 && <Image src={coup2} alt="no image" className={styles.slideimagesizes} />}
                                            {index + 1 === 3 && <Image src={coup3} alt="no image" className={styles.slideimagesizes} />}
                                            {index + 1 === 4 && <Image src={coup4} alt="no image" className={styles.slideimagesizes} />}
                                            {index + 1 === 5 && <Image src={coup5} alt="no image" className={styles.slideimagesizes} />} */}

                                                                                    </div>
                                    )
                                })}
                            </Slider>
                        </> : <>

                            <div className="row d-flex gap-3">
                                
                                {bannerimages[5]?.Coupons?.map((item, index) => {
                                    return (
                                        <div className={styles.couponcardssection} onClick={()=>pushCatgorys(item?.redirectUrl)}>
                                            
                                            {item?.imageName? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.imageName}`} alt="no image" className={styles.add1} onClick={() => pushCatgorys(item?.redirectUrl)} />
                            </> : <>
                                <Skeleton className={styles.addimageboxs} />
                            </>}
                                          
                                        </div>
                                    )
                                })}
                            </div>

                        </>}

                        {/* <Row>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={tropy} alt="no image" />
                                    </div>
                                    <div>
                                        <div className={styles.textcategorysection}>
                                            Support womenpreneurs
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            crafted from top materials
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <Skeleton className={styles.sketons} />
                                </div>
                            </Col>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={secure} alt="no image" />
                                    </div>

                                    <div>
                                        <div className={styles.textcategorysection}>
                                            Secure payment
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            Stripe & Paypal
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <Skeleton className={styles.sketons} />
                                </div>
                            </Col>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={shipping} alt="no image" />
                                    </div>

                                    <div>
                                        <div className={styles.textcategorysection}>
                                            Track Shipping
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            Get real - time updates
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <Skeleton className={styles.sketons} />
                                </div>
                            </Col>
                            <Col lg="3" xs="12" sm="6" className='mt-3 mb-4'>
                                <div className={styles.boxsection}>
                                    <div className={styles.imagesectioncategory}>
                                        <Image src={chat} alt="no image" />
                                    </div>

                                    <div>
                                        <div className={styles.textcategorysection}>
                                            24 / 7 Support
                                        </div>
                                        <div className={styles.textshadowcategory}>
                                            Dedicated support
                                        </div>
                                    </div>

                                </div>
                                <div>
                                    <Skeleton className={styles.sketons} />
                                </div>
                            </Col>
                        </Row> */}

                        
                    </div>
                    <div className={styles.categorybodysection}>
                        <div className='large-text mt-5 text-center'>
                            {HomeTexts?.Alotofcategoriestochoosefrom}
                        </div>
                        <div>
                            <CarouselCategory />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Categorychoose