import React, { Fragment, useEffect, useState } from 'react'

import styles from './styles/Womenpren.module.scss';
import Womeynbanner from '../../../../src/assests/homepage-logos/woymenbanner.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import LayoutHeader from '../../Layoutheader/LayoutHeader';
import serachicon from '../../../assests/homepage-logos/serachicon.png';
import axios from 'axios';
import Footer from '../../footer/Footer';
import Signupnewsletter from '../../home/components/signupfornewsletter/Signupnewsletter';
import Skeleton from 'react-loading-skeleton';
import Childfooter from '../../footer/Childfooter';
import { useRouter } from 'next/router';
import girl from '../../../assests/womeynlogos/girl4.png';
function Womenpreneurs() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            console.log(res?.data);
            setData(res?.data);
        }).catch((err) => {
            console.log(err);
        })
    }, [])

    const handlepush = (id) => {
        router.push(`/womeyn/womenpreneurs/detailpage/${id}`);
    }
    return (
        <Fragment>
            <div className={styles.mainwomenpre}>
                <div className={styles.insidemainwomenpre}>
                    {/* <div className='headersectionhome'>
                        <LayoutHeader setdark={setdark} dark={dark} />
                    </div> */}
                    <div className={styles.bodysectionwomeynexplore}>
                        <div className={styles.emptyboxcolorright}>
                        </div>
                        <div className={styles.emptyboxcolorleft}>
                        </div>
                        <div className={styles.insidebodysection}>
                            <div className={styles.imagesectionwomeyn}>
                                <Image src={Womeynbanner} alt="no image" className={styles.womeynbannerpre} />
                            </div>
                            <div className={styles.ourwomenpreneurs}>
                                <div className='textseller'>
                                    Our Womenpreneurs
                                </div>
                                <div className={styles.loreamtextwomen}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </div>
                            </div>
                            <div className={styles.serachsectionwomen}>
                                <div className={styles.serachwomenpresection}>
                                    <div>
                                        <Image src={serachicon} alt="no image" className={styles.serachiconwomen} />
                                    </div>
                                    <div>
                                        <input type='text' placeholder="Search by Name or Brand" className={styles.inputtypesection} name="search" value={search} onChange={(e) => setSearch(e.target.value)} />
                                    </div>
                                </div>
                                <div>
                                    <Form.Select aria-label="Default select example" value={search} onChange={(e) => setSearch(e.target.value)}>
                                        <option>Sort by Latest </option>
                                        <option value="men's clothing">men's clothing</option>
                                        <option value="jewelery">jewelery</option>
                                        <option value="electronics">electronics</option>
                                    </Form.Select>
                                </div>
                            </div>

                            <div className='row'>
                                {data?.length === 0 && <div>No Data Found</div>}
                            </div>
                            <div className='cardsections row justify-content-center  w-100 mt-5 mb-3 ms-1'>
                                {data?.filter((itemsed) => {
                                    if (itemsed.title.toLowerCase().includes(search) || itemsed.category.includes(search)) {
                                        return itemsed
                                    }
                                }).map((item, index) => {
                                    return (
                                        <div className='cards mt-1 mb-2' key={index} onClick={() => handlepush(item?.id)}>
                                            <div>
                                                <Image src={girl} alt="no image" className={styles.sellerimagesize} />
                                            </div>
                                            <div className='womentitle'>
                                                {/* {item?.title.slice(0, 10)} */}
                                            </div>
                                            <div className='womendescription'>
                                                {/* {item?.description.slice(0, 5)} */}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                        <div>
                            <Signupnewsletter />
                        </div>
                        <div>
                            <Footer />
                        </div>
                        <div>
                            <Childfooter />
                        </div>
                    </div>
                </div>

            </div>


        </Fragment>
    )
}

export default Womenpreneurs;