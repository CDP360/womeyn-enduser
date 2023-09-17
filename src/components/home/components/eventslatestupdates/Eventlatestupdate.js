import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Eventlateshupdate.module.scss';
import Image from 'next/image';
import fruit from '../../../../assests/homepage-logos/woymenbanner.png';
import fruit1 from '../../../../assests/womeynlogos/offruit.png';
import fruit2 from '../../../../assests/womeynlogos/fullfruit.png';
import ban from '../../../../assests/homepage-logos/ban1.png';
import ban1 from '../../../../assests/homepage-logos/workshop.png';
import ban2 from '../../../../assests/homepage-logos/workshop1.png';
import ban3 from '../../../../assests/homepage-logos/worshop2.png';
import ban4 from '../../../../assests/homepage-logos/workshop3.png';
import { getEvents } from '../../../../services/event-services/event-services';
import { useRouter } from 'next/router';

import w1 from '../../../../assests/abouts-logos/wb1.png';
import Skeleton from 'react-loading-skeleton';

function Eventlatestupdate() {
    const [events, setEvents] = useState([]);
    const history = useRouter();
    useEffect(() => {
        getEvents().then((res) => {
            setEvents(res?.data?.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const NavigateEvents = (id) => {
        history.push(`/events/${id}`)
    }

    const datas = Array(6).fill("kalai")
    return (
        <Fragment>
            <div className={styles.eventupdatemainsection}>
                <div className={styles.emptyboxcolorsection}>

                </div>
                <div className={styles.insideventupdatesection}>
                    <div className={styles.bordertopsectionevents}>
                        <div className='textdashed'>
                        </div>
                    </div>
                    <div className='textseller'>
                        Events & latest updates
                    </div>


                    <div className={styles.maineventbox}>

                        <div className={styles.imageboxevents}>

                            {events?.slice(0, 2).map((item, index) => {
                                return (
                                    <div className={styles.boximages}>
                                        <div className={styles.workshopimages} onClick={() => NavigateEvents(item?.slugName)}>
                                            {item?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.eventImageName}`} alt="no image" className={styles.shopingimages} /> : <>
                                                <Skeleton
                                                    className={styles.shopingimage}
                                                />

                                            </>}
                                        </div>
                                    </div>
                                )
                            })}

                        </div>

                        <div className="row d-flex">
                            {events?.slice(2, 6).map((item, index) => {
                                return (
                                    <div className="col-lg-6 mt-3 mb-2">
                                        <div className={styles.boximagess}>
                                            <div className={styles.fruitcontent}>
                                                <div className={styles.contentimage} onClick={() => NavigateEvents(item?.slugName)}>
                                                    {item?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                                        <Skeleton
                                                            className={styles.shopingimagecontents}
                                                        />
                                                    </>}
                                                </div>
                                                <div className={styles.contentfruit}>
                                                    <div className={styles.fruitsectionsplit}>
                                                        <div className={styles.fruit}>
                                                            {item?.title}
                                                        </div>
                                                        <div>
                                                            -
                                                        </div>
                                                        <div className={styles.mins}>
                                                            {item?.keywords}
                                                        </div>

                                                    </div>
                                                    <div className={styles.simple}>
                                                        {item?.description?.slice(0, 50)}
                                                    </div>
                                                </div>


                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>


                    </div>






                    {/* <div className='large-textsmall mt-3'>
                        Events & Workshops
                    </div> */}
                    {/* <div className={styles.eventfruitsection}>
                        <div className={styles.lefteventfruit}>

                            <div className={styles.workshopimage} onClick={() => NavigateEvents(events[0]?.slugName)}>
                                {events[0]?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${events[0]?.eventImageName}`} alt="no image" className={styles.shopingimage} /> : <>
                                    <Skeleton
                                        className={styles.shopingimage}
                                    />
                                </>}
                            </div>

                            <div>

                                <div className={styles.fruitcontent}>
                                    <div className={styles.contentimage} onClick={() => NavigateEvents(events[2]?.slugName)}>
                                        {events[2]?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${events[2]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                           
                                           
                                            <Skeleton
                                                className={styles.shopingimagecontent}

                                            />
                                        </>}
                                    </div>
                                    <div className={styles.contentfruit}>
                                        <div className={styles.fruitsectionsplit}>
                                            <div className={styles.fruit}>
                                                {events[2]?.title}
                                            </div>
                                            <div>
                                                -
                                            </div>
                                            <div className={styles.mins}>
                                                {events[2]?.keywords}
                                            </div>

                                        </div>
                                        <div className={styles.simple}>
                                            {events[2]?.description?.slice(0, 50)}
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage} onClick={() => NavigateEvents(events[3]?.slugName)}>

                                    {events[3]?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${events[3]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                       


                                        <Skeleton
                                            className={styles.shopingimagecontent}

                                        />
                                    </>}

                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            {events[3]?.title}

                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            {events[3]?.keywords}

                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        {events[3]?.description?.slice(0, 50)}

                                    </div>
                                </div>


                            </div>

                        </div>
                        <div className={styles.righteventfruit}>
                           
                            <div className={styles.workshopimage} onClick={() => NavigateEvents(events[1]?.slugName)}>
                                {events[1]?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${events[1]?.eventImageName}`} alt="no image" className={styles.shopingimage} /> : <>
                                    <Skeleton
                                        className={styles.shopingimage}
                                    />
                                </>}
                            </div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage} onClick={() => NavigateEvents(events[4]?.slugName)}>
                                    {events[4]?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${events[4]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                
                                        <Skeleton
                                            className={styles.shopingimagecontent}
                                        />
                                    </>}
                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            {events[4]?.title}

                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            {events[4]?.keywords}

                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        {events[4]?.description?.slice(0, 50)}


                                    </div>
                                </div>


                            </div>


                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage} onClick={() => NavigateEvents(events[5]?.slugName)}>

                                    {events[5]?.eventImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${events[5]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                    
                                          <Skeleton
                                            className={styles.shopingimagecontent}

                                        />
                                    </>}
                                </div>
                                <div className={styles.contentfruit}>
                                    <div className={styles.fruitsectionsplit}>
                                        <div className={styles.fruit}>
                                            {events[5]?.title}

                                        </div>
                                        <div>
                                            -
                                        </div>
                                        <div className={styles.mins}>
                                            {events[5]?.keywords}

                                        </div>

                                    </div>
                                    <div className={styles.simple}>
                                        {events[5]?.description?.slice(0, 50)}

                                    </div>
                                </div>


                            </div>

                        </div>

                    </div> */}

                </div>
            </div>

        </Fragment >
    )
}

export default Eventlatestupdate