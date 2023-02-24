import React, { Fragment, useEffect, useState } from 'react'
import styles from './styles/Womenpren.module.scss';
import Womeynbanner from '../../../../src/assests/homepage-logos/woymenbanner.png';
import Image from 'next/image';
import Form from 'react-bootstrap/Form';

import serachicon from '../../../assests/homepage-logos/serachicon.png';
import axios from 'axios';
import { useRouter } from 'next/router';
import girl from '../../../assests/womeynlogos/girl4.png';
function Womenpreneurs() {
    const router = useRouter();
    const [data, setData] = useState([]);
    const [search, setSearch] = useState("");
    const [loadingset, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        axios.get(`https://fakestoreapi.com/products`).then((res) => {
            setData(res?.data);
            setLoading(false);

        }).catch((err) => {
            console.log(err);
            setLoading(false);
        })

    }, [])
    const handlepush = (id) => {
        router.push(`/womenpreneurs/${id}`);
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
                        <Image src={Womeynbanner} alt="no image" className={styles.womeynbannerpre} />
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
                    <div className='cardsections row justify-content-center  w-100 mt-5 mb-3 ms-1'>
                        {data?.filter((itemsed) => {
                            if (itemsed.title.toLowerCase().includes(search) || itemsed.category.includes(search)) {
                                return itemsed
                            }
                        }).map((item, index) => {
                            return (
                                <div className='cards mt-1 mb-2 col-lg-3 col-sm-10 col-xs-10 col-md-10' key={index} onClick={() => handlepush(item?.title.slice(0, 5))}>
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
            </div>


        </Fragment>
    )
}

export default Womenpreneurs;