import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Allcategories.module.scss';
import stars from '../../../../../../assests/homepage-logos/stars.png';
import Image from 'next/image';
import { TopProducts } from '../../../../../../services/banner-image-service/banner-image-service';
import Skeleton from 'react-loading-skeleton';
import Slider from "react-slick";
import SlideNextArrow from '../../../../slidenextarrow/SlideNextArrow';
import SlidePreArrow from '../../../../slideprearrow/SlidePreArrow';
import { useRouter } from 'next/router'
import AllCategoryCard from './allcategorycard/AllCategoryCard';
import Allbestservices from './allbestservices/Allbestservices';
function Allcategories() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    MainTopSections();
  }, []);

  const MainTopSections=()=>{
    TopProducts().then((res) => {
      setProducts(res?.data);
    }).catch((err) => {
      console.log(err);
    })
  }



  return (
    <Fragment>
      <>
        <div className={styles.allcategorymainsection}>
          <div className='textseller mb-3'>
            Our bestselling products
          </div>
          <div className={styles.mainoursellercarousel}>
            <AllCategoryCard products={products} stars={stars} />
          </div>

        </div>
        <div className={styles.allcategorymainsection}>
          <div className='textseller mb-3'>
            Our bestselling services
          </div>

          <div>
            <Allbestservices stars={stars} />
          </div>
        </div>
      </>
    </Fragment>
  )
}

export default Allcategories