import React, { useEffect, useState } from "react";
import styles from "./styles/Favorts.module.scss";
import Star from '../../../../assests/category-logos/greenStar.png'
import HalfStar from '../../../../assests/category-logos/greenHalfStar.png'
import Search from '../../../../assests/homepage-logos/serachicon.png'
import Delete from '../../../../assests/category-logos/deleteIcon.png'
import Image from "next/image";
import { GetFavoritsList } from "../../../../services/user-favorits-service/User-favorits-service";
import Skeleton from 'react-loading-skeleton';
import LoaderLogo from './../../../loaderlogo/LoaderLogo';


import {useRouter} from 'next/router';

function Favorts() {

  const history=useRouter();

  const [favorts, setFavorts] = useState([]);

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    GetFavoritsList().then((res) => {
      setTimeout(() => {
        setLoading(false);
        setFavorts(res?.data[0]?.results);

      }, 400)
    }).catch((err) => {
      console.log(err);
    })
  }, [])
const pushProductPage=(data)=>{
  history.push(`/product/${data}`)
}
  return (
    <div>
      <div className={styles.favortsInputContainer}>
        <input className={styles.favortsSearch}
          placeholder="Search your favorites" />
        <Image src={Search} className={styles.searchImg} />
      </div>
      <div className={styles.favortsContainer}>
        <p className={styles.favortsText}>Favorites</p>



        <div>
          {loading ? <>


            <LoaderLogo />

          </> : <>


            {
              favorts.map((data, index) =>
                <div className={styles.favortsInnerContainer} key={index}>
                  <div className={styles.favortsLeftContainer} onClick={()=>pushProductPage(data.productSlugName)}>
                    {data?.productThumbImage ? <>
                      <img
                        className={styles.favortsImg}
                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${data?.productThumbImage}`}
                        alt="profile-pic"
                      />
                    </> : <>
                      <Skeleton className={styles.favortsImg} />
                    </>}
                    <div className={styles.favortsContentContainer}>
                      <p className={styles.favortsProductName}>{data.productName}</p>
                      {/* <p className={styles.favortsOfferDetail}>{data.productSlugName}</p> */}
                      <div className={styles.favortsRatingContainer}>
                        <div className={styles.starsections}>
                          <Image src={Star} className={styles.stars} />
                          <Image src={Star} className={styles.stars}/>
                          <Image src={Star} className={styles.stars}/>
                          <Image src={Star} className={styles.stars}/>
                          <Image src={HalfStar} className={styles.stars}/>
                        </div>
                    
                      </div>
                    </div>
                  </div>
                  <div className={styles.favortsRightContainer}>
                    <Image src={Delete} />
                    <div className='d-none d-lg-block'>
                      <p className={styles.favortsDeleteText}>Remove</p>
                    </div>
                  </div>
                </div>
              )
            }
          </>}


        </div>


      </div>
    </div>
  );
}

export default Favorts;
