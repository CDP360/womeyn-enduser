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
                    {/* {loading ? <>
                        <LoaderLogo />
                    </> : <> */}
                    {serviceslist?.map((item, index) => {
                        return (
                            <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 ' key={index} >
                                {/* <div className={styles.plussection}>
                                    <ion-icon name="add-outline" className={styles.ionicicons} onClick={() => Carthandleproduct(item)}></ion-icon>
                                    <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
                                </div> */}





                                
                                <div onClick={() => router.push(`/service/${item?.serviceSlugName}`)} className={styles.imagebox}>
                                    {item?.serviceThumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.serviceThumbImage}`} alt="no image" className={"productimages"} /> :
                                        <>
                                            <Skeleton className={styles.loaderskelimage} />
                                        </>
                                    }
                                </div>
                                <div className={styles.cardinsidesection} onClick={() => router.push(`/service/${item?.serviceSlugName}`)}>
                                   

<div className="mb-4">
<div className={styles.productNametext}>
                                                        {item?.serviceName?.length>60?<>{item?.serviceName.slice(0,60)}...</>:<>{item?.serviceName}</>}
                                                    </div>

                                                    <div className={styles.brandname}>
                                                        {item?.serviceDescription?.length>60?<>{item?.serviceDescription.slice(0,60)}...</>:<>{item?.serviceDescription}</>}
                                                    </div>
</div>

                                    

                                    
                                </div>
                            </div>
                        )
                    })}
                    {/* </>} */}
                </div>


            </div>
        </Fragment>
    )
}

export default Servicescardslist