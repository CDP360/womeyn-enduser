import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Pagination from 'rc-pagination';


import rightarrow from '../../../../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../../../../assests/category-logos/rightcategoryarrow.png';
import Image from 'next/image';

import styles from './styles/Maincategory.module.scss';

import Searchcategorycards from '../serachcategorycards/Searchcategorycards';
import { SearchProductUser } from '../../../../../../services/category-services/category-service';
import LoaderLogo from '../../../../../loaderlogo/LoaderLogo';


function Maincategorysearch({ name, searchnamevalue }) {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [dummy, setDummy] = useState([]);
    const [limit, seLimit] = useState([]);
    const [current, setCurrent] = useState(1);
   
    useEffect(() => {
        getproducts();
    }, [name, searchnamevalue])
    const getproducts = () => {
        setLoading(true);
        
        SearchProductUser(name).then((res) => {
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
        const resdata = await ProductCatgorylist(names, current, searchnamevalue);
        setProducts(resdata?.data?.results);
    }
    const handleChangePagecount = async (e) => {
        setCurrent(e);
        const current = e;
        await fetchCurrentData(name, current, searchnamevalue);
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

                    <LoaderLogo />

                </> : <div >
                    {product?.length === 0 ? <div>
                        {/* {CartDataProduct?.map((item, index) => {
                            return ( */}
                        {/* <div key={index}> */}
                        <div className="text-center fs-2 d-flex align-items-center justify-content-center">

                            No Categorys Records..
                        </div>
                        {/* </div>
                            )
                        })} */}

                    </div > : <div className="row gap-3">
                        {product?.map((item, index) => {
                            return (
                                <>
                                    <Searchcategorycards item={item} />
                                </>
                            )
                        })}
                    </div>}
                </div>}
            </div>

            {product?.length > 0 && <div className='d-flex justify-content-center mt-4'>
                <Pagination
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

export default Maincategorysearch;