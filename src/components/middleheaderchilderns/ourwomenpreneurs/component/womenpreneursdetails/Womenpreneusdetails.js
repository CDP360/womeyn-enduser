import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './styles/Womenpredetails.module.scss';
import logowomen from '../../../../../assests/homepage-logos/Mobileviewlogoshort.png';
import Image from 'next/image';
import girl1 from '../../../../../assests/womeynlogos/womenlogo.png';
import Beverage from '../beverages/Beverage';
import { toast } from 'react-toastify';

import Servicescardslist from '../services_cards_list/Servicescardslist'
import Superfoods from '../superfoods/Superfoods';
import Healthbars from '../healthbars/Healthbars';
import Baking from '../baking/Baking';
import Sweets from '../sweets/Sweets';
import { WomenpreneursCategoryproducts, WomenpreneursStores, WomeynpreServiceList } from '../../../../../services/womenpreneurs-services/womenpreneurs-services';
import { WomenpreneursCategorylistStore } from './../../../../../services/womenpreneurs-services/womenpreneurs-services';

import rightarrow from '../../../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../../../assests/category-logos/rightcategoryarrow.png';
import users from '../../../../../assests/womeynlogos/noimage.png';
import Slider from "react-slick";
import SlideNextArrow from './slidenextarrow/SlideNextArrow';
import SlidePreArrow from './slideprearrow/SlidePreArrow';

import w1 from '../../../../../assests/sellerbanners/w1.jpg';
import w2 from '../../../../../assests/sellerbanners/w2.jpg';
import w3 from '../../../../../assests/sellerbanners/w3.jpg';
import w4 from '../../../../../assests/sellerbanners/w4.jpg';
import { Nodatafoundimage } from '../../../../nodatafoundimage/Nodatafound';
import ReactPaginate from 'react-paginate';


