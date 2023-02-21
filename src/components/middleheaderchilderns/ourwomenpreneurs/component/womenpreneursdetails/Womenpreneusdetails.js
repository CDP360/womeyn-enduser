import { useRouter } from 'next/router'
import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import styles from './styles/Womenpredetails.module.scss';
import logowomen from '../../../../../assests/womeynlogos/logowomeyn.png';
import Image from 'next/image';
import girl1 from '../../../../../assests/womeynlogos/womenlogo.png';
import Beverage from '../beverages/Beverage';
import Superfoods from '../superfoods/Superfoods';
import Healthbars from '../healthbars/Healthbars';
import Baking from '../baking/Baking';
import Sweets from '../sweets/Sweets';


function Womenpreneusdetails({ id }) {
    const router = useRouter();
    const [productlist, setProductList] = useState([]);
    const [indexs, setIndexs] = useState(0);
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
            setProductList(res?.data);
        }).catch((err) => {
            console.log(err);
        })

    }, [indexs])

    const handlechnagedata = (id) => {
        setIndexs(id);
    }
    const data = [
        {
            id: 1,
            title: "Beverages",

        },
        {
            id: 2,
            title: "Superfoods",

        },
        {
            id: 3,
            title: "Healthbars",

        },
        {
            id: 4,
            title: "Baking",


        },
        {
            id: 5,
            title: "Sweets",


        }
    ]
    return (
        <Fragment >


            {/* <button onClick={() => router.push("/login?redirect=/shipping")}>
                Check out
            </button>
            {id} */}


            <div className={styles.maindetailpage}>
                <div className="emptyboxrightcolor">
                </div>
                <div className={styles.insidedetailpage}>
                    <div className={styles.splitsectiondetails}>
                        <div className={styles.leftdetailpage}>
                            <div className={styles.splitleftdetails}>
                                <div>
                                    <Image src={logowomen} alt="no image" className={styles.detailimage} />
                                </div>
                                <div>
                                    <div className="large-text">
                                        Earthy Souls  {id}
                                    </div>
                                    <div>
                                        Mansi K Bhatia
                                    </div>
                                </div>

                            </div>
                            <div className={`small-light-text-grey mt-4 ${styles.earthtext}`}>
                                Earthy Souls has been built on the belief that we need to live alongside Mother Nature and not exploit it. Our chemical-free approach aims at shielding her from harmful toxins and helps preserve the natural state. Earthy Souls have curated an array of products through traditional practices, with a touch of innovation. These practices and products ensure there is zero pollution, reducing the wastage to almost nil.
                            </div>
                        </div>
                        <div className={styles.rightdetailpage}>
                            <Image src={girl1} alt="no image" className={styles.womenlogo} />
                        </div>
                    </div>
                    <div className={styles.middleheaderpage}>
                        <div className={styles.insidemiddleheader}>
                            {data?.map((item, index) => {
                                return (
                                    <div className={`${indexs === index ? styles.actives : styles.detailpage}`} onClick={() => handlechnagedata(index)}>
                                        {item?.title}
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className={styles.contentsetiondetails}>
                        <div>
                            {indexs === 0 && <div>
                                <Beverage />
                            </div>}
                        </div>
                        <div>
                            {indexs === 1 && <div>
                                <Superfoods />
                            </div>}
                        </div>
                        <div>
                            {indexs === 2 && <div>
                                <Healthbars />
                            </div>}
                        </div>
                        <div>
                            {indexs === 3 && <div>
                                <Baking />
                            </div>}
                        </div>
                        <div>
                            {indexs === 4 && <div>
                                <Sweets />
                            </div>}
                        </div>

                    </div>
                </div>




            </div>

        </Fragment>
    )
}

export default Womenpreneusdetails;