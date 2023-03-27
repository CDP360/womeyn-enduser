import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from './styles/Reviewmodel.module.scss';
import { Rate } from "antd";
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import camera from '../../../../../../../assests/womeynlogos/cameraprofile.png';
function Reviewmodel({ show1, handleClose1 }) {

    const [count, setStarCount] = useState(0);
    const [image, setImage] = useState("");
    useEffect(() => {

    }, [count])

    const handleImagechange = (e) => {
        setImage(e.target.files[0]);

    }
    return (
        <div>

            <Modal
                show={show1}
                onHide={handleClose1}
                backdrop="static"
                keyboard={false}
                centered
            >
                <div className={styles.reviewrating}>
                    <div className={styles.insidemodelpopup}>
                        <div className={styles.removetexts}>
                            Review and Rating {count}
                        </div>
                        <div onClick={handleClose1}>
                            <ion-icon name="close-outline" size="large"></ion-icon>
                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <div>
                            Rate this product
                        </div>
                        <div className="mb-3 mt-1">
                            <Rate allowHalf style={{ color: "#54BE43", fontSize: "2rem", cursor: "pointer" }}
                                tooltips={["Very Bad", "Bad", "Good", "Very Good", "Excellent"]}
                                onChange={(value) => {
                                    setStarCount(value)

                                }}

                            />
                        </div>
                    </div>
                    <div className="mb-3 mt-3">

                        <div className='mb-2'>
                            Review this product
                        </div>
                        <div>
                            <Form.Control as="textarea" rows={3}
                                className='form-control-profiles'
                                placeholder="Enter Description..."

                            />
                        </div>

                    </div>

                    <div className="mb-3 mt-3">

                        <div className='mb-2'>
                            Title
                        </div>
                        <div>
                            <Form.Control
                                className='form-control-profiles'
                                placeholder="Enter Review title..."

                            />
                        </div>

                    </div>

                    <div>

                        <div className="mt-4 mb-1">
                            {/* <div>
                                <span className='active'> Drag & drop</span> an image
                            </div> */}
                            <label htmlFor="upload-button" className={styles.borderimage}>
<Image src={camera} alt="no image" className={styles.cameras}/>
                            </label>
                            <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleImagechange} />
                        </div>


                    </div>

                    <div>

                        <button className={styles.submits}>Submit</button>

                    </div>


                </div>
            </Modal>
        </div>
    )
}

export default Reviewmodel