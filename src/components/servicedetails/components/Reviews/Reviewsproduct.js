import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Reviewproduct.module.scss';
import redstar from '../../../../assests/womeynlogos/redstar.png';
import Image from 'next/image';
import Skeleton from 'react-loading-skeleton';
import { Rate } from "antd";
import { Nodatafoundimage } from './../../../nodatafoundimage/Nodatafound';

function Reviewsproduct({ reviews, ratingcount, averageRatings }) {

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

            {reviews?.length > 0 ? <>
                <div className={styles.mainreviewinsidesection}>
                    <div className={styles.seeallsectionreviews}>
                        <div className={styles.reviwesectionrating}>
                            <div className={styles.reviewtexts}>Reviews</div>
                            <div className={styles.ratingsection}>
                                <Image src={redstar} alt="no image" className={styles.redstartreview} />{averageRatings} <span className={styles.dategrey}>({ratingcount} Review)</span></div>
                        </div>
                        <div className='light-active'>See all</div>
                    </div>
                    <div className={`row ${styles.maincardsection} mt-4`}>
                        {reviews.map((item, index) => {
                            return (
                                <div className={`${styles.cards}`}>
                                    <div className={styles.splitcardsection}>
                                        <div className={styles.imagecardsplit}>
                                            {/* <div className={styles.splitprofilesection}>
                                                <div>
                                                    <Skeleton className={styles.profileuser} />
                                                    <img src={item.image} alt="no image" className={styles.profileuser} />

                                                </div>
                                                <div>
                                                    <div>
                                                        {item.name}
                                                    </div>
                                                    <div className={styles.dategrey}>
                                                        {item.date} <span>{item.title}</span>
                                                    </div>
                                                </div>
                                            </div> */}
                                            <div>
                                                <div>
                                                    {item.name}
                                                </div>
                                                <div className={styles.dategrey}>
                                                    {item.date} <span>{item.title}</span>
                                                </div>
                                            </div>
                                            <div className={styles.redstarsection}>
                                                <Rate defaultValue={parseFloat(item?.ratingValue)} allowHalf style={{ color: "#54BE43" }}
                                                    tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                                    count={5}
                                                    disabled
                                                />

                                                {/* <Image src={redstar} alt="no image" className={styles.redstartreview} /> <span>{item.rating}</span> */}
                                            </div>
                                        </div>
                                        <div className="mt-2 mb-3">
                                            {item.message}

                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

            </> : <div>

                <div>
                    Review Service
                </div>
                <Nodatafoundimage
                    title={"No Service Reviews"}
                />
            </div>}





        </Fragment>
    )
}

export default Reviewsproduct