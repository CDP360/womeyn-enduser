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
import {useRouter} from 'next/router';
function Eventlatestupdate() {


    const [events, setEvents] = useState([]);

    const history=useRouter();

    useEffect(() => {
        getEvents().then((res) => {
            setEvents(res?.data?.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const NavigateEvents=(id)=>{
        history.push(`/events/${id}`)
    }
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

                    <div className='large-textsmall mt-3'>
                        Events & Workshops
                    </div>
                    <div className={styles.eventfruitsection}>
                        <div className={styles.lefteventfruit}>

                            <div className={styles.workshopimage} onClick={()=>NavigateEvents(events[0]?.slugName)}>
                                {/* <Image src={fruit2} al="no image" className={styles.shopingimage} /> */}
                                {events[0]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${events[0]?.eventImageName}`} alt="no image" className={styles.shopingimage} /> : <>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image"
                                    className={styles.shopingimagecontents}
                                    />
                                </>}
                            </div>

                            <div>

                                <div className={styles.fruitcontent}>
                                    <div className={styles.contentimage} onClick={()=>NavigateEvents(events[2]?.slugName)}>
                                        {/* <Image src={ban1} al="no image" className={styles.shopingimagecontent} /> */}
                                        {events[2]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${events[2]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                    <img src={"https://img.freepik.com/free-vector/flat-international-women-s-day-sale-horizontal-banner_23-2149268891.jpg?w=2000"} alt="no image" className={styles.shopingimagecontent}/>
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
                                        {events[2]?.description?.slice(0,50)}
                                        </div>
                                    </div>


                                </div>
                            </div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage} onClick={()=>NavigateEvents(events[3]?.slugName)}>
                                    {/* <Image src={ban2} al="no image" className={styles.shopingimagecontent} /> */}

                                    {events[3]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${events[3]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image"
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
                                    {events[3]?.description?.slice(0,50)}

                                    </div>
                                </div>


                            </div>



                        </div>
                        <div className={styles.righteventfruit}>
                            <div className='large-textsmall mb-5 mt-5 d-none'>
                                Events & Workshops
                            </div>
                            
                            <div className={styles.workshopimage} onClick={()=>NavigateEvents(events[1]?.slugName)}>
                                {/* <Image src={ban} al="no image" className={styles.shopingimage} /> */}
                                {events[1]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${events[1]?.eventImageName}`} alt="no image" className={styles.shopingimage} /> : <>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image"
                                    className={styles.shopingimagecontent}
                                    />
                                </>}
                            </div>

                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage} onClick={()=>NavigateEvents(events[4]?.slugName)}>
                                    {/* <Image src={ban3} al="no image" className={styles.shopingimagecontent} /> */}
                                    {events[4]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${events[4]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" 
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
                                    {events[4]?.description?.slice(0,50)}

                                      
                                    </div>
                                </div>


                            </div>


                            <div className={styles.fruitcontent}>
                                <div className={styles.contentimage} onClick={()=>NavigateEvents(events[5]?.slugName)}>
                                    {/* <Image src={ban4} al="no image" className={styles.shopingimagecontent} /> */}

                                    {events[5]?.eventImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${events[5]?.eventImageName}`} alt="no image" className={styles.shopingimagecontent} /> : <>
                                    <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" 
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
                                    {events[5]?.description?.slice(0,50)}

                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>

                </div>
            </div>

        </Fragment >
    )
}

export default Eventlatestupdate