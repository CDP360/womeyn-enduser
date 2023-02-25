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
    TopProducts().then((res) => {
      setProducts(res?.data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);



  return (
    <Fragment>
      <>
        <div className={styles.allcategorymainsection}>
          <div className='textseller'>
            Our bestselling products
          </div>
          <div className={styles.mainoursellercarousel}>

            <AllCategoryCard products={products} stars={stars}/>

            {/* <div className={styles.insidecarouselsections}> */}
            {/* <Slider {...settings}>
                {products?.map((item, index) => {
                  return (
                    <div className={styles.cardsections}>
                      <div className="cards col-lg-12 mb-5" onClick={() => categoryPush(item?.productSlugName)}>
                        <div>
                          {item?.productThumbImage ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`} alt="no image" className={styles.sellerimagesize} /> : <>
                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                          </>}
                        </div>
                        <div className={styles.cardinsidesection}>
                          <Image src={stars} alt="no image" className={styles.stars} />
                          <div>
                            <span>{item?.productName}</span>
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
                              {item?.offerPercentag > 0 ? <span>${item?.salePrice}</span> : <span>${item?.salePrice}</span>}
                            </div>
                            <div className='textpricedashed'>
                              <del>${item?.actualPrice}</del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </Slider> */}
            {/* </div> */}

          </div>

        </div>
        <div className={styles.allcategorymainsection}>
          <div className='textseller'>
            Our bestselling sevices
          </div>
          {/* <div className='cardsection row justify-content-center  w-100 mt-4 mb-3 ms-1'>
            {products?.slice(0, 4).map((item, index) => {
              return (
                <div className='cards col-lg-3 col-sm-6 col-xs-6 col-md-6 ' key={index}>
                  <div>
                    <img src={item?.image} alt="no image" className={styles.sellerimagesize} />
                  </div>
                  <div className={styles.cardinsidesection}>
                    <Image src={stars} alt="no image" className={styles.stars} />
                    <div>
                      <span>{item?.productName.slice(0, 17)}</span>
                    </div>
                    <div className='mb-4'>
                      <span className='textgrey'>{item?.brand}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div> */}
          <div>
            <Allbestservices stars={stars}/>
          </div>
        </div>
      </>
    </Fragment>
  )
}

export default Allcategories