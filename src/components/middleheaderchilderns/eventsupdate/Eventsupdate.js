import React, { Fragment, useEffect, useState } from 'react'
import Layout from '../../../../pages/layout'
import LayoutHeader from '../../Layoutheader/LayoutHeader'
import eventbaner from '../../../assests/homepage-logos/event banner.png';
import styles from './styles/EventUpdate.module.scss';
import Image from 'next/image';
import axios from 'axios';
import Signupnewsletter from '../../home/components/signupfornewsletter/Signupnewsletter';
import Footer from '../../footer/Footer';
import Childfooter from './../../footer/Childfooter';
function Eventsupdate({ dark, setdark }) {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("https://fakestoreapi.com/products").then((res) => {
            setData(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <Fragment>
            <div className={styles.eventupdatemainsection}>
                <div className="headersectionhome">
                    <LayoutHeader setdark={setdark} dark={dark} />
                </div>
                <div className={styles.insideeventupdatesection}>
                    <div className={styles.emptyboxeventsection}>
                    </div>
                    <div className={styles.emptyboxeventsectionleft}>
                    </div>
                    <div className={styles.emptyboxeventsectionbottom}>
                    </div>
                    <div className={styles.insidecontentsectionevent}>
                        <div>
                            <Image src={eventbaner} alt="no image" className={styles.eventbannerimage} />
                        </div>
                        <div className={styles.bordertopeventsection}>
                            <div className={styles.borderinsidesection}>
                            </div>
                        </div>
                        <div className={styles.spliteventcommonbox}>
                            <div className={styles.spliteventcommonletf}>


                            </div>
                            <div className={styles.spliteventcommonright}>
                            </div>
                        </div>

                        <div className={styles.splitboxeventsection}>

                            <div className={styles.lefteventsection}>
                                <div className="textseller">
                                    Latest Events
                                </div>
                                <div className='cardsections-events row justify-content-center  w-100 mt-1 mb-3'>
                                    {data.slice(10, 21).map((item, index) => {
                                        return (
                                            <div className='cardevents mb-3' key={index}>
                                                <div>
                                                    <img src={item?.image} alt="no image" className={styles.imageeventcard} />
                                                </div>
                                                <div className={styles.sportslistsection}>
                                                    <div>
                                                        <span className={styles.activesports}> SPORT</span> - January 25, 2022
                                                    </div>
                                                    <div className={styles.categoryevents}>
                                                        {item.category}
                                                    </div>
                                                    <div className={styles.loramsevents}>
                                                        {item?.description.slice(0, 55)}
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            <div className={styles.righteventsection}>
                                <div className="textseller ms-3">Topics</div>

                                {data.slice(15, 21).map((items, index) => {
                                    return (
                                        <div className="mb-4 mt-3">
                                            <img src={items?.image} alt="no image" className={styles.imageeventcard} />
                                            <div className={styles.categoryevents}>
                                                {items?.title.slice(0, 10)}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div>
                        <Signupnewsletter />
                    </div>
                    <div>
                        <Footer />
                    </div>
                    <div>
                        <Childfooter />
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default Eventsupdate