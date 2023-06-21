import React, { useState, useEffect } from 'react'
import styles from './styles/Eventsdetails.module.scss';
import { getSingleEvent } from '../../../../services/event-services/event-services';
import ReactHtmlParser from "react-html-parser";
import first from '../../../../assests/events/first.png';
import second from '../../../../assests/events/Frame-2.png';
import third from '../../../../assests/events/third.png';
import fourth from '../../../../assests/events/fourth.png';
import Image from 'next/image';
import moment from 'moment';
function Blogdetails({ id }) {

    const [viewblog, setViewBlog] = useState([]);

    useEffect(() => {
        getSingleEvent(id).then((res) => {
            setViewBlog(res?.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className="mainsection">
        <div className="insidesection">
        <div className={styles.mainblogview}>
            <div className={styles.insideblogsection}>
                <div>
                    {viewblog[0]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${viewblog[0]?.eventImageName}`} alt="no image" className="allbanners" /> : <>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzY6p2cqrDwlq7On2OGF3e_rpWyFkryfgRJjGP98fJKtK8zid9c15sg75ZvUWkvFgRVA&usqp=CAU'} alt="no image" className="allbanners" />
                    </>}
                </div>
                <div className={styles.bannerviewblog}>


                    <div className={styles.eventsectionsplitinside}>
                        <div className={styles.lefteventsection}>
                            <div className={styles.blogtitle}>
                                {viewblog[0]?.title}
                            </div>
                            <div className="mt-3">


                                <div className={styles.eventcontentbox}>
                                    <div className={styles.lefteventboxover}>
                                        <div className={styles.imageboxs}>
                                            <Image src={third} alt="no image" className={styles.firstLocation} />
                                        </div>
                                        <div className={styles.eventlength}>
                                            Location : 
                                        </div>
                                    </div>
                                </div>

                                <div className="ms-5 d-flex align-items-center">
                                        <span className="ms-2">{viewblog[0]?.location}</span>
                                    </div>

                            </div>



                            <div className="mt-3">

                                <div className={styles.eventcontentbox}>
                                    <div className={styles.lefteventboxover}>
                                        <div className={styles.imageboxs}>
                                            <Image src={fourth} alt="no image" className={styles.firstLocation} />
                                        </div>
                                        <div className={styles.eventlength}>
                                            Event Duration : 
                                        </div>
                                    </div>

                                    


                                </div>

                                <div className="ms-5 d-flex align-items-center">
                                        <span className="ms-2">{viewblog[0]?.eventLength} </span>

                                    </div>

                            </div>


                            <div className="mt-3">

                                <div className={styles.eventcontentbox}>
                                    <div className={styles.lefteventboxover}>
                                        <div className={styles.imageboxs}>
                                            <Image src={first} alt="no image" className={styles.firstLocation} />
                                        </div>
                                        <div className={styles.eventlength}>
                                            Organizer Details : 
                                        </div>
                                    </div>

                                   


                                </div>

                                <div className="ms-5 d-flex align-items-center">
                                         <span className="ms-2">{viewblog[0]?.organizerName} , {viewblog[0]?.organizationCompany}</span>

                                    </div>
                            </div>


                            <div className="mt-3">

                                <div className={styles.eventcontentbox}>
                                    <div className={styles.lefteventboxover}>
                                        <div className={styles.imageboxs}>
                                            <Image src={second} alt="no image" className={styles.firstLocation} />
                                        </div>
                                        <div className={styles.eventlength}>
                                            Date : 
                                        </div>
                                    </div>

                                   


                                </div>

                                <div className="ms-5 d-flex align-items-center">
                                            <span className="ms-2">
                                                {/* {viewblog[0]?.startDate} */}
                                                {moment(viewblog[0]?.startDate).format("MMM Do YY")} 
                                                
                                                
                                               <span className="mx-2">  to </span>
                                                 
                                                 {/* {viewblog[0]?.endDate}  */}

                                                 {moment(viewblog[0]?.endDate).format("MMM Do YY")} 
                                                 
                                                 
                                                 </span>

                                    </div>

                            </div>

                        </div>
                        <div className={styles.righteventsection}>
                            <div className={styles.eventlengthtext}>
                                <span className={styles.eventlength}>Description   :</span>  
                                
                               
                            </div>

                            <div className="ms-5">
                            {viewblog[0]?.description}
                            </div>

                            <div className={styles.eventlengthtext}>
                                <span className={styles.eventlength}>Content   :  </span> 
                                
                               
                            </div>
                            <div className="mt-2 mb-4 ms-5">
                                {ReactHtmlParser(viewblog[0]?.eventContent.replace(/&lt;/g, "<"))}
                                {/* {ReactHtmlParser(item?.planDetails.replace(/&lt;/g, "<"))} */}

                            </div>
                        </div>
                    </div>
                    <div>








                        {/* 
<div className={styles.eventlengthtext}>
<span className={styles.eventlength}>Ticketing Details </span>: {viewblog[0]?.ticketingDetails}   
</div> */}




                    </div>

                    <div>


                    </div>

                </div>
            </div>
        </div>
        </div>

        </div>

        
    )
}

export default Blogdetails