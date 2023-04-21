import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './styles/Womenpredetails.module.scss';
import logowomen from '../../../../../assests/homepage-logos/Mobileviewlogoshort.png';
import Image from 'next/image';
import girl1 from '../../../../../assests/womeynlogos/womenlogo.png';
import Beverage from '../beverages/Beverage';
import Superfoods from '../superfoods/Superfoods';
import Healthbars from '../healthbars/Healthbars';
import Baking from '../baking/Baking';
import Sweets from '../sweets/Sweets';
import { WomenpreneursCategoryproducts, WomenpreneursStores } from '../../../../../services/womenpreneurs-services/womenpreneurs-services';
import { WomenpreneursCategorylistStore } from './../../../../../services/womenpreneurs-services/womenpreneurs-services';
import Pagination from 'rc-pagination';
import rightarrow from '../../../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../../../assests/category-logos/rightcategoryarrow.png';
import users from '../../../../../assests/womeynlogos/noimage.png';

function Womenpreneusdetails({ id }) {
    const [limit, setLimit] = useState([]);
    const [current, setCurrent] = useState(1);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [singlecategory, setCategoryId] = useState("");
    const [sellers, setSellers] = useState([]);
    const [productlist, setProductList] = useState([]);
    const [productlistshow, setProductListshow] = useState([]);
    const [categorys, setCategorys] = useState([]);
    const [indexs, setIndexs] = useState(0);
    useEffect(() => {
        GetSellerDetails();
        CategoryListStore();
    }, [indexs, id, sellers?.id, , current]);
    useEffect(() => {
        setLoading(true);
        WomenpreneursCategoryproducts(sellers?.id, singlecategory).then((res) => {
            setProductList(res?.data?.results);
            setLimit(res?.data)
            setTimeout(() => {
                setLoading(false);
            }, 300)
        }).catch((err) => {
            console.log(err);
        })
    }, [id, sellers?.id, singlecategory])

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
        WomenpreneursCategorylistStore(sellers?.id).then((res) => {
            setCategorys(res?.data?.results);
            setCategoryId(res?.data?.results[0]?.id)
            setTimeout(() => {
                setLoading(false);
            }, 300)

        }).catch((err) => {
            console.log(err);
        })
    }
    const productListData = (categoryid) => {
        setLoading(true);
        WomenpreneursCategoryproducts(sellers?.id, categoryid).then((res) => {
            setProductList(res?.data?.results);
            setTimeout(() => {
                setLoading(false);
            }, 300)
        }).catch((err) => {
            console.log(err);
        })
    }
    const handlechnagedata = (id) => {
        setIndexs(id);
    }
    const fetchCurrentData = async (id, current) => {
        const resdata = await WomenpreneursCategoryproducts(id, current);
        setProductList(resdata?.data?.results);
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


  
    return (
        <Fragment >
            <div className={styles.maindetailpage}>
                <div className="emptyboxrightcolor">
                </div>
                <div className={styles.insidedetailpage}>
                    <div className={styles.splitsectiondetails}>
                        <div className={styles.leftdetailpage}>
                            <div className={styles.splitleftdetails}>
                                <div>
                                    <Image src={logowomen} alt="no image" className={styles.detailimage} />
                                </div>
                                <div>
                                    <div className="large-text">
                                        <div className="capital">
                                            {sellers?.firstName}
                                        </div>
                                    </div>
                                    <div className="fs-4 capitalfirstletter">
                                        {id}
                                    </div>
                                </div>
                            </div>
                            <div className={`small-light-text-grey mt-4 ${styles.earthtext}`}>
                                {sellers?.profileDescription}

                            </div>
                        </div>
                        <div className={styles.rightdetailpage}>
                            {sellers?.profileImageName ? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${sellers?.profileImageName}`} alt="no image" className={styles.womenlogo} />
                            </> : <>
                                <Image src={users} alt="no image" className={styles.womenlogo} />
                            </>}

                        </div>
                    </div>
                    <div className={styles.middleheaderpage}>
                        <div className={styles.insidemiddleheader}>
                            {categorys?.length == 0 && <div>No Categorys</div>}
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

                    <div className={styles.contentsetiondetails}>
                        <Beverage productlist={productlist} productlistshow={productlistshow} loading={loading} sellers={sellers?.businessSlugName} />
                        {productlist?.length > 8 &&
                            <div className='d-flex justify-content-center mt-4'>
                                <Pagination
                                    className="pagination-data"
                                    total={limit?.totalPages * 10}
                                    onChange={handleChangePagecount}
                                    current={current}
                                    itemRender={PrevNextArrow}
                                    breakLabel="..."
                                />
                            </div>
                        }
                        {/* <div>
                            {indexs === 0 && <div>
                                <Beverage productlist={productlist} />
                            </div>}
                        </div>
                        <div>
                            {indexs === 1 && <div>
                                <Superfoods productlist={productlist}/>
                            </div>}
                        </div>
                        <div>
                            {indexs === 2 && <div>
                                <Healthbars />
                            </div>}
                        </div>
                        <div>
                            {indexs === 3 && <div>
                                <Baking />
                            </div>}
                        </div>
                        <div>
                            {indexs === 4 && <div>
                                <Sweets />
                            </div>}
                        </div> */}
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Womenpreneusdetails;