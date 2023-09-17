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
    slidesToShow: 6,
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
          slidesToShow: 4,
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
                <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.imageName}`} alt="no image" className={styles.slideimagesizes} />
                <div className='mt-4' onClick={() => pushCatgorys(item?.slugName)} >
                  <span>{item?.name?.length > 10 ? <>{item?.name.slice(0, 20)}...</> : <> {item?.name}</>}</span>
                </div>

              </div>
            )
          })}
        </div>
      </> :
        <Slider {...settings}>
          {datas.map((item, index) => {
            return (
              <div className={styles.insideslides} onClick={() => pushCatgorys(item?.slugName)} key={index}>
                <div className={styles.imageboxcontain}>
                  <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.imageName}`} alt="no image" className={styles.slideimagesize} />
                </div>
                <div className={styles.textwidthcategorys} onClick={() => pushCatgorys(item?.slugName)} >
                  <span>{item?.name}</span>
                </div>

              </div>
            )
          })}
        </Slider>}
    </div>
    // <>
    //   <div className={styles.blogmainsection}>
    //     <div className={styles.insideblogsection}>


    //       {/* <div className={styles.insidemakesection}>
    //                     {datas?.length <= 4 ? <>
    //                         <div className={styles.insideslidess}>
    //                             {datas.map((item, index) => {
    //                                 return (
    //                                     <div className={styles.cardsslide} key={index} style={{ backgroundColor: item.colorbg }} onClick={() => EventNavigte(item?.slugName)}>
    //                                         <div>
    //                                             {item?.postImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.postImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
    //                                                 <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
    //                                             </>}
    //                                         </div>
    //                                         <div className='mt-2 text-center' onClick={() => NavigatePathes(item?.slugName)} >

    //                                             {item?.title}

    //                                         </div>

    //                                     </div>
    //                                 )
    //                             })}
    //                         </div>
    //                     </> :
    //                         <Slider {...settings}>
    //                             {datas.map((item, index) => {
    //                                 return (
    //                                     <div className={styles.insideslides} key={index} onClick={() => EventNavigte(item?.slugName)}>
    //                                         <div>


    //                                             {item?.postImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.postImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
    //                                                 <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
    //                                             </>}
    //                                         </div>
    //                                         <div className='mt-4' onClick={() => EventNavigte(item?.slugName)} >
    //                                             <h6>{item?.title?.length < 10 ? <>{item?.title}</> : <>      {item?.title.slice(0, 25)}...</>}</h6>

    //                                         </div>

    //                                     </div>
    //                                 )
    //                             })}
    //                         </Slider>}
    //                 </div> */}


    //       <div className={styles.insidemakesection}>

    //         <div className={styles.appcard}>
    //           {datas?.length > 4 ? <>
    //             <Slider {...settings}>
    //               {datas.map((item, index) => {
    //                 return (
    //                   <div className={styles.cardcategory} key={index}>
    //                     <div className={styles.cardsections}>
    //                       <div className="cards col-lg-12 mb-1 " onClick={() => pushCatgorys(item?.slugName)}>
    //                         <div className={styles.imagebox}>
    //                           {item?.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.imageName}`} alt="no image" className={"productimages"} /> : <>
    //                             <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
    //                           </>}
    //                         </div>
    //                         <div className={styles.cardinsidesection}>
    //                           <div className="mb-3 mt-2">
    //                             <div className={styles.productNametext}>
    //                               {item?.name}
    //                             </div>
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>

    //                   </div>
    //                 )
    //               })}
    //             </Slider>
    //           </> : <>
    //             <div className='row d-flex gap-2 p-0 m-0'>
    //               {datas.map((item, index) => {
    //                 return (
    //                   <div className={styles.cardcategorys} key={index}>

    //                     <div onClick={() => pushCatgorys(item?.slugName)}>
    //                       <div className={styles.imagebox}>
    //                         {item?.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.imageName}`} alt="no image" className={styles.sellerimagesize} /> : <>
    //                           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
    //                         </>}
    //                       </div>
    //                       <div className={styles.cardinsidesection}>
    //                         <div className="mb-3 mt-2">
    //                           <div className={styles.productNametext}>
    //                             {item?.name}
    //                           </div>
    //                         </div>
    //                       </div>
    //                     </div>
    //                   </div>
    //                 )
    //               })}
    //             </div>
    //           </>}

    //         </div>
    //       </div>


    //     </div>
    //   </div>
    // </>
  )
}

export default CarouselCategory