import React, { Fragment, useContext, useEffect } from 'react'
import styles from './styles/Beverage.module.scss';

import i1 from '../../../../../assests/womeynlogos/i1.png';
import i2 from '../../../../../assests/womeynlogos/i2.png';
import i3 from '../../../../../assests/womeynlogos/i3.png';
import i4 from '../../../../../assests/womeynlogos/i4.png';
import star from '../../../../../assests/homepage-logos/stars.png';
import Image from 'next/image';
import plus from '../../../../../assests/womeynlogos/plus.png';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { ContextStore } from '../../../../../Redux/store/Contextstore';
import { CART_SUCCESS } from '../../../../../Redux/types';
import LoaderLogo from '../../../../loaderlogo/LoaderLogo';
import { cartContext } from '../../../../../Redux/store/CartContext';
import Skeleton from 'react-loading-skeleton';
import { Nodatafoundimage } from './../../../../nodatafoundimage/Nodatafound';
function Servicescardslist({ serviceslist, loading, sellers }) {

    const router = useRouter();
   
    useEffect(() => {
    }, [sellers]);



    return (
        <Fragment>
            <div className={styles.mainbeveragesection}>
                <div>
                    {serviceslist?.length == 0 && <div>
                        {/* <Nodatafoundimage/> */}
                     <Nodatafoundimage
                       title="No Available Services"
                     />
                        </div>}
                </div>
                <div className='cardsection row mb-3 ms-1'>
                    {loading ? <>
                        <LoaderLogo />
                    </> : <>{serviceslist?.map((item, index) => {
                        return (
                            <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 ' key={index} >
                                {/* <div className={styles.plussection}>
                                    <ion-icon name="add-outline" className={styles.ionicicons} onClick={() => Carthandleproduct(item)}></ion-icon>
                                    <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
                                </div> */}
                                <div onClick={() => router.push(`/service/${item?.serviceSlugName}`)} className={styles.imagebox}>
                                    {item?.serviceThumbImage ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.serviceThumbImage}`} alt="no image" className={"productimages"} /> :
                                        <>
                                            <Skeleton className={styles.loaderskelimage} />
                                        </>
                                    }
                                </div>
                                <div className={styles.cardinsidesection} onClick={() => router.push(`/service/${item?.serviceSlugName}`)}>
                                    {/* <Image src={star} alt="no image" className={styles.stars} /> */}
                                    <div className={styles.brandname}>
                                        {item?.serviceName?.length <= 10 ? <>{item?.serviceName}</> : <>    {item?.serviceName.slice(0, 18)}...</>}
                                    </div>

                                    <div className='textgrey mb-4'>
                                        {item?.serviceDescription?.length <= 18 ? <>{item?.serviceDescription}</> : <>{item?.serviceDescription.slice(0, 18)}...</>}
                                    </div>
                                    {/* <div className={styles.cardsellerborder}>
                                        <div className={styles.cardsellerinsideborder}>
                                        </div>
                                    </div> */}
                                    {/* <div className={styles.cardpricesection}>
                                        <div className='textprice'>
                                            <span>A${item?.salePrice}</span>
                                        </div>
                                        <div className={styles.splitoffers}>
                                            {item?.offerPercentag == 0 ? <></> : <span className='textpricedashedgreen'> <del>A${item?.actualPrice}</del></span>}
                                            <span className='textpricedashedgreen ms-2'>
                                                {item?.offerPercentag == 0 ? <></> : <>
                                                    ({item?.offerPercentag} off)
                                                </>}
                                            </span>
                                        </div>

                                    </div> */}
                                </div>
                            </div>
                        )
                    })}</>}
                </div>


            </div>
        </Fragment>
    )
}

export default Servicescardslist