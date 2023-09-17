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
                        <div className='textseller '>
                            Blogs
                        </div>
                        <div className='blogloream mt-2'>
                            Learn more about our culture, health, lifestyle
                            and wellbeign with our blogs
                        </div>
                    </div>

                    <div className={styles.appcard}>
                        {/* {datas?.length > 4 ? <>
                <Slider {...settings}>
                    {datas.map((item, index) => {
                        return (
                            <div className={styles.cardcategory} key={index}>
                                <div className={styles.cardsections}>
                                    <div className="cards col-lg-12 mb-1 " onClick={() => categoryPush(item?.productSlugName)}>
                                        <div className={styles.imagebox}>
                                            {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={"productimagess"} /> : <>
                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                            </>}
                                        </div>
                                        <div className={styles.cardinsidesection}>
                                                        <div className="mb-3 mt-2">
                                                            <div className={styles.productNametext}>
                                                                {item?.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </Slider>
            </> : <> */}
                        <div className='row d-flex gap-2 p-0 m-0'>
                            {datas.slice(0, 4).map((item, index) => {
                                return (
                                    <div className={styles.cardcategorys} key={index}>

                                        <div onClick={() => categoryPush(item?.productSlugName)}>
                                            <div className={styles.imagebox}>
                                                {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={'productimagess'} /> : <>
                                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                </>}
                                            </div>
                                            <div className={styles.cardinsidesection}>
                                                <div className="mb-3 mt-2">
                                                    <div className={styles.productNametext}>
                                                        {item?.title}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        {/* </>} */}

                    </div>



                    {/* <div className={styles.insidemakesection}>

                        <div className={styles.appcard}>
                            {datas?.length > 4 ? <>
                                <Slider {...settings}>
                                    {datas.map((item, index) => {
                                        return (

                                            <div className="card col-lg-3 col-sm-6 col-xs-6 col-md-10 " onClick={() => EventNavigte(item?.slugName)}>
                                                <div className={styles.imagebox}>
                                                    {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={"productimagess"} /> : <>
                                                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                    </>}
                                                </div>
                                                <div className={styles.cardinsidesection}>
                                                    <div className="mb-3 mt-2">
                                                        <div className={styles.productNametext}>
                                                            {item?.title}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        )
                                    })}
                                </Slider>
                            </> : <>
                                <div className='cardsection row mb-3 ms-1'>
                                    {datas.map((item, index) => {
                                        return (
                                            <div className={'card col-lg-3 col-sm-6 col-xs-6 col-md-10'} key={index}>

                                                <div onClick={() => EventNavigte(item?.slugName)}>
                                                    <div className={styles.imagebox}>
                                                        {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={'productimagess'} /> : <>
                                                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                        </>}
                                                    </div>
                                                    <div className={styles.cardinsidesection}>
                                                        <div className="mb-3 mt-2">
                                                            <div className={styles.productNametext}>
                                                                {item?.title}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </>}

                        </div>
                    </div> */}


                </div>
            </div>
        </Fragment>
    )
}

export default Blogs