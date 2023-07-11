import React, { Fragment, useRef, useEffect, useState } from 'react';
import styles from './styles/Abouts.module.scss';
import qua1 from '../../../assests/womeynlogos/qutation1.png';
import qua2 from '../../../assests/womeynlogos/quation2.png';
import maskup from '../../../assests/womeynlogos/Mask group.png';
import Image from 'next/image';
import bubble1 from '../../../assests/womeynlogos/bubble1.png';
import bubble2 from '../../../assests/womeynlogos/bubble2.png';
import bubble3 from '../../../assests/womeynlogos/bubble3.png';
import Ourvision from './ourvision/Ourvision';
import Ourteam from './ourteam/Ourteam';
import Whatmake from '../../home/components/whatmake/Whatmake';
import Ourclutures from './ourclutures/Ourclutures';
import first from '../../../assests/abouts-logos/FIRST.gif';
import second from '../../../assests/abouts-logos/SECOND.gif';
import third from '../../../assests/abouts-logos/THIRD.gif';
import { useSelector } from 'react-redux';
import wba from '../../../assests/abouts-logos/wb1.png';
import wba1 from '../../../assests/abouts-logos/wb2.png';
import womenlogo from '../../../assests/homepage-logos/womeyn_logo.png';
import AboutusSubscribe from './Aboutussubscribe/AboutusSubscribe';
import { useRouter } from 'next/router';
import SlideNextArrow from './ourteam/slidenextarrow/SlideNextArrow';
import SlidePreArrow from './ourteam/slideprearrow/SlidePreArrow';

import { Getwomenpreneursbanner } from '../../../services/womenpreneurs-services/womenpreneurs-services';
import LoaderLogo from './../../loaderlogo/LoaderLogo';

import Slider from "react-slick";

