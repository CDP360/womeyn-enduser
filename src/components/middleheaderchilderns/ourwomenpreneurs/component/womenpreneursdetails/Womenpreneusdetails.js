import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './styles/Womenpredetails.module.scss';
import logowomen from '../../../../../assests/womeynlogos/logowomeyn.png';
import Image from 'next/image';
import girl1 from '../../../../../assests/womeynlogos/womenlogo.png';
import Beverage from '../beverages/Beverage';
import Superfoods from '../superfoods/Superfoods';
import Healthbars from '../healthbars/Healthbars';
import Baking from '../baking/Baking';
import Sweets from '../sweets/Sweets';
import { WomenpreneursCategoryproducts, WomenpreneursStores } from '../../../../../services/womenpreneurs-services/womenpreneurs-services';
import { WomenpreneursCategorylistStore } from './../../../../../services/womenpreneurs-services/womenpreneurs-services';


function Womenpreneusdetails({ id }) {
    const router = useRouter();

    const [singlecategory,setCategoryId]=useState("");

    const [sellers, setSellers] = useState([]);
    const [productlist, setProductList] = useState([]);
    const [productlistshow, setProductListshow] = useState([]);

    const [categorys,setCategorys]=useState([]);
    const [indexs, setIndexs] = useState(0);
    useEffect(() => {
        // axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        //     setProductList(res?.data);
        // }).catch((err) => {
        //     console.log(err);
        // })


        GetSellerDetails();
        CategoryListStore();

      
    }, [indexs, id, sellers?.id,singlecategory]);


    useEffect(()=>{
        WomenpreneursCategoryproducts(sellers?.id,singlecategory).then((res)=>{
            setProductList(res?.data?.results);
        }).catch((err)=>{
            console.log(err);
        })
    },[id, sellers?.id,singlecategory])




    const GetSellerDetails = () => {
        WomenpreneursStores(id).then((res) => {
            setSellers(res?.data);
        }).catch((err) => {
            console.log(err)
        });
    }



    const CategoryListStore = () => {
        WomenpreneursCategorylistStore(sellers?.id).then((res) => {
            setCategorys(res?.data?.results);
            setCategoryId(res?.data?.results[0]?.id)
        }).catch((err) => {
            console.log(err);
        })
    }


    const productListData=(categoryid)=>{
        WomenpreneursCategoryproducts(sellers?.id,categoryid).then((res)=>{
setProductList(res?.data?.results)
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handlechnagedata = (id) => {
        setIndexs(id);
    }
    const data = [
        {
            id: 1,
            title: "Beverages",

        },
        {
            id: 2,
            title: "Superfoods",

        },
        {
            id: 3,
            title: "Healthbars",

        },
        {
            id: 4,
            title: "Baking",


        },
        {
            id: 5,
            title: "Sweets",


        }
    ];

console.log(productlistshow,"productlistshow")

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
                                {sellers?.productDescription}
                                {/* {sellers?.id} */}
                                {/* Earthy Souls has been built on the belief that we need to live alongside Mother Nature and not exploit it. Our chemical-free approach aims at shielding her from harmful toxins and helps preserve the natural state. Earthy Souls have curated an array of products through traditional practices, with a touch of innovation. These practices and products ensure there is zero pollution, reducing the wastage to almost nil. */}
                            </div>
                        </div>
                        <div className={styles.rightdetailpage}>
                            {sellers?.profileImageName ? <>
                                <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${sellers?.profileImageName}`} alt="no image" className={styles.womenlogo} />
                            </> : <>
                                <Image src={girl1} alt="no image" className={styles.womenlogo} />
                            </>}

                        </div>
                    </div>
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

                    <div className={styles.contentsetiondetails}>

                    <Beverage productlist={productlist}  productlistshow={productlistshow}/>

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