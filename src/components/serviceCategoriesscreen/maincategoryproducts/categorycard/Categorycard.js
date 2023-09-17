import Image from 'next/image';
import React, { useContext } from 'react'
import styles from './styles/Categorycard.module.scss';
import stars from '../../../../assests/homepage-logos/stars.png';
import plus from '../../../../assests/womeynlogos/plus.png';
import { ContextStore } from '../../../../Redux/store/Contextstore';
import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton'

function Categorycard({ item }) {

    const history = useRouter();
    const { state, dispatch } = useContext(ContextStore)
    const Carthandleproduct = (data) => {
        dispatch({ type: "CART_SUCCESS", payload: { ...data, quantity: 1, variations: [], couponName: "", sellerBussinesName: item?.businessSlugName } });
    }
    const ProductView = (data) => {
        history.push(`/services/${data}`)
    }

    return (

        <div className={styles.cards} onClick={() => ProductView(item?.serviceSlugName)}  >
            {/* {item?.productThumbImage ? <>
                <img
                    className={"productimages"}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.productThumbImage}`}
                    alt="profile-pic"
                    onClick={() => ProductView(item?.productSlugName)}
                />
            </> : <>
                <Skeleton className={styles.categoryimages} />
            </>} */}

   

            <div onClick={() => ProductView(item?.serviceSlugName)} className={styles.imagebox}>
                {item?.thumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.thumbImage}`} alt="no image" className={"productimagess"} /> :
                    <>
                        <Skeleton className={styles.categoryimages} />
                    </>
                }
            </div>

            <div className={styles.cardinsidesection}>
                {/* <Image src={stars} alt="no image" className={styles.stars} /> */}
                {/* <div className={styles.productname}>
                    {item?.productName?.length <= 10 ? <> {item?.productName}</> : <> {item?.productName.slice(0, 18)}...</>}

                </div>
                <div className={styles.brandnames}>
                    {item?.brandName?.length <= 10 ? <>{item?.brandName ? <>{item?.brandName}</> : <>

                        <Skeleton className={styles.skeltonbrands} />
                    </>}</> : <>{item?.brandName.slice(0, 28)}...</>}


                </div> */}

              
                <div className={styles.productNametext}>
                    {item?.serviceName?.length > 60 ? <>{item?.serviceName.slice(0, 60)}...</> : <>{item?.serviceName}</> }
                </div>
               
               
                {/* <div className={styles.cardsellerborder}>
                    <div className={styles.cardsellerinsideborder}>

                    </div>
                </div>
                <div className={styles.cardpricesection}>
                    <div className='textpricebold'>
                        <span>A${item?.salePrice}</span>
                    </div>
                    <div className={styles.pricecontentcategory}>
                        <div className='textpricedashedgreen'>
                            <del>{item?.offerPercentag === 0 ? <></> : <>${item?.actualPrice}</>}</del>
                        </div>
                        <div>
                            {item?.offerPercentag == 0 ? <></> : <>({item?.offerPercentag}% 0ff)</>}
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Categorycard