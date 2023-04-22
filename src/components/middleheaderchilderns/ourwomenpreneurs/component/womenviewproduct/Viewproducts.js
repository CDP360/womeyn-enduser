import React, { Fragment, useState, useEffect, useContext } from 'react'
import styles from './styles/Womenview.module.scss';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import Reviewsproduct from './Reviews/Reviewsproduct';
import Caroselproducts from './carouselproducts/Caroselproducts';
import { ContextStore } from '../../../../../Redux/store/Contextstore';
import { ProductView, ProductLikeWishlist, ProductLikeWishlistGet, ProductLikeandUnlikeCheck } from '../../../../../services/productview-service/productview-services';
import location from '../../../../../assests/product-logo/locationdelivery.png';
import heartlike from '../../../../../assests/product-logo/likefullcolor.png';
import heartunlike from '../../../../../assests/product-logo/likeborder.png';
import { toast } from 'react-toastify';
import Skeleton from 'react-loading-skeleton';
import ReactImageMagnify from 'react-image-magnify';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Head from "next/head";
import { DefaultSeo, NextSeo, ArticleJsonLd } from 'next-seo';
import { Rate } from "antd";

function Viewproducts({ id }) {
    const history = useRouter();
    const [errors, setError] = useState(false);
    const [productnotfound, setProductNotfound] = useState(false);
    const [starcount, setStarCount] = useState(null);
    const [ratingcount, setRatingcount] = useState("");
    const [tokencheck, setTokenset] = useState("");
    const { dispatch } = useContext(ContextStore);
    const [indexs, setIndex] = useState(0);
    const [productdata, setProductData] = useState([]);
    const [productvariations, setProductVariations] = useState([]);
    const [productreview, setProductReview] = useState([]);
    const [productimages, setProductImage] = useState([]);
    const [productseller, setProductseller] = useState([]);
    const [averageRatings, setAverageRating] = useState('');
    const [index1, setIndex1] = useState(null);
    const [index2, setIndex2] = useState(null);
    const [index3, setIndex3] = useState(null);
    const [index4, setIndex4] = useState(null);
    const [index5, setIndex5] = useState(null);
    const [like, setLike] = useState(false);
    const productnames = id;
    const router = useRouter();
    const [loading, setLoading] = useState(false);


    const Checkout = (cartdata, productvariations) => {
        const datas = [productvariations[0]?.name];
        const datas1 = [productvariations[0]?.name, productvariations[1]?.name];
        const datas2 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name];
        const datas3 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name, productvariations[3]?.name];
        const datas4 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name, productvariations[3]?.name, productvariations[4]?.name];

        if (datas?.length === productvariations?.length) {
            const values = [
                {
                    name: datas[0],
                    value: productSize1
                }

            ]

            if (productSize1.length === 0) {
                toast.error(`Please select a ${datas[0]}`,
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

            if (datas) {
                if (productSize1) {
                    router?.push("/checkout")

                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas1?.length === productvariations?.length) {
            const values = [
                {
                    name: datas1[0],
                    value: productSize1
                },
                {
                    name: datas1[1],
                    value: productSize2
                }

            ]

            if (productSize1.length === 0 || productSize2?.length === 0) {
                toast.error(`Please select a ${datas1[0]} and ${datas1[1]} `,
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

            if (datas1) {
                if (productSize1 && productSize2) {

                    router?.push("/checkout")


                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas2?.length === productvariations?.length) {

            const values = [
                {
                    name: datas2[0],
                    value: productSize1
                },
                {
                    name: datas2[1],
                    value: productSize2
                },
                {
                    name: datas2[2],
                    value: productSize3
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0) {
                toast.error(`Please select a ${datas2[0]} and ${datas2[1]} and ${datas2[2]} `,
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

            if (datas2) {
                if (productSize1 && productSize2 && productSize3) {

                    router?.push("/checkout")


                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }


        }
        else if (datas3?.length === productvariations?.length) {
            const values = [
                {
                    name: datas3[0],
                    value: productSize1
                },
                {
                    name: datas3[1],
                    value: productSize2
                },
                {
                    name: datas3[2],
                    value: productSize3
                },
                {
                    name: datas3[3],
                    value: productSize4
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0 || productSize4?.length === 0) {
                toast.error(`Please select a ${datas3[0]} and ${datas3[1]} and ${datas3[2]} and ${datas3[3]}`,
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

            if (datas3) {
                if (productSize1 && productSize2 && productSize3 && productSize4) {
                    router?.push("/checkout")

                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });
                }
            }
            else {
                router?.push("/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas4?.length === productvariations?.length) {
            const values = [
                {
                    name: datas4[0],
                    value: productSize1
                },
                {
                    name: datas4[1],
                    value: productSize2
                },
                {
                    name: datas4[2],
                    value: productSize3
                },
                {
                    name: datas4[3],
                    value: productSize4
                },
                {
                    name: datas4[4],
                    value: productSize5
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0 || productSize4?.length === 0 || productSize5?.length === 0) {
                toast.error(`Please select a ${datas4[0]} and ${datas4[1]} and ${datas4[2]} and ${datas4[3]} and ${datas4[4]}`,
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

            if (datas4) {
                if (productSize1 && productSize2 && productSize3 && productSize4 && productSize5) {

                    router?.push("/checkout")

                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else {
            router?.push("/checkout")
            dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

        }
    }
    const CheckLoginUsers = (data) => {
        const PathQuery = history?.asPath
        localStorage.setItem("whish", JSON.stringify(PathQuery));
        router.push(`/login?redirect=/product/${data}`);
    }
    const [likecheck, setLikecheck] = useState("");
    const [productSize, setProductSize] = useState("");
    const [productSize1, setProductSize1] = useState("");
    const [productSize2, setProductSize2] = useState("");
    const [productSize3, setProductSize3] = useState("");
    const [productSize4, setProductSize4] = useState("");
    const [productSize5, setProductSize5] = useState("");


    const handleSizeProduct1 = (data) => {
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
    const handleSizeProduct5 = (data) => {
        setProductSize5(data);
    }

    const handleChange = (cartdata, productvariations) => {

        const datas = [productvariations[0]?.name];
        const datas1 = [productvariations[0]?.name, productvariations[1]?.name];
        const datas2 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name];
        const datas3 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name, productvariations[3]?.name];
        const datas4 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name, productvariations[3]?.name, productvariations[4]?.name];


        if (datas?.length === productvariations?.length) {
            const values = [
                {
                    name: datas[0],
                    value: productSize1
                }

            ]

            if (productSize1.length === 0) {
                toast.error(`Please select a ${datas[0]}`,
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

            if (datas) {
                if (productSize1) {
                    setTimeout(() => {
                        router?.push("/cart")

                    }, 400)
                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                setTimeout(() => {
                    router?.push("/cart")

                }, 400)
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee === null ? 0 : cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargeee } });

            }

        }
        else if (datas1?.length === productvariations?.length) {
            const values = [
                {
                    name: datas1[0],
                    value: productSize1
                },
                {
                    name: datas1[1],
                    value: productSize2
                }

            ]

            if (productSize1.length === 0 || productSize2?.length === 0) {
                toast.error(`Please select a ${datas1[0]} and ${datas1[1]} `,
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

            if (datas1) {
                if (productSize1 && productSize2) {
                    setTimeout(() => {
                        router?.push("/cart")

                    }, 400)
                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee === null ? 0 : cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargeee } });

                }
            }
            else {
                setTimeout(() => {
                    router?.push("/cart")

                }, 400)
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee === null ? 0 : cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargeee } });

            }

        }
        else if (datas2?.length === productvariations?.length) {

            const values = [
                {
                    name: datas2[0],
                    value: productSize1
                },
                {
                    name: datas2[1],
                    value: productSize2
                },
                {
                    name: datas2[2],
                    value: productSize3
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0) {
                toast.error(`Please select a ${datas2[0]} and ${datas2[1]} and ${datas2[2]} `,
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

            if (datas2) {
                if (productSize1 && productSize2 && productSize3) {
                    setTimeout(() => {
                        router?.push("/cart")

                    }, 400)
                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee === null ? 0 : cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargeee } });

                }
            }
            else {
                setTimeout(() => {
                    router?.push("/cart")

                }, 400)
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }


        }
        else if (datas3?.length === productvariations?.length) {
            const values = [
                {
                    name: datas3[0],
                    value: productSize1
                },
                {
                    name: datas3[1],
                    value: productSize2
                },
                {
                    name: datas3[2],
                    value: productSize3
                },
                {
                    name: datas3[3],
                    value: productSize4
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0 || productSize4?.length === 0) {
                toast.error(`Please select a ${datas3[0]} and ${datas3[1]} and ${datas3[2]} and ${datas3[3]}`,
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

            if (datas3) {
                if (productSize1 && productSize2 && productSize3 && productSize4) {
                    setTimeout(() => {
                        router?.push("/cart")

                    }, 400)
                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });
                }
            }
            else {
                setTimeout(() => {
                    router?.push("/cart")

                }, 400)
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas4?.length === productvariations?.length) {
            const values = [
                {
                    name: datas4[0],
                    value: productSize1
                },
                {
                    name: datas4[1],
                    value: productSize2
                },
                {
                    name: datas4[2],
                    value: productSize3
                },
                {
                    name: datas4[3],
                    value: productSize4
                },
                {
                    name: datas4[4],
                    value: productSize5
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0 || productSize4?.length === 0 || productSize5?.length === 0) {
                toast.error(`Please select a ${datas4[0]} and ${datas4[1]} and ${datas4[2]} and ${datas4[3]} and ${datas4[4]}`,
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

            if (datas4) {
                if (productSize1 && productSize2 && productSize3 && productSize4 && productSize5) {
                    setTimeout(() => {
                        router?.push("/cart")

                    }, 400)
                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                setTimeout(() => {
                    router?.push("/cart")

                }, 400)
                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else {
            setTimeout(() => {
                router?.push("/cart")

            }, 400)
            dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge == null ? 0 : cartdata?.localDeliveryChargee } });

        }




    }

    // No Records Found
    useEffect(() => {
        ProductView(productnames).then((res) => {


            console.log(res?.data, "res")

            setProductseller(res?.data?.sellerInformation[0])
            const productshowimages = [];
            res?.data?.productDetails?.productImages?.map((item, index) => {
                productshowimages?.push(item)
            })
            // productshowimages?.unshift({
            //     id: 0,
            //     name: res?.data?.productDetails?.productThumbImage
            // });
            setProductImage(productshowimages);
            setProductData(res?.data?.productDetails);
            setProductReview(res?.data?.reviews);
            setRatingcount(res?.data?.totalReviewsCount)
            setAverageRating(res?.data?.averageRating[0]?.avgRating)
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
        const tokencheck = localStorage.getItem("userToken");
        setTokenset(tokencheck)
    }, [productnames, tokencheck, index1, index2, index3, index4, averageRatings?.avgRating, errors]);

    useEffect(() => {
        //         ProductLikeWishlistGet().then((res) => {
        // console.log(res?.data,"thalas")
        //         }).catch((err) => {
        //             console.log(err);
        //         })
        const productids = JSON.parse(localStorage.getItem("auth"));
        if (productids) {
            ProductLikeandUnlikeCheck(productdata?.id).then((res) => {
                setLike(res?.data);
            }).catch((err) => {
                console.log(err);
            })
        }


    }, [productSize, productseller, productnames, averageRatings?.avgRating, productnotfound, errors]);







    const LikeWishlistlike = (id) => {
        const likeid = {
            productId: id
        }
        ProductLikeWishlist(likeid).then((res) => {
            toast.success("Product added to your Wish List", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            })
            setLike(true)
        }).catch((err) => {
            console.log(err);
        })
    }

    const LikeWishlistunlike = (id) => {
        const likeid = {
            productId: id
        }
        ProductLikeWishlist(likeid).then((res) => {
            toast.success("Product removed from your Wish List", {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",

            })
            setLike(false)
        }).catch((err) => {
            console.log(err);
        })
    }

    const productSellerPageView = (data) => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
        history.push(`/womenpreneurs/${data}`);
    }

    const buyNowPathNavigate = (cartdata, productvariations) => {




        const pathnames = "/checkout";
        localStorage.setItem("whish", JSON.stringify(pathnames));



        const datas = [productvariations[0]?.name];
        const datas1 = [productvariations[0]?.name, productvariations[1]?.name];
        const datas2 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name];
        const datas3 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name, productvariations[3]?.name];
        const datas4 = [productvariations[0]?.name, productvariations[1]?.name, productvariations[2]?.name, productvariations[3]?.name, productvariations[4]?.name];





        if (datas?.length === productvariations?.length) {
            const values = [
                {
                    name: datas[0],
                    value: productSize1
                }

            ]

            if (productSize1.length === 0) {
                toast.error(`Please select a ${datas[0]}`,
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

            if (datas) {
                if (productSize1) {
                    router?.push("/login?redirect=/checkout")

                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas1?.length === productvariations?.length) {
            const values = [
                {
                    name: datas1[0],
                    value: productSize1
                },
                {
                    name: datas1[1],
                    value: productSize2
                }

            ]

            if (productSize1.length === 0 || productSize2?.length === 0) {
                toast.error(`Please select a ${datas1[0]} and ${datas1[1]} `,
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

            if (datas1) {
                if (productSize1 && productSize2) {

                    router?.push("/login?redirect=/checkout")


                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas2?.length === productvariations?.length) {

            const values = [
                {
                    name: datas2[0],
                    value: productSize1
                },
                {
                    name: datas2[1],
                    value: productSize2
                },
                {
                    name: datas2[2],
                    value: productSize3
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0) {
                toast.error(`Please select a ${datas2[0]} and ${datas2[1]} and ${datas2[2]} `,
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

            if (datas2) {
                if (productSize1 && productSize2 && productSize3) {

                    router?.push("/login?redirect=/checkout")


                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

            }


        }
        else if (datas3?.length === productvariations?.length) {
            const values = [
                {
                    name: datas3[0],
                    value: productSize1
                },
                {
                    name: datas3[1],
                    value: productSize2
                },
                {
                    name: datas3[2],
                    value: productSize3
                },
                {
                    name: datas3[3],
                    value: productSize4
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0 || productSize4?.length === 0) {
                toast.error(`Please select a ${datas3[0]} and ${datas3[1]} and ${datas3[2]} and ${datas3[3]}`,
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

            if (datas3) {
                if (productSize1 && productSize2 && productSize3 && productSize4) {
                    router?.push("/login?redirect=/checkout")

                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });
                }
            }
            else {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

            }

        }
        else if (datas4?.length === productvariations?.length) {
            const values = [
                {
                    name: datas4[0],
                    value: productSize1
                },
                {
                    name: datas4[1],
                    value: productSize2
                },
                {
                    name: datas4[2],
                    value: productSize3
                },
                {
                    name: datas4[3],
                    value: productSize4
                },
                {
                    name: datas4[4],
                    value: productSize5
                }
            ]



            if (productSize1.length === 0 || productSize2?.length === 0 || productSize3?.length === 0 || productSize4?.length === 0 || productSize5?.length === 0) {
                toast.error(`Please select a ${datas4[0]} and ${datas4[1]} and ${datas4[2]} and ${datas4[3]} and ${datas4[4]}`,
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

            if (datas4) {
                if (productSize1 && productSize2 && productSize3 && productSize4 && productSize5) {

                    router?.push("/login?redirect=/checkout")

                    dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: values, couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

                }
            }
            else {
                router?.push("/login?redirect=/checkout")

                dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });
            }

        }
        else {
            router?.push("/login?redirect=/checkout")
            dispatch({ type: "CART_SUCCESS", payload: { ...cartdata, quantity: 1, variations: [], couponName: "", sellerBusinessName: productseller?.businessSlugName, deliverycharge: cartdata?.localDeliveryCharge === null ? 0 : cartdata?.localDeliveryChargee } });

        }
    }


    const NavigatePath = () => {
        router?.push("/errorboundary")
    }


    const [pathurl, setPathUrl] = useState("");

    useEffect(() => {
        const origin =
            typeof window !== 'undefined' && window.location.origin
                ? window.location.origin
                : '';

        const URL = `${origin}${router?.asPath}`;
        setPathUrl(URL);
    }, [])
    return (
        <Fragment>
            <>

                <DefaultSeo
                    title={productdata?.productName}
                    description={productdata?.productDescription}
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: pathurl,
                        siteName: `Womeyn.com`,
                        images: {
                            url: `https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages?.productThumbImage}`,
                            width: 850,
                            height: 650,
                            alt: 'Womeyn Image..!!',
                        },
                        article: {
                            publishedTime: '2022-06-21T23:04:13Z',
                            modifiedTime: '2022-01-21T18:04:43Z',
                            authors: [
                                'https://www.example.com/authors/@firstnameA-lastnameA',
                                'https://www.example.com/authors/@firstnameB-lastnameB',
                            ],
                            tags: ['Tag A', 'Tag B', 'Tag C'],
                        },
                    }}
                    twitter={{
                        handle: '@handle',
                        site: '@site',
                        cardType: 'summary_large_image',
                    }}
                />

                <ArticleJsonLd
                    type="BlogPosting"
                    url="https://example.com/blog"
                    title="Manage SEO in NextJS with Next SEO"
                    images={[
                        'https://example.com/photos/1x1/photo.jpg',
                        'https://example.com/photos/4x3/photo.jpg',
                        'https://example.com/photos/16x9/photo.jpg',
                    ]}
                    datePublished="2022-06-21T23:04:13Z"
                    dateModified="2022-06-21T23:04:13Z"
                    authorName="Author Name"
                    description="Next SEO packages simplifies the SEO management in Next Apps with less configurations"
                />
                {/* <Head>
                    <title>{productdata?.productName}</title>
                    <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
                    <meta name="robots" content="index" />
                    <meta property="og:type" content="website" />
                    <meta name="og_site_name" property="og:site_name" content="Womeyn.com" />
                    <meta name="twitter:card" content="app" />
                    <meta name="twitter:site" content="@womeyn" />
                    <meta name="twitter:creator" content="@womeyn" />
                    <meta name="twitter:title" content={productdata?.productName} />
                    <meta name="twitter:description" content={productdata?.productDescription} />
                    <meta property="twitter:image" content={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages?.productThumbImage}`} />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                    <meta name="og_title" property="og:title" content={productdata?.productName} />
                    <meta name="keywords" content={productdata?.productDescription} />
                    <meta name="description" content={productdata?.productDescription} />
                    <meta property="og:description" content={productdata?.productDescription} />
                    <link rel="canonical" href={pathurl} />
                    <meta itemprop="image" content={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages?.productThumbImage}`} />
                    <meta name="og_image" property="og:image" content={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages?.productThumbImage}`} />
                    <meta name="og_url" property="og:url" content={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages?.productThumbImage}`} />
                </Head> */}
            </>
            <div className={styles.mainproductviewscreen}>
                <div className={styles.insideproductview}>
                    <div className={styles.splitproductview}>
                        <div className={styles.leftproductview}>
                            <div className={styles.leftmainsectionslide}>
                                <div className={styles.leftcardimages}>
                                    <div className={styles.imagerowsection}>
                                        {productimages?.map((item, index) => {
                                            return (
                                                <div className={`${indexs === index ? styles.activewomen : styles.borderimages
                                                    } `} onClick={() => setIndex(index)} onMouseOver={() => setIndex(index)} key={index}>
                                                    {item?.name ? <><img
                                                        className={styles.imagecards}
                                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.name}`}
                                                        alt="profile-pic"
                                                    /></> : <>
                                                        <Skeleton />
                                                    </>}
                                                </div >
                                            )
                                        })}
                                    </div >
                                </div >
                                <div className={styles.rightcardimagesshow}>
                                    <div className={styles.leftwomensearchsection}>
                                        <div className={styles.serachlargeimage}>

                                            <div className="d-block d-lg-none">



                                                <img
                                                    className={styles.serachlargeimages}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages[indexs]?.name}`}
                                                    alt="profile-pic"
                                                />
                                            </div>
                                            <div className="d-none d-lg-block">

                                                <ReactImageMagnify
                                                    //  className={styles.serachlargeimages}
                                                    {...{
                                                        smallImage: {

                                                            alt: 'Wristwatch by Ted Baker London',
                                                            isFluidWidth: true,
                                                            src: `https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages[indexs]?.name}`,
                                                            borderRadius: "10px"
                                                        },
                                                        largeImage: {
                                                            src: `https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages[indexs]?.name}`,
                                                            width: 1200,
                                                            height: 1200,
                                                            backgroundColor: "white",
                                                            // border:"3px solid blue"
                                                            zIndex: "989898988989898989898989",
                                                            borderRadius: "10px"


                                                        },
                                                        imageStyle: {
                                                            // border:"2px solid red",
                                                            width: "100%",
                                                            height: "100%",
                                                            maxHeight: "400px",
                                                            objectFit: "contain",
                                                            zIndex: "9898989898",
                                                            backgroundColor: "white",
                                                            borderRadius: "10px"

                                                        },
                                                        // smallImage: {
                                                        //     src: String, (required)
                                                        //     srcSet: String,
                                                        //     sizes: String,
                                                        //     width: Number, (required if isFluidWidth is not set)
                                                        //     height: Number, (required if isFluidWidth is not set)
                                                        //     isFluidWidth: Boolean, (default false)
                                                        //     alt: String,
                                                        //     onLoad: Function,
                                                        //     onError: Function
                                                        // },


                                                    }}


                                                />
                                            </div>



                                        </div>

                                        {tokencheck ? <div className={styles.heartimagesection}>
                                            <button className={styles.btn}
                                                onClick={() => {
                                                    if (!like) {
                                                        LikeWishlistlike(productdata?.id)
                                                    }
                                                    else {
                                                        LikeWishlistunlike(productdata?.id)
                                                    }
                                                }}
                                            >
                                                {like ? <>
                                                    <Image src={heartlike} alt="no image" className={styles.heartlikes} />

                                                </> : <>
                                                    <Image src={heartunlike} alt="no image" className={styles.heartlikes} />


                                                </>}

                                                {/* {like?"kalai true":"kalai false"} */}
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
                            </div >
                        </div >
                        <div className={styles.rightproductview}>
                            <div className={styles.rigthcontenttexts}>{productdata?.productName}</div>
                            <div className={styles.starsection}>
                                <div className={styles.starsections}>
                                    {averageRatings ? <>
                                        {averageRatings === 1 && <Rate defaultValue={1} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 1.5 && <Rate defaultValue={1.5} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 2 && <Rate defaultValue={2} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 2.5 && <Rate defaultValue={2.5} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 3 && <Rate defaultValue={3} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 3.5 && <Rate defaultValue={3.5} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 4 && <Rate defaultValue={4} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 4.5 && <Rate defaultValue={4.5} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}
                                        {averageRatings === 5 && <Rate defaultValue={5} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}

                                    </> : <>

                                        {<Rate defaultValue={0} allowHalf style={{ color: "#54BE43" }}
                                            tooltips={["Bad", "Normal", "Average", "Good", "Very Good"]}
                                            count={5}
                                            disabled
                                        />}




                                    </>}



                                </div>
                                <div>
                                    {ratingcount} Review
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
                                    <div className={styles.prices}>A${productdata?.salePrice}</div>
                                </div>
                                <div className='textpricedashed' >
                                    {productdata?.offerPercentag == 0 ? <></> : <del className={styles.priceautuals}>A${productdata?.actualPrice}</del>}
                                </div>
                            </div>

                            <div className={styles.colorsectionlists}>
                                {productvariations[0]?.name ? <><div className={styles.sizesectionandcolor}>
                                    <div className={styles.fontweightsizes}> {productvariations[0]?.name}</div>
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
                                </div>
                                    {/* <div>
                                       {error && productSize1?.length<=1 ? <span>Please select a {productvariations[0]?.name}</span>:<div></div>}
                                        </div> */}
                                </> : <></>}
                                {productvariations[1]?.name ? <div className={styles.sizesectionandcolor}>
                                    <div className={styles.fontweightsizes}> {productvariations[1]?.name ? <>{productvariations[1]?.name}</> : <></>} </div>
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
                                </div> : <></>}
                                {productvariations[2]?.name ? <div className={styles.sizesectionandcolor}>
                                    <div className={styles.fontweightsizes}> {productvariations[2]?.name ? <>{productvariations[2]?.name}</> : <></>} </div>
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
                                </div> : <></>}
                                {productvariations[3]?.name ? <div className={styles.sizesectionandcolor}>
                                    <div className={styles.fontweightsizes}> {productvariations[3]?.name ? <>{productvariations[3]?.name}</> : <></>} </div>
                                    <div className={styles.sizesection}>
                                        <div className={styles.sizes}>
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
                                        </div>
                                    </div>
                                </div> : <></>}
                                {productvariations[4]?.name ? <div className={styles.sizesectionandcolor}>
                                    <div className={styles.fontweightsizes}> {productvariations[4]?.name ? <>{productvariations[4]?.name}</> : <></>} </div>
                                    <div className={styles.sizesection}>
                                        <div className={styles.sizes}>
                                            {productvariations[4]?.variationValues?.map((item, index) => {
                                                return (
                                                    <div className={`${index5 === index ? styles.activewomensizes : styles.mainsizecard}`} onClick={() => {
                                                        setIndex5(index)
                                                        handleSizeProduct5(item);
                                                    }} key={index}>
                                                        {item}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div> : <></>}
                            </div>
                            {productdata?.stateId == 1 && productdata?.quantityLeft > 0 ?
                                <>
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
                                </> : <>
                                    <div className={styles.buttonss}>
                                        <div>
                                            {tokencheck ?
                                                <Button className={styles.bynowcartbuttons} >
                                                    Buy Now
                                                </Button> :
                                                <Button className={styles.bynowcartbuttons} >
                                                    Buy Now
                                                </Button>
                                            }
                                        </div>
                                        <div>
                                            <Button className={styles.addcartbuttons} >
                                                Add To Cart
                                            </Button>
                                        </div>
                                    </div>
                                </>
                            }

                            <div className={styles.locationsection}>
                                <div>
                                </div>

                                {productdata?.isShippingRequired === 1 ? <>


                                </> : <>

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
                                        Delivery in days Thursday |  <span className={styles.free}>Free</span>  <del> A$ 40</del> is orderd before 3:34pm
                                    </div>
                                </>}


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
                    </div >

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
                </div >
                {productreview?.length > 0 ? <div className={styles.reviewsection}>
                    <div>
                        <Reviewsproduct productreview={productreview} ratingcount={ratingcount} averageRatings={averageRatings} />
                    </div>
                </div> : <></>}
                <div>
                    <div>
                        <Caroselproducts productimages={productimages} />
                    </div>
                </div>
            </div >
            <div className={styles.leftbg}>

            </div>
            <div className={styles.righttopbg}></div>


        </Fragment >
    )




}

export default Viewproducts;

