import React, { useState, useEffect } from 'react'
import styles from './styles/Eventsdetails.module.scss';
import { getSingleBlogs } from '../../../../services/blog-service/blog-service';
import ReactHtmlParser from "react-html-parser";
import Skeleton from 'react-loading-skeleton';


function Eventsdetails({ id }) {

    const [viewblog, setViewBlog] = useState([]);

    useEffect(() => {
        getSingleBlogs(id).then((res) => {
            setViewBlog(res?.data)
          
        }).catch((err) => {
            console.log(err);
        })
    }, [id])
    return (
        <div className="mainsection">
        <div className="insidesection">
        <div className={styles.mainblogview}>
            <div className={styles.insideblogsection}>
                <div  className={styles.eventbannerimages}>
                    {viewblog[0]?.postImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${viewblog[0]?.postImageName}`} alt="no image" className="eventbanners" /> : <>
                    <Skeleton className="eventbanners" />
                    </>}
                </div>
                <div className={styles.bannerviewblog}>
                    <div>
                        <div className={styles.blogtitle}>
                            {viewblog[0]?.title}
                        </div>

                        <div className="mt-3 mb-4">
                            {ReactHtmlParser(viewblog[0]?.postContent)}
                        </div>

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

export default Eventsdetails