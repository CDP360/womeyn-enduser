import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Womenpren.module.scss';
import Womeynbanner from '../../../../src/assests/homepage-logos/woymenbanner.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import serachicon from '../../../assests/homepage-logos/serachicon.png';
import { useRouter } from 'next/router';
import girl from '../../../assests/womeynlogos/girl4.png';
import Womencarouselbanner from './component/womenprebannerimages/Womencarouselbanner';
import { WomenpreneursCommoncategories, WomenpreneursSellers } from '../../../services/womenpreneurs-services/womenpreneurs-services';
import users from '../../../assests/homepage-logos/usersimageprofile.png';
import Select from 'react-select';
import { WomenpreneursFilter, WomenpreneursSearch } from './../../../services/womenpreneurs-services/womenpreneurs-services';
function Womenpreneurs() {
    const router = useRouter();
    const [dataseller, setDataseller] = useState([]);
    const [datacategory, setDataCtagoryies] = useState([]);
    const [filters, setFilterData] = useState([]);
    const [filterdata, setFilter] = useState("");
    const [searchname, setSearchName] = useState("");
    const [loadingset, setLoading] = useState(false);
    const [categoryid, setCategoryId] = useState(0);
    useEffect(() => {
        // WomenSellerList();
        WomenSellercategories();
        GetFilterandSearchData();
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
    }
    const GetFilterandSearchData = () => {
        setLoading(true);
        WomenpreneursFilter(categoryid).then((res) => {
            setDataseller(res?.data?.results);
            setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
    }
    const GetSearchdata = () => {
        setLoading(true);
        WomenpreneursSearch(searchname).then((res) => {
            setDataseller(res?.data?.results);
        setLoading(false);
        }).catch((err) => {
            console.log(err);
        })
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
                            Our Womenpreneurs
                        </div>
                        <div className={styles.loreamtextwomen}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </div>
                    </div>
                    <div className={styles.serachsectionwomen}>


                        <div className={styles.serachwomenpresection}>
                            
                            <div>
                                <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={searchname} onChange={(e) => SearchNameBrand(e)} />
                            </div>
                            <div>
                                <Image src={serachicon} alt="no image" className={styles.serachiconwomen}  onClick={GetSearchdata}/>
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


                        {/* {filters.length > 0 ? <>
                            {filters.map((item, index) => {
                                return (
                                    <div>
                                        <div className='womentitle'>
                                            {item?.firstName}
                                        </div>
                                        <div className='womendescription'>
                                            {item?.businessSlugName}
                                        </div>
                                    </div>
                                )
                            })}
                        </> : <>
                        no data found</>} */}
                        <div>
                            {dataseller.length === 0 && <div>No Data Found!!!!</div>}
                        </div>
                        {loadingset ? <>
                            <div>
                                Loading....
                            </div>
                        </> : dataseller?.map((item, index) => {
                            return (
                                <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.cityName)}>
                                    <div className={styles.sellerimagebox}>

                                        <div className={styles.insidebox}>
                                            {item?.profileImageName ? <img src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.profileImageName}`} alt="no image" className={styles.sellerimagesize} /> : <>
                                                <Image src={users} alt="no image" className={styles.sellerimagesize} />
                                            </>}
                                        </div>

                                    </div>

                                    <div className='womentitle'>
                                        {item?.firstName}
                                    </div>
                                    <div className='womendescription'>
                                        {item?.businessSlugName}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </Fragment>
    )
}

export default Womenpreneurs;