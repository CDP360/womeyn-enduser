
import React, { Fragment, useState } from 'react'
import styles from './styles/Servicebooking.module.scss';
import Image from 'next/image';
import rightarrow from '../../../../../assests/service-logos/path rightarrow.png';
import star from "../../../../../assests/service-logos/Star 4.svg";
import ticket from '../../../../../assests/service-logos/tickmark.png';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ServiceusersGetSingle } from '../../../../../services/servicewomeyn/service-womeyn';

import moment from 'moment';
import Modal from 'react-bootstrap/Modal';
import Skeleton from 'react-loading-skeleton';
import Reviewsproduct from './Reviews/Reviewsproduct';
import Reviewmodel from '../reviewmodel/Reviewmodel';
import { Nodatafoundimage } from '../../../../nodatafoundimage/Nodatafound';


function ServiceViewDetails() {

    const history = useRouter();


    const [show1, setShow1] = useState(false);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = (data) => {
        setShow1(true)
    };



    const serviceid = history.query?.id;
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [loading, setLoading] = useState(false);
    const [serviceBooking, setServiceBooking] = useState([]);
    const [serviceBookingSingle, setServiceBookingSingle] = useState([]);
    const [sellerinformations, setSellerinfo] = useState({});
    const [reviews, setReviews] = useState([]);
    const [ratingsdata, setRatingData] = useState("");
    useEffect(() => {
        ServiceusersGetSingle(serviceid).then((res) => {

            setReviews(res?.data?.reviews)
            setServiceBooking(res?.data?.serviceDetails[0]);
            setSellerinfo(res?.data?.sellerInformation);
            setRatingData(res?.data?.averageRating[0]?.avgRating);
            setServiceBookingSingle(res?.data?.serviceDetails[0]?.serviceVariations[0]);

        }).catch((err) => {
            // console.log(err,"res");

        })

        // console.log(moment(new Date()).isAfter(moment(new Date('28-Feb-19'))),"kalai");

    }, [ratingsdata, serviceid])

    const NavigateUsers = (data) => {
        history.push(`/womenpreneurs/${data}`);
    }


    const NavigateGoogemeet=(data)=>{
        const links=data.slice(43,200);
        window.open(links);
    }

    return (
        <Fragment>

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
                                Experiences{serviceid}
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

                    <div className="mt-3">
                        <div>Service Booked</div>
                        <div className="mt-3">
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

                            {serviceBookingSingle?.serviceTypeId === 1 ? <>
                                <div className={styles.cancelsection}>
                                    <div className={styles.leftcancelsection}>
                                        Online Link :
                                    </div>
                                    <div className="ms-2" onClick={()=>NavigateGoogemeet(serviceBookingSingle?.linkDescription)}>
                                        <div>
<a href="">
{serviceBookingSingle?.linkDescription}
</a>
                                        </div>
                                    </div>
                                </div>

                            </> : <>

                                <div className={styles.cancelsection}>
                                    <div className={styles.leftcancelsection}>
                                        Offline:
                                    </div>
                                    <div className="ms-2">
                                        {/* {serviceBookingSingle?.linkDescription} */}
                                        null

                                    </div>
                                </div>
                            </>}



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
                                <div className={styles.working}>Slots</div>
                                <div className="row gap-2 ms-2">
                                    {serviceBookingSingle?.workingDays?.map((item, index) => {
                                        return (
                                            <div className={styles.workingdays} key={index}>
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
                            <div className="mt-5">
                                {moment(new Date()).isAfter(moment(serviceBookingSingle?.endDate)) ? <>
                                    <button className={styles.trackingbuttons} onClick={handleShow1}>Review</button>
                                </> : null}
                      
                            </div>
                        </div>
                    </div>
                    {/* <div className="mt-5">
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
                            </div> */}

                    <div>
                        <Reviewmodel
                            show1={show1}
                            handleClose1={handleClose1}
                            servicedata={"kalai"}
                        />
                    </div>
                    <div className="mt-5 mb-5">
                        <Reviewsproduct reviews={reviews} averageRatings={ratingsdata} />
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
                                    </> : <>

                                        <Skeleton
                                            className={styles.personimages}
                                        />
                                        {/* <Image src={images} alt="no image" className={styles.personimages} /> */}

                                    </>}

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

                    <div className="mt-4">
                        <div>
Review Service
                        </div>
                    <Nodatafoundimage title={"No Service Reviews"}/>
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

export default ServiceViewDetails