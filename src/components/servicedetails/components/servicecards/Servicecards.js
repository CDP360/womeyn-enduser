// import React, { useEffect, useState, Fragment } from 'react'
// import styles from './styles/Servicecards.module.scss';
// import { useRouter } from 'next/router';
// import { Image } from 'next/image';

import LoaderLogo from '../../../loaderlogo/LoaderLogo';
import { Serviceusers } from '../../../../services/servicewomeyn/service-womeyn';
// import serachicon from '../../../../assests/homepage-logos/serachicon.png';
// import Select from 'react-select';
// import Pagination from 'rc-pagination';
// import rightarrow from '../../../../assests/category-logos/leftcategoryarrow.png';
// import leftarrow from '../../../../assests/category-logos/rightcategoryarrow.png';
// import noimage from '../../../../assests/womeynlogos/noimage.png';
// import Womencarouselbanner from '../../../middleheaderchilderns/ourwomenpreneurs/component/womenprebannerimages/Womencarouselbanner';
// function Servicecards() {
//     const router = useRouter();
//     const [servicesusers, setServiceusers] = useState([]);
//     const [current, setCurrent] = useState(1);
//     const [limit, setLimit] = useState(current * 10);
//     const [dataseller, setDataseller] = useState([]);
//     const [datacategory, setDataCtagoryies] = useState([]);
//     const [filters, setFilterData] = useState([]);
//     const [filterdata, setFilter] = useState("");
//     const [searchname, setSearchName] = useState('');
//     const [loadingset, setLoading] = useState(false);
//     const [categoryid, setCategoryId] = useState(0);
//     const [error, setError] = useState(false);
//     useEffect(() => {
//         WomenSellercategories();
//         GetFilterandSearchData();
//     }, [categoryid])

//     const WomenSellercategories = () => {
//         setLoading(true);
//         WomenpreneursCommoncategories().then((res) => {
//             const storecategory = [];
//             res?.data.map((item, index) => {
//                 const data = {
//                     value: item?.name,
//                     label: item?.name,
//                     id: item?.id
//                 }
//                 storecategory.push(data);
//             })
//             setDataCtagoryies(storecategory);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }
//     const handlepush = (id) => {
//         router.push(`/womenpreneurs/${id}`);
//     }
//     const SearchNameBrand = (e) => {
//         setSearchName(e.target.value);
//     }
//     const handleFilterCategory = (data) => {
//         setCategoryId(data?.id);
//         setFilter(data.name);
//         setSearchName("");
//     }
//     const GetFilterandSearchData = () => {
//         setLoading(true);
//         WomenpreneursFilter(categoryid).then((res) => {
//             setDataseller(res?.data?.results);
//             setLimit(res?.data);
//             setTimeout(() => {
//                 setLoading(false);
//             }, 300);
//         }).catch((err) => {
//             console.log(err);
//         })
//     }
//     const GetSearchdata = () => {
//         setLoading(true);
//         WomenpreneursSearch(searchname).then((res) => {
//             setDataseller(res?.data?.results);
//             setFilter("");
//             setTimeout(() => {
//                 setLoading(false);
//             }, 300);

//         }).catch((err) => {
//             console.log(err);
//         })
//     }
//     const fetchCurrentData = async (current) => {
//         const resdata = await WomenpreneursSellers(current);
//         setDataseller(resdata?.data?.results);
//     }
//     const handleChangePagecount = async (e) => {
//         setCurrent(e);
//         const current = e;
//         await fetchCurrentData(current);
//     }

//     const PrevNextArrow = (current, type, originalElement) => {
//         if (type === 'prev') {
//             return <button className='disactive'>
//                 <Image src={leftarrow} alt="no image" className={styles.arrowsizefix} />
//             </button>;

//         }
//         if (type === 'next') {
//             return <button className='activess'>
//                 <Image src={rightarrow} alt="no image" className={styles.arrowsizefix} />
//             </button>;
//         }
//         return originalElement;
//     }



