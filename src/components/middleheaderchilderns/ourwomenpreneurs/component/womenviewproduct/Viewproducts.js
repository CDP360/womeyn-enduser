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
import { Cartactions } from '../../../../../Redux/actions/cart/Cartdata';
import Reviewsproduct from './Reviews/Reviewsproduct';
import Caroselproducts from './carouselproducts/Caroselproducts';
import { ContextStore } from '../../../../../Redux/store/Contextstore';
import starstart from '../../../../../assests/category-logos/starstart.png';
import starend from '../../../../../assests/category-logos/starend.png';
import { ProductView, ProductLikeWishlist, ProductLikeWishlistGet } from '../../../../../services/productview-service/productview-services';

import location from '../../../../../assests/product-logo/locationdelivery.png';
import heartlike from '../../../../../assests/product-logo/heartred.png';
import heartunlike from '../../../../../assests/product-logo/heart.png';


function Viewproducts({ id }) {
    const { state, dispatch } = useContext(ContextStore);
    const [indexs, setIndex] = useState(0);
    const [productdata, setProductData] = useState([]);
    const [productvariations, setProductVariations] = useState([]);
    const [productreview, setProductReview] = useState([]);
    const [productimages, setProductImage] = useState([]);
    const [productseller, setProductseller] = useState([]);

    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);

    const [like, setLike] = useState(true);

    const productnames = id;
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
    useEffect(() => {
        ProductView(productnames).then((res) => {
            setProductseller(res?.data?.sellerInformation[0])
            const productshowimages = [];
            res?.data?.productDetails?.productImages?.map((item, index) => {
                productshowimages?.push(item)
            })
            productshowimages?.unshift({
                id: 0,
                name: res?.data?.productDetails?.productThumbImage
            });
            setProductImage(productshowimages);
            setProductData(res?.data?.productDetails);
            setProductReview(res?.data?.reviews);
            const variationdata = [];
            setProductVariations(variationdata);
            res?.data?.variations.map((item) => {
                const y = item?.variationValues.length;
                const forms = item?.variationValues.split(",", y);
                const datas = {
                    id: item?.id,
                    name: item?.name,
                    sellerId: item?.sellerId,
                    stateId: item?.stateId,
                    variationValues: forms
                };
                variationdata.push(datas);
            });
        }).catch((err) => {
            console.log(err);
        });
    }, [productnames]);


    useEffect(() => {
        ProductLikeWishlistGet().then((res) => {
            console.log("res", res)
        }).catch((err) => {
            console.log(err);
        })
    }, [])


    const LikeWishlist = (id) => {

        if (like) {
            console.log(like, "like", "id", id)

            const likeid = {
                productId: id
            }
            // ProductLikeWishlist(likeid).then((res) => {
            //     console.log(res);
            // }).catch((err) => {
            //     console.log(err);
            // })
        }
        else {

            const likeid = {
                wishlistId: id
            }
            // ProductLikeWishlist(likeid).then((res) => {
            //     console.log(err)
            // }).catch((err) => {
            //     console.log(err);
            // })
            console.log(like, "like", "id", id)

        }

    }

    console.log("productseller", productseller?.firstName)



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
                                        {/* {productdata?.productImages?.map((item, index) => {
                                            return (
                                                <div>
                                                    <img
                                                        width={"110px"}
                                                        height={"110px"}
                                                        style={{ borderRadius: "50%", cursor: "pointer" }}
                                                        className={styles.editprofilesection}
                                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.name}`}
                                                        alt="profile-pic"
                                                    />
                                                </div>
                                            )
                                        })} */}



                                        {productimages?.map((item, index) => {
                                            return (
                                                <div className={`${indexs === index ? styles.activewomen : styles.borderimages}`} onClick={() => setIndex(index)} key={index}>
                                                    <img
                                                        className={styles.imagecards}
                                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.name}`}
                                                        alt="profile-pic"
                                                    />
                                                    {/* <Image src={items} alt="no image" className={styles.imagecards} /> */}
                                                </div>
                                            )
                                        })}



                                        {/* {data?.images?.map((items, index) => {
                                            return (
                                                <div className={`${indexs === index ? styles.activewomen : styles.borderimages}`} onClick={() => setIndex(index)}>
                                                    <Image src={items} alt="no image" className={styles.imagecards} />
                                                </div>
                                            )
                                        })} */}
                                    </div>
                                </div>
                                <div className={styles.rightcardimagesshow}>
                                    <div className={styles.leftwomensearchsection}>
                                        <div>

                                            <img
                                                className={styles.serachlargeimage}
                                                src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages[indexs]?.name}`}
                                                alt="profile-pic"
                                            />
                                            {/* <Image src={productimages[indexs]?.name} alt="no image" className={styles.serachlargeimage} /> */}
                                        </div>
                                        <div className={styles.heartimagesection}>
                                            <button className={styles.btn} onClick={() => {
                                                setLike(!like)
                                                LikeWishlist(productdata?.id)
                                            }}>
                                                {like ? <>
                                                    <Image src={heartunlike} alt="no image" className={styles.heartlikes} />

                                                </> : <>
                                                    <Image src={heartlike} alt="no image" className={styles.heartlikes} />
                                                </>}
                                                {/* <ion-icon name="heart-outline" size="large"></ion-icon> */}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightproductview}>
                            <div className={styles.rigthcontenttexts}>{productdata?.productName}</div>
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
                                    {productdata?.offerPercentag == 0 ? <>
                                    </> : <>
                                        {productdata?.offerPercentag}% off
                                    </>}
                                </div>
                                <div className={styles.priceautual}>
                                    <div className={styles.prices}>${productdata?.salePrice}</div>
                                </div>
                                <div className='textpricedashed' >
                                    {productdata?.offerPercentag == 0 ? <></> : <del className={styles.priceautuals}>${productdata?.actualPrice}</del>}
                                </div>
                            </div>

                            <div className="mt-2">
                                <div className={styles.fontweightsizes}></div>
                                <div className={styles.sizesection}>
                                    <div className={styles.sizes}>
                                        {productvariations?.map((item, index) => {
                                            return (
                                                <>
                                                    {
                                                        item?.name == "Size" ? <>
                                                            <div className={styles.fontweightsizes}>{item?.name}:</div>
                                                            {item?.variationValues?.map((items, index) => {
                                                                return (
                                                                    <div className={`${index1 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => setIndex1(index)} key={index}>
                                                                        {items}
                                                                    </div>
                                                                )
                                                            })}

                                                        </> : <></>
                                                    }


                                                </>
                                            )
                                        })}





                                        {/* {productvariations?.variationValues?.map((item, index) => {
                                            return (
                                                <div className={`${index1 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => setIndex1(index)}>
                                                    {item}

                                                </div>
                                            )
                                        })} */}
                                    </div>

                                </div>

                                <div>

                                    <div className={styles.sizesection}>
                                        <div className={styles.sizes}>
                                            {productvariations?.map((item, index) => {
                                                return (
                                                    <>
                                                        {
                                                            item?.name == "Color" ? <>
                                                                <div className={styles.fontweightsizes}>{item?.name}:</div>
                                                                {item?.variationValues?.map((items, index) => {
                                                                    return (
                                                                        <div className={`${index2 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => setIndex2(index)} key={index}>
                                                                            <div>
                                                                                {items.toLowerCase()}
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })}

                                                            </> : <></>
                                                        }


                                                    </>
                                                )
                                            })}





                                            {/* {productvariations?.variationValues?.map((item, index) => {
                                            return (
                                                <div className={`${index1 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => setIndex1(index)}>
                                                    {item}

                                                </div>
                                            )
                                        })} */}
                                        </div>

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
                                    <Button className={styles.addcartbutton} onClick={() => handleChange(productdata)}>
                                        Add To Cart
                                    </Button>
                                </div>
                            </div>
                            <div className={styles.locationsection}>
                                <div className={styles.deverisection}>
                                    <div>
                                        <Image src={location} alt="no image" className={styles.deliveryicon} />
                                    </div>
                                    <div className={styles.deliverytexts}>Delivery To</div>
                                </div>
                                <div className={styles.inputlocationfield}>

                                    <div>
                                        <input type="text" placeholder='7000' className={styles.location} />
                                    </div>
                                    <div>
                                        <button className={styles.check}>Check</button>
                                    </div>
                                </div>
                                <div className='mt-2'>
                                    Delivery in days Thursday |  <span className={styles.free}>Free</span>  <del> $ 40</del> is orderd before 3:34pm
                                </div>
                            </div>
                            <div className={styles.sellernames}>

                                <div className={styles.sellername}>
                                    Seller  :
                                </div>
                                <div className={styles.nameinseller}>{productseller?.firstName}</div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.descriptionsection}>
                    <div className={styles.additionaldetails}>
                    Product Description 
                         </div>
                        <div>

                            {productdata?.productDescription}
                        </div>

                    </div>

                    {/* 
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
                    </div> */}

                    {/* <div className={styles.viewsection}>
                        <div>
                            View all reviews
                        </div>
                        <div className="mt-2">
                            <ion-icon name="arrow-forward-outline"></ion-icon>
                        </div>
                    </div> */}

                    <div className={styles.productdetailslists}>
                        <div className={styles.additionaldetails}>
                            Product Details
                        </div>
                        <div className={styles.leftproductdetails}>

                            <div className={styles.productdetailsleft}>

                                <div className={styles.listproductdata}>
                                    <div className={styles.leftname}>Product Name</div>
                                    <div className={styles.rightname}>{productdata?.productName}</div>
                                </div>
                                <div className={styles.listproductdata}>
                                    <div className={styles.leftname}>Model Name</div>
                                    <div className={styles.rightname}>{productdata?.modelName}</div>
                                </div>

                                <div className={styles.listproductdata}>
                                    <div className={styles.leftname}>Manufacture Name</div>
                                    <div className={styles.rightname}>{productdata?.manufacturerName}</div>
                                </div>
                            </div>
                            <div className={styles.productdetailsright}>



                                <div className={styles.listproductdata}>
                                    <div className={styles.leftname}>Brand Name</div>
                                    <div className={styles.rightname}>{productdata?.brandName}</div>
                                </div>

                                <div className={styles.listproductdata}>
                                    <div className={styles.leftname}>Style Name</div>
                                    <div className={styles.rightname}>{productdata?.styleName}</div>
                                </div>
                                <div className={styles.listproductdata}>
                                    <div className={styles.leftname}>Manufacture Name</div>
                                    <div className={styles.rightname}>{productdata?.manufacturerName}</div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>



                {productreview?.length > 0 ? <div className={styles.reviewsection}>
                    <div>
                        <Reviewsproduct productreview={productreview} />
                    </div>
                </div> : <></>}

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