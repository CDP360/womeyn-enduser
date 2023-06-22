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

import { Nodatafoundimage } from './../../../../../nodatafoundimage/Nodatafound';

import { ProductCatgorylist } from '../../../../../../services/category-services/category-service';

import ReactPaginate from 'react-paginate';





// function Maincategorysearch({ name, searchnamevalue,filterproducts,setFilterproducts ,setLoadingproduct,loadingproduct,setProductgetloading}) {
//     const [product, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [perPage, setPerPage] = useState(10);
//     const [size, setSize] = useState(perPage);
//     const [dummy, setDummy] = useState([]);
//     const [limit, seLimit] = useState([]);
//     const [current, setCurrent] = useState(1);
   
//     useEffect(() => {
//         getproducts();
//     }, [name, searchnamevalue])
//     const getproducts = () => {
//         setLoading(true);
        
//         SearchProductUser(name).then((res) => {
//             seLimit(res?.data);
//             setFilterproducts(res?.data?.results);
//             setTimeout(() => {
//                 setLoading(false);
//             }, 300)
//         }).catch((err) => {
//             console.log(err);
//         })
//     }
//     const fetchCurrentData = async (names, current) => {
//         const resdata = await ProductCatgorylist(names, current, searchnamevalue);
//         setProducts(resdata?.data?.results);
//     }
//     const handleChangePagecount = async (e) => {
//         setCurrent(e);
//         const current = e;
//         await fetchCurrentData(name, current, searchnamevalue);
//     }

//     const PrevNextArrow = (current, type, originalElement) => {
//         if (type === 'prev') {
//             return <button className={perPage > 11 ? "activess" : "disactive"}>
//                 <Image src={leftarrow} alt="no image" className={styles.arrowsizefix} />
//             </button>
//         }
//         if (type === 'next') {
//             return <button className='activess'>
//                 <Image src={rightarrow} alt="no image" className={styles.arrowsizefix} />
//             </button>
//         }
//         return originalElement;
//     }
//     return (
//         <div>
//             <div>
//                 {loading ? <>

//                     <LoaderLogo />

//                 </> : <div >
//                     {product?.length === 0 ? <div>
//                         {/* {CartDataProduct?.map((item, index) => {
//                             return ( */}
//                         {/* <div key={index}> */}
//                         <div className="text-center fs-2 d-flex align-items-center justify-content-center">

//                             No Categorys Records..
//                         </div>
//                         {/* </div>
//                             )
//                         })} */}

//                     </div > : <div className="row gap-3">
//                         {product?.map((item, index) => {
//                             return (
//                                 <>
//                                     <Searchcategorycards item={item} />
//                                 </>
//                             )
//                         })}
//                     </div>}
//                 </div>}
//             </div>

//             {product?.length > 0 && <div className='d-flex justify-content-center mt-4'>
//                 <Pagination
//                     className="pagination-data"
//                     total={limit?.totalPages * 10}
//                     onChange={handleChangePagecount}
//                     current={current}
//                     itemRender={PrevNextArrow}
//                     breakLabel="..."
//                 />
//             </div>}

           
//         </div>
//     )
// }

// export default Maincategorysearch;




function Maincategorysearch({ name, searchnamevalue,filterproducts,setFilterproducts ,setLoadingproduct,loadingproduct,setProductgetloading}) {
    const [product, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [perPage, setPerPage] = useState(10);
    const [size, setSize] = useState(perPage);
    const [dummy, setDummy] = useState([]);
    const [limit, seLimit] = useState([]);
    const [current, setCurrent] = useState(1);
    const [pagecount,setPagecount]=useState("");
    const [pagecountnumbers,setPagecountNumbers]=useState(1);
    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        getproducts();
    }, [name, searchnamevalue])
    const getproducts = () => {
        setLoadingproduct(true);    
        setProductgetloading(false);
        SearchProductUser(name).then((res) => {
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
    //     const resdata = await SearchProductUser(names, current);
    //     setFilterproducts(resdata?.data?.results);
    // }
    // const handleChangePagecount = async (e) => {
    //     setCurrent(e);
    //     const current = e;
    //     await fetchCurrentData(name, current);
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
        const res = await SearchProductUser(name,current);
        return res?.data?.results;
      }

      const handlePageClick = async (data) => {
        let current = data?.selected + 1;
        setPagecountNumbers(current);
        goToTop()
        const commentForms = await fetchComments(name,current);
        setServiceusers(commentForms);
    
      }


      useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 200) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);


      const goToTop = () => {
        window.scrollTo({   
            top: 200,
            behavior: "smooth",
        });
    };

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
                                    <Searchcategorycards item={item} />
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
            </div>} */}


{pagecount===0 ?null:<>
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
        // previousLabel={"PREVIOUS"}
        previousLabel={pagecountnumbers>1?"PREVIOUS":null}


      
   
      />
                            </div>
</>}

                </div>

            
        
    )
}

export default Maincategorysearch