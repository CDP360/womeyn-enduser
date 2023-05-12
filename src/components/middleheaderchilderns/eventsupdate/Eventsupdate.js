import React, { Fragment, useEffect, useState } from 'react'
import eventbaner from '../../../assests/homepage-logos/event banner.png';
import styles from './styles/EventUpdate.module.scss';
import Image from 'next/image';
import Signupnewsletter from '../../home/components/signupfornewsletter/Signupnewsletter';
import Footer from '../../footer/Footer';
import Childfooter from './../../footer/Childfooter';
import { getBlogs } from '../../../services/blog-service/blog-service';
import { useRouter } from 'next/router';
function Eventsupdate() {

    const history=useRouter();


    const [topevents, setTopEvents] = useState([]);


    useEffect(() => {
        getBlogs().then((res) => {
            setTopEvents(res?.data?.results)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    const data = [
        {
            id: 1,
            image: "https://picsum.photos/200/300",
            description: "You may combine any of the options above"
        },
        {
            id: 2,
            image: "https://picsum.photos/200/300",
            description: "You may combine any of the options above"

        },
        {
            id: 3,
            image: "https://picsum.photos/200/300",
            description: "You may combine any of the options above"

        },
        {
            id: 4,
            image: "https://picsum.photos/200/300",
            description: "You may combine any of the options above"

        }
    ]


    const ViewBlog=(id)=>{
        history.push(`/events/${id}`)
    }
    return (
        <Fragment>
            <div className={styles.eventupdatemainsection}>
                <div className={styles.insideeventupdatesection}>
                    <div className={styles.emptyboxeventsection}>
                    </div>
                    <div className={styles.emptyboxeventsectionleft}>
                    </div>
                    <div className={styles.emptyboxeventsectionbottom}>
                    </div>
                    <div className={styles.insidecontentsectionevent}>
                        <div>
                            <Image src={eventbaner} alt="no image" className={styles.eventbannerimage} />
                        </div>
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

                        <div className={styles.splitboxeventsection}>
                            <div className={styles.lefteventsection}>
                                <div className="textseller">
                                    Latest Events
                                </div>
                                <div className='cardsections-events row   w-100 mt-1 mb-3'>
                                    {topevents.map((item, index) => {
                                        return (
                                            <div className='cardevents mb-3' key={index} onClick={()=>ViewBlog(item?.slugName)}>
                                                <div>
                                                    {/* <img src={item?.image} alt="no image" className={styles.imageeventcard} /> */}

                                                    {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                                                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                                    </>}
                                                </div>
                                                <div className={styles.sportslistsection}>
                                                    <div>
                                                        {/* <span className={styles.activesports}> SPORT</span> - January 25, 2022 */}
                                                        {item?.keywords}
                                                    </div>
                                                    <div className={styles.categoryevents}>
                                                        {item.category}
                                                    </div>
                                                    <div className={styles.loramsevents}>
                                                        {item?.shortDescription.slice(0,100)}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.righteventsection}>
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

                </div>
            </div>
        </Fragment>
    )
}

export default Eventsupdate




