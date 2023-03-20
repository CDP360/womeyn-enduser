import React from "react";
import styles from "./styles/Favorts.module.scss";
import Star from '../../../../assests/category-logos/greenStar.png'
import HalfStar from '../../../../assests/category-logos/greenHalfStar.png'
import Search from '../../../../assests/homepage-logos/serachicon.png'
import Delete from '../../../../assests/category-logos/deleteIcon.png'
import Image from "next/image";


function Favorts() {

    const favoritesData=[
        {
            productName:'Shoes Waffle One',
            offerDetails:'Rs. 8000 (100000)   10% off',
            ratings:'712 Ratings'
        },
        {
            productName:'Shoes Waffle One',
            offerDetails:'Rs. 8000 (100000)   10% off',
            ratings:'712 Ratings'
        },
    ]
  return (
    <div>
        <div className={styles.favortsInputContainer}>
      <input className={styles.favortsSearch}
        placeholder="Search your favorites"/>
        <Image src={Search} className={styles.searchImg}/>
        </div>
      <div className={styles.favortsContainer}>
        <p className={styles.favortsText}>Favorites</p>
        {
            favoritesData.map((data)=>
            <div className={styles.favortsInnerContainer}>
            <div className={styles.favortsLeftContainer}>
            <div className={styles.favortsImg}></div>
            <div className={styles.favortsContentContainer}>
                <p className={styles.favortsProductName}>{data.productName}</p>
                <p className={styles.favortsOfferDetail}>{data.offerDetails}</p>
                <div className={styles.favortsRatingContainer}>
                    <div>
                    <Image src={Star}/>
                    <Image src={Star}/>
                    <Image src={Star}/>
                    <Image src={Star}/>
                    <Image src={HalfStar}/>
                    </div>
                    <div className={styles.favortsDot}></div>
                    <p className={styles.favortsRatingText}>{data.ratings}</p>
                </div>
            </div>
            </div>
            <div className={styles.favortsRightContainer}>
                <Image src={Delete}/>
                {/* <p className={styles.favortsDeleteText}>Remove</p> */}
            </div>
        </div>
            )
        }
        
      </div>
    </div>
  );
}

export default Favorts;
