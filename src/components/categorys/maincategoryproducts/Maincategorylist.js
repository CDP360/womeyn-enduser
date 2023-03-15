import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Categorycard from './categorycard/Categorycard';
import Pagination from 'rc-pagination';
import c1 from '../../../assests/category-logos/c1.png';
import c2 from '../../../assests/category-logos/c2.png';
import c3 from '../../../assests/category-logos/c3.png';
import c4 from '../../../assests/category-logos/c4.png';
import c5 from '../../../assests/category-logos/c5.png';
import c6 from '../../../assests/category-logos/c6.png';
import c7 from '../../../assests/category-logos/c7.png';
import c8 from '../../../assests/category-logos/c8.png';
import c9 from '../../../assests/category-logos/c9.png';
import c10 from '../../../assests/category-logos/c10.png';
import c11 from '../../../assests/category-logos/c11.png';
import c12 from '../../../assests/category-logos/c12.png';
import c13 from '../../../assests/category-logos/c13.png';
import c14 from '../../../assests/category-logos/c14.png';

import rightarrow from '../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../assests/category-logos/rightcategoryarrow.png';
import Image from 'next/image';

import styles from './styles/Maincategory.module.scss';
import { ProductCatgorylist } from '../../../services/category-services/category-service';

function Maincategorylist({ name,searchnamevalue }) {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [dummy,setDummy]=useState([]);
    const [limit, seLimit] = useState([]);
    const [current, setCurrent] = useState(1);
    // const PerPageChange = (value) => {
    //     setSize(value);
    //     const newPerPage = Math.ceil(datas.length / value);
    //     if (current > newPerPage) {
    //         setCurrent(newPerPage);
    //     }
    // }
    // const getData = (current, pageSize) => {
    //     // Normally you should get the data from the server
    //     return product.slice((current - 1) * pageSize, current * pageSize);
    // };
    // const PaginationChange = (page, pageSize) => {
    //     setCurrent(page);
    //     setSize(pageSize)
    // }



    const CartDataProduct = [
        {
            id: 1,
            name: "sample",
            image: c1,

        },
        {
            id: 2,
            name: "sample",
            image: c2
        },
        {
            id: 3,
            name: "s",
            image: c3
        }, {
            id: 4,
            name: "s1",
            image: c4
        }, {
            id: 5,
            name: "s2",
            image: c5
        }, {
            id: 6,
            name: "s3",
            image: c6
        }, {
            id: 7,
            name: "s4",
            image: c7
        }, {
            id: 8,
            name: "s5",
            image: c8
        }, {
            id: 9,
            name: "s6",
            image: c9
        }, {
            id: 10,
            name: "s7",
            image: c10
        },

    ]




    let componentrender = true;
    useEffect(() => {
        // const getproducts = async () => {
        //     setLoading(true);
        //     if (componentrender) {
        //         setProducts(await CartDataProduct);
        //         setLoading(false);
        //     }
        //     return () => {
        //         componentrender = false;
        //         setLoading(false);

        //     }
        // }

        getproducts();
    }, [name,searchnamevalue])


  

    const getproducts = () => {
        setLoading(true);
        ProductCatgorylist(name).then((res) => {
            // console.log("nameskalai", res?.data);
            seLimit(res?.data);
            setProducts(res?.data?.results);
            setTimeout(() => {
                setLoading(false);
            }, 300)
        }).catch((err) => {
            console.log(err);
        })
    }
    const fetchCurrentData = async (names, current) => {
        const resdata = await ProductCatgorylist(names, current,searchnamevalue);
        setProducts(resdata?.data?.results);
    }
    const handleChangePagecount = async (e) => {
        setCurrent(e);
        const current = e;
        await fetchCurrentData(name, current,searchnamevalue);
    }

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button className={perPage > 11 ? "activess" : "disactive"}>
                <Image src={leftarrow} alt="no image" className={styles.arrowsizefix} />
            </button>
        }
        if (type === 'next') {
            return <button className='activess'>
                <Image src={rightarrow} alt="no image" className={styles.arrowsizefix} />
            </button>
        }
        return originalElement;
    }
    return (
        <div>
            <div>
                {loading ? <>
                    Loading...

                </> : <div className='row justify-content-center gap-5'>
                    {/* Skeleton */}


                    {product?.length === 0 ? <>


                        {CartDataProduct?.map((item, index) => {
                            return (
                                <div key={index} className="col-lg-3 col-md-6 col-sm-6 col-xs-6 ">
                                    <Skeleton className={styles.skeltons} />
                                </div>
                            )
                        })}

                    </> : <>

                        {product?.map((item, index) => {
                            return (
                                <>
                                    <Categorycard item={item} />
                                </>
                            )
                        })}
                    </>}
                </div>}
            </div>

            {product?.length>9 && <div className='d-flex justify-content-center mt-4'>
                <Pagination
                    // className="pagination-data"
                    // onChange={handleChangePagecount}
                    // total={product.length}
                    // current={current}
                    // pageSize={size}
                    // showSizeChanger={false}
                    // itemRender={PrevNextArrow}
                    // breakLabel="..."


                    className="pagination-data"
                    total={limit?.totalPages * 10}
                    onChange={handleChangePagecount}
                    current={current}
                    itemRender={PrevNextArrow}
                    breakLabel="..."
                />
            </div>}
        </div>
    )
}

export default Maincategorylist