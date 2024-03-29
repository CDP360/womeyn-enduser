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
    const state = useSelector((state) => state?.aboutcountdata?.about);
    const data = [
        {
            id: 1,
            name: "Purpose-driven",
            title: "Value is making a difference for our customers each and every day. That's what powers our business and energizes us.",
            image: bubble1,
            colorbg: "#FDF0F0"
        },
        {
            id: 2,
            name: "Social impact",
            title: "We are a team of experts who know how to work together to tackle real challenges and create success.",
            image: bubble2,
            colorbg: "#FDF0F0"
        },
        {
            id: 3,
            name: "Advocacy based",
            title: "When challenges arise, we rise to the occasion. We roll up our sleeves, get to work, and get the job done",
            image: bubble3,
            colorbg: "#FDF0F0"
        }
    ]

    const [showTopBtn, setShowTopBtn] = useState(false);


    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 30) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });

        if (router?.asPath == "/abouts/#WhatisWomeyn") {
            window.scrollTo({
                top: 1100,
                behavior: "smooth",
            });
        }
        if (router?.asPath == "/abouts/#OurMission&Vision") {
            window.scrollTo({
                top: 1415,
                behavior: "smooth",
            });
        }

        if (router?.asPath == "/abouts/#TheLogoSignificance") {
            window.scrollTo({
                top: 1990,
                behavior: "smooth",
            });
        }


        if (router?.asPath == "/abouts/#TheTeam") {
            window.scrollTo({
                top: 2400,
                behavior: "smooth",
            });
        }

        if (router?.asPath == "/abouts/#PartnersCollaborations") {
            window.scrollTo({
                top: 4830,
                behavior: "smooth",
            });
        }

        if (router?.asPath == "/abouts/#JoinWomeyn") {
            window.scrollTo({
                top: 5120,
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

            console.log(res,"res")
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
            <div className={styles.aboutupagemain}>
                <div className="mt-2 " >
                    <section className="mains">
                        <div className={styles.mainboutus}>
                            <div className={styles.exptyboxleft}>

                            </div>
                            <div className={styles.exptyboxright}>

                            </div>
                            <div className={styles.exptyboxleftblue}>

                            </div>
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
                                <div className={styles.creationabout} >§ The creation of “Womeyn” as a concept has a direct correlation to Anu, Founder and Director of Womeyn. It is her experiences and struggles in life as a woman and as a woman entrepreneur that gave birth to the concept. “Womeyn” is her way of creating a community of women and bring about a positive change by providing a platform that makes it easy for women of our communities to express themselves, be financially self-reliant and not be restricted due to lack of knowledge in technology, availability of equal opportunity or marginalized in any shape or form She has an Inspirational Story and is the heart and soul of the initiative “Womeyn”.
                                </div>
                            </div>

                        </div>


                        <div id="WhatisWomeyn">
                            <section className={router?.asPath == "/abouts/#WhatisWomeyn" ? "mains" : "mainss"}>
                                <div className='large-text text-center'>

                                    What is Womeyn
                                </div>
                                <div className="abouts-cards row d-flex justify-content-center mt-4 gap-4">
                                    {data?.map((item, index) => {
                                        return (
                                            <div className={`cards-aboutus col-lg-4  col-sm-12 col-xs-12 col-md-12 col-xl-4 mt-3 mb-3`} style={{ backgroundColor: item.colorbg }}>
                                                <div className='ms-2 text-center'>
                                                </div>
                                                <div className='ms-4'>
                                                    <div className='mt-2'>
                                                        <div className="mt-2 aboutus-text text-center">
                                                            {item?.name}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div className={styles.creationabouts}>
                                    Womeyn is a purpose-driven social impact advocacy-based initiative that aims to empower
                                    women by providing economic support by means of an eCommerce platform for Women by
                                    Womeyn. Driven by the concept of creating communities transcending all barriers that are
                                    commonly seen with women entrepreneurs.

                                </div>
                            </section>
                        </div>
                    </section>
                </div>
                <div className="womeynaboutuspage">
                    <section id="OurMission&Vision" className={router?.asPath == "/abouts/#OurMission&Vision" ? "mains" : "mainss"}>
                        <div>
                            <Ourvision />
                        </div>
                    </section>

                </div>
                <div className="womeynaboutuspage">
                    <section id="TheLogoSignificance" className={router?.asPath == "/abouts/#TheLogoSignificance" ? "mains" : "mainss"}>
                        <div className={styles.standsections} >
                            <div className="">
                                <div className='large-text text-center mt-5'>The Logo Significance</div>
                                <div className="text-center mt-4">
                                    <Image src={womenlogo} alt="no image" className={styles.abss} />
                                </div>
                                <div className={styles.stands} >
                                    <span><Image src={wba} alt="no image" className={styles.abs} /></span>stands for “You” being the women out there.<br />
                                    Womeyn is a platform for “You” by “ You”. <span>
                                        <Image src={wba1} alt="no image" className={styles.abs} />
                                    </span>     beneath signifies the core founding principle of Womeyn. “Uplifting and Empowering”. Combined together it means “Uplifting and Empowering You“.
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
                <div className="womeynaboutuspage mt-5">
                    <section id="TheTeam" className={router?.asPath == "/abouts/#TheTeam" ? "mains" : "mainss"}>
                        <Ourteam />
                    </section>
                </div>
                <div className="womeynaboutuspage">

                    <section id="PartnersCollaborations" className={router?.asPath == "/abouts/#PartnersCollaborations" ? "mains" : ""}>
                        <div className="mt-5">
                            <div className='large-text text-center mb-2' >
                                Partners & Collaborations
                            </div>
                        </div>
                        {partnersbannersloading ? <div className={styles.loadingbox}>
                            <LoaderLogo />
                        </div> : <>
                            <div className={styles.imagesectionhomess}>
                                {partnersbanners?.length > 3 ? <div className={styles.loadingboxs}>
                                    <Slider {...settings}>
                                        {partnersbanners?.map((item, index) => {
                                            return (
                                                <div key={index} className="col-lg-4 mx-auto" >
                                                   <div className={styles.aboutboxpart}>
                                                   {item.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.imageName}`} alt="no image" className={styles.cardaboutusimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                                        <Skeleton className={styles.homebanner} />
                                                    </>}
                                                   </div>
                                                </div>
                                            )
                                        })}
                                    </Slider>
                                </div> :
                                    <div className={styles.loadingboxss}>
                                        {/* <div className={styles.loadingboxs}> */}
                                            {partnersbanners?.map((item, index) => {
                                                return (
                                                    <div key={index} className="col-lg-4 mx-auto"  >
                                                        
                                                        {item.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.imageName}`} alt="no image" className={styles.cardaboutusimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                                            <Skeleton className={styles.homebanner} />
                                                        </>}
                                                    </div>
                                                )
                                            })}
                                        {/* </div> */}

                                    </div>
                                }

                            </div>

                        </>}

                    </section>
                </div>

                <div className="womeynaboutuspage">

                    <section id="JoinWomeyn" className={router?.asPath == "/abouts/#JoinWomeyn" ? "mains" : ""}>
                        <div>
                            <div className=" mb-4"  >
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

                        <div >
                            <AboutusSubscribe />
                        </div>

                    </section>
                </div>
            </div>
        </Fragment>
    )
}

export default Aboutus