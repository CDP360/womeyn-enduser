import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Whatmake.module.scss';
import Image from 'next/image';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import { useRouter } from 'next/router';
import { getBlogs } from './../../../../services/blog-service/blog-service';
import { getEvents } from '../../../../services/event-services/event-services';

function Whatmake() {
    const history = useRouter();
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


    const [datas, setDatas] = useState([]);




    const NavigatePathes = (id) => {
        history.push(`/events/${id}`)
    }


    useEffect(() => {
        getEvents().then((res) => {
            setDatas(res?.data?.results.slice(0, 15));
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <Fragment>
              <div className={styles.blogmainsection}>
                <div className={styles.insideblogsection}>
                    <div className={styles.blogsectiontexts}>
                        <div className='textseller '>
                        What makes us unique
                        </div>
                        <div className='blogloream mt-2'>
                        All the latest news, stories, events & workshops from our experts & influencers.
                        </div>
                    </div>

                    <div className={styles.appcard}>
            {/* {datas?.length > 4 ? <>
                <Slider {...settings}>
                    {datas.map((item, index) => {
                        return (
                            <div className={styles.cardcategory} key={index}>
                                <div className={styles.cardsections}>
                                    <div className="cards col-lg-12 mb-1 " onClick={() => NavigatePathes(item?.slugName)}>
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
                    {datas.slice(0,4).map((item, index) => {
                        return (
                            <div className={styles.cardcategorys} key={index}>

                                <div onClick={() => NavigatePathes(item?.slugName)}>
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
        // <Fragment>

        //     <div className={styles.mainslidesection}>
        //         <div className={styles.blogsectiontexts}>
        //             <div className='textseller  mt-1 '>
        //                 What makes us unique
        //             </div>
        //             <div className={'blogloream mb-3 mt-2'}>
        //                 All the latest news, stories, events & workshops from our experts & influencers.
        //             </div>
        //         </div>
        //         {/* <div className={styles.insidemakesection}>
        //             {datas?.length <= 4 ? <>
        //                 <div className={styles.insideslidess}>
        //                     {datas.map((item, index) => {
        //                         return (
        //                             <div className={styles.cardsslide} key={index} style={{ backgroundColor: item.colorbg }} onClick={() => NavigatePathes(item?.slugName)}>
        //                                 <div className={styles.whatmakeimagebox}>
        //                                     {item?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.eventImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
        //                                         <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
        //                                     </>}
        //                                 </div>
        //                                 <div className='mt-1 text-center' onClick={() => NavigatePathes(item?.slugName)} >

        //                                     {item?.title}

        //                                 </div>
                                       
        //                             </div>
        //                         )
        //                     })}
        //                 </div>
        //             </> :
        //                 <Slider {...settings}>
        //                     {datas.map((item, index) => {
        //                         return (
        //                             <div className={styles.insideslides} key={index} onClick={() => NavigatePathes(item?.slugName)}>
        //                                                                    <div className={styles.whatmakeimagebox}>
        //                                     {item?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.eventImageName}`} alt="no image" className={styles.whatmakeimage} /> : <>
        //                                         <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
        //                                     </>}
        //                                 </div>
        //                                 <div className='mt-4' onClick={() => NavigatePathes(item?.slugName)} >
        //                                 {item?.title}
        //                                 </div>

        //                             </div>
        //                         )
        //                     })}
        //                 </Slider>}
        //         </div> */}
        //         <div className={styles.insidemakesection}>

        //             <div className={styles.appcard}>
        //                 {datas?.length > 4 ? <>
        //                     <Slider {...settings}>
        //                         {datas.map((item, index) => {
        //                             return (
        //                                 <div className={"card col-lg-3 col-sm-6 col-xs-6 col-md-10"} key={index}>

        //                                     <div onClick={() => categoryPush(item?.productSlugName)}>
        //                                         <div className={styles.blogcardimage}>
        //                                             {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={"productimagess"} /> : <>
        //                                                 <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
        //                                             </>}
        //                                         </div>
        //                                         <div className={styles.sportslistsection}>

        //                                             <div className={styles.titleevents}>
        //                                                 {item?.title}
        //                                             </div>


        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             )
        //                         })}
        //                     </Slider>
        //                 </> : <>
        //                     <div className='cardsection row mb-3 ms-1 '>
        //                         {datas.map((item, index) => {
        //                             return (
        //                                 <div className={"card col-lg-3 col-sm-6 col-xs-6 col-md-10"} key={index}>

        //                                     <div onClick={() => categoryPush(item?.productSlugName)}>
        //                                         <div className={styles.blogcardimage}>
        //                                             {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={"productimagess"} /> : <>
        //                                                 <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
        //                                             </>}
        //                                         </div>
        //                                         <div className={styles.sportslistsection}>

        //                                             <div className={styles.titleevents}>
        //                                                 {item?.title}
        //                                             </div>


        //                                         </div>
        //                                     </div>
        //                                 </div>
        //                             )
        //                         })}
        //                     </div>
        //                 </>}

        //             </div>
        //         </div>
        //     </div>
        // </Fragment>
    )
}

export default Whatmake