import Image from 'next/image';
import React, { useContext } from 'react'
import styles from './styles/Categorycard.module.scss';
import stars from '../../../../../../assests/homepage-logos/stars.png';
import plus from '../../../../../../assests/womeynlogos/plus.png';

import { useRouter } from 'next/router';
import Skeleton from 'react-loading-skeleton'

function Searchcategorycards({ item }) {

    const history = useRouter();

    const ProductView = (data) => {
        history.push(`/product/${data}`)
    }
    return (
        // onClick={()=>ProductView(item?.productSlugName)}
        <div className={styles.cards} onClick={() => ProductView(item?.productSlugName)}  >
            {/* <div className={styles.plussection}>
                <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
            </div> */}
            {item?.productThumbImage ? <>
                <img
                    className={"productimages"}
                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                    alt="profile-pic"
                    onClick={() => ProductView(item?.productSlugName)}
                />
            </> : <>
                <Skeleton className={styles.categoryimages} />
            </>}

            <div className={styles.cardinsidesection}>
                <Image src={stars} alt="no image" className={styles.stars} />
                <div className={styles.productname}>
                    {item?.productName?.length <= 10 ? <> {item?.productName}</> : <> {item?.productName.slice(0, 18)}...</>}

                </div>
                <div className={styles.brandnames}>
                    {item?.brandName?.length <= 10 ? <>{item?.brandName ? <>{item?.brandName}</> : <>

                        <Skeleton className={styles.skeltonbrands} />
                    </>}</> : <>{item?.brandName.slice(0, 28)}...</>}
                    {/* <span className={styles.brandnames}>{item?.brandName}</span> */}

                </div>
                <div className={styles.cardsellerborder}>
                    <div className={styles.cardsellerinsideborder}>

                    </div>
                </div>
                <div className={styles.cardpricesection}>
                    <div className='textpricebold'>
                        <span>${item?.salePrice}</span>
                    </div>
                    <div className={styles.pricecontentcategory}>
                        <div className='textpricedashedgreen'>
                            <del>{item?.offerPercentag === 0 ? <></> : <>${item?.actualPrice}</>}</del>
                        </div>
                        <div>
                            {item?.offerPercentag == 0 ? <></> : <>({item?.offerPercentag}% 0ff)</>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchcategorycards;