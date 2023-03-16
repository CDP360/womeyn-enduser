import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Reviewproduct.module.scss';
import redstar from '../../../../../../assests/womeynlogos/redstar.png';
import Image from 'next/image';


function Reviewsproduct({productreview}) {

    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);

    const [news, setNews] = useState([]);

    const data = [
        {
            id: 1,
            name: "new one",
            date: "April 15, 2021",
            rating: 4.5,
            des: "Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo & black-belt and long-time and",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7QPGzBefaOz5xC_y7q_Ncne7Kd8J8f85xw&usqp=CAU"
        },
        {
            id: 2,
            name: "new one",
            date: "April 15, 2021",
            rating: 4.5,

            des: "Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo & black-belt and long-time and",

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7QPGzBefaOz5xC_y7q_Ncne7Kd8J8f85xw&usqp=CAU"
        },
        {
            id: 3,
            name: "new one",
            date: "April 15, 2021",
            rating: 4.5,

            des: "Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo & black-belt and long-time and",

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7QPGzBefaOz5xC_y7q_Ncne7Kd8J8f85xw&usqp=CAU"
        },
        {
            id: 4,
            name: "new one",
            date: "April 15, 2021",
            rating: 4.5,

            des: "Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo & black-belt and long-time and",

            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs7QPGzBefaOz5xC_y7q_Ncne7Kd8J8f85xw&usqp=CAU"
        }
    ]

    const Readmorehandle = (id) => {
        data.forEach((item, index) => {
            if (item.id === id) {
                setShow(!show);
                setNews(item);
                setShow1(!show1)
            }
        })
    }
  
    return (
        <Fragment>
            {/* <div className={styles.mainreviewinsidesection}>
                <div className={styles.seeallsectionreviews}>
                    <div className={styles.reviwesectionrating}>
                        <div className={styles.reviewtexts}>Reviews</div>
                        <div className={styles.ratingsection}>
                            <Image src={redstar} alt="no image" className={styles.redstartreview} />4.7 <span className={styles.dategrey}>(23 ratings)</span></div>
                    </div>
                    <div className='light-active'>See all</div>
                </div>
                <div className={`row ${styles.maincardsection} mt-4`}>
                    {data.map((item, index) => {
                        return (
                            <div className={`${styles.cards}`}>
                                <div className={styles.splitcardsection}>
                                    <div className={styles.imagecardsplit}>
                                        <div className={styles.splitprofilesection}>
                                            <div>
                                                <img src={item.image} alt="no image" className={styles.profileuser} />
                                            </div>
                                            <div>
                                                <div>
                                                    {item.name}
                                                </div>
                                                <div className={styles.dategrey}>
                                                    {item.date} <span>{item.name.slice(0, 4)}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={styles.redstarsection}>
                                            <Image src={redstar} alt="no image" className={styles.redstartreview} /> <span>{item.rating}</span>
                                        </div>
                                    </div>
                                    <div className="mt-2 mb-3">
                                        {item.des}
                                        {item.id}
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div> */}


            {productreview?.length>0 ? <div>

                product view screen designs
            </div>:<div>
           
                </div>}
           
        </Fragment>
    )
}

export default Reviewsproduct