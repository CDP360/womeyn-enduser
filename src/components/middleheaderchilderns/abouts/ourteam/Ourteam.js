import React, { Fragment } from 'react'
import styles from './styles/Ourteam.module.scss';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';
import anuwomen from '../../../../assests/homepage-logos/anuwomeyn.png';
import Image from 'next/image';



import anu from '../../../../assests/abouts-logos/anu.png';
import anu1 from '../../../../assests/abouts-logos/na.png';
import anu2 from '../../../../assests/abouts-logos/tanu.png';



function Ourteam() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
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

   



    return (
        <Fragment>
            <div className='mt-5' id="the-team">
                <div className={styles.blogsectiontexts}>
                    <div className='large-text text-center'>
                        Our Team
                    </div>
                    {/* <div className='blogloream mt-2'>
                        All the latest news, stories, events & workshops from our experts & influencers.
                    </div> */}
                </div>


            </div>

            <div className={styles.ourimageteams}>

                <div className={styles.insideimageteams}>

                    <div>
                        <Image src={anu} alt="no image" className={styles.teamanu} />
                    </div>

                    <div className={styles.anutexts}>

                        ANU KULKARNI
                    </div>

                    <div className={styles.insidetexts}>
                        FOUNDER & DIRECTOR
                    </div>

                </div>

            </div>


            <div>


                <div className={styles.kulkarinexts}>

                    Anu kulkarni is a Women Entrepreneur and Founder – Director of Womeyn. She is an inspirational icon to many. Her story is compelling and uplifting. Five years of her life were forever tarnished, but she survived and came back to establish herself and inspire many women who have had a similar journey as her. It is about her tryst with PTSD, and mental health issues. Anu is a keen fitness enthusiast with a fun-loving outlook to life. Always ready to accept new challenges with a strong desire to help women of the community. With a career spanning over 30 years in Business and Corporate world, a banker for 8 years in Australia and thereafter in the process of rebuilding herself from the ashes of her past. Anu is a Philanthropist at heart with a mission to help educate women and girl child in 3rd / developing world countries.



                </div>

                <div className={styles.kulkarinexts}>Apart from her professional qualifications, she is a licensed Zumba instructor for Kids, Adults and Seniors and a Yin Yoga Instructors as well. Every woman has a story that makes her successful and Anu is no different.





                </div>

                <div className={styles.kulkarinexts}>
                    As a migrant she had her struggles, it’s been a long journey. But today she stands tall with her head held high. She has come a long way, she has participated in many events and beauty pageants and was the runners up at Curves and Curls International and winner of Fitness Icon award, she also starred in an hour-long ABC documentary “Doctors at the door – Kulkarni” that was aired nationally. She was also the finalist in the Hills District Local Business Award, Australian Ladies In Business Initiative awards (Alibi) and also awarded the “Woman Of Inspiration” award by Wonders of Womanhood. Her aim is to inspire as many women as far as possible to never give up. Womeyn is a platform for women entrepreneurs and if you are one then please connect with her through the contact us page or by clicking “Become a WomeynPreneur”
                </div>


            </div>





            
            <div className={styles.ourimageteams}>

                <div className={styles.insideimageteams}>

                    <div>
                        <Image src={anu2} alt="no image" className={styles.teamanu} />
                    </div>

                    <div className={styles.anutexts}>

                    TANUSHKA KULKARNI
                    </div>

                    <div className={styles.insidetexts}>
                    CO - FOUNDER & LEGAL
                    </div>

                </div>

            </div>


            <div>


                <div className={styles.kulkarinexts}>

                A vibrant and energetic young Lawyer who is making her mark in the corporate world and at the same time working towards being an active member of the core founding team. She takes on the role of all legal matters and is the backbone in ensuring that the business is in compliance with law of the land. Tanushka specializes in corporate & commercial law and is on embarking on her masters.


                </div>




            </div>









            <div className={styles.ourimageteams}>

                <div className={styles.insideimageteams}>

                    <div>
                        <Image src={anu1} alt="no image" className={styles.teamanu} />
                    </div>

                    <div className={styles.anutexts}>

                        NARENDRA KULKARNI
                    </div>

                    <div className={styles.insidetexts}>
                        CO - FOUNDER & MENTOR
                    </div>

                </div>

            </div>


            <div>


                <div className={styles.kulkarinextss} id="PartnersCollaborations">

                    Over 35 years of Sales / Marketing and Business Development experience in the Information Technology domain. Double Master’s in Commerce and Business Administration, Narendra comes with a lot of business experience across the Middle East , Asia & South Pacific region. He has also worked and help establish starts-ups during the dotcom boom in 2001. His role in Womeyn is to mentor the team and help setup the infrastructure and help operationalise the platform, including road mapping the future platform iterations and business relationships


                </div>




            </div>


            {/* <div className={styles.mainslidesection}>
                <Slider {...settings}>
                    {data.map((item, index) => {
                        return (
                            <div>
                                <div className={styles.insideslides} style={{ background: item.colorbg }}>
                                    <div className={styles.imagesectionour}>
                                        <div className={styles.slideaboutimage}>
                                            <Image src={item?.image} alt="no image" className={styles.slideimagesize} />
                                        </div>

                                    </div>
                                    <div className={styles.nameshadowsection}>
                                        <span className={styles.namecustomers}>{item?.name}</span>

                                        <span className={styles.desc}>{item?.title}</span>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div> */}
        </Fragment>
    )
}

export default Ourteam