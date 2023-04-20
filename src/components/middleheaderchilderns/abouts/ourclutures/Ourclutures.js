import React from 'react'
import styles from './styles/Ourclutures.module.scss';
import p1 from '../../../../assests/abouts-logos/p1.png';
import p2 from '../../../../assests/abouts-logos/p2.png';
import p3 from '../../../../assests/abouts-logos/p3.png';
import p4 from '../../../../assests/abouts-logos/p4.png';
import Image from 'next/image';

function Ourclutures() {
    return (
        <div>
            {/* <div className='mt-5'>
                <div className={styles.blogsectiontexts}>
                    <div className='large-text text-center'>
                        Our culture
                    </div>
                    <div className='blogloream mt-2'>
                        All the latest news, stories, events & workshops from our experts & influencers.
                    </div>
                </div>
                <div></div>

            </div> */}

            <div className="mt-5">

                <div className='large-text text-center'>
                    Partners & Collaborations
                </div>

                <div className={styles.aboutimagelogo}>

                    <div>
                        <Image src={p1} alt="no image" className={styles.aboutlogo} />
                    </div>
                    <div>
                        <Image src={p2} alt="no image" className={styles.aboutlogo} />
                    </div>
                    <div>
                        <Image src={p3} alt="no image" className={styles.aboutlogo} />
                    </div>
                    <div>
                        <Image src={p4} alt="no image" className={styles.aboutlogo} />
                    </div>
                </div>
            </div>

            <div>

                <div className='large-text text-center'>

                    Join Womeyn
                </div>



            </div>

            <div className="mt-5">

                <div className='large-text text-center'>

                    Careers
                </div>

            </div>


            <div className={styles.ifyou}>

                If you are looking for Technology, Digital Marketing and Customer Support related jobs then please express your interest and send us your resume to contactus @womeyn.com. One of our team members with reach out to have the initial dialogue.
            </div>




            <div className="mt-5">

                <div className='large-text text-center'>
                    Volunteers
                </div>

            </div>


            <div className={styles.ifyou}>

                If you are keen on making a difference in the way we empower women then you are in the right place. Please connect with us via the contact us page and express your desire to work as a volunteer with Womeyn
            </div>


            <div className="mt-5">

                <div className='large-text text-center'>
                    Trainees
                </div>

            </div>

            <div className={styles.ifyou}>
                We help nurture and grow talented women who would like to learn and become entrepreneurs. Whatever your skill sets, feel free to connect and we will always try to find you the right pathway in empowering your journey in becoming a WomeynPreneur
            </div>


        </div>
    )
}

export default Ourclutures