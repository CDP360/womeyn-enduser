import React, { useState, useEffect } from 'react'
import styles from './styles/Eventsdetails.module.scss';
import { getingleEvent } from '../../../../services/event-services/event-services';
import ReactHtmlParser from "react-html-parser";

function Blogdetails({ id }) {

    const [viewblog, setViewBlog] = useState([]);

    useEffect(() => {
        getingleEvent(id).then((res) => {
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
                    {viewblog[0]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${viewblog[0]?.eventImageName}`} alt="no image" className={styles.imageeventcard} /> : <>
                        <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtzY6p2cqrDwlq7On2OGF3e_rpWyFkryfgRJjGP98fJKtK8zid9c15sg75ZvUWkvFgRVA&usqp=CAU'} alt="no image" />
                    </>}
                </div>
                <div className={styles.bannerviewblog}>
                    <div>
                        <div className={styles.blogtitle}>
                            {viewblog[0]?.title}
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