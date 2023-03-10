import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import styles from '../allcategorycard/styles/AllCatgorycard.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router'
import SlideNextArrowcategory from '../allcategorycard/slidenextarrow/SlideNextArrow';
import SlidePreArrowcategory from '../allcategorycard/slideprearrow/SlidePreArrow';
import { TopServices } from '../../../../../../../services/banner-image-service/banner-image-service';
import Skeleton from 'react-loading-skeleton';

function Allbestservices({ stars }) {

    const [services, setServices] = useState([]);
    const history = useRouter();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrowcategory />,
        prevArrow: <SlidePreArrowcategory />,
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
    const categoryPush = (data) => {
        history.push(`/category/${data}`);
    }


    useEffect(() => {
        TopServices().then((res) => {
            setServices(res?.data);
        }).catch((err) => console.log(err))
    }, [])


    const datas=[1,2,3,4];
    return (
        <div className={styles.appcard}>
            {services?.length > 0 ? <>
                <Slider {...settings}>
                    {services.map((item, index) => {
                        return (
                            <div className={styles.cardcategory} onClick={() => categoryPush(item?.serviceName)} key={index}>
                                <div>
                                    <img src={item?.image} alt="no image" className={styles.sellerimagesize} />
                                </div>
                                <div className={styles.cardinsidesection}>
                                    <Image src={stars} alt="no image" className={styles.stars} />
                                    <div>
                                        <span>{item?.serviceName}</span>
                                    </div>
                                    <div className='mb-4'>
                                        <span className='textgrey'>{item?.serviceDescription}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </> : <div className='row justify-content-center d-flex'>

{datas.map((item,index)=>{
    return(
        <div className='col-lg-3' key={index}>
            <Skeleton className="cardloading"/>
        </div>
    )
})}
            </div>}

        </div>
    )
}

export default Allbestservices