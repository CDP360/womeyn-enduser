import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Categorycard from './categorycard/Categorycard';
import Pagination from 'rc-pagination';


import rightarrow from '../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../assests/category-logos/rightcategoryarrow.png';
import Image from 'next/image';

import styles from './styles/Maincategory.module.scss';
import { ProductCatgorylist } from '../../../services/category-services/category-service';
import LoaderLogo from './../../loaderlogo/LoaderLogo';
import { Nodatafoundimage } from './../../nodatafoundimage/Nodatafound';

import ReactPaginate from 'react-paginate';


function Maincategorylist({ name, searchnamevalue, filterproducts, setFilterproducts, setLoadingproduct, loadingproduct, setProductgetloading }) {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [dummy, setDummy] = useState([]);
    const [limit, seLimit] = useState([]);
    const [current, setCurrent] = useState(1);

    const [pagecount,setPagecount]=useState("");
    const [pagecountnumbers,setPagecountNumbers]=useState(1);

    useEffect(() => {
        getproducts();
    }, [name, searchnamevalue])
    const getproducts = () => {
        setLoadingproduct(true);
        setProductgetloading(false);
        ProductCatgorylist(name).then((res) => {
            seLimit(res?.data);
            setFilterproducts(res?.data?.results);
      setPagecount(res?.data?.totalResults)
            setTimeout(() => {
                setLoadingproduct(false);
            }, 300)
            setProductgetloading(true);
        }).catch((err) => {
            console.log(err);
            setProductgetloading(false);
        })
    }


    // const fetchCurrentData = async (names, current) => {
    //     const resdata = await ProductCatgorylist(names, current, searchnamevalue);
    //     setFilterproducts(resdata?.data?.results);
    // }
    // const handleChangePagecount = async (e) => {
    //     setCurrent(e);
    //     const current = e;
    //     await fetchCurrentData(name, current, searchnamevalue);
    // }

    // const PrevNextArrow = (current, type, originalElement) => {
    //     if (type === 'prev') {
    //         return <button className={perPage > 10 ? "activess" : "disactive"}>
    //             <Image src={leftarrow} alt="no image" className={styles.arrowsizefix} />
    //         </button>
    //     }
    //     if (type === 'next') {
    //         return <button className='activess'>
    //             <Image src={rightarrow} alt="no image" className={styles.arrowsizefix} />
    //         </button>
    //     }
    //     return originalElement;
    // }


    const fetchComments = async (name,current) => {
        const res = await ProductCatgorylist(name,current);
        return res?.data?.results;
      }


   
    
      const handlePageClick = async (data) => {
        let current = data?.selected + 1;
        setPagecountNumbers(current);
        const commentForms = await fetchComments(name,current);
        setFilterproducts(commentForms);
 

      }

    return (
        <div>
            <div>
                {loadingproduct ? <>

                    <LoaderLogo />

                </> : <div >
                    {filterproducts?.length === 0 ? <div>

                        <div>
                            <Nodatafoundimage
                                title="Category Not Available"
                            />
                        </div>


                    </div > : <div className="row gap-2">
                        {filterproducts?.map((item, index) => {
                            return (
                                <>
                                    <Categorycard item={item} />
                                </>
                            )
                        })}
                    </div>}
                </div>}
            </div>

            {/* {filterproducts?.length > 12 && <div className='d-flex justify-content-center mt-4'>
                <Pagination
                    className="pagination-data"
                    total={limit?.totalPages * 10}
                    onChange={handleChangePagecount}
                    current={current}
                    itemRender={PrevNextArrow}
                    breakLabel="..."
                />
            </div>} */
            
            }

          

<div className="mt-3">
    <hr/>
</div>
<div>
   Page {pagecountnumbers} / {pagecount}
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
        nextLabel={"NEXT"}
        onPageChange={handlePageClick}
        pageCount={pagecount/12}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={"PREVIOUS"}

      
   
      />
                            </div>

            
        </div>
    )
}

export default Maincategorylist