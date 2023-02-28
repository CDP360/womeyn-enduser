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
function Maincategorylist() {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [current, setCurrent] = useState(1);
    const PerPageChange = (value) => {
        setSize(value);
        const newPerPage = Math.ceil(datas.length / value);
        if (current > newPerPage) {
            setCurrent(newPerPage);
        }
    }
    const getData = (current, pageSize) => {
        // Normally you should get the data from the server
        return product.slice((current - 1) * pageSize, current * pageSize);
    };
    const PaginationChange = (page, pageSize) => {
        setCurrent(page);
        setSize(pageSize)
    }


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
        }, {
            id: 11,
            name: "s8",
            image: c11
        }, {
            id: 12,
            name: "s9",
            image: c12
        }, {
            id: 13,
            name: "s10",
            image: c13
        }, {
            id: 14,
            name: "s11",
            image: c14
        },
        {
            id: 15,
            name: "s12",
            image: c1,

        },
        {
            id: 16,
            name: "s13",
            image: c2
        },
        {
            id: 17,
            name: "s14",
            image: c3
        }, {
            id: 18,
            name: "s15",
            image: c4
        }, {
            id: 19,
            name: "s16",
            image: c5
        }, {
            id: 20,
            name: "s17",
            image: c6
        }, {
            id: 21,
            name: "s18",
            image: c7
        }, {
            id: 22,
            name: "s19",
            image: c8
        }, {
            id: 23,
            name: "s20",
            image: c9
        }, {
            id: 24,
            name: "s21",
            image: c10
        }, {
            id: 25,
            name: "s22",
            image: c11
        }, {
            id: 26,
            name: "s23",
            image: c12
        }, {
            id: 27,
            name: "s24",
            image: c13
        }, {
            id: 28,
            name: "s25",
            image: c14
        },

    ]
    let componentrender = true;
    useEffect(() => {
        const getproducts = async () => {
            setLoading(true);
            if (componentrender) {
                setProducts(await CartDataProduct);
                setLoading(false);
            }
            return () => {
                componentrender = false;
                setLoading(false);

            }
        }
        getproducts();
    }, [])


    console.log("count", perPage)

    const PrevNextArrow = (current, type, originalElement) => {
        if (type === 'prev') {
            return <button className={perPage>11? "activess" : "disactive"}>
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
                    Loading....
                    <Skeleton count={product.length} />
                </> : <div className='row justify-content-center gap-5'>
                    {getData(current, size)?.map((item, index) => {
                        return (
                            <>
                                <Categorycard item={item} />
                            </>
                        )
                    })}
                </div>}
            </div>

            <div className='d-flex justify-content-center mt-4'>
                <Pagination
                    className="pagination-data"
                    onChange={PaginationChange}
                    total={product.length}
                    current={current}
                    pageSize={size}
                    showSizeChanger={false}
                    itemRender={PrevNextArrow}
                    onShowSizeChange={PerPageChange}
                />
            </div>
        </div>
    )
}

export default Maincategorylist