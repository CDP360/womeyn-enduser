// import React, { useState } from "react";
// import Image from "next/image";

// import styles from "./styles/Servicebooking.module.scss";
// import { Col, Button } from "react-bootstrap";
// // const DataMonths = [
// //   {
// //     name: "8:00 - 8:30",
// //   },
// //   {
// //     name: "8:30 - 9:00",
// //   },
// //   {
// //     name: "Tuesday",
// //   },
// //   {
// //     name: "Wednesday",
// //   },
// //   {
// //     name: "Thursday",
// //   },
// //   {
// //     name: "Friday",
// //   },
// //   {
// //     name: "Sauruday",
// //   },
// // ];

// const datas = [
//   {
//     value: "8:00 - 8:30",
//   },
//   {
//     value: "8:30 - 9:00",
//   },
//   {
//     value: "9:00 - 9:30",
//   },
//   {
//     value: "9:00 - 9:30",
//   },
//   {
//     value: "9:00 - 9:30",
//   },
// ];

// const review = [
//   {
//     id: 1,
//     name: "Writija Chabria",
//     subName: "Freaking amazing",
//     post: "Posted a week ago",
//     para: "Soap is nice I mean the smell is great just like lemongrass. I m love in it but only for the smell it's expensive and its only 100g product...and packaging wow superb like it Smell ??",
//   },
//   {
//     id: 2,
//     name: "Writija Chabria",
//     subName: "Freaking amazing",
//     post: "Posted a week ago",
//     para: "Soap is nice I mean the smell is great just like lemongrass. I m love in it but only for the smell it's expensive and its only 100g product...and packaging wow superb like it Smell ??",
//   },
//   {
//     id: 3,
//     name: "Writija Chabria",
//     subName: "Freaking amazing",
//     post: "Posted a week ago",
//     para: "Soap is nice I mean the smell is great just like lemongrass. I m love in it but only for the smell it's expensive and its only 100g product...and packaging wow superb like it Smell ??",
//   },
//   {
//     id: 4,
//     name: "Writija Chabria",
//     subName: "Freaking amazing",
//     post: "Posted a week ago",
//     para: "Soap is nice I mean the smell is great just like lemongrass. I m love in it but only for the smell it's expensive and its only 100g product...and packaging wow superb like it Smell ??",
//   },
//   {
//     id: 5,
//     name: "Writija Chabria",
//     subName: "Freaking amazing",
//     post: "Posted a week ago",
//     para: "Soap is nice I mean the smell is great just like lemongrass. I m love in it but only for the smell it's expensive and its only 100g product...and packaging wow superb like it Smell ??",
//   },
// ];

// function Servicebooking() {
//   const [selectMonths, setCheckBoxsMonth] = useState([]);
//   const handleMonthData = (e) => {
//     const value = e.target.value;
//     const checked = e.target.checked;
//     if (checked) {
//       setCheckBoxsMonth([...selectMonths, value]);
//     } else {
//       setCheckBoxsMonth(selectMonths.filter((e) => e != value));
//     }
//   };
//   return (
//     <div className={styles.mainservicebooking}>
//       <div className={styles.insideservicebooking}>
//         <div className={styles.leftservicebooking}>
//           <Image src={servicebanner} className={styles.bannerlogo} />
//         </div>
//         <div className={styles.rightservicebooking}>
//           <h5 className={styles.parahead1}>ZUMBA SERVICE BY ANU</h5>
//           <div className={styles.maincontainersub}>
//             <div className={styles.maincontainerstar}>
//               <Image src={star} width={15} />
//               <Image src={star} width={15} />
//               <Image src={star} width={15} />
//               <Image src={star} width={15} />
//               <Image src={star} width={15} />
//             </div>
//             <div className={styles.ratingPara}>
//               <p className={styles.para1}>.</p>
//               <p className={styles.ratings}>712 Ratings</p>
//             </div>
//           </div>
//           <h5>$ 24</h5>
//           <p className={styles.offlinepara}>Offline</p>
//           <div className={styles.sidecontaineraddress}>
//             <p>
//               <span className={styles.address}>Location:</span> 1st Floor, 79,
//               LB Rd, above Capital Kia , Chennai, Tamil Nadu 600020
//             </p>
//           </div>
//           <p className={styles.mappara}>view map</p>
//           <p className={styles.daysPara}>Days</p>
//           <p>Monday, Wednesday, Friday</p>
//           <p className={styles.daysPara}>Duration (in months)</p>
//           <div className={styles.radio}>
//             <div className={styles.radio1}>
//               <p className={styles.num}>1</p>
//             </div>
//             <div className={styles.radio2}>
//               <p className={styles.num}>2</p>
//             </div>
//             <div className={styles.radio2}>
//               <p className={styles.num}>3</p>
//             </div>
//           </div>

