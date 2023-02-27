import React, { Fragment } from 'react'
import styles from './styles/Blogs.module.scss';
import blog1 from '../../../../assests/womeynlogos/Blog1.png';
import blog2 from '../../../../assests/womeynlogos/Blog2.png';
import blog3 from '../../../../assests/womeynlogos/Blog3.png';
import Image from 'next/image';

function Blogs() {

    const datas = [
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
                                <div className='cards-blog  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3'  key={index}>
                                    <div>
                                        <Image src={item?.image} alt="no image" className={styles.blogimages} />
                                    </div>
                                    <div className='blog-section-split mt-2'>
                                        <div className="smalltextgrey">
                                            {item?.name}
                                        </div>
                                        <div className="smalltextgrey ">
                                            {item?.time}
                                        </div>
                                       
                                    </div>
                                    <div className="mt-2">
                                            {item?.title}
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