import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Blogs.module.scss';
import blog1 from '../../../../assests/womeynlogos/Blog1.png';
import blog2 from '../../../../assests/womeynlogos/Blog2.png';
import blog3 from '../../../../assests/womeynlogos/Blog3.png';
import Image from 'next/image';
import { getBlogs } from '../../../../services/blog-service/blog-service';


import { useRouter } from 'next/router';
import SlideNextArrow from './../whatmake/slidenextarrow/SlideNextArrow';
import SlidePreArrow from './../whatmake/slideprearrow/SlidePreArrow';
import Slider from "react-slick";


function Blogs() {


    const history = useRouter();


    const [datas, setDatas] = useState([]);
    const datass = [
        {
            id: 1,
            name: "Health & wellbeing",
            time: "5 min Read",
            title: "Simple Juice Recipes to boost your immune system",
            image: blog1
        },
        {
            id: 1,
            name: "Fashion & Lifestyle",
            time: "3 min Read",
            title: "The best fashion influencers to follow for sartorial inspiration",
            image: blog2
        },
        {
            id: 1,
            name: "Health & wellbeing",
            time: "5 min Read",
            title: "Boost Your Oral Health: Your Guide To Oral Hygiene",
            image: blog3
        }
    ]
    useEffect(() => {
        getBlogs().then((res) => {
            setDatas(res?.data?.results)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const EventNavigte = (id) => {

        history.push(`/blog/${id}`)

    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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


    const [datasevents, setDatasevents] = useState([]);
    return (
        <Fragment>
            <div className={styles.blogmainsection}>
                <div className={styles.insideblogsection}>
                    <div className={styles.blogsectiontexts}>
                        <div className='large-text text-center'>
                            Blogs
                        </div>
                        <div className='blogloream mt-2'>
                            Learn more about our culture, health, lifestyle
                            and wellbeign with our blogs
                        </div>
                    </div>

                    {/* <div className="blog-cards row d-flex justify-content-center gap-3  ">
                        {datas?.map((item, index) => {
                            return (
                                <div className='cards-blog  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3' key={index} onClick={() => EventNavigte(item?.slugName)}>
                                    <div>


                                        {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.blogimages} /> : <>
                                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                        </>}

                                    </div>

                                    <div className="mt-2" onClick={() => EventNavigte(item?.slugName)}>
                                        <div>

                                            <h6>{item?.title?.length < 10 ? <>{item?.title}</> : <>      {item?.title.slice(0, 25)}...</>}</h6>


                                        </div>

                                    </div>
                                </div>
                            )
                        })}
                    </div> */}


                    <div className={styles.insidemakesection}>


                        {datas?.length <= 4 ? <>
                            <div className={styles.insideslidess}>
                                {datas.map((item, index) => {
                                    return (
                                        <div className={styles.cardsslide} key={index} style={{ backgroundColor: item.colorbg }} onClick={() => EventNavigte(item?.slugName)}>
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
                                        <div className={styles.insideslides} key={index} onClick={() => EventNavigte(item?.slugName)}>
                                            <div>
                                                {/* <Image src={item?.image} alt="no image" className={styles.whatmakeimage} /> */}


                                                {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
                                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                </>}
                                            </div>
                                            <div className='mt-4' onClick={() => EventNavigte(item?.slugName)} >
                                                {/* <h6>{item?.name}</h6> */}
                                                <h6>{item?.title?.length < 10 ? <>{item?.title}</> : <>      {item?.title.slice(0, 25)}...</>}</h6>

                                            </div>

                                        </div>
                                    )
                                })}
                            </Slider>}
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default Blogs