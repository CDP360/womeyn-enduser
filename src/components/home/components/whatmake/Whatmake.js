import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Whatmake.module.scss';
import Image from 'next/image';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import { useRouter } from 'next/router';
import { getBlogs } from './../../../../services/blog-service/blog-service';

function Whatmake() {
    const history = useRouter();
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


    const [datas, setDatas] = useState([]);




    const NavigatePathes = (id) => {
        history.push(`/blog/${id}`)
    }


    useEffect(() => {
        getBlogs().then((res) => {
            setDatas(res?.data?.results.slice(0,15));
        }).catch((err) => {
            console.log(err);
        })
    }, [])
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
                                    <div className={styles.cardsslide} key={index} style={{ backgroundColor: item.colorbg }} onClick={() => NavigatePathes(item?.slugName)}>
                                        <div>
                                            {/* <Image src={item?.image} alt="no image" className={styles.whatmakeimage} /> */}
                                            {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                            </>}
                                        </div>
                                        <div className='mt-4 text-center' onClick={() => NavigatePathes(item?.slugName)} >

                                            <h6>{item?.title?.length < 10 ? <>{item?.title}</> : <>      {item?.title.slice(0, 25)}...</>}</h6>

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
                                    <div className={styles.insideslides} key={index} onClick={() => NavigatePathes(item?.slugName)}>
                                        <div>
                                            {/* <Image src={item?.image} alt="no image" className={styles.whatmakeimage} /> */}


                                            {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                            </>}
                                        </div>
                                        <div className='mt-4' onClick={() => NavigatePathes(item?.slugName)} >
                                            {/* <h6>{item?.name}</h6> */}
                                            <h6>{item?.title?.length < 10 ? <>{item?.title}</> : <>      {item?.title.slice(0, 25)}...</>}</h6>

                                        </div>

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