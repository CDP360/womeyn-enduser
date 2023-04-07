import React, { useEffect, useState } from 'react'
import styles from './styles/Servicecards.module.scss';
import { useRouter } from 'next/router';
import { Image } from 'next/image';

import LoaderLogo from '../../../loaderlogo/LoaderLogo';
import { Serviceusers } from '../../../../services/servicewomeyn/service-womeyn';
function Servicecards() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const [servicesusers, setServiceusers] = useState([]);
    const cardssection = [
        {
            id: 1,
            name: "kalai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU"
        },
        {
            id: 2,
            name: "kalai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU"
        },
        {
            id: 3,
            name: "kalai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU"
        },
        {
            id: 4,
            name: "kalai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU"
        },
        {
            id: 5,
            name: "kalai",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_bZVtu-PddY_qhswZvb8mjbcupdRazjY_w&usqp=CAU"
        },

    ]


    useEffect(() => {
        Serviceusers().then((res) => {
            console.log(res?.data?.results, "kalai")
            setServiceusers(res?.data?.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    return (
        <>
        <div className={styles.maincardservices}>
            <div className={styles.insideservicecards}>
                <div className="mt-4 mb-5">
                    <h2>Service</h2>
                </div>
                <div className='cardsection row mb-3 ms-1'>
                    {loading ? <>
                        <LoaderLogo />
                    </> : <>{servicesusers?.map((item, index) => {
                        return (
                            <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 ' key={index} onClick={() => router?.push(`service/${item?.serviceSlugName}`)} >


                                <div className={styles.cardinsidesection}>

                                    <div>
                                        {item?.serviceThumbImage ?
                                            <img
                                                className={styles.images}
                                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.serviceThumbImage}`}
                                                alt="profile-pic"
                                            /> : <>
                                                <img src={item?.image} alt="no image" className={styles.images} />
                                            </>}
                                    </div>

                                  <div className="mt-5 mb-3 ms-3">
                                  <div className={styles.brandname}>    
                                        {item?.serviceName}
                                    </div>
                                </div>

                                    <div className='textgrey ms-3'>
                                        {item?.serviceDescription?.length<=18 ?<>{item?.serviceDescription}</>:<>{item?.serviceDescription.slice(0,18)}...</>}
                                    </div>
                                    <div className={styles.cardsellerborder}>
                                        <div className={styles.cardsellerinsideborder}>
                                        </div>
                                    </div>
                                  
                                </div>
                            </div>
                        )
                    })}</>}
                </div>

            </div>
        </div>

        </>
        
    )
}

export default Servicecards