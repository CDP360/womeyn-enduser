import React, { Fragment, useState, useEffect, useContext } from 'react'
import styles from './styles/Womenview.module.scss';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Reviewsproduct from './Reviews/Reviewsproduct';
import Caroselproducts from './carouselproducts/Caroselproducts';
import { ContextStore } from '../../../../../Redux/store/Contextstore';
import starstart from '../../../../../assests/category-logos/starstart.png';
import starend from '../../../../../assests/category-logos/starend.png';
import { ProductView, ProductLikeWishlist, ProductLikeWishlistGet, ProductLikeandUnlikeCheck } from '../../../../../services/productview-service/productview-services';
import location from '../../../../../assests/product-logo/locationdelivery.png';
import heartlike from '../../../../../assests/product-logo/likefullcolor.png';
import heartunlike from '../../../../../assests/product-logo/likeborder.png';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
function Viewproducts({ id }) {
    const history = useRouter();
    const [tokencheck, setTokenset] = useState("");
    const { dispatch } = useContext(ContextStore);
    const [indexs, setIndex] = useState(0);
    const [productdata, setProductData] = useState([]);
    const [productvariations, setProductVariations] = useState([]);
    const [productreview, setProductReview] = useState([]);
    const [productimages, setProductImage] = useState([]);
    const [productseller, setProductseller] = useState([]);
    const [index1, setIndex1] = useState(null);
    const [index2, setIndex2] = useState(null);
    const [index3, setIndex3] = useState(null);
    const [index4, setIndex4] = useState(null);

    const [like, setLike] = useState(true);
    const productnames = id;
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const Checkout = (cartdata, productvariations) => {


        const datas = productvariations?.length >= 0 && productvariations[0]?.name;
        const datas1 = productvariations?.length >= 1 && productvariations[0]?.name && productvariations[1]?.name;
        const datas2 = productvariations?.length >= 2 && productvariations[0]?.name && productvariations[1]?.name && productvariations[2]?.name;


        const overalls=[]
        if (datas) {

           
            overalls.push(
                {
                    name: datas,
                    value: productSize1
                }
            )
           
            const urls = `Please Select ${datas}`;
            if (productSize1.length === 0) {
                toast.error(urls,
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
            }
               

        }

        if(datas)
        {
            if(productSize1)
            {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:overalls, couponName: "", sellerBusinessName: productseller?.businessSlugName } });

            }
        }
        else
        {
                router?.push("/login?redirect=/checkout")

        dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:[], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        }
        const overalls1=[]
        if (datas1) {
            overalls1.push(
                {
                    name: datas,
                    value: productSize1
                },
                {
                    name: datas1,
                    value: productSize2
                }
            )
        
        }
        if(datas1)
        {
            if(productSize2)
            {
                router?.push("/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:overalls1, couponName: "", sellerBusinessName: productseller?.businessSlugName } });

            }
        }
        else
        {
                router?.push("/checkout")

        dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:[], couponName: "", sellerBusinessName: productseller?.businessSlugName } });

        }




        // const name = productvariations[0]?.name;
        // const dataSize = {
        //     name: name,
        //     value: productSize
        // }
        // const urls = `Please Select ${name}`;
        // if (name) {
        //     if (productSize.length === 0) {
        //         toast.error(urls,
        //             {
        //                 position: "top-center",
        //                 autoClose: 3000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "dark",
        //             }
        //         );
        //     }
        // }

        // if (name) {
        //     if (productSize) {
        //         router?.push("/checkout")
        //         dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [dataSize], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        //     }
        // }
        // else {
        //     router?.push("/checkout")
        //     dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [dataSize], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        // }
    }
    const CheckLoginUsers = (data) => {
        const PathQuery = history?.asPath
        localStorage.setItem("productwhishlist", JSON.stringify(PathQuery));
        router.push(`/login?redirect=/product/${data}`);
    }

    const [likecheck, setLikecheck] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productSize1, setProductSize1] = useState("");
    const [productSize2, setProductSize2] = useState("");
    const [productSize3, setProductSize3] = useState("");
    const [productSize4, setProductSize4] = useState("");
    const handleSizeProduct1 = (data) => {
        console.log(data, "data")
        setProductSize1(data);
    }
    const handleSizeProduct2 = (data) => {
        setProductSize2(data);
    }
    const handleSizeProduct3 = (data) => {
        setProductSize3(data);
    }
    const handleSizeProduct4 = (data) => {
        setProductSize4(data);
    }

    const handleChange = (cartdata, productvariations) => {


     

        const datas = productvariations?.length >= 0 && productvariations[0]?.name;
        const datas1 = productvariations?.length >= 1 && productvariations[0]?.name && productvariations[1]?.name;
        const datas2 = productvariations?.length >= 2 && productvariations[0]?.name && productvariations[1]?.name && productvariations[2]?.name;


        const overalls=[]
        if (datas) {

           
            overalls.push(
                {
                    name: datas,
                    value: productSize1
                }
            )
           
            const urls = `Please Select ${datas}`;
            if (productSize1.length === 0) {
                toast.error(urls,
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
            }
               

        }

        if(datas)
        {
            if(productSize1)
            {
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:overalls, couponName: "", sellerBusinessName: productseller?.businessSlugName } });

            }
        }
        else
        {
        dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:[], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        }
        const overalls1=[]
        if (datas1) {
            overalls1.push(
                {
                    name: datas,
                    value: productSize1
                },
                {
                    name: datas1,
                    value: productSize2
                }
            )
        
        }
        if(datas1)
        {
            if(productSize2)
            {
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:overalls1, couponName: "", sellerBusinessName: productseller?.businessSlugName } });

            }
        }
        else
        {
        dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:[], couponName: "", sellerBusinessName: productseller?.businessSlugName } });

        }



       
       

  
       

        
      



      



        // const name = productvariations[0]?.name;
        // const dataSize = {
        //     name: name,
        //     value: productSize
        // }
        // const urls = `Please Select ${name}`;
        // if (name) {
        //     if (productSize.length === 0) {
        //         toast.error(urls,
        //             {
        //                 position: "top-center",
        //                 autoClose: 3000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "dark",
        //             }
        //         );
        //     }
        // }
        // if (name) {
        //     if (productSize) {
        //         dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [dataSize], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        //     }
        // }
        // else {
        //     dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [dataSize], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        // }
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
                const items = item?.variationValues.length;
                const forms = item?.variationValues.split(",", items);
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
        const tokencheck = localStorage.getItem("womenUserToken");
        setTokenset(tokencheck)
    }, [productnames, tokencheck, index1, index2, index3, index4]);

    useEffect(() => {
        ProductLikeWishlistGet().then((res) => {
            console.log("res", res)
        }).catch((err) => {
            console.log(err);
        })

        ProductLikeandUnlikeCheck(likecheck).then((res) => {
            console.log(res?.data, "likecheck")
        }).catch((err) => {
            console.log(err);
        })
    }, [productSize, productseller, likecheck])


    const LikeWishlist = (id) => {
        setLikecheck(id);
        if (like) {
            const likeid = {
                productId: id
            }
            ProductLikeWishlist(likeid).then((res) => {

            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            const likeid = {
                wishlistId: id
            }
            ProductLikeWishlist(likeid).then((res) => {
            }).catch((err) => {
                console.log(err);
            })
        }

    }
    const productSellerPageView = (data) => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
        history.push(`/womenpreneurs/${data}`);
    }

    const buyNowPathNavigate = (cartdata, productvariations) => {
        const pathnames = "/checkout";
        localStorage.setItem("productwhishlist", JSON.stringify(pathnames));



        
        const datas = productvariations?.length >= 0 && productvariations[0]?.name;
        const datas1 = productvariations?.length >= 1 && productvariations[0]?.name && productvariations[1]?.name;
        const datas2 = productvariations?.length >= 2 && productvariations[0]?.name && productvariations[1]?.name && productvariations[2]?.name;


        const overalls=[]
        if (datas) {

           
            overalls.push(
                {
                    name: datas,
                    value: productSize1
                }
            )
           
            const urls = `Please Select ${datas}`;
            if (productSize1.length === 0) {
                toast.error(urls,
                    {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    }
                );
            }
               

        }

        if(datas)
        {
            if(productSize1)
            {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:overalls, couponName: "", sellerBusinessName: productseller?.businessSlugName } });

            }
        }
        else
        {
                router?.push("/login?redirect=/checkout")

        dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:[], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        }
        const overalls1=[]
        if (datas1) {
            overalls1.push(
                {
                    name: datas,
                    value: productSize1
                },
                {
                    name: datas1,
                    value: productSize2
                }
            )
        
        }
        if(datas1)
        {
            if(productSize2)
            {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:overalls1, couponName: "", sellerBusinessName: productseller?.businessSlugName } });

            }
        }
        else
        {
                router?.push("/login?redirect=/checkout")

        dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations:[], couponName: "", sellerBusinessName: productseller?.businessSlugName } });

        }














        // const name = productvariations[0]?.name;
        // const dataSize = {
        //     name: name,
        //     value: productSize
        // }
        // const urls = `Please Select ${name}`;
        // if (name) {
        //     if (productSize.length === 0) {
        //         toast.error(urls,
        //             {
        //                 position: "top-center",
        //                 autoClose: 3000,
        //                 hideProgressBar: false,
        //                 closeOnClick: true,
        //                 pauseOnHover: true,
        //                 draggable: true,
        //                 progress: undefined,
        //                 theme: "dark",
        //             }
        //         );
        //     }
        // }

        // if (name) {
        //     if (productSize) {
        //         router?.push("/login?redirect=/checkout")
        //         dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [dataSize], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        //     }
        // }
        // else {
        //     router?.push("/login?redirect=/checkout")
        //     dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [dataSize], couponName: "", sellerBusinessName: productseller?.businessSlugName } });
        // }
    }

    return (
        <Fragment>
            <div className={styles.mainproductviewscreen}>
                <div className={styles.insideproductview}>
                    <div className={styles.splitproductview}>
                        <div className={styles.leftproductview}>
                            <div className={styles.leftmainsectionslide}>
                                <div className={styles.leftcardimages}>
                                    <div className={styles.imagerowsection}>
                                        {productimages?.map((item, index) => {
                                            return (
                                                <div className={`${indexs === index ? styles.activewomen : styles.borderimages}`} onClick={() => setIndex(index)} key={index}>
                                                    {item?.name ? <><img
                                                        className={styles.imagecards}
                                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.name}`}
                                                        alt="profile-pic"
                                                    /></> : <>
                                                        <Skeleton />
                                                    </>}
                                                </div>
                                            )
                                        })}
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
                                        </div>

                                        {tokencheck ? <div className={styles.heartimagesection}>
                                            <button className={styles.btn} onClick={() => {
                                                setLike(!like)
                                                LikeWishlist(productdata?.id)
                                            }}>
                                                {like ? <>
                                                    <Image src={heartunlike} alt="no image" className={styles.heartlikes} />

                                                </> : <>
                                                    <Image src={heartlike} alt="no image" className={styles.heartlikes} />
                                                </>}
                                            </button>
                                        </div> :
                                            <div className={styles.heartimagesection}>
                                                <button className={styles.btn} onClick={() => {
                                                    CheckLoginUsers(productdata?.productSlugName)
                                                    // LikeWishlist(productdata?.id)
                                                }}>

                                                    <Image src={heartunlike} alt="no image" className={styles.heartlikes} />
                                                </button>
                                            </div>
                                        }
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

                            <div>


                                <div className={styles.fontweightsizes}> {productvariations[0]?.name}:</div>
                                <div className={styles.sizesection}>
                                    <div className={styles.sizes}>
                                        {productvariations[0]?.variationValues?.map((item, index) => {
                                            return (
                                                <div className={`${index1 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => {
                                                    setIndex1(index)
                                                    handleSizeProduct1(item);
                                                }} key={index}>
                                                    {item}
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>

                                <div className={styles.fontweightsizes}> {productvariations[1]?.name ? <>{productvariations[1]?.name}:</> : <></>} </div>
                                <div className={styles.sizesection}>
                                    <div className={styles.sizes}>
                                        {productvariations[1]?.variationValues?.map((item, index) => {
                                            return (
                                                <div className={`${index2 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => {
                                                    setIndex2(index)
                                                    handleSizeProduct2(item);
                                                }} key={index}>
                                                    {item}
                                                </div>
                                            )
                                        })}
                                    </div>

                                </div>
                                <div className={styles.fontweightsizes}> {productvariations[2]?.name ? <>{productvariations[2]?.name}:</> : <></>} </div>
                                <div className={styles.sizesection}>
                                    <div className={styles.sizes}>
                                        {productvariations[2]?.variationValues?.map((item, index) => {
                                            return (
                                                <div className={`${index3 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => {
                                                    setIndex3(index)
                                                    handleSizeProduct3(item);
                                                }} key={index}>
                                                    {item}
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className={styles.fontweightsizes}> {productvariations[3]?.name ? <>{productvariations[3]?.name}:</> : <></>} </div>
                                {productvariations[3]?.variationValues?.map((item, index) => {
                                    return (
                                        <div className={`${index4 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => {
                                            setIndex4(index)
                                            handleSizeProduct4(item);
                                        }} key={index}>
                                            {item}
                                        </div>
                                    )
                                })}
                                <div className={styles.fontweightsizes}> {productvariations[4]?.name ? <>{productvariations[4]?.name}:</> : <></>} </div>
                                <div className={styles.fontweightsizes}> {productvariations[5]?.name ? <>{productvariations[5]?.name}:</> : <></>} </div>
                                <div className={styles.fontweightsizes}> {productvariations[6]?.name ? <>{productvariations[6]?.name}:</> : <></>} </div>
                            </div>

                            {/* <div className="mt-2">
                                <div className={styles.fontweightsizes}></div>
                                <div className={styles.sizesection}>
                                    <div className={styles.sizes}>
                                        {productvariations?.map((item, index) => {
                                            return (
                                                <>
                                                    {
                                                        item?.name?.toLowerCase() == "size" ? <>
                                                            <div className={styles.fontweightsizes}>{item?.name}:</div>
                                                            {item?.variationValues?.map((items, index) => {
                                                                return (
                                                                    <div className={`${index1 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => {
                                                                        setIndex1(index)
                                                                        handleSizeProduct(items);
                                                                    }} key={index}>
                                                                        {items}
                                                                    </div>
                                                                )
                                                            })}

                                                        </> : <></>
                                                    }


                                                </>
                                            )
                                        })}
                                    </div>

                                </div>

                                <div>
                                    <div className={styles.sizesection}>
                                        <div className={styles.sizes}>
                                            {productvariations?.map((item, index) => {
                                                return (
                                                    <>
                                                        {
                                                            item?.name?.toLowerCase() == "color" ? <>
                                                                <div className={styles.fontweightsizes} key={index}>{item?.name}:</div>
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
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            <div className={styles.buttons}>
                                <div>
                                    {tokencheck ?
                                        <Button className={styles.bynowcartbutton} onClick={() => Checkout(productdata, productvariations)}>
                                            Buy Now
                                        </Button> :
                                        <Button className={styles.bynowcartbutton} onClick={() => buyNowPathNavigate(productdata, productvariations)}>
                                            Buy Now
                                        </Button>
                                    }
                                </div>
                                <div>
                                    <Button className={styles.addcartbutton} onClick={() => handleChange(productdata, productvariations)}>
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
                                <div className={styles.nameinseller} onClick={() => productSellerPageView(productseller?.businessSlugName)} >
                                    {productseller?.firstName}
                                </div>
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