function Womenpreneusdetails({ id }) {
    const [limit, setLimit] = useState([]);
    const [current, setCurrent] = useState(1);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [singlecategory, setCategoryId] = useState("");
    const [singlecategoryproduct, setCategoryIdproduct] = useState("");

    const [sellers, setSellers] = useState([]);
    const [productlist, setProductList] = useState([]);
    const [productlistshow, setProductListshow] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [indexs, setIndexs] = useState(0);

    const [pagecount, setPagecount] = useState(1);
    const [pagecountnumbers, setPagecountNumbers] = useState(1);
    const [pagecountcheck, setPagecountCheck] = useState("");


    useEffect(() => {
        GetSellerDetails();
        CategoryListStore();
    }, [indexs, id, sellers?.id, , current]);
    useEffect(() => {
        setLoading(true);
        if(singlecategoryproduct)
        {
        }
        else
        {
             if (sellers?.id || singlecategory) {
            WomenpreneursCategoryproducts(sellers?.id, singlecategory).then((res) => {
                setProductList(res?.data?.results);
                setLimit(res?.data)
                setTimeout(() => {
                    setLoading(false);
                }, 300)
            }).catch((err) => {
                console.log(err);
            })
        }

        }
       

    }, [id, sellers?.id, singlecategory,singlecategoryproduct])


    const GetSellerDetails = () => {
        setLoading(true)
        WomenpreneursStores(id).then((res) => {
            setSellers(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 300)
        }).catch((err) => {
            console.log(err)
        });
    }

    const CategoryListStore = () => {
        setLoading(true);

        if (sellers?.id) {
            WomenpreneursCategorylistStore(sellers?.id).then((res) => {
                setCategorys(res?.data?.results);
                setCategoryId(res?.data?.results[0]?.id)
                // setPagecount(res?.data?.totalResults)
                setTimeout(() => {
                    setLoading(false);
                }, 300)

            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            return null;
        }

    }
    const productListData = (categoryid) => {
        setLoading(true);
        setCategoryIdproduct(categoryid)
        if (sellers?.id || categoryid) {
            WomenpreneursCategoryproducts(sellers?.id, categoryid).then((res) => {
                setProductList(res?.data?.results);
                setPagecount(res?.data?.totalResults)
                setTimeout(() => {
                    setLoading(false);
                }, 300)
            }).catch((err) => {
                console.log(err);
            })
        }
        else {
            return null;
        }

    }
    const handlechnagedata = (id) => {
        setIndexs(id);
    }
    const fetchCurrentData = async (id, current) => {
        if (id || current) {
            const resdata = await WomenpreneursCategoryproducts(id, current);
            setProductList(resdata?.data?.results);
        }
        else {
            return null;
        }

    }
    const handleChangePagecount = async (e) => {
        setCurrent(e);
        const current = e;
        await fetchCurrentData(sellers?.id, current);
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button className='disactive'>
                <Image src={leftarrow} alt="no image" className={styles.arrowsizefix} />
            </button>;
        }
        if (type === 'next') {
            return <button className='activess'>
                <Image src={rightarrow} alt="no image" className={styles.arrowsizefix} />
            </button>;
        }
        return originalElement;

    }


    const [show, setShow] = useState(false);





    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        nextArrow: <SlideNextArrow />,
        prevArrow: <SlidePreArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: false,

                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
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


    const ImageSellers = [
        {
            id: 1,
            image: w1
        },
        {
            id: 2,
            image: w2
        },
        {
            id: 3,
            image: w3
        },
        {
            id: 4,
            image: w4
        },

    ]


    const [serviceslist, setServiceslist] = useState([]);
    const [serviceslistloading, setServiceslistloading] = useState(false);




    useEffect(() => {
        setServiceslistloading(true)
        let isCancelled = true;
        if (sellers?.id) {
            if (isCancelled) {
                WomeynpreServiceList(sellers?.id).then((res) => {
                    setServiceslist(res?.data?.results);

                    setTimeout(() => {
                        setServiceslistloading(false);
                    }, 600)
                }).catch((err) => {
                    console.log(err);
                    setServiceslistloading(false);
                })
            }
        }


        return () => {
            isCancelled = true;
        }
    }, [sellers?.id])


    const fetchComments = async (id,singlecategoryproduct,current) => {
        const res = await WomenpreneursCategoryproducts(id,singlecategoryproduct,current);
        return res?.data?.results;
    }

    const handlePageClick = async (data) => {
        let current = data?.selected + 1;
        setPagecountNumbers(current);
        const commentForms = await fetchComments(sellers?.id,singlecategoryproduct,current);

        goToTop()
        setProductList(commentForms);


    }

    const goToTop = () => {
        window.scrollTo({
            top: 500,
            behavior: "smooth",
        });
    };

  


    return (
        <Fragment >

            <div className="mainsection">
                <div className="insidesection">
                    <div className={styles.maindetailpage}>

                        <div className={styles.insidedetailpage}>

                            <div className='mb-5'>

                                {/* <Slider {...settings}>
            {ImageSellers?.map((item, index) => {
                return (
                    <div key={index}>
                        {item.image ? <img src={item?.image?.src} alt="no image" className={styles.sliderimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                            <Skeleton className={styles.homebanner} />
                        </>}
                    </div>
                )
            })}
        </Slider> */}

                                {w3 ? <img src={w3?.src} alt="no image" className={styles.sliderimage} onClick={() => MovePageData(item.redirectUrl)} /> : <>
                                    <Skeleton className={styles.homebanner} />
                                </>}

                            </div>

                            <div className={styles.splitsectiondetails}>
                                <div className={styles.leftdetailpage}>



                                    {sellers?.profileImageName ? <>
                                        <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${sellers?.profileImageName}`} alt="no image" className={styles.womenlogo} />
                                    </> : <>
                                        <Image src={users} alt="no image" className={styles.womenlogo} />
                                    </>}



                                </div>
                                <div className={styles.rightdetailpage}>

                                    <div className="large-text">
                                        <div className="capital">
                                            {sellers?.firstName}
                                        </div>
                                    </div>
                                    <div className={styles.idsellers}>
                                        {sellers?.businessName}
                                    </div>
                                    <div className={`small-light-text-grey mt-4 ${styles.earthtext}`}>

                                        {show ? <>
                                            {sellers?.profileDescription}<span onClick={() => setShow(!show)} className={styles.lessmore}>Less More...</span>

                                        </> : <div >

                                            {sellers?.profileDescription?.length <= 500 ? <>
                                                {sellers?.profileDescription?.slice(0, 500)}
                                            </> : <>
                                                {sellers?.profileDescription?.slice(0, 500)}<span onClick={() => setShow(!show)} className={styles.readmore}>Read More...</span>

                                            </>}


                                        </div>}
                                    </div>
                                </div>
                            </div>

                            <div>
                                {categorys?.length == 0 ? <></> : <>
                                    <div className={styles.wehave}>
                                        We have loads of <br /> products to choose from
                                    </div>
                                </>}


                            </div>

                            {categorys?.length>0?<>
                                <div className={styles.middleheaderpage}>
                                <div className={styles.insidemiddleheader}>
                                 
                                    {categorys?.map((item, index) => {
                                        return (
                                            <div className={`${indexs === index ? styles.actives : styles.detailpage}`} onClick={() => {
                                                handlechnagedata(index)
                                                productListData(item?.id);
                                            }
                                            }>
                                                {item?.name}
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                            </>:null}
                            

                            <div className={styles.contentsetiondetails}>
                                <Beverage productlist={productlist} productlistshow={productlistshow} loading={loading} sellers={sellers?.businessSlugName} />
                                
{pagecount?.length>0 ? <>
    <div className="mt-3">
                                    <hr />
                                </div>
                                <div>

                                    Page {pagecountnumbers} 
                                    
                                    {/* / {pagecount?pagecount:productlist?.length} */}
                                </div>

                                <div className="mt-3">

                                    <ReactPaginate
                                        activeClassName={'actives '}
                                        breakClassName={'item break-me '}
                                        breakLabel={'...'}
                                        containerClassName={'pagination'}
                                        disabledClassName={'disabled-page'}
                                        marginPagesDisplayed={2}
                                        nextClassName={"item next "}
                                        nextLabel={Math.ceil(pagecount / 12) === pagecountnumbers ? null : "NEXT"}
                                        // nextLabel={Math.ceil(pagecount / 12) === pagecountnumbers ? null : "NEXT"}
                                        onPageChange={handlePageClick}
                                        pageCount={pagecount / 12}
                                        pageClassName={'item pagination-page '}
                                        pageRangeDisplayed={2}
                                        previousClassName={"item previous"}
                                        previousLabel={pagecountnumbers > 1 ? "PREVIOUS" : null}
                                    />
                                </div>

</> : null}
                            </div>
                        </div>
                    </div>

                    <div className="mt-5">
                        <div className={styles.wehaves}>
                            Services
                        </div>
                        <div className="mt-4">
                            <Servicescardslist

                                serviceslist={serviceslist} productlistshow={productlistshow} loading={serviceslistloading}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Womenpreneusdetails;