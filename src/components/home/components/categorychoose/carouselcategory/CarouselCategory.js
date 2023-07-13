import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import { TopProductCategories } from '../../../../../services/banner-image-service/banner-image-service';
import SlideNextArrow from './slidenextarrow/SlideNextArrow';

import SlidePreArrow from './slideprearrow/SlidePreArrow';
import styles from './styles/Carouselslide.module.scss';
import { useRouter } from 'next/router';
function CarouselCategory() {

  const history = useRouter();
  const [datas, setDatas] = useState([]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
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

  useEffect(() => {
    TopProductCategories().then((res) => {
      setDatas(res?.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);



  const pushCatgorys = (data) => {
    history.push(`/category/${data}`)
  }
  return (
    <div className={styles.mainslidesection}>
      {datas?.length <= 4 ? <>
        <div className={styles.insideslidess}>
          {datas.map((item, index) => {
            return (
              <div className={styles.cardsslide} onClick={() => pushCatgorys(item?.slugName)} key={index}>
                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.imageName}`} alt="no image" className={styles.slideimagesizes} />
                <div className='mt-4' onClick={() => pushCatgorys(item?.slugName)} >
                  {/* <h6>{item?.name}</h6> */}
                  <span>{item?.name?.length >10 ? <>{item?.name.slice(0, 20)}...</> : <> {item?.name}</>}</span>

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
              <div className={styles.insideslides} onClick={() => pushCatgorys(item?.slugName)} key={index}>
                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.imageName}`} alt="no image" className={styles.slideimagesize} />
                <div className='mt-4' onClick={() => pushCatgorys(item?.slugName)} >
                  {/* <h6>{item?.name}</h6> */}
                  <span>{item?.name?.length >10 ? <>{item?.name}</> : <>{item?.name.slice(0, 20)}...</>}</span>

                </div>
                {/* <div onClick={() => pushCatgorys(item?.slugName)} >
                  {item?.description?.length <= 10 ? <>{item?.description}</> : <>{item?.description.slice(0, 20)}...</>}
                </div> */}
              </div>
            )
          })}
        </Slider>}
    </div>
  )
}

export default CarouselCategory