import React from 'react'
import Slider from "react-slick";
import styles from './styles/AllCatgorycard.module.scss';
import Image from 'next/image';
import { useRouter } from 'next/router'
import SlideNextArrowcategory from './slidenextarrow/SlideNextArrow';
import SlidePreArrowcategory from './slideprearrow/SlidePreArrow';



function AllCategoryCard({ products, stars }) {
    const history = useRouter();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrowcategory />,
        prevArrow: <SlidePreArrowcategory />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    const categoryPush = (data) => {
        history.push(`/product/${data}`);
    }


    return (
        <div className={styles.appcard}>
            {products?.length > 4 ? <>
                <Slider {...settings}>
                    {products.map((item, index) => {
                        return (
                            <div className={styles.cardcategory} key={index}>
                                <div className={styles.cardsections}>
                                    <div className="cards col-lg-12 mb-1 " onClick={() => categoryPush(item?.productSlugName)}>
                                        <div className={styles.imagebox}>
                                            {item?.productThumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.productThumbImage}`} alt="no image" className={"productimages"} /> : <>
                                                <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                            </>}
                                        </div>
                                        <div className={styles.cardinsidesection}>
                                            <div className={styles.productNametext}>
                                                {item?.productName?.length > 60 ? <>{item?.productName.slice(0, 60)}...</> : <>{item?.productName}</>}
                                            </div>
                                            {/* <div>
                                                <span className='textgrey'>{item?.brand}</span>
                                            </div> */}
                                            <div className={styles.cardsellerborder}>
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
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </Slider>
            </> : <>
                <div className='row d-flex gap-2 p-0 m-0'>
                    {products.map((item, index) => {
                        return (
                            <div className={styles.cardcategorys} key={index}>

                                <div onClick={() => categoryPush(item?.productSlugName)}>
                                    <div className={styles.imagebox}>
                                        {item?.productThumbImage ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.productThumbImage}`} alt="no image" className={'productimages'} /> : <>
                                            <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3rp7MO_R9Zoskfh9fltePWEsxbRsnAzP63jQEOKf2ml2jngqCCGiq-QL3KinCJk9BX0o&usqp=CAU"} alt="no image" />
                                        </>}
                                    </div>
                                    <div className={styles.cardinsidesection}>
                                        {/* <Image src={stars} alt="no image" className={styles.stars} /> */}
                                        {/* <div className="mt-3">
                                            <div className={styles.productname}>{item?.productName.length >= 10 ? <>{item?.productName.slice(0, 17)}...</> : <>{item?.productName}</>}</div>
                                        </div> */}
                                        <div className={styles.productNametext}>
                                            {item?.productName?.length > 60 ? <>{item?.productName.slice(0, 60)}...</> : <>{item?.productName}</>}
                                        </div>
                                        {/* <div>
                                            <span className='textgrey'>{item?.brand}</span>
                                        </div> */}
                                        <div className={styles.cardsellerborder}>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </>}

        </div>
    )
}

export default AllCategoryCard