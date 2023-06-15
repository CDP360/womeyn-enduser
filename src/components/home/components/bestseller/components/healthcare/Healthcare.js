
import styles from './styles/Healthcare.module.scss';







import React, { Fragment, useEffect, useState } from 'react'

import stars from '../../../../../../assests/homepage-logos/stars.png';
import Image from 'next/image';
function Healthcare() {



  const Products=[
    {
      id:1,
      image:"no image",
      title:"kalai",
      price:400
    },
    {
      id:2,
      image:"no image",
      title:"kalai",
      price:400
    },
    {
      id:3,
      image:"no image",
      title:"kalai",
      price:400
    },
  ]
  return (
    <Fragment>
      <>
        <div className={styles.allcategorymainsection}>
          <div className='textseller'>
            Our bestselling Health Care
          </div>
          <div className='cardsection row justify-content-center  w-100 mt-4 mb-3 ms-1 '>
            {Products?.slice(15, 19).map((item, index) => {
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

      </>
    </Fragment>
  )
}

export default Healthcare