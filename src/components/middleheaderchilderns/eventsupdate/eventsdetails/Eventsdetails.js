import React, { useState, useEffect } from 'react'
import styles from './styles/Eventsdetails.module.scss';
import { getSingleBlogs } from '../../../../services/blog-service/blog-service';
import ReactHtmlParser from "react-html-parser";


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
                <div>
                    {viewblog[0]?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${viewblog[0]?.postImageName}`} alt="no image" className="eventbanners" /> : <>
                        <img src={"https://visionhospitalgoa.com/wp-content/uploads/2020/09/blog-banner-1.jpg"} alt="no image"  className="eventbanners"/>
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