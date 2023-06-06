import React ,{useState}from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from './styles/ImageViewmodels.module.scss';
function ImageViewModal({imagemodel,handleImageClose,productimages}) {

    const [indexs, setIndex] = useState(0);

    return (
        <div>
            <Modal
                show={imagemodel}
                onHide={handleImageClose}
                backdrop="static"
                keyboard={false}
                size="lg"
                centered
            >

                <Modal.Body>

                <div className={"d-flex justify-content-end"} style={{cursor:"pointer"}} onClick={handleImageClose}>
                                 <ion-icon name="close-outline" size="large"></ion-icon>
                             </div>

                    <div className={styles.imageboxmodel}>
                    <img
                                                    className={styles.serachlargeimages}
                                                    src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages[indexs]?.name}`}
                                                    alt="profile-pic"
                                                />
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