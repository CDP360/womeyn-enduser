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





function Beverage({ productlist, loading }) {

    
 


    const { state, dispatch } = useContext(ContextStore)

    const router = useRouter();

    const Carthandleproduct = (data) => {
        dispatch({ type: "CART_SUCCESS", payload: data });
    }

    const data = [
        {
            id: 1,
            name: "Women Wellness Herbal I...",
            title: "Beverages",
            price: 110,
            offer: "25% off",
            image: i1,
            star: star
        },
        {
            id: 2,
            name: "Date Palm Jaggery",
            title: "Beverages",
            price: 110,
            offer: "25% off",
            image: i2,
            star: star

        },
        {
            id: 3,
            name: "Moringa Herbal Infusion",
            title: "Beverages",
            price: 75,
            offer: "25% off",
            image: i3,
            star: star

        },
        {
            id: 4,
            name: "Turmeric Spiced Superfood",
            title: "Beverages",
            price: 200,
            offer: "25% off",
            image: i4,
            star: star
        },
        {
            id: 5,
            name: "Women Wellness Herbal I kalai...",
            title: "Beverages",
            price: 110,
            offer: "25% off",
            image: i1,
            star: star
        },
        {
            id: 6,
            name: "Date Palm Jaggeryjgdkfjgkdfjg",
            title: "Beverages",
            price: 110,
            offer: "25% off",
            image: i2,
            star: star

        },
        {
            id: 7,
            name: "Moringa Herbal Infusionjgfdkjgkdfjd",
            title: "Beverages",
            price: 75,
            offer: "25% off",
            image: i3,
            star: star

        },
        {
            id: 8,
            name: "Turmeric Spiced Superfooduyjirtjyhjfkhf",
            title: "Beverages",
            price: 200,
            offer: "25% off",
            image: i4,
            star: star
        }
    ]



   
    return (
        <Fragment>
            <div className={styles.mainbeveragesection}>
                <div>
                    {productlist?.length === 0 && <div>No Data Found!!!</div>}
                </div>
                <div className='cardsection row w-100  mb-3 ms-1'>
                    {loading ? <>
                        <LoaderLogo />
                    </> : <>{productlist?.map((item, index) => {
                        return (
                            <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 col-xl-12 ' key={index} >
                                <div className={styles.plussection}>
                                    <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
                                </div>
                                <div onClick={() => router.push(`/womenpreneurs/product/view/${item?.name?.slice(0, 10)}`)}>
                                    {/* <Image src={item?.image} alt="no image" className={styles.sellerimagesize} /> */}
                                    <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`} alt="no image" className={styles.sellerimagesize} />
                                </div>
                                <div className={styles.cardinsidesection} onClick={() => router.push(`/womenpreneurs/product/view/${item?.name?.slice(0, 10)}`)}>
                                    <Image src={star} alt="no image" className={styles.stars} />
                                    <div className={styles.brandname}>
                                        <span>{item?.productName}</span>
                                    </div>
                                    <div className="textgrey">
                                        {item?.title}
                                    </div>
                                    <div>
                                        <span className='textgrey'>{item?.brandName}</span>
                                    </div>
                                    <div className={styles.cardsellerborder}>
                                        <div className={styles.cardsellerinsideborder}>
                                        </div>
                                    </div>
                                    <div className={styles.cardpricesection}>
                                        <div className='textprice'>
                                            <span>${item?.salePrice}</span>
                                        </div>
                                        <div className={styles.splitoffers}>
                                            <span className='textpricedashedgreen'> <del>${item?.actualPrice}</del></span>
                                            <span className='textpricedashedgreen ms-2'>
                                                ({item?.offerPercentag==0?<></>:<>
                                                {item?.offerPercentag} off
                                                </>} )
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