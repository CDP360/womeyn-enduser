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


import React, { Fragment, useState } from 'react'
import styles from './styles/Servicebooking.module.scss';
import Image from 'next/image';
import rightarrow from '../../../../assests/service-logos/path rightarrow.png';
import star from "../../../../assests/service-logos/Star 4.svg";
import ticket from '../../../../assests/service-logos/tickmark.png';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ServiceusersGetSingle } from '../../../../services/servicewomeyn/service-womeyn';
import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import Reviewsproduct from '../Reviews/Reviewsproduct';

function Servicebooking({ id }) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false);
    const [serviceBooking, setServiceBooking] = useState([]);
    const [serviceBookingSingle, setServiceBookingSingle] = useState([]);
    const [sellerinformations, setSellerinfo] = useState({});
    const [reviews,setReviews]=useState([]);
    const [ratingsdata,setRatingData]=useState("");
    useEffect(() => {
        ServiceusersGetSingle(id).then((res) => {
            // console.log(res,"res");
            console.log(res, "res");
            setReviews(res?.data?.reviews)

            setServiceBooking(res?.data?.serviceDetails[0]);
            setSellerinfo(res?.data?.sellerInformation);
            setRatingData(res?.data?.averageRating[0]?.avgRating);
        }).catch((err) => {
            // console.log(err,"res");

        })
    }, [id,ratingsdata])





    const history = useRouter();


    const NavigateUsers = (data) => {
        history.push(`/womenpreneurs/${data}`);
    }


    const FilterModelPopup = (id) => {

        serviceBooking?.serviceVariations?.map((item, index) => {
            if (item?._id === id) {
                setServiceBookingSingle(item);
                handleShow();

            }
        })



    }

    return (
        <Fragment>
            <div className='mainsection'>
                <div className="insidesection">
                    <div className={styles.mainservicesetion}>
                        <div className={styles.insidesection}>
                            <div>

                                {/* serviceThumbImage */}

                                {/* <Image src={servicebanner} alt="no image" className={styles.servicebanner} /> */}

                                {serviceBooking?.serviceThumbImage ? <>
                                    <img
                                        className={styles.servicebanner}
                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${serviceBooking?.serviceThumbImage}`}
                                        alt="profile-pic"
                                    />
                                </> : <>
                                <Skeleton
                                             className={styles.servicebanner}
                                            />
                                </>}
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

                                {serviceBooking?.serviceName}
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
                                {/* <div className={styles.leftstar}>

                                    <div className={styles.activestar}>
                                        offline

                                    </div>
                                    <div>
                                        Mumbai,india
                                    </div>
                                </div> */}
                            </div>
                            <div className={styles.aboustservice}>
                                <div>
                                    <div className={styles.aboutservice}>
                                        About the experience
                                    </div>
                                    <div className={styles.servicelearn}>
                                        {serviceBooking?.serviceDescription}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">

                                <div className={styles.booknowrow}>

                                    {serviceBooking?.serviceVariations?.map((item, index) => {
                                        return (
                                            <div className={styles.booknowbox}>
                                                <div className={styles.monthsections}>
                                                    <div className={styles.monthssectionsmonth}>
                                                        {item?.title}
                                                    </div>
                                                    <div className={styles.countnumber}>
                                                        A$ {item?.price}
                                                    </div>
                                                    <div>

                                                    </div>

                                                </div>
                                                <div className={styles.reviewcontent}>

                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>


                                                            {item?.serviceTypeId === 1 ? <>Online</> : <>Offline</>}
                                                        </div>

                                                    </div>
                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>
                                                            {moment(item?.startDate).format("MMM Do YY",)} / {moment(item?.endDate).format("MMM Do YY",)}
                                                        </div>

                                                    </div>
                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>

                                                            {item?.isCancellationAvailable ? <>
                                                                Cancellation Available
                                                            </> : <>
                                                                Cancellation UnAvailable
                                                            </>}
                                                        </div>

                                                    </div>
                                                    <div className={styles.ticksections}>
                                                        <div>
                                                            <Image src={ticket} alt="no image" className={styles.ticket} />
                                                        </div>
                                                        <div>
                                                            Total Number of seats available: {item?.numberOfPeopleAllowed}
                                                        </div>

                                                    </div>
                                                </div>

                                                <div className="mt-2 mb-4 text-center">

                                                    <div className={styles.viewmorebutton} onClick={() => FilterModelPopup(item?._id)}>
                                                        View More...
                                                    </div>

                                                </div>


                                                <div className="mt-4 mb-4">
                                                    <button className={styles.booknowbutton} onClick={() => history?.push(`/service/payment/${item?._id}`)}>Book Now</button>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                            </div>
                            <div className="mt-5 mb-5">
                                <Reviewsproduct reviews={reviews} averageRatings={ratingsdata}/>
                            </div>
                            <div className={styles.instractions}>
                                <div>
                                    Instructors
                                </div>
                                <div className='mt-3'>


                                    <div className={styles.instractionsection}>
                                        <div className={styles.leftimageins}>

                                            {sellerinformations?.profileImageName ? <>
                                                <img
                                                    className={styles.personimages}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${sellerinformations?.profileImageName}`}
                                                    alt="profile-pic"
                                                />
                                            </> : <></>}

                                            {/* profileImageName */}
                                            {/* <Image src={images} alt="no image" className={styles.personimages} /> */}

                                        </div>

                                        <div className={styles.rightimageins}>

                                            <div>
                                                {sellerinformations?.firstName}
                                            </div>
                                            <div>
                                                {sellerinformations?.businessName}
                                            </div>


                                            <div>
                                                <button className={styles.viewdetailsbutton} onClick={() => NavigateUsers(sellerinformations?.businessSlugName)}>View Details</button>
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

            <>

                <Modal show={show} onHide={handleClose} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>
                            {serviceBookingSingle?.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div>

                            <div className={styles.cancelsection}>
                                <div className={styles.leftcancelsection}>
                                    Date :

                                </div>
                                <div className="ms-2">

                                    {moment(serviceBookingSingle?.startDate).format("MMM Do YY",)} to {moment(serviceBookingSingle?.endDate).format("MMM Do YY",)}

                                </div>
                            </div>

                            <div className={styles.cancelsection}>
                                <div className={styles.leftcancelsection}>
                                    Is this an online/ offline service :

                                </div>
                                <div className="ms-2">
                                    {serviceBookingSingle?.serviceTypeId === 1 ? <>Online</> : <>Offline</>}

                                </div>
                            </div>

                            <div className={styles.cancelsection}>

                                <div className={styles.leftcancelsection}>

                                    Cancellation :
                                </div>

                                <div className="ms-2">
                                    {serviceBookingSingle?.isCancellationAvailable ? <>
                                        CancellationAvailable
                                    </> : <>
                                        CancellationUnAvailable
                                    </>}
                                </div>
                            </div>

                            <div className={styles.cancelsection}>
                                <div className={styles.leftcancelsection}>

                                    Number of people allowed :
                                </div>
                                <div className="ms-2">

                                    {serviceBookingSingle?.numberOfPeopleAllowed}

                                </div>
                            </div>

                            <div>

                                <div className={styles.working}>Working Days</div>
                                {serviceBookingSingle?.workingDays?.map((item, index) => {
                                    return (
                                        <div className={styles.workingdays}>
                                            <div className={styles.leftdays}>

                                                {item?.dayName}
                                            </div>
                                            <div>

                                                {item?.workingHours}
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button variant="secondary" className={styles.closebuttons} onClick={handleClose}>
                            Close
                        </button>

                    </Modal.Footer>
                </Modal>
            </>

        </Fragment>
    )
}

export default Servicebooking