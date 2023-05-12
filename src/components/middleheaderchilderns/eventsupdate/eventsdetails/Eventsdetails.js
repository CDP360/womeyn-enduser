import React, { useState, useEffect } from 'react'
import styles from './styles/Eventsdetails.module.scss';
import { getSingleBlogs } from '../../../../services/blog-service/blog-service';
import ReactHtmlParser from "react-html-parser";

function Eventsdetails({ id }) {

    const [viewblog, setViewBlog] = useState([]);

    useEffect(() => {
        getSingleBlogs(id).then((res) => {
            setViewBlog(res?.data)

            console.log(res?.data, "kl")
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className={styles.mainblogview}>
            <div className={styles.insideblogsection}>
                <div>
                    {viewblog[0]?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${viewblog[0]?.postImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
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
    )
}

export default Eventsdetails