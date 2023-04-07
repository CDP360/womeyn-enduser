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

   

    
    
    return (
        <Fragment>
            <div className={styles.mainexploresection}>
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