//     useEffect(() => {
// Serviceusers().then((res) => {
//     console.log(res?.data?.results, "kalai")
//     setServiceusers(res?.data?.results);
// }).catch((err) => {
//     console.log(err);
// })
//     }, [])


//     return (
//         <>
//             {/* <div className={styles.maincardservices}>
//             <div className={styles.insideservicecards}>
//                 <div className="mt-4 mb-5">
//                     <h2>Service</h2>
//                 </div>
//                 <div className='cardsection row mb-3 ms-1'>
//                     {loading ? <>
//                         <LoaderLogo />
//                     </> : <>{servicesusers?.map((item, index) => {
//                         return (
//                             <div className='card col-lg-3 col-sm-6 col-xs-6 col-md-10 ' key={index} onClick={() => router?.push(`service/${item?.serviceSlugName}`)} >


//                                 <div className={styles.cardinsidesection}>

//                                     <div>
//                                         {item?.serviceThumbImage ?
//                                             <img
//                                                 className={styles.images}
//                                                 src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.serviceThumbImage}`}
//                                                 alt="profile-pic"
//                                             /> : <>
//                                                 <img src={item?.image} alt="no image" className={styles.images} />
//                                             </>}
//                                     </div>

//                                   <div className="mt-5 mb-3 ms-3">
//                                   <div className={styles.brandname}>    
//                                         {item?.serviceName}
//                                     </div>
//                                 </div>

//                                     <div className='textgrey ms-3'>
//                                         {item?.serviceDescription?.length<=18 ?<>{item?.serviceDescription}</>:<>{item?.serviceDescription.slice(0,18)}...</>}
//                                     </div>
//                                     <div className={styles.cardsellerborder}>
//                                         <div className={styles.cardsellerinsideborder}>
//                                         </div>
//                                     </div>

//                                 </div>
//                             </div>
//                         )
//                     })}</>}
//                 </div>

//             </div>
//         </div> */}








//             <Fragment>
//                 <div className={styles.womeynmainsectionpre}>
//                     <div className={styles.emptyboxcolorright}>
//                     </div>
//                     <div className={styles.emptyboxcolorleft}>
//                     </div>
//                     <div className={styles.bodysectionwomeynpre}>

//                         <div className={styles.imagesectionwomeyn}>
//                             <Womencarouselbanner />

//                         </div>
//                         <div className={styles.ourwomenpreneurs}>
//                             <div className='large-text'>
//                                 Our Womenpreneurs
//                             </div>
//                             <div className={styles.loreamtextwomen}>
//                                 Please select to know more about the Womeynpreneur's business, her journey her story and her success against all odds
//                             </div>
//                         </div>
//                         <div className={styles.serachsectionwomen}>
//                             <div className={styles.serachwomenpresection}>
//                                 <div>
//                                     <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
//                                 </div>
//                                 <div>
//                                     <Image src={serachicon} alt="no image" className={styles.serachiconwomen} onClick={GetSearchdata} />
//                                 </div>
//                             </div>
//                             <div className='col-lg-3 col-xs-6 col-sm-5'>

//                                 <Select
//                                     placeholder={"Filter Category ..."}
//                                     value={filterdata}
//                                     onChange={(e) => handleFilterCategory(e)}
//                                     options={datacategory}
//                                 />

//                             </div>
//                         </div>

