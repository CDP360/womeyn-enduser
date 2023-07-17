import React, { Fragment, useEffect, useState } from 'react'
import eventbaner from '../../../assests/homepage-logos/event banner.png';
import styles from './styles/EventUpdate.module.scss';
import Image from 'next/image';
import Signupnewsletter from '../../home/components/signupfornewsletter/Signupnewsletter';
import Footer from '../../footer/Footer';
import Childfooter from './../../footer/Childfooter';
import { getBlogs } from '../../../services/blog-service/blog-service';
import { getEvents } from '../../../services/event-services/event-services';
import Slider from "react-slick";
import { useRouter } from 'next/router';
import SlideNextArrow from './../../home/slidenextarrow/SlideNextArrow';
import SlidePreArrow from './../../home/slideprearrow/SlidePreArrow';
import moment from 'moment';
import ReactPaginate from 'react-paginate';
import LoaderLogo from './../../loaderlogo/LoaderLogo';

function Eventsupdate() {

    const history = useRouter();

    const [indexs, setindexs] = useState(0);


    const [topevents, setTopEvents] = useState([]);
    const [Neweevnts, setNewEvents] = useState([]);


    const [pagecount, setPagecount] = useState("");
    const [pagecountnumbers, setPagecountNumbers] = useState(1);
    const [pagecount1, setPagecount1] = useState("");
    const [pagecountnumbers1, setPagecountNumbers1] = useState(1);

    const [showTopBtn, setShowTopBtn] = useState(false);
    const [showTopBtn1, setShowTopBtn1] = useState(false);



    const [loadinds, setLoadings] = useState(false);



    useEffect(() => {
        getBlogs().then((res) => {
            setTopEvents(res?.data?.results)
            setPagecount1(res?.data?.totalResults)

        }).catch((err) => {
            console.log(err);
        })


        getEvents().then((res) => {
            setNewEvents(res?.data?.results)
            setPagecount(res?.data?.totalResults)

        }).catch((err) => {
            console.log(err);
        })


        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
                setShowTopBtn1(true);

            } else {
                setShowTopBtn(false);
                setShowTopBtn1(false);

            }
        });
    }, [indexs])

    const ViewBlogEvent = (id) => {
        history.push(`/events/${id}`)

    }
    const ViewBlog = (id) => {
        history.push(`/blog/${id}`)
    }
    const handleChnagepage = (counts) => {
        setLoadings(true)
        setTimeout(() => {
            setindexs(counts);
            setLoadings(false);
        }, 700)
    }


    const fetchComments = async (current) => {

        const res = await getEvents(current);
        return res?.data?.results;
    }

    const handlePageClick = async (data) => {
        let current = data?.selected + 1;
        setPagecountNumbers(current);
        const commentForms = await fetchComments(current);
        goToTop()
        setNewEvents(commentForms);


    }



    const fetchComments1 = async (current) => {

        const res = await getBlogs(current);
        return res?.data?.results;
    }

    const handlePageClick1 = async (data) => {
        let current = data?.selected + 1;
        setPagecountNumbers1(current);
        const commentForms = await fetchComments1(current);
        goToTop()
        setNewEvents1(commentForms);


    }


    const goToTop = () => {
        window.scrollTo({
            top: 230,
            behavior: "smooth",
        });
    };


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
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
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
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


    return (
        <Fragment>

            <div className="mainsection">
                <div className="insidesection">
                    <div className={styles.eventupdatemainsection}>
                        <div className={styles.insideeventupdatesection}>
                            <div className={styles.emptyboxeventsection}>
                            </div>
                            <div className={styles.emptyboxeventsectionleft}>
                            </div>
                            <div className={styles.emptyboxeventsectionbottom}>
                            </div>
                            <div className={styles.insidecontentsectionevent}>
                                {indexs === 1 ? <>
                                    <div className={'row'} >
                                        <Slider {...settings}>
                                            {Neweevnts?.map((item, index) => {
                                                return (
                                                    <div className={styles.maineventssection} key={index} onClick={() => ViewBlogEvent(item?.slugName)}>
                                                        {/* <Image src={eventbaner} alt="no image" className={styles.eventbannerimage} /> */}
                                                        <div className={styles.leftbannerblogs}>
                                                            {item?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.eventImageName}`} alt="no image" className={styles.imageeventcards} /> : <>
                                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                            </>}
                                                        </div>
                                                        <div className={styles.rightbannerblogs}>
                                                            <div className="mb-2">
                                                                {/* <span className={styles.activesports}> SPORT</span> - January 25, 2022 */}
                                                                {item?.title}
                                                            </div>
                                                            <div className={styles.eventlengthtext}>
                                                                <span className={styles.eventlength}>Start Date</span> :  {item?.startDate}
                                                            </div>


                                                            <div className={styles.eventlengthtext}>
                                                                <span className={styles.eventlength}>End Date </span>:   {item?.endDate}
                                                            </div>
                                                            <div className={styles.loramsevents}>
                                                                {item?.description.slice(0, 80)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Slider>

                                    </div>
                                </> : <>

                                    <div className={'row'} >

                                        <Slider {...settings}>
                                            {topevents?.map((item, index) => {
                                                return (
                                                    <div className={styles.maineventssection} key={index} onClick={() => ViewBlog(item?.slugName)}>
                                                        {/* <Image src={eventbaner} alt="no image" className={styles.eventbannerimage} /> */}
                                                        <div className={styles.leftbannerblogs}>
                                                            {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className="allbanners" /> : <>
                                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" className="allbanners" />
                                                            </>}
                                                        </div>
                                                        <div className={styles.rightbannerblogs}>
                                                            <div className="mb-4">
                                                                {/* <span className={styles.activesports}> SPORT</span> - January 25, 2022 */}
                                                                {item?.title}
                                                            </div>
                                                            <div className={styles.categoryevents}>
                                                                {item?.category}
                                                            </div>
                                                            <div className={styles.loramsevents}>
                                                                {item?.shortDescription.slice(0, 80)}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                        </Slider>

                                    </div>

                                </>}
                                <div className={styles.bordertopeventsection}>
                                    <div className={styles.borderinsidesection}>
                                    </div>
                                </div>
                                <div className={styles.spliteventcommonbox}>
                                    <div className={styles.spliteventcommonletf}>
                                    </div>
                                    <div className={styles.spliteventcommonright}>
                                    </div>
                                </div>


                                <div className={styles.blogbuttons}>
                                    <button className={indexs == 0 ? styles.activebutton : styles.inactivebutton} onClick={() => handleChnagepage(0)}>Blogs</button>

                                    <button className={indexs == 1 ? styles.activebutton : styles.inactivebutton} onClick={() => handleChnagepage(1)}>Events</button>

                                </div>


                                {loadinds ? <>
                                    <LoaderLogo />
                                </> : <>

                                    {indexs === 1 && <>

                                        <div className={styles.splitboxeventsection}>
                                            <div className={styles.lefteventsection}>
                                                <div className="textseller mb-4">
                                                    Latest Events
                                                </div>
                                                <div className='cardsections-events row  w-100 mt-1 mb-3'>
                                                    {Neweevnts.map((item, index) => {
                                                        return (
                                                            <div className='cardevents mb-3' key={index} onClick={() => ViewBlogEvent(item?.slugName)}>
                                                                <div>
                                                                    {/* <img src={item?.image} alt="no image" className={styles.imageeventcard} /> */}

                                                                    {item?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.eventImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                                                                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                                    </>}
                                                                </div>
                                                                <div className={styles.sportslistsection}>

                                                                    <div className={styles.titleevents}>
                                                                        {/* <span className={styles.activesports}> SPORT</span> - January 25, 2022 */}
                                                                        {item?.title.slice(0, 30)}
                                                                    </div>
                                                                    <div className={styles.categoryevents}>
                                                                        {item.category}
                                                                    </div>
                                                                    <div className={styles.loramsevents}>
                                                                        {item?.description.slice(0, 50)}
                                                                    </div>

                                                                    <div className="d-flex justify-content-between">
                                                                        <div>Start : {item?.startDate}</div>
                                                                        <div>End :{item?.endDate}</div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            {/* <div className={styles.righteventsection}>
    <div className="textseller ms-3">Topics</div>
    {topevents.map((items, index) => {
        return (
            <div className="mb-4 mt-3" key={index} onClick={()=>ViewBlog(items?.slugName)}>
              
              {items?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${items?.postImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                        </>}
                <div className={styles.categoryevents}>
                </div>
            </div>
        )
    })}
</div> */}
                                        </div>

                                    </>}
                                </>}






                                {indexs === 0 && <>

                                    <div className={styles.splitboxeventsection}>
                                        <div className={styles.lefteventsection}>
                                            <div className="textseller mb-4">
                                                Latest Blogs
                                            </div>
                                            <div className='cardsections-events row  w-100 mt-1 mb-3'>
                                                {topevents.map((item, index) => {
                                                    return (
                                                        <div className='cardevents mb-3' key={index} onClick={() => ViewBlog(item?.slugName)}>
                                                            <div>
                                                                {/* <img src={item?.image} alt="no image" className={styles.imageeventcard} /> */}

                                                                {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                                                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                                </>}
                                                            </div>
                                                            <div className={styles.sportslistsection}>


                                                                <div className={styles.titleevents}>
                                                                    {/* <span className={styles.activesports}> SPORT</span> - January 25, 2022 */}
                                                                    {item?.title.slice(0, 30)}
                                                                </div>
                                                                <div className={styles.categoryevents}>
                                                                    {item.keywords}
                                                                </div>
                                                                {/* <div className={styles.loramsevents}>
                                                            {item?.shortDescription.slice(0, 100)}
                                                        </div> */}
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                            </div>
                                        </div>

                                    </div>

                                </>}


                            </div>




                        </div>

                    </div>

                    <div>

                        {indexs === 1 &&
                            <div>
                                {pagecount === 0 ? null : <>
                                    <div className="mt-3">
                                        <hr />
                                    </div>
                                    <div>
                                        Page {pagecountnumbers} / {pagecount}
                                    </div>

                                    <div className="mt-3">

                                        <ReactPaginate
                                            activeClassName={'actives '}
                                            breakClassName={'item break-me '}
                                            breakLabel={'...'}
                                            containerClassName={'pagination'}
                                            disabledClassName={'disabled-page'}
                                            marginPagesDisplayed={2}
                                            nextClassName={"item next "}
                                            nextLabel={Math.ceil(pagecount / 12) === pagecountnumbers ? null : "NEXT"}
                                            onPageChange={handlePageClick}
                                            pageCount={pagecount / 12}
                                            pageClassName={'item pagination-page '}
                                            pageRangeDisplayed={2}
                                            previousClassName={"item previous"}
                                            previousLabel={pagecountnumbers > 1 ? "PREVIOUS" : null}



                                        />
                                    </div>
                                </>}
                            </div>
                        }





                        {indexs === 0 &&
                            <div>
                                {pagecount1 === 0 ? null : <>
                                    <div className="mt-3">
                                        <hr />
                                    </div>
                                    <div>
                                        Page {pagecountnumbers1} / {pagecount1}
                                    </div>

                                    <div className="mt-3">

                                        <ReactPaginate
                                            activeClassName={'actives '}
                                            breakClassName={'item break-me '}
                                            breakLabel={'...'}
                                            containerClassName={'pagination'}
                                            disabledClassName={'disabled-page'}
                                            marginPagesDisplayed={2}
                                            nextClassName={"item next "}
                                            nextLabel={Math.ceil(pagecount1 / 12) === pagecountnumbers1 ? null : "NEXT"}
                                            onPageChange={handlePageClick1}
                                            pageCount={pagecount1 / 12}
                                            pageClassName={'item pagination-page '}
                                            pageRangeDisplayed={2}
                                            previousClassName={"item previous"}
                                            previousLabel={pagecountnumbers1 > 1 ? "PREVIOUS" : null}



                                        />
                                    </div>
                                </>}
                            </div>
                        }

                    </div>
                </div>
            </div>


            <div>
                <Signupnewsletter />
            </div>
            <div>
                <Footer />
            </div>
            <div>
                <Childfooter />
            </div>

        </Fragment>
    )
}

export default Eventsupdate




