import React, { Fragment,useState,useEffect } from 'react'
import styles from './styles/Blogs.module.scss';
import blog1 from '../../../../assests/womeynlogos/Blog1.png';
import blog2 from '../../../../assests/womeynlogos/Blog2.png';
import blog3 from '../../../../assests/womeynlogos/Blog3.png';
import Image from 'next/image';
import { getBlogs } from '../../../../services/blog-service/blog-service';


import {useRouter} from 'next/router';

function Blogs() {


    const history=useRouter();


    const [datas,setDatas]=useState([]);
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
            setDatas(res?.data?.results?.slice(0,3))
        }).catch((err) => {
console.log(err);
        })
    }, [])

    const EventNavigte=()=>{
        history.push("/events")
    }
    return (
        <Fragment>
            <div className={styles.blogmainsection}>
                <div className={styles.insideblogsection}>
                    <div className={styles.blogsectiontexts}>
                        <div className='large-text text-center'>
                            Blogs
                        </div>
                        <div className='blogloream mt-2'>
                            Learn more about our culture, health, lifestyle
                            and wellbeign with our blogs
                        </div>
                    </div>
                    <div className="blog-cards row d-flex justify-content-center gap-3  ">
                        {datas?.map((item, index) => {
                            return (
                                <div className='cards-blog  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3' key={index} onClick={EventNavigte}>
                                    <div>
                                        {/* <Image src={item?.image} alt="no image" className={styles.blogimages} /> */}

                                        
                                        {item?.postImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.postImageName}`} alt="no image" className={styles.blogimages} /> : <>
                                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                        </>}

                                    </div>
                                    <div className='blog-section-split mt-2'>
                                        {/* <div className="smalltextgrey">
                                            {item?.title}
                                        </div>
                                        <div className="smalltextgrey ">
                                            {item?.shortDescription}
                                        </div> */}

                                    </div>
                                    <div className="mt-2">
                                        <div>
                                        {item?.title}

                                            </div>
                                            <div>
                                        {item?.shortDescription.slice(0,40)}

                                            </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>


                </div>
            </div>
        </Fragment>
    )
}

export default Blogs