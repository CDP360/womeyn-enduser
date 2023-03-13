import React, { Fragment, useState, useEffect, useContext } from 'react'
import styles from './styles/Womenview.module.scss';
import product1 from '../../../../../assests/womeynlogos/i1.png';
import product2 from '../../../../../assests/womeynlogos/i2.png';
import product3 from '../../../../../assests/womeynlogos/i3.png';
import product4 from '../../../../../assests/womeynlogos/i4.png';
import Image from 'next/image';
import redstar from '../../../../../assests/womeynlogos/redstar.png';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Cartactions } from '../../../../../Redux/actions/cart/Cartdata';
import Reviewsproduct from './Reviews/Reviewsproduct';
import Caroselproducts from './carouselproducts/Caroselproducts';
import { ContextStore } from '../../../../../Redux/store/Contextstore';
import starstart from '../../../../../assests/category-logos/starstart.png';
import starend from '../../../../../assests/category-logos/starend.png';


function Viewproducts({ id }) {
    const { state, dispatch } = useContext(ContextStore);
    const [indexs, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);

    const datas = {
        id: 1,
        image: "image.jpb",
        name: "NEW NEW NEW NEW NEW",
        title: "thala",
        price: 100,
    }

    const router = useRouter();
    const data =
    {
        id: 1,
        images: [
            product1,
            product2,
            product3,
            product4,
            product3,
            product4
        ]
    }

    // const Addtocart=()=>{
    //     router.push("/cart")
    // }
    const Checkout = () => {
        router.push("/checkout")
    }

    const handleChange = (cartdata) => {
        dispatch({ type: "CART_SUCCESS", payload: cartdata });

    }


    const sizes = [

        {
            id: 1,
            name: "M"
        },
        {
            id: 1,
            name: "S"
        },
        {
            id: 1,
            name: "XL"
        },
        {
            id: 1,
            name: "XXL"
        },
        {
            id: 1,
            name: "XXXL"
        }

    ]
    return (
        <Fragment>
            {/* <div className={styles.mainsearchwomen}>
                <div className={styles.emptyboxsection}>
                </div>
                <div className={styles.emptyboxsectionleft}>
                </div>
                <div className={styles.insidesearchwomen}>
                    <div className={styles.splitwomensearch}>
                        <div className={styles.leftwomensearchsection}>
                            <div>
                                <div >
                                    <Image src={data?.images[indexs]} alt="no image" className={styles.serachlargeimage} />

                                </div>
                                <div className={styles.heartimagesection}>
                                    <button className={styles.btn}> <i class="fa-regular fa-heart" ></i></button>
                                </div>

                            </div>

                        </div>
                        <div className={styles.rightwomensearchsection}>
                            <div className="row justify-content-center align-items-center gap-5 mb-5">
                                {data?.images?.map((items, index) => {
                                    return (
                                        <div className={`${indexs === index ? styles.activewomen : ""} ${styles.searchimagesections}`} onClick={() => setIndex(index)}>
                                            <Image src={items} alt="no image" className={` ${styles.imagesearch}`} />
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    </div>


                    <div className={styles.insidesplitanothecart}>
                        <div className={styles.leftinsideanothersection}>
                            <div className={`${styles.ratingsection} mt-2`}>
                                <div className={styles.ratingsections}>
                                    <Image src={redstar} alt="no image" className={styles.star} />
                                    4.5 <span className='text-grey'>(106 ratings)</span>
                                </div>
                                <div className="fs-6">
                                    Top Seller
                                </div>
                            </div>
                            <div className={styles.loreamsectionproduct}>

                                <div className={`${styles.loremtextwidth} medium-text`}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing.
                                </div>
                                <div className="medium-text">
                                    Description
                                </div>
                                <div>
                                    Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo B.,a 3rd degree black-belt and long-time and teacher of variatios. Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo B.,a 3rd degree black-belt and long-time and teacher of variatios
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightinsideanothersection}>
                            <div className={styles.cartaddsection}>
                                <div className={styles.cartpricesection}>
                                    <div><span className='text-grey'><del>$65.00</del></span></div>
                                    <div><span className='active fs-5'><>$43.00</></span></div>

                                </div>

                                <div>
                                    <Button className={styles.addcartbutton} onClick={() => handleChange(datas)}>
                                        Add To Cart
                                    </Button>
                                </div>

                                <div>
                                    <Button className={styles.bynowcartbutton} onClick={Checkout}>
                                        Buy Now
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.reviewsection}>
                    <div>
                        <Reviewsproduct />
                    </div>
                </div>
                <div>
                    <Caroselproducts />
                </div>
            </div> */}

            <div className={styles.mainproductviewscreen}>

                <div className={styles.insideproductview}>

                    <div className={styles.splitproductview}>

                        <div className={styles.leftproductview}>
                            <div className={styles.leftmainsectionslide}>
                            {/* <div>
                                    {indexs+1}/{data?.images?.length}
                                    </div> */}
                                <div className={styles.leftcardimages}>
                                    
                                    <div className={styles.imagerowsection}>
                                        {data?.images?.map((items, index) => {
                                            return (
                                                <div className={`${indexs === index ? styles.activewomen : styles.borderimages}`} onClick={() => setIndex(index)}>
                                                    <Image src={items} alt="no image" className={styles.imagecards} />
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={styles.rightcardimagesshow}>
                                    <div className={styles.leftwomensearchsection}>

                                        <div>
                                            <Image src={data?.images[indexs]} alt="no image" className={styles.serachlargeimage} />
                                        </div>
                                        <div className={styles.heartimagesection}>
                                            <button className={styles.btn}>
                                                <ion-icon name="heart-outline" size="large"></ion-icon></button>
                                        </div>



                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className={styles.rightproductview}>
                            <div className={styles.rigthcontenttexts}>{id}</div>
                            <div className={styles.starsection}>
                                <div className={styles.starsections}>
                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                    <Image src={starend} alt="no image" className={styles.stars} />
                                </div>
                                <div>
                                    712 Ratings
                                </div>

                            </div>
                            <div className={styles.proceinproduct}>
                                <div className={styles.offertext}>
                                    70% off
                                </div>
                                <div className={styles.priceautual}>
                                    <span className={styles.prices}>$1000</span>
                                </div>
                                <div className='textpricedashed' >
                                    <del className={styles.priceautuals}> $1500</del>
                                </div>
                            </div>

                            <div className="mt-2 mb-3">
                                <div className={styles.fontweightsizes}>Size:</div>
                                <div className={styles.sizesection}>
                                    <div className={styles.sizes}>
                                        {sizes.map((item, index) => {
                                            return (
                                                <div className={`${index1 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => setIndex1(index)}>
                                                    {item?.name}

                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>

                            <div className={styles.buttons}>
                                <div>
                                    <Button className={styles.bynowcartbutton} onClick={Checkout}>
                                        Buy Now
                                    </Button>
                                </div>
                                <div>
                                    <Button className={styles.addcartbutton} onClick={() => handleChange(datas)}>
                                        Add To Cart
                                    </Button>
                                </div>



                            </div>
                        </div>


                    </div>

                    <div className="mt-4">
                        <div className="mt-5">
                            Customer Reviews
                        </div>
                        <div>
                            {sizes?.map((item, index) => {
                                return (
                                    <div className={styles.customerreviews}>
                                        <div className={styles.insidecustomersviews}>
                                            <div className={styles.leftcustomers}>
                                                <div>

                                                    Writija Chabria
                                                </div>
                                                <div>
                                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                                    <Image src={starstart} alt="no image" className={styles.stars} />
                                                    <Image src={starend} alt="no image" className={styles.stars} />

                                                </div>

                                                <div>
                                                    Freaking amazing
                                                </div>

                                                <div className={styles.soaps}>

                                                    Soap is nice I mean the smell is great just like lemongrass. I m love in it but only for the smell it's expensive and its only 100g product...and packaging wow superb like it Smell ??
                                                </div>
                                            </div>
                                            <div className={styles.rightcustomers}>
                                                <div>
                                                    Posted a week ago

                                                </div>
                                                <div className={styles.largeellips}>
                                                    <ion-icon name="ellipsis-vertical-outline" size="large"></ion-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.viewsection}>
                  <div>
                  View all reviews 
                  </div>
                    <div className="mt-2">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                    <Caroselproducts />
                </div>
                    </div>
            </div>
        </Fragment>
    )
}

export default Viewproducts;