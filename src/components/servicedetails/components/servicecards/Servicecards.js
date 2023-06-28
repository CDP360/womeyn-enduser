import LoaderLogo from '../../../loaderlogo/LoaderLogo';
import { Serviceusers } from '../../../../services/servicewomeyn/service-womeyn';
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

import ReactPaginate from 'react-paginate';

import rightarrow from '../../../../assests/category-logos/leftcategoryarrow.png';
import leftarrow from '../../../../assests/category-logos/rightcategoryarrow.png';
import noimage from '../../../../assests/womeynlogos/noimage.png';

import { Nodatafoundimage } from '../../../nodatafoundimage/Nodatafound';
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
    const [showTopBtn, setShowTopBtn] = useState(false);

    
  const [pagecount,setPagecount]=useState("");
    useEffect(() => {
        Serviceusers().then((res) => {
            setServiceusers(res?.data?.results);
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


        const resdata = await Serviceusers(current);
        // setServiceusers(resdata?.data?.results);
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



    const fetchComments = async (current) => {
        const res = await Serviceusers(current)
        console.log(res?.data, "res")
    
        return res?.data?.results;
      }
    
      const handlePageClick = async (data) => {
    
        let current = data?.selected + 1;

        goToTop()
    
        const commentForms = await fetchComments(current);
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
        <Fragment>

            <div className="mainsection">
            <div className="insidesection">

            <div className={styles.womeynmainsectionpre}>

                <div className={styles.bodysectionwomeynpre}>

                    <div className={styles.imagesectionwomeyn}>
                        <Womencarouselbanner />
                    </div>
                    <div className={styles.ourwomenpreneurs}>
                        <div className='large-text'>
                            Services
                        </div>
                        <div className={styles.loreamtextwomen}>
                        Please select to know more about the Womeynpreneur business, and the Services her Business offers.
                        </div>
                    </div>
                    <div className={styles.serachsectionwomen}>
                        <div className={styles.serachwomenpresection}>
                            <div>
                                <input type='text' placeholder="Search by Business Name" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
                            </div>
                            <div>
                                <Image src={serachicon} alt="no image" className={styles.serachiconwomen} onClick={GetSearchdata} />
                            </div>
                        </div>
                        <div className='col-lg-3 col-xs-6 col-sm-6 col-lg-5'>

                            <Select
                                placeholder={"Filter by Service Categorys..."}
                                value={filterdata}
                                onChange={(e) => handleFilterCategory(e)}
                                options={datacategory}
                            />

                        </div>
                    </div>



                    <div className='cardsections row  w-100 mt-5 mb-3 ms-1'>
                        <div>
                            {servicesusers.length === 0 && <div>
                                <Nodatafoundimage
                                    title="No Services Available"
                                />
                            </div>}
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
                                   
                                </div>
                            )
                        })}


                    </div>
                    <div>

                       
{servicesusers?.length>9 &&<ReactPaginate
      activeClassName={'actives '}
        breakClassName={'item break-me '}
        breakLabel={'...'}
        containerClassName={'pagination'}
        disabledClassName={'disabled-page'}
        marginPagesDisplayed={2}
        nextClassName={"item next "}
        nextLabel={Math.round(pagecount / 12)+1===pagecountnumbers?null:"NEXT"}
        onPageChange={handlePageClick}
        pageCount={pagecount}
        pageClassName={'item pagination-page '}
        pageRangeDisplayed={2}
        previousClassName={"item previous"}
        previousLabel={pagecountnumbers>1?"PREVIOUS":null}


      
   
      />}


                    </div>
                </div>

            </div>
            </div>

            </div>



            <div className={styles.emptyboxrightcolor}>
            </div>
            <div className={styles.emptyboxleftcolor}>
            </div>
            <div className={styles.emptyboxleftcolor1}>
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

export default Servicecards;