//           <div className="mt-3">
//             <p className={styles.daysPara}>Slots</p>
//             <div className={styles.month}>
//               {datas.map((time) => {
//                 return (
//                   <div>
//                     <div className="d-flex justify-content-between">
//                       <div>
//                         <label className={styles.control} name={time.value}>
//                           <input
//                             onChange={handleMonthData}
//                             type="checkbox"
//                             name={time?.value}
//                             value={time?.value}
//                           />
//                           <span className={styles.control__content}>
//                             {time.value}
//                           </span>
//                         </label>
//                       </div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <p className={styles.viewmore}> view more</p>
//           <Button className={styles.bookbutton}>Book now</Button>
//         </div>
//       </div>
//       <div className={styles.customerserviceside}>
//         <h5 className={styles.review}>Customer Reviews</h5>
//         <div className={styles.customerservicemaincontainer}>
//           {review.map((reviews) => {
//             return (
//               <div>
//                 <div className={styles.customersubcontainer}>
//                   <div className="d-flex justify-content-between">
//                     <div>
//                       <p className={styles.Writija}>{reviews.name}</p>
//                       <div className={styles.maincontainerstarservice}>
//                         <Image src={star} width={15} />
//                         <Image src={star} width={15} />
//                         <Image src={star} width={15} />
//                         <Image src={star} width={15} />
//                         <Image src={star} width={15} />
//                       </div>
//                     </div>
//                     <div>
//                       <p>{reviews.post}</p>
//                     </div>
//                   </div>
//                   <p className={styles.freak}>{reviews.subName}</p>
//                   <p className={styles.paraservice}>{reviews.para}</p>
//                 </div>
//                 <hr className={styles.hrborder} />
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Servicebooking;


import React, { Fragment } from 'react'
import styles from './styles/Servicebooking.module.scss';
import servicebanner from "../../../../assests/service-logos/servicebanner (2).png";
import Image from 'next/image';
import rightarrow from '../../../../assests/service-logos/path rightarrow.png';
import star from "../../../../assests/service-logos/Star 4.svg";
import ticket from '../../../../assests/service-logos/tickmark.png';
import images from '../../../../assests/service-logos/Ovalimages.png';
import { useRouter } from 'next/router';
function Servicebooking({ id }) {

    const months = [
        {
            id: 1,
            name: "1 session / Day ",
            button: "Book Now",
            number: 24,
            months: "1 Month"
        },
        {
            id: 2,
            name: "1 session / Day ",
            button: "Book Now",
            number: 24,
            months: "2 Month"
        },
        {
            id: 3,
            name: "1 session / Day ",
            button: "Book Now",
            number: 24,
            months: "3 Month"
        },
        {
            id: 4,
            name: "1 session / Day ",
            button: "Book Now",
            number: 24,
            months: "4 Month"
        },

    ]


    const history=useRouter();
    return (
        <Fragment>
            <div className='mainsection'>
                <div className="insidesection">
                    <div className={styles.mainservicesetion}>
                        <div className={styles.insidesection}>
                            <div>
                                <Image src={servicebanner} alt="no image" className={styles.servicebanner} />
                            </div>
                            <div className={styles.classesszumba}>

                                <div className={styles.zumbasection}>
                                    <div className={styles.expre}>
                                        Experiences 
                                    </div>
                                    <div>
                                        <Image src={rightarrow} alt="no image" className={styles.arrwoimage} />

                                    </div>
                                    <div className={styles.expre}>
                                        Zumba

                                    </div>                    </div>
                            </div>
                            <div className={styles.zumbaservices}>

                              {id}
                            </div>

                            <div className={styles.servicerating}>
                                <div className={styles.rightstar}>
                                    <div>
                                        <Image src={star} alt="no image" />
                                    </div>
                                    <div className={styles.activestar}>
                                        4.5 (106 ratings)
                                    </div>

                                </div>
                                <div className={styles.leftstar}>

                                    <div className={styles.activestar}>
                                        offline

                                    </div>
                                    <div>
                                        Mumbai,india
                                    </div>
                                </div>
                            </div>
                            <div className={styles.aboustservice}>
                                <div>
                                    <div className={styles.aboutservice}>
                                        About the experience
                                    </div>
                                    <div className={styles.servicelearn}>
                                        Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo B.,a 3rd degree black-belt and long-time and teacher of variatios. Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo B.,a 3rd degree black-belt and long-time and teacher of variatios
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">

                                <div className={styles.booknowrow}>

                                    {months?.map((item, index) => {
                                        return (
                                            <div className={styles.booknowbox}>
                                                <div className={styles.monthsections}>
                                                    <div className={styles.monthssectionsmonth}>
                                                        {item?.months}
                                                    </div>
                                                    <div className={styles.countnumber}>
                                                        {item?.number}
                                                    </div>
                                                    <div>

                                                    </div>

                                                </div>
                                                <div className='m-4'>

                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>
                                                            {item?.name}
                                                        </div>

                                                    </div>
                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>
                                                            {item?.name}
                                                        </div>

                                                    </div>
                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>
                                                            {item?.name}
                                                        </div>

                                                    </div>
                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>
                                                            {item?.name}
                                                        </div>

                                                    </div>
                                                </div>


                                                <div className="mt-4 mb-4">
                                                    <button className={styles.booknowbutton} onClick={()=>history?.push("/service/payment")}>{item?.button}</button>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            <div className={styles.instractions}>
                                <div>
                                    Instructors
                                </div>
                                <div className='mt-3'>


                                    <div className={styles.instractionsection}>
                                        <div className={styles.leftimageins}>

                                            <Image src={images} alt="no image" className={styles.personimages} />

                                        </div>

                                        <div className={styles.rightimageins}>

                                            <div>
                                                Cameron Rogers
                                            </div>
                                            <div>
                                                MBA Finance
                                            </div>


                                            <div>
                                                <button className={styles.viewdetailsbutton}>View Details</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className={styles.leftsectionservicebg}>

                    </div>
                    <div className={styles.rightsectionservicebg}>

                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Servicebooking