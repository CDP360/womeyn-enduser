import React, { Fragment, useState, useEffect } from 'react'
import styles from './styles/Womenview.module.scss';
import product1 from '../../../../../assests/womeynlogos/i1.png';
import product2 from '../../../../../assests/womeynlogos/i2.png';
import product3 from '../../../../../assests/womeynlogos/i3.png';
import product4 from '../../../../../assests/womeynlogos/i4.png';
import Image from 'next/image';
import redstar from '../../../../../assests/womeynlogos/redstar.png';
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { Cartactions } from '../../../../../Redux/actions/cart/Cartdata';
import Reviewsproduct from './Reviews/Reviewsproduct';
import Caroselproducts from './carouselproducts/Caroselproducts';


function Viewproduct({ id }) {
    const [indexs, setIndex] = useState(0);
    const datas = {
        id: 1,
        image: "image.jpb",
        name: "NEW NEW NEW NEW NEW",
        title: "thala",
        price: 100,
    }
    const dispatch = useDispatch();

    const router = useRouter();
    const data =
    {
        id: 1,
        images: [
            product1,
            product2,
            product3,
            product4,
            product3,
            product4
        ]
    }

    // const Addtocart=()=>{
    //     router.push("/cart")
    // }
    const Checkout = () => {
        router.push("/checkout")
    }

    const handleChange = (cartdata) => {
        dispatch(Cartactions(cartdata))

    }
    return (
        <Fragment>
            <div className={styles.mainsearchwomen}>
                <div className={styles.emptyboxsection}>
                    </div>
                    <div className={styles.emptyboxsectionleft}>
                    </div>
                <div className={styles.insidesearchwomen}>
                    <div className={styles.splitwomensearch}>
                        <div className={styles.leftwomensearchsection}>
                            <div>
                                <div >
                                    <Image src={data?.images[indexs]} alt="no image" className={styles.serachlargeimage} />

                                </div>
                                <div className={styles.heartimagesection}>
                                    <button className={styles.btn}> <i class="fa-regular fa-heart" ></i></button>

                                </div>
                               
                            </div>

                        </div>
                        <div className={styles.rightwomensearchsection}>
                            <div className="row justify-content-center align-items-center gap-5 mb-5">
                                {data?.images?.map((items, index) => {
                                    return (
                                        <div className={`${indexs === index ? styles.activewomen : ""} ${styles.searchimagesections}`} onClick={() => setIndex(index)}>
                                            <Image src={items} alt="no image" className={` ${styles.imagesearch}`} />
                                        </div>
                                    )
                                })}
                            </div>


                        </div>
                    </div>


                    <div className={styles.insidesplitanothecart}>
                        <div className={styles.leftinsideanothersection}>
                            <div className={`${styles.ratingsection} mt-2`}>
                                <div className={styles.ratingsections}>
                                    <Image src={redstar} alt="no image" className={styles.star} />
                                    4.5 <span className='text-grey'>(106 ratings)</span>
                                </div>
                                <div className="fs-6">
                                    Top Seller
                                </div>
                            </div>
                            <div className={styles.loreamsectionproduct}>

                                <div className={`${styles.loremtextwidth} medium-text`}>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing.
                                </div>
                                <div className="medium-text">
                                    Description
                                </div>
                                <div>
                                    Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo B.,a 3rd degree black-belt and long-time and teacher of variatios. Learn to play and enjoy the sport of a lifetime. If you are alrea The Instructor for this activity will be Leo B.,a 3rd degree black-belt and long-time and teacher of variatios
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightinsideanothersection}>
                            <div className={styles.cartaddsection}>
                                <div className={styles.cartpricesection}>
                                    <div><span className='text-grey'><del>$65.00</del></span></div>
                                    <div><span className='active fs-5'><>$43.00</></span></div>

                                </div>

                                <div>
                                    <Button className={styles.addcartbutton} onClick={() => handleChange(datas)}>
                                        Add To Cart
                                    </Button>
                                </div>

                                <div>
                                    <Button className={styles.bynowcartbutton} onClick={Checkout}>
                                        Buy Now
                                    </Button>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
                <div className={styles.reviewsection}>
                    <div>
                        <Reviewsproduct />
                    </div>
                </div>
                <div>
                    <Caroselproducts />
                </div>
            </div>
        </Fragment>
    )
}

export default Viewproduct