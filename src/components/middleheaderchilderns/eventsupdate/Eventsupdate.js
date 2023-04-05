// import React, { Fragment, useEffect, useState } from 'react'
// import eventbaner from '../../../assests/homepage-logos/event banner.png';
// import styles from './styles/EventUpdate.module.scss';
// import Image from 'next/image';
// import Signupnewsletter from '../../home/components/signupfornewsletter/Signupnewsletter';
// import Footer from '../../footer/Footer';
// import Childfooter from './../../footer/Childfooter';
// function Eventsupdate() {
//     const data = [
//         {
//             id: 1,
//             image: "",
//             description: "no"
//         },
//         {
//             id: 2,
//             image: "",
//             description: "no"
//         },
//         {
//             id: 3,
//             image: "",
//             description: "no"
//         },
//         {
//             id: 4,
//             image: "",
//             description: "no"
//         }
//     ]
//     return (
//         <Fragment>
//             <div className={styles.eventupdatemainsection}>
//                 <div className={styles.insideeventupdatesection}>
//                     <div className={styles.emptyboxeventsection}>
//                     </div>
//                     <div className={styles.emptyboxeventsectionleft}>
//                     </div>
//                     <div className={styles.emptyboxeventsectionbottom}>
//                     </div>
//                     <div className={styles.insidecontentsectionevent}>
//                         <div>
//                             <Image src={eventbaner} alt="no image" className={styles.eventbannerimage} />
//                         </div>
//                         <div className={styles.bordertopeventsection}>
//                             <div className={styles.borderinsidesection}>
//                             </div>
//                         </div>
//                         <div className={styles.spliteventcommonbox}>
//                             <div className={styles.spliteventcommonletf}>
//                             </div>
//                             <div className={styles.spliteventcommonright}>
//                             </div>
//                         </div>

//                         <div className={styles.splitboxeventsection}>
//                             <div className={styles.lefteventsection}>
//                                 <div className="textseller">
//                                     Latest Events
//                                 </div>
//                                 <div className='cardsections-events row justify-content-center  w-100 mt-1 mb-3'>
//                                     {data.map((item, index) => {
//                                         return (
//                                             <div className='cardevents mb-3' key={index}>
//                                                 <div>
//                                                     <img src={item?.image} alt="no image" className={styles.imageeventcard} />
//                                                 </div>
//                                                 <div className={styles.sportslistsection}>
//                                                     <div>
//                                                         <span className={styles.activesports}> SPORT</span> - January 25, 2022
//                                                     </div>
//                                                     <div className={styles.categoryevents}>
//                                                         {item.category}
//                                                     </div>
//                                                     <div className={styles.loramsevents}>
//                                                         {item?.description.slice(0, 55)}
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </div>
//                             <div className={styles.righteventsection}>
//                                 <div className="textseller ms-3">Topics</div>
//                                 {data.map((items, index) => {
//                                     return (
//                                         <div className="mb-4 mt-3" key={index}>
//                                             <img src={items?.image} alt="no image" className={styles.imageeventcard} />
//                                             <div className={styles.categoryevents}>
//                                             </div>
//                                         </div>
//                                     )
//                                 })}
//                             </div>
//                         </div>
//                     </div>
//                     <div>
//                         <Signupnewsletter />
//                     </div>
//                     <div>
//                         <Footer />
//                     </div>
//                     <div>
//                         <Childfooter />
//                     </div>

//                 </div>
//             </div>
//         </Fragment>
//     )
// }

// export default Eventsupdate




import React from 'react'
import styles from './styles/EventUpdate.module.scss'
function Eventsupdate() {
    return (
        <div className={styles.comingsoon}>

            Coming Soon....
        </div>
    )
}

export default Eventsupdate