//                         <div>
//                             {searchname?.length > 0 ? <>
//                                 <div className='cardsections row justify-content-center  w-100 mt-5 mb-5 ms-1'>
//                                     <div>
//                                         {dataseller.length === 0 && <div>No Data Found!!!!</div>}
//                                     </div>
//                                     {loadingset ? <>
//                                         <div>
//                                             <LoaderLogo />
//                                         </div>
//                                     </> : dataseller?.map((item, index) => {
//                                         return (
//                                             <div className='cards mt-5 mb-5 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.businessSlugName)}>
//                                                 <div className={styles.sellerimagebox}>
//                                                     <div className={styles.insidebox}>
//                                                         {item?.profileImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.profileImageName}`} alt="no image" className={styles.sellerimagesize} /> : <>
//                                                             <Image src={noimage} alt="no image" className={styles.sellerimagesize} />
//                                                         </>}
//                                                     </div>
//                                                 </div>
//                                                 <div className='womentitle'>
//                                                     {item?.firstName}
//                                                 </div>
//                                                 <div className='womendescription'>
//                                                     {item?.businessSlugName}
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </> : <>
//                                 <div className='cardsections row justify-content-center  w-100 mt-5 mb-3 ms-1'>
//                                     <div>
//                                         {dataseller.length === 0 && <div>No Data Found!!!!</div>}
//                                     </div>
//                                     {loadingset ? <>
//                                         <div>
//                                             <LoaderLogo />
//                                         </div>
//                                     </> : dataseller?.map((item, index) => {
//                                         return (
//                                             <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.businessSlugName)}>
//                                                 <div className={styles.sellerimagebox}>
//                                                     <div className={styles.insidebox}>
//                                                         {item?.profileImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.profileImageName}`} alt="no image" className={styles.sellerimagesize} /> : <>
//                                                             <Image src={noimage} alt="no image" className={styles.sellerimagesize} />
//                                                         </>}
//                                                     </div>
//                                                 </div>
//                                                 <div className='womentitle'>
//                                                     {item?.firstName}
//                                                 </div>
//                                                 <div className='womendescription'>
//                                                     {item?.businessSlugName}
//                                                 </div>
//                                             </div>
//                                         )
//                                     })}
//                                 </div>
//                             </>}

//                             <div>

//                                 {/* {dataseller?.length > 8 &&
//                                 <div className='d-flex justify-content-center mt-4'>
//                                     <Pagination
//                                         className="pagination-data"
//                                         total={limit?.totalPages * 10}
//                                         onChange={handleChangePagecount}
//                                         current={current}
//                                         itemRender={PrevNextArrow}
//                                         breakLabel="..."
//                                     />
//                                 </div>
//                             } */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>


//             </Fragment>

//         </>

//     )
// }

// export default Servicecards











import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Servicecards.module.scss';

import Womeynbanner from '../../../../assests/homepage-logos/woymenbanner.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import serachicon from '../../../../assests/homepage-logos/serachicon.png';
import { useRouter } from 'next/router';
import girl from '../../../../assests/womeynlogos/girl4.png';
import Womencarouselbanner from './womenprebannerimages/Womencarouselbanner';
import { WomenpreneursCommoncategories, WomenpreneursSellers } from '../../../../services/womenpreneurs-services/womenpreneurs-services';
import users from '../../../../assests/homepage-logos/usersimageprofile.png';
import Select from 'react-select';
import { WomenpreneursFilter, WomenpreneursSearch } from '../../../../services/womenpreneurs-services/womenpreneurs-services';

