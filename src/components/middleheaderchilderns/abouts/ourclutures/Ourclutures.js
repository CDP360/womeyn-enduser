import React, { useEffect, useState } from 'react'
import styles from './styles/Ourclutures.module.scss';
import p1 from '../../../../assests/abouts-logos/p1.png';
import p2 from '../../../../assests/abouts-logos/p2.png';
import p3 from '../../../../assests/abouts-logos/p3.png';
import p4 from '../../../../assests/abouts-logos/p4.png';
import Image from 'next/image';
import { useRouter } from 'next/router';

import Slider from "react-slick";
import SlideNextArrow from '../ourteam/slidenextarrow/SlideNextArrow';
import SlidePreArrow from '../ourteam/slideprearrow/SlidePreArrow';
import { Getwomenpreneursbanner } from '../../../../services/womenpreneurs-services/womenpreneurs-services';

import Skeleton from 'react-loading-skeleton';
import LoaderLogo from './../../../loaderlogo/LoaderLogo';

function Ourclutures() {

    const router = useRouter();

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
                                    <div key={index} className="col-lg-4 mx-auto">
                                        {item.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.imageName}`} alt="no image" className={styles.cardaboutusimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
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
                                        <div key={index} className="col-lg-4 mx-auto"  >
                                            {item.imageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.imageName}`} alt="no image" className={styles.cardaboutusimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
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






            <div className="mt-5 mb-4" id="JoinWomeyn">





                <div className='large-text text-center' >

                    Join Womeyn
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
    )
}

export default Ourclutures