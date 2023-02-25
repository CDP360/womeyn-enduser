import React, { Fragment, useState } from 'react'
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

function Explore() {
    const router = useRouter();
    const pushPage = (data) => {
        router.push(`/category/${data}`)
    }

    const [show, setShow] = useState(false);
    const Bar = () => {
        return <div>hello bar</div>;
    };

    const data = [
        {
            label: "foo",
            key: 1,
            items: <div>hello foo</div>
        }

    ];

    const styleConf = {
        menuProps: {
            style: {
                border: "2px solid red",
                width: "auto",
                padding: "2px",
                margin: "0",
                display: "flex",
                flexDirection: "row"
            }
        },
        contentProps: {
            style: {
                width: "40em",
                height: "30em",
                border: "2px solid yellow",
                padding: "2px"
            }
        },
        menuItemProps: {
            style: {
                border: "2px solid green",
                padding: "2px",
                height: "2em",
                width: "auto"
            }
        },
        menuItemSelectedProps: {
            style: {
                border: "2px solid purple",
                padding: "2px",
                height: "2em",
                width: "13em",
                backgroundColor: "grey"
            }
        },
        containerProps: {
            style: {
                border: "2px solid pink",
                padding: "2px",
                display: "flex",
                flexDirection: "column"
            }
        }
    };
    return (
        <Fragment>
            {/* <div className={styles.mainexploresection}>
                <div className={styles.insideexploresection}>
                    <div className={styles.splitboxexplore}>
                        <div className={styles.leftexplore}>
                           <div className={styles.commontextssizes}>
                           Fashion & Lifestyle
                           </div>
                           <div className="mt-4">
                           Dresses | Jumpsuits

                        </div>
                        <div>
                        Shirts

                        </div>
                        <div>
                        Trousers

                        </div>
                        <div>
                        Tops | Corsets

                        </div>
                        <div>
                        Bodysuits

                        </div>
                        <div>
                        Tshirts

                        </div>
                        <div>
                        Jeans

                        </div>
                        <div>
                        Skirts

                        </div>
                        <div>
                        Suits

                        </div>
                        <div>
                            Indian Wear
                        </div>
                        <div>
Jacket | Overcoats

                        </div>
                        </div>
                        <div className={styles.rightexplore}>
                           <div>
                           <div className={styles.commontextssizes}>
                           Fashion & Lifestyle
                           </div>
                           <div className="mt-4">
                           Dresses | Jumpsuits

                        </div>
                        <div>
                        Shirts

                        </div>
                        <div>
                        Trousers

                        </div>
                        <div>
                        Tops | Corsets

                        </div>
                        <div>
                        Bodysuits

                        </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center d-flex align-items-center justify-content-center">

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
                    </div>
                </div>
            </div> */}
          
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