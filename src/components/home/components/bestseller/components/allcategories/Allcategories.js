import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Allcategories.module.scss';
import stars from '../../../../../../assests/homepage-logos/stars.png';
import Image from 'next/image';
function Allcategories() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products').then((res) => {
      setProducts(res?.data)
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
          <div className='cardsection row justify-content-center  w-100 mt-4 mb-3 ms-1 '>
            {products?.slice(5, 9).map((item, index) => {
              return (
                <div className='card col-lg-3 col-sm-10 col-xs-10 col-md-10 ' key={index}>
                  <div>
                    <img src={item?.image} alt="no image" className={styles.sellerimagesize} />
                  </div>
                  <div className={styles.cardinsidesection}>
                    <Image src={stars} alt="no image" className={styles.stars} />
                    <div>
                      <span>{item?.title.slice(0, 16)}</span>
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
                      <div className='textpricedashed'>
                        <del>${item?.price}</del>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className={styles.allcategorymainsection}>
          <div className='textseller'>
            Our bestselling sevices
          </div>
          <div className='cardsection row justify-content-center  w-100 mt-4 mb-3 ms-1'>
            {products?.slice(0, 4).map((item, index) => {
              return (
                <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-6 ' key={index}>
                  <div>
                    <img src={item?.image} alt="no image" className={styles.sellerimagesize} />
                  </div>
                  <div className={styles.cardinsidesection}>
                    <Image src={stars} alt="no image" className={styles.stars} />
                    <div>
                      <span>{item?.title.slice(0, 17)}</span>
                    </div>
                    <div className='mb-4'>
                      <span className='textgrey'>{item?.brand}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </>
    </Fragment>
  )
}

export default Allcategories