import Pagination from 'rc-pagination';
import rightarrow from '../../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../../assests/category-logos/rightcategoryarrow.png';
import noimage from '../../../../assests/womeynlogos/noimage.png';
function Servicecards() {
    const router = useRouter();
    const [current, setCurrent] = useState(1);
    const [limit, setLimit] = useState(current * 10);
    const [servicesusers, setServiceusers] = useState([]);


    const [dataseller, setDataseller] = useState([]);
    const [datacategory, setDataCtagoryies] = useState([]);
    const [filters, setFilterData] = useState([]);
    const [filterdata, setFilter] = useState("");
    const [searchname, setSearchName] = useState('');
    const [loadingset, setLoading] = useState(false);
    const [categoryid, setCategoryId] = useState(0);
    const [error, setError] = useState(false);
    useEffect(() => {


        Serviceusers().then((res) => {
            setServiceusers(res?.data?.results);
        }).catch((err) => {
            console.log(err);
        })
    }, [categoryid])

    const WomenSellercategories = () => {
        setLoading(true);
        WomenpreneursCommoncategories().then((res) => {
            const storecategory = [];
            res?.data.map((item, index) => {
                const data = {
                    value: item?.name,
                    label: item?.name,
                    id: item?.id
                }
                storecategory.push(data);
            })
            setDataCtagoryies(storecategory);
        }).catch((err) => {
            console.log(err);
        })
    }
    const handlepush = (id) => {
        router.push(`service/${id}`);
    }
    const SearchNameBrand = (e) => {
        setSearchName(e.target.value);
    }
    const handleFilterCategory = (data) => {
        setCategoryId(data?.id);
        setFilter(data.name);
        setSearchName("");
    }
    const GetFilterandSearchData = () => {
        setLoading(true);
        // WomenpreneursFilter(categoryid).then((res) => {
        //     setDataseller(res?.data?.results);
        //     setLimit(res?.data);
        //     setTimeout(() => {
        //         setLoading(false);
        //     }, 300);
        // }).catch((err) => {
        //     console.log(err);
        // })
    }
    const GetSearchdata = () => {
        setLoading(true);
        WomenpreneursSearch(searchname).then((res) => {
            setDataseller(res?.data?.results);
            setFilter("");
            setTimeout(() => {
                setLoading(false);
            }, 300);

        }).catch((err) => {
            console.log(err);
        })
    }
    const fetchCurrentData = async (current) => {
        const resdata = await WomenpreneursSellers(current);
        setDataseller(resdata?.data?.results);
    }
    const handleChangePagecount = async (e) => {
        setCurrent(e);
        const current = e;
        await fetchCurrentData(current);
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
        <Fragment>
            <div className={styles.womeynmainsectionpre}>
                <div className={styles.emptyboxcolorright}>
                </div>
                <div className={styles.emptyboxcolorleft}>
                </div>
                <div className={styles.bodysectionwomeynpre}>

                    <div className={styles.imagesectionwomeyn}>
                        <Womencarouselbanner />
                    </div>
                    <div className={styles.ourwomenpreneurs}>
                        <div className='large-text'>
                            Services
                        </div>
                        <div className={styles.loreamtextwomen}>
                            Please select to know more about the Womeynpreneur's business, her journey her story and her success against all odds
                        </div>
                    </div>
                    <div className={styles.serachsectionwomen}>
                        <div className={styles.serachwomenpresection}>
                            <div>
                                <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
                            </div>
                            <div>
                                <Image src={serachicon} alt="no image" className={styles.serachiconwomen} onClick={GetSearchdata} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-xs-6 col-sm-5'>

                            <Select
                                placeholder={"Filter Category ..."}
                                value={filterdata}
                                onChange={(e) => handleFilterCategory(e)}
                                options={datacategory}
                            />

                        </div>
                    </div>



                    <div className='cardsections row justify-content-center  w-100 mt-5 mb-3 ms-1'>
                        <div>
                            {servicesusers.length === 0 && <div>No Data Found!!!!</div>}
                        </div>
                        {loadingset ? <>
                            <div>
                                <LoaderLogo />
                            </div>
                        </> : servicesusers?.map((item, index) => {
                            return (
                                <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.serviceSlugName)}>
                                    <div className={styles.sellerimagebox}>
                                        <div className={styles.insidebox}>
                                            {item?.serviceThumbImage ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.serviceThumbImage}`} alt="no image" className={styles.sellerimagesize} /> : <>
                                                <Image src={noimage} alt="no image" className={styles.sellerimagesize} />
                                            </>}
                                        </div>
                                    </div>
                                    <div className='womentitle mt-5'>
                                        {item?.serviceName}
                                    </div>
                                    {/* <div className='womendescription'>
                                        {item?.serviceDescription?.length <= 18 ? <>{item?.serviceDescription}</> : <>{item?.serviceDescription.slice(0, 18)}...</>}
                                    </div> */}
                                </div>
                            )
                        })}
                    </div>


                    <div>

                        {/* {dataseller?.length > 8 &&
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
                            } */}
                    </div>
                </div>

            </div>


        </Fragment>
    )
}

export default Servicecards;