function Aboutus({ id }) {


    const router = useRouter();

    console.log(router?.asPath, "router")
    const state = useSelector((state) => state?.aboutcountdata?.about);

    const data = [
        {
            id: 1,
            name: "Purpose-driven",
            title: "Value is making a difference for our customers each and every day. That's what powers our business and energizes us.",
            image: bubble1,
            colorbg: " #F0F8F3"
        },
        {
            id: 2,
            name: "Social impact",
            title: "We are a team of experts who know how to work together to tackle real challenges and create success.",
            image: bubble2,
            colorbg: " #ECF2FB"
        },
        {
            id: 3,
            name: "Advocacy based",
            title: "When challenges arise, we rise to the occasion. We roll up our sleeves, get to work, and get the job done",
            image: bubble3,
            colorbg: " #FDF0F0"
        }
    ]

    const [showTopBtn, setShowTopBtn] = useState(false);


    useEffect(() => {
        // window.addEventListener("scroll", () => {
        //     if (window.scrollY > 30) {
        //         setShowTopBtn(true);
        //     } else {
        //         setShowTopBtn(false);
        //     }
        // });

        if (router?.asPath == "/abouts#WhatisWomeyn") {
            window.scrollTo({
                top: 900,
                behavior: "smooth",
            });
        }
        if (router?.asPath == "/abouts#OurMission&Vision") {
            window.scrollTo({
                top: 1400,
                behavior: "smooth",
            });
        }

        if (router?.asPath == "/abouts#TheLogoSignificance") {
            window.scrollTo({
                top: 1990,
                behavior: "smooth",
            });
        }


        if (router?.asPath == "/abouts#TheTeam") {
            window.scrollTo({
                top: 2350,
                behavior: "smooth",
            });
        }

        if (router?.asPath == "/abouts#PartnersCollaborations") {
            window.scrollTo({
                top: 4830,
                behavior: "smooth",
            });
        }

        if (router?.asPath == "/abouts#JoinWomeyn") {
            window.scrollTo({
                top: 5220,
                behavior: "smooth",
            });
        }

    }, []);




    const Getintouch = () => {
        router.push("/getintouch")
    }


    const [partnersbanners, setPartnersBanners] = useState([]);
    const [partnersbannersloading, setPartnersBannersloading] = useState(false);


    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,

        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };


    useEffect(() => {

        const data = "Partners and Collaboration Banners"

        setPartnersBannersloading(true);
        Getwomenpreneursbanner(data).then((res) => {
            setPartnersBanners(res?.data);
            setTimeout(() => {
                setPartnersBannersloading(false)

            }, 500)
        }).catch((err) => {
            console.log(err);
            setPartnersBannersloading(false);
        })
    }, [])


    const MovePageData = (data) => {
        window.open(data);

    }



    return (
        <Fragment>

            <div className='mainsection'>
                <div className='insidesection'>
                    <div className={styles.mainboutus}>
                        <div className={styles.exptyboxleft}>

                        </div>
                        <div className={styles.exptyboxright}>

                        </div>
                        <div className={styles.exptyboxleftblue}>

                        </div>

                        <div className={styles.mainaboutsection}>
                            <section >
                                <div className={styles.mainimageabout}>
                                    <div className={styles.bannersectionabout}>
                                        <Image src={maskup} alt="no image" className={styles.bannerimageabout} />
                                        <div className={styles.bannercontentsectionimage}>
                                            <div className={styles.bannerinsidesection}>
                                                <div className={styles.isidelogoproduct}>
                                                    <Image src={qua2} alt="no image" className={styles.qua1} />
                                                    <div className={styles.we}>
                                                        We aspire to see women entrepreneurs scale up their business locally and nationwide.
                                                    </div>
                                                    <div className={`text-grey text-center mt-2 , ${styles.ceotext}`}>
                                                        Anu Kulkarni, Founder & CEO {state}
                                                    </div>
                                                    <Image src={qua1} alt="no image" className={styles.qua2} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            <div>
                                <div className='large-text text-center'>The Story Behind Womeyn</div>
                                <div className={styles.creationabout} id="WhatisWomeyn">§ The creation of “Womeyn” as a concept has a direct correlation to Anu, Founder and Director of Womeyn. It is her experiences and struggles in life as a woman and as a woman entrepreneur that gave birth to the concept. “Womeyn” is her way of creating a community of women and bring about a positive change by providing a platform that makes it easy for women of our communities to express themselves, be financially self-reliant and not be restricted due to lack of knowledge in technology, availability of equal opportunity or marginalized in any shape or form She has an Inspirational Story and is the heart and soul of the initiative “Womeyn”.
                                </div>
                            </div>

                            <div>
                                <div className='large-text text-center'>

                                    What is Womeyn
                                </div>
                                <div className="abouts-cards row d-flex justify-content-center mt-4 gap-4">
                                    {data?.map((item, index) => {
                                        return (
                                            <div className={`cards-aboutus col-lg-4  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3`} style={{ backgroundColor: item.colorbg }}>
                                                <div className='ms-2 text-center'>
                                                    {/* <Image src={item?.image} alt="no image" className={styles.whatmakeimage} /> */}
                                                </div>
                                                <div className='ms-4'>
                                                    <div className='mt-2'>
                                                        <div className="mt-2 aboutus-text text-center">
                                                            {item?.name}
                                                        </div>
                                                    </div>
                                                    {/* <div className="smalltextgrey mt-2">
                                                {item?.title}
                                            </div> */}
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className={styles.creationabouts} id="OurMission&Vision">

                                    Initiative that will empower women of our community by providing an eCommerce platform to achieve their dreams of self-reliance by establishing an online business in a most cost effective manner. Platform aggregates and brings communities together through social media, online platforms and collaborations with like minded organizations. We are driven by the concept of creating communities transcending all barriers that are commonly seen with women entrepreneurs.
                                </div>
                            </div>
                            <div>
                                <Ourvision />


                            </div>
                            {/* <div id="TheLogoSignificance">


                            </div> */}

                            <div className={styles.standsections} id="TheLogoSignificance">
                                <div className="mt-5">
                                    <div className='large-text text-center'>The Logo Significance</div>
                                    <div className="text-center mt-4">
                                        <Image src={womenlogo} alt="no image" className={styles.abss} />
                                    </div>
                                    <div className={styles.stands} id="TheTeam">
                                        <span><Image src={wba} alt="no image" className={styles.abs} /></span>stands for “You” being the women out there.<br />
                                        Womeyn is a platform for “You” by “ You”. <span>
                                            <Image src={wba1} alt="no image" className={styles.abs} />
                                        </span>     beneath signifies the core founding principle of Womeyn. “Uplifting and Empowering”. Combined together it means “Uplifting and Empowering You“.
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Ourteam />
                            </div>
                            <div>


                                <div className="mt-5">

                                    <div className='large-text text-center' >
                                        Partners & Collaborations
                                    </div>


                                </div>

                                {partnersbannersloading ? <div className={styles.loadingbox}>


                                    <LoaderLogo />
                                </div> : <>
                                    <div className={styles.imagesectionhomess}>
                                        {partnersbanners?.length > 3 ? <div className={styles.loadingbox}>



                                            <Slider {...settings}>
                                                {partnersbanners?.map((item, index) => {
                                                    return (
                                                        <div key={index} className="col-lg-4 mx-auto"  id="JoinWomeyn">
                                                            {item.imageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.cardaboutusimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                                                <Skeleton className={styles.homebanner} />
                                                            </>}

                                                        </div>
                                                    )
                                                })}
                                            </Slider>
                                        </div> :
                                            <div className="row d-flex gap-2">
                                                <div className={styles.loadingbox}>
                                                    {partnersbanners?.map((item, index) => {
                                                        return (
                                                            <div key={index} className="col-lg-4 mx-auto"  id="JoinWomeyn" >
                                                                {item.imageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item.imageName}`} alt="no image" className={styles.cardaboutusimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                                                    <Skeleton className={styles.homebanner} />
                                                                </>}


                                                            </div>
                                                        )
                                                    })}
                                                </div>

                                            </div>
                                        }


                                    </div>


                                </>}




<div id="JoinWomeyn">
<div className="mt-5 mb-4"  >





<div className='large-text text-center' >

    Join Womeyn
</div>



</div>
</div>

                               

                                <div className="mt-5">

                                    <div className='large-text text-center' >

                                        Careers
                                    </div>

                                </div>


                                <div className={styles.ifyou}>

                                    If you are looking for Technology, Digital Marketing and Customer Support related jobs then please express your interest and send us your resume to contactus @womeyn.com or  <span onClick={Getintouch} className={styles.linkname}>
                                        Click here
                                    </span> One of our team members with reach out to have the initial dialogue.
                                </div>




                                <div className="mt-5">

                                    <div className='large-text text-center'>
                                        Volunteers
                                    </div>

                                </div>


                                <div className={styles.ifyou}>

                                    If you are keen on making a difference in the way we empower women then you are in the right place. Please
                                    <span onClick={Getintouch} className={styles.linkname}>Click here</span>
                                    to connect with us via the contact us page and express your desire to work as a volunteer with Womeyn
                                </div>


                                <div className="mt-5">

                                    <div className='large-text text-center'>
                                        Trainees
                                    </div>

                                </div>

                                <div className={styles.ifyou} >
                                    We help nurture and grow talented women who would like to learn and become entrepreneurs. Whatever your skill sets, feel free to connect and we will always try to find you the right pathway in empowering your journey in becoming a WomeynPreneur
                                </div>

                            </div>
                            {/* <div >
                                <Ourclutures />
                            </div> */}
                            <div >
                                <AboutusSubscribe />
                            </div>
                        </div>






                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Aboutus