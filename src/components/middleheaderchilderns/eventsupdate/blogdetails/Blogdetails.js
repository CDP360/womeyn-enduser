import React, { useState, useEffect } from 'react'
import styles from './styles/Eventsdetails.module.scss';
import { getSingleEvent } from '../../../../services/event-services/event-services';
import ReactHtmlParser from "react-html-parser";

function Blogdetails({ id }) {

    const [viewblog, setViewBlog] = useState([]);

    useEffect(() => {
        getSingleEvent(id).then((res) => {
            setViewBlog(res?.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    console.log(viewblog,"viewblog")
    return (
        <div className={styles.mainblogview}>
            <div className={styles.insideblogsection}>
                <div>
                    {viewblog[0]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${viewblog[0]?.eventImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzY6p2cqrDwlq7On2OGF3e_rpWyFkryfgRJjGP98fJKtK8zid9c15sg75ZvUWkvFgRVA&usqp=CAU'} alt="no image" />
                    </>}
                </div>
                <div className={styles.bannerviewblog}>
                    <div>
                        <div className={styles.blogtitle}>
                            {viewblog[0]?.title}
                        </div>

<div className={styles.eventlengthtext}>
   <span className={styles.eventlength}> Event Length</span> : {viewblog[0]?.eventLength}
</div>


<div className={styles.eventlengthtext}>
<span className={styles.eventlength}> Organizer Name </span> : {viewblog[0]?.organizerName}   
</div>
<div className={styles.eventlengthtext}>
<span className={styles.eventlength}> Organization Company</span> : {viewblog[0]?.organizationCompany}
</div>

<div className={styles.eventlengthtext}>
<span className={styles.eventlength}>Start Date</span> : {viewblog[0]?.startDate}   
</div>


<div className={styles.eventlengthtext}>
<span className={styles.eventlength}>End Date </span>: {viewblog[0]?.endDate}   
</div>


<div className={styles.eventlengthtext}>
<span className={styles.eventlength}>Location</span> : {viewblog[0]?.location}   
</div>




<div className={styles.eventlengthtext}>
<span className={styles.eventlength}>Ticketing Details </span>: {viewblog[0]?.ticketingDetails}   
</div>


<div className={styles.eventlengthtext}>
<span className={styles.eventlength}>description</span> : {viewblog[0]?.description}   
</div>
                        <div className="mt-3 mb-4">
                            {ReactHtmlParser(viewblog[0]?.eventContent.replace(/&lt;/g, "<"))}
                      {/* {ReactHtmlParser(item?.planDetails.replace(/&lt;/g, "<"))} */}

                        </div>

                    </div>

                    <div>


                    </div>

                </div>
            </div>
        </div>
    )
}

export default Blogdetails