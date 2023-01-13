import React, { Fragment } from 'react'
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

function Beverage() {


    const dispatch=useDispatch();
    
    const router = useRouter();

    const Carthandleproduct = (data) => {
        dispatch(Cartactions(data));
    }

    const state=useSelector(state=>state);

    console.log('====================================');
    console.log("kalai",state);
    console.log('====================================');
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
        }
    ]
    return (
        <Fragment>
            <div className={styles.mainbeveragesection}>
                <div className='cardsection row justify-content-center  w-100  mb-3 ms-1'>
                    {data?.map((item, index) => {
                        return (
                            <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 col-xl-12 ' key={index} >
                                <div className={styles.plussection}>
                                    <Image src={plus} alt="no image" className={styles.plus} onClick={()=>Carthandleproduct(item)}/>
                                </div>
                                <div onClick={() => router.push(`/womeyn/womenpreneurs/product/view/${item?.name?.slice(0, 10)}`)}>
                                    <Image src={item?.image} alt="no image" className={styles.sellerimagesize} />
                                </div>
                                <div className={styles.cardinsidesection} onClick={() => router.push(`/womeyn/womenpreneurs/product/view/${item?.name?.slice(0, 10)}`)}>
                                    <Image src={item?.star} alt="no image" className={styles.stars} />
                                    <div className={styles.brandname}>
                                        <span>{item?.name}</span>
                                    </div>
                                    <div className="textgrey">
                                        {item?.title}
                                    </div>
                                    <div>
                                        <span className='textgrey'>{item?.brand}</span>
                                    </div>
                                    <div className={styles.cardsellerborder}>
                                        <div className={styles.cardsellerinsideborder}>
                                        </div>
                                    </div>
                                    <div className={styles.cardpricesection}>
                                        <div className='textprice'>
                                            <span>${item?.price - 15}</span>
                                        </div>
                                        <div >
                                            <span className='textpricedashedgreen'> <del>${item?.price}</del></span>
                                            <span className='textpricedashedgreen ms-2'>
                                                ({item?.offer})
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </Fragment>
    )
}

export default Beverage