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
import { Cartactions } from '../../../../../Redux/actions/cart/Cartdata';
import { useState } from 'react';
import { ContextStore } from '../../../../../Redux/store/Contextstore';
import { CART_SUCCESS } from '../../../../../Redux/types';
import LoaderLogo from '../../../../loaderlogo/LoaderLogo';
import { cartContext } from '../../../../../Redux/store/CartContext';
import Skeleton from 'react-loading-skeleton';
function Beverage({ productlist, loading, sellers }) {
    const { state, dispatch } = useContext(ContextStore)
    const router = useRouter();
    const Carthandleproduct = (data) => {
        dispatch({ type: "CART_SUCCESS", payload: { ...data, quantity: 1, variations: [], couponName: "", sellerBussinesName: sellers } });
    }
    useEffect(() => {
    }, [sellers]);



    return (
        <Fragment>
            <div className={styles.mainbeveragesection}>
                <div>
                    {productlist?.length == 0 && <div>No Data Found!!!</div>}
                </div>
                <div className='cardsection row mb-3 ms-1'>
                    {loading ? <>
                        <LoaderLogo />
                    </> : <>{productlist?.map((item, index) => {
                        return (
                            <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 ' key={index} >
                                {/* <div className={styles.plussection}>
                                    <ion-icon name="add-outline" className={styles.ionicicons} onClick={() => Carthandleproduct(item)}></ion-icon>
                                    <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
                                </div> */}
                                <div onClick={() => router.push(`/product/${item?.productSlugName}`)} className={styles.imagebox}>
                                    {item?.productThumbImage ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`} alt="no image" className={styles.sellerimagesize} /> :
                                        <>
                                            <Skeleton className={styles.loaderskelimage} />
                                        </>
                                    }
                                </div>
                                <div className={styles.cardinsidesection} onClick={() => router.push(`/product/${item?.productSlugName}`)}>
                                    <Image src={star} alt="no image" className={styles.stars} />
                                    <div className={styles.brandname}>
                                        {item?.productName?.length <= 10 ? <>{item?.productName}</> : <>    {item?.productName.slice(0, 18)}...</>}
                                    </div>

                                    <div className='textgrey'>
                                        {item?.brandName?.length <= 18 ? <>{item?.brandName}</> : <>{item?.brandName.slice(0, 18)}...</>}
                                    </div>
                                    <div className={styles.cardsellerborder}>
                                        <div className={styles.cardsellerinsideborder}>
                                        </div>
                                    </div>
                                    <div className={styles.cardpricesection}>
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

                                    </div>
                                </div>
                            </div>
                        )
                    })}</>}
                </div>


            </div>
        </Fragment>
    )
}

export default Beverage