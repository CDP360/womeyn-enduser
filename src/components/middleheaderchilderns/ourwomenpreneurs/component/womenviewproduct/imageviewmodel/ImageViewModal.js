import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from './styles/ImageViewmodels.module.scss';
function ImageViewModal({ imagemodel, handleImageClose, productimages,id }) {

    const [indexs, setIndex] = useState(0);


    useEffect(() => {

    }, [indexs])



    return (
        <div>
            <Modal
                show={imagemodel}
                onHide={handleImageClose}
                backdrop="static"
                keyboard={false}
                size="xl"
                centered
            >

                <Modal.Body>

                <div className={"d-flex justify-content-end"} style={{ cursor: "pointer" }} onClick={handleImageClose}>
                        <ion-icon name="close-outline" size="large"></ion-icon>
                    </div>
                    <div className="mt-3 mb-5" className={styles.textscolor}>
{id}
                    </div>

                  

                    <div className={styles.imageboxmodel}>
                        <div className={styles.leftimageArrowSlide}>
                            {indexs === 0 ?
                                <>

                                </> : <div >
                                    <div onClick={() => setIndex((pre) => pre - 1)} className={styles.arrowclickleft}>
                                        <ion-icon name="chevron-back-outline"></ion-icon>
                                    </div>
                                </div>}
                        </div>
                        <img
                            className={styles.serachlargeimages}
                            src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages[indexs]?.name}`}
                            alt="profile-pic"
                        />

                        <div className={styles.rightimageArrowSlide}>
                            {productimages?.length - 1 === indexs ?
                                <>

                                </> : <div>
                                    <div onClick={() => setIndex((pre) => pre + 1)} className={styles.arrowclickright}>
                                        <ion-icon name="chevron-forward-outline"></ion-icon>
                                    </div>
                                </div>}

                        </div>



                    </div>
                    <div className={styles.cardimagesshow}>
                        {productimages?.map((item, index) => {
                            return (
                                <div className={`${indexs === index ? styles.activewomen : styles.borderimages
                                    } `} onClick={() => {
                                        setIndex(index)

                                    }} onMouseOver={() => setIndex(index)} key={index}>
                                    {item?.name ? <><img
                                        className={styles.imagecards}
                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.name}`}
                                        alt="profile-pic"
                                    /></> : <>
                                        <Skeleton />
                                    </>}
                                </div >
                            )
                        })}
                    </div>
                </Modal.Body>

            </Modal>
        </div>
    )
}

export default ImageViewModal