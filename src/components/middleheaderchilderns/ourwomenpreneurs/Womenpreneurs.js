import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Womenpren.module.scss';
import Womeynbanner from '../../../../src/assests/homepage-logos/woymenbanner.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import serachicon from '../../../assests/homepage-logos/serachicon.png';
import { useRouter } from 'next/router';
import girl from '../../../assests/womeynlogos/girl4.png';
import Womencarouselbanner from './component/womenprebannerimages/Womencarouselbanner';
import { WomenpreneursCommoncategories, WomenpreneursSellers, WomenpreneursSellerspagintaion } from '../../../services/womenpreneurs-services/womenpreneurs-services';
import users from '../../../assests/homepage-logos/usersimageprofile.png';
import Select from 'react-select';
import { WomenpreneursFilter, WomenpreneursSearch } from './../../../services/womenpreneurs-services/womenpreneurs-services';
import LoaderLogo from '../../loaderlogo/LoaderLogo';
import Pagination from 'rc-pagination';
import rightarrow from '../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../assests/category-logos/rightcategoryarrow.png';
import noimage from '../../../assests/womeynlogos/noimage.png';
import { Nodatafoundimage } from './../../nodatafoundimage/Nodatafound';
import ReactPaginate from 'react-paginate';
function Womenpreneurs() {
    const router = useRouter();
    const [current, setCurrent] = useState(1);
    const [limit, setLimit] = useState(current * 10);
    const [dataseller, setDataseller] = useState([]);
    const [datacategory, setDataCtagoryies] = useState([]);
    const [filters, setFilterData] = useState([]);
    const [filterdata, setFilter] = useState("");
    const [searchname, setSearchName] = useState('');
    const [loadingset, setLoading] = useState(false);
    const [categoryid, setCategoryId] = useState(0);
    const [error, setError] = useState(false);
    const [pagecount, setPagecount] = useState("");
    const [pagecountnumbers, setPagecountNumbers] = useState(1);
    const [showTopBtn, setShowTopBtn] = useState(false);

    const [paginationdata, setPaginationData] = useState([]);

    useEffect(() => {
        WomenSellercategories();
        GetFilterandSearchData();
        WomenpreneursSellers().then((res) => {
            setDataseller(res?.data?.results);
            setPagecount(res?.data?.totalResults)

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
        router.push(`/womenpreneurs/${id}`);
    }
    const SearchNameBrand = (e) => {
        setSearchName(e.target.value);
    }
    const handleFilterCategory = (data) => {
        setCategoryId(data?.id);
        setFilter(data.name);
        setSearchName("");
        WomenpreneursFilter(data?.id).then((res) => {
            setDataseller(res?.data?.results);
            setPagecount(res?.data?.totalResults)
            setLimit(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }).catch((err) => {
            console.log(err);
        })
    }
    const GetFilterandSearchData = () => {
        setLoading(true);
        WomenpreneursFilter(categoryid).then((res) => {
            setDataseller(res?.data?.results);
            setPagecount(res?.data?.totalResults)
            setLimit(res?.data);
            setTimeout(() => {
                setLoading(false);
            }, 300);
        }).catch((err) => {
            console.log(err);
        })
    }
    const GetSearchdata = () => {
        setLoading(true);
        if (searchname) {
            WomenpreneursSearch(searchname).then((res) => {
                setDataseller(res?.data?.results);
                setPagecount(res?.data?.totalResults)
                setFilter("");
                setTimeout(() => {
                    setLoading(false);
                }, 300);
            }).catch((err) => {
                console.log(err);
            })
        }

    }


    const fetchComments = async (current) => {
        const res = await WomenpreneursSellerspagintaion(current);
        return res?.data?.results;
    }

    const handlePageClick = async (data) => {
        let current = data?.selected + 1;
        setPagecountNumbers(current);
        goToTop()
        const commentForms = await fetchComments(current);

        // setDataseller(commentForms);
        setPaginationData(commentForms)
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
            top: 280,
            behavior: "smooth",
        });
    };


    

    return (
        <Fragment>

            <div className="mainsection">
                <div className="insidesection">
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
                                    Our WomeynPreneurs
                                </div>
                                <div className={styles.loreamtextwomen}>
                                    Please select to know more about the Womeynpreneur business, her journey, her story, and her success against all odds.
                                </div>
                            </div>
                            <div className={styles.serachsectionwomen}>
                                <div className={styles.serachwomenpresection}>
                                    <div>
                                        <input type='text' placeholder="Search by WomeynPreneurs Name" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
                                    </div>
                                    <div>
                                        <Image src={serachicon} alt="no image" className={styles.serachiconwomen} onClick={GetSearchdata} />
                                    </div>
                                </div>
                                <div className='col-lg-4 col-xs-10  col-sm-12'>
                                    <Select
                                        placeholder={"Filter by Categorys..."}
                                        value={filterdata}
                                        onChange={(e) => handleFilterCategory(e)}
                                        options={datacategory}
                                    />
                                </div>
                            </div>

                            <div>
                                <div className='cardsections row   w-100 mt-5 mb-3 ms-1'>
                                    <div>
                                        {dataseller.length === 0 && <div>No Data Found!!!!</div>}
                                    </div>

                                    {paginationdata?.length>0 ? <>
                                        {paginationdata?.map((item, index) => {
                                            return (
                                                <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.businessSlugName)}>
                                                    <div className={styles.sellerimagebox}>
                                                        <div className={styles.insidebox}>
                                                            {item?.profileImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.profileImageName}`} alt="no image" className={styles.sellerimagesize} /> : <>
                                                                <Image src={noimage} alt="no image" className={styles.sellerimagesize} />
                                                            </>}
                                                        </div>
                                                    </div>
                                                    <div className='womentitle'>
                                                        {item?.firstName}
                                                    </div>
                                                    <div className='womendescription'>
                                                        {item?.businessName}
                                                    </div>
                                                </div>
                                            )
                                        })}


                                    </> : <>

                                        {loadingset ? <>
                                            <div>
                                                <LoaderLogo />
                                            </div>
                                        </> : dataseller?.map((item, index) => {
                                            return (
                                                <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.businessSlugName)}>
                                                    <div className={styles.sellerimagebox}>
                                                        <div className={styles.insidebox}>
                                                            {item?.profileImageName ? <img src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item?.profileImageName}`} alt="no image" className={styles.sellerimagesize} /> : <>
                                                                <Image src={noimage} alt="no image" className={styles.sellerimagesize} />
                                                            </>}
                                                        </div>
                                                    </div>
                                                    <div className='womentitle'>
                                                        {item?.firstName}
                                                    </div>
                                                    <div className='womendescription'>
                                                        {item?.businessName}
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </>}

                                </div>
                                <div>
                                    {pagecount > 12 ? <>
                                        <div className="mt-3">
                                            <hr />
                                        </div>
                                        <div>
                                            Page {pagecountnumbers}
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
                    </div>
                </div>
            </div>
            <div className={styles.emptyboxleftcolor}>
            </div>
            <div className={styles.emptyboxleftcolor2}>
            </div>
            <div className={styles.emptyboxleftcolor3}>
            </div>
            <div className={styles.emptyboxleftcolor4}>
            </div>
        </Fragment>
    )
}

export default Womenpreneurs;