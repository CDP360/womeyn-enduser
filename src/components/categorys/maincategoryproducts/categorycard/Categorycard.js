import Image from 'next/image';
import React, { useContext } from 'react'
import styles from './styles/Categorycard.module.scss';
import stars from '../../../../assests/homepage-logos/stars.png';
import plus from '../../../../assests/womeynlogos/plus.png';
import { ContextStore } from '../../../../Redux/store/Contextstore';
import { useRouter } from 'next/router';
function Categorycard({ item }) {

    const history = useRouter();
    const { state, dispatch } = useContext(ContextStore)
    const Carthandleproduct = (data) => {
        dispatch({ type: "CART_SUCCESS", payload: { ...data, quantity: 1, variations: [], couponName: "", sellerBussinesName: item?.businessSlugName } });
    }
    const ProductView = (data) => {
        history.push(`/product/${data}`)
    }
    return (
        // onClick={()=>ProductView(item?.productSlugName)}
        <div className={styles.cards} onClick={() => ProductView(item?.productSlugName)}  >
            {/* <div className={styles.plussection}>
                <Image src={plus} alt="no image" className={styles.plus} onClick={() => Carthandleproduct(item)} />
            </div> */}
            <img
                className={styles.categoryimage}
                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                alt="profile-pic"
                onClick={() => ProductView(item?.productSlugName)}
            />
            <div className={styles.cardinsidesection}>
                <Image src={stars} alt="no image" className={styles.stars} />
                <div>
                    <span>{item?.productName}</span>
                </div>
                <div>
                    <span className={styles.brandnames}>{item?.brandName}</span>
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
                            ({item?.offerPercentag}% 0ff)
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categorycard