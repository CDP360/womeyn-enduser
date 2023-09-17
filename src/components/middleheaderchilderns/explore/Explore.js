import React, { Fragment, useState, useEffect } from 'react'
import Home from '../../home/Home';
import Image from 'next/image';
import LayoutHeader from '../../Layoutheader/LayoutHeader';
import styles from './styles/Explore.module.scss';
import facebook from '../../../assests/homepage-logos/facebookfooter.png';
import youtube from '../../../assests/homepage-logos/youtubered.png';
import instagram from '../../../assests/homepage-logos/newinstagramfooter.png';
import linkdin from '../../../assests/homepage-logos/linkedinfooter.png';
import twitter from '../../../assests/homepage-logos/twitterfooter.png';
import { useRouter } from 'next/router';
import { ExploreCategorys } from '../../../services/explore-service/explore-service';

function Explore() {
    const router = useRouter();

    const [tabs, setTabs] = useState("Products")
    const [explorecategorysProductmenu, setCatgorysproductmenu] = useState([]);
    const [explorecategorysservice, setCatgorysproductmenuservices] = useState([]);
    const pushPage = (data) => {
        router.push(`/category/${data}`)
    }

    const [show, setShow] = useState(false);
    const Bar = () => {
        return <div>hello bar</div>;
    };

    useEffect(() => {
        exploreDatas();
    }, [])

    const exploreDatas = async () => {
        try {
            const response = await ExploreCategorys();
       
            setCatgorysproductmenu(response?.data?.productMenus);
            setCatgorysproductmenuservices(response?.data?.serviceMenus)

        }
        catch (err) {
            console.log(err);
        }
    }


    const pushCategory = (data) => {
        router.push(`/category/${data}`);

    }

    const pushServices = (data) => {
        router.push(`/service/${data}`);

    }


    console.log(explorecategorysProductmenu,'explorecategorysProductmenu')
    return (
        <Fragment>
            <div className={styles.mainexploresection}>
                <div className={styles.insideexploresection}>

                    <div className={styles.explorebuttons}>
                        <div className={tabs == "Products" ? styles.activebutton : styles.inactivebutton} onClick={() => setTabs("Products")}>
                            Products
                        </div>
                        <div className={tabs == "Services" ? styles.activebutton : styles.inactivebutton} onClick={() => setTabs("Services")}>
                            Services
                        </div>
                    </div>


                    <div className="mt-5">
                        {tabs == "Products" ? <>

                        {/* {explorecategorysProductmenu?.length} */}

                            {explorecategorysProductmenu?.map((item, index) => {
                                return (
                                    <div className="mt-3" key={index}>
                                        <div className='text-danger mb-2' style={{ cursor: "pointer" }} onClick={() => pushCategory(item?.slugName)}>
                                            {item?.categoryName}

                                        </div>
                                        <div className='ms-4'>
                                            {item?.subCategoriesList?.map((items, index) => {
                                                return (
                                                    <div className="mt-2 mb-2 hovers " onClick={() => pushCategory(items?.slugName)} key={index}>
                                                        {items?.name}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}

                        </> : null}

                        {tabs == "Services" ? <>

                            {explorecategorysservice?.map((item, index) => {
                                return (
                                    <div className="mt-3" key={index} >
                                        <div className='text-danger mb-2' style={{ cursor: "pointer" }} onClick={() => pushServices(item?.slugName)}>
                                            {item?.categoryName}

                                        </div>
                                        <div className='ms-4'>
                                            {item?.subCategoriesList?.map((items, index) => {
                                                return (
                                                    <div className="mt-2 mb-2" style={{ cursor: "pointer" }} onClick={() => pushServices(items?.slugName)} >
                                                        {items?.name}
                                                    </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                )
                            })}

                        </> : null}
                    </div>

                    {/* <div className="text-center d-flex align-items-center justify-content-center mt-5">

                        <div className={styles.socailfootersection}>
                            <div className={styles.footeremptysocialsection}>
                                <Image src={youtube} alt="no image" className={styles.footersocialicons} />
                            </div>
                            <div className={styles.footeremptysocialsection}>
                                <Image src={linkdin} alt="no image" className={styles.footersocialicons} />
                            </div>
                            <div className={styles.footeremptysocialsection}>
                                <Image src={twitter} alt="no image" className={styles.footersocialicons} />
                            </div>
                            <div className={styles.footeremptysocialsection}>
                                <Image src={facebook} alt="no image" className={styles.footersocialicons} />
                            </div>
                            <div className={styles.footeremptysocialsection}>
                                <Image src={instagram} alt="no image" className={styles.footersocialicons} />
                            </div>

                        </div>
                    </div> */}
                </div>
            </div>

            <div>
                {/* <ReactMegaMenu
                    tolerance={50}
                    data={data}
                    styleConfig={styleConf}
                /> */}
            </div>
        </Fragment>
    )
}

export default Explore  