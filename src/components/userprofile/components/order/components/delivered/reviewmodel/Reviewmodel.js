import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import styles from './styles/Reviewmodel.module.scss';
import { Rate } from "antd";
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import camera from '../../../../../../../assests/womeynlogos/cameraprofile.png';
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import { ProductRatingView } from '../../../../../../../services/product-rating-service/product-rating-service';
function Reviewmodel({ show1, handleClose1, orderlist }) {
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const [count, setStarCount] = useState(0);
    const [image, setImage] = useState([]);
    useEffect(() => {
        const names = JSON.parse(localStorage.getItem("user"));
        setValue("username", names)
    }, [count])

    const handleImagechange = (e) => {
        setImage([...image, e.target.files[0]]);
    }
    const Ratingproduct = (data) => {
        const formData = new FormData();
        formData.append("name", data?.username)
        formData.append("ratingValue", count)
        formData.append("title", data?.title)
        formData.append("message", data?.description)
        formData.append("productId", orderlist?.productId)
        formData.append("upl", image)
        ProductRatingView(formData).then((res) => {
            setTimeout(() => {
                handleClose1();

            }, 300)
        }).catch((err) => {
            console.log(err);
        })
    }
    const filterDeleteImage = (id) => {
        const filters = image.filter((item, index) => {
            return index !== id
        })
        setImage(filters);
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
                            Review and Rating
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

                            // {...register("rating", {
                            //     required: "Please select rating",

                            // })}

                            />

                            <div>

                                <Form.Text className="text-muted">
                                    {errors.rating && <span className="active">{errors.rating.message}</span>}
                                </Form.Text>
                            </div>

                        </div>
                    </div>
                    <div className="mb-3 mt-3">
                        <div className='mb-2'>
                            Name
                        </div>
                        <div>
                            <Form.Control
                                className='form-control-profiles'
                                placeholder="Enter Name..."
                                {...register("username", {
                                    required: "Please enter username",

                                })}

                            />
                            <Form.Text className="text-muted">
                                {errors.username && <span className="active">{errors.username.message}</span>}
                            </Form.Text>
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
                                {...register("title", {
                                    required: "Please enter title",

                                })}
                            />
                            <Form.Text className="text-muted">
                                {errors.title && <span className="active">{errors.title.message}</span>}
                            </Form.Text>
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
                                {...register("description", {
                                    required: "Please enter description",

                                })}
                            />
                            <Form.Text className="text-muted">
                                {errors.description && <span className="active">{errors.description.message}</span>}
                            </Form.Text>
                        </div>
                    </div>


                    <div>
                        {image?.length <= 4 &&
                            <div className="mt-4 mb-1">
                                {/* <div>
                                <span className='active'> Drag & drop</span> an image
                            </div> */}
                                <label htmlFor="upload-button" className={styles.borderimage}>
                                    <Image src={camera} alt="no image" className={styles.cameras} />
                                </label>
                                <input type="file" id="upload-button" style={{ display: 'none' }} onChange={handleImagechange} />
                            </div>}

                    </div>

                    <div className={styles.imageflex}>
                        {image?.length > 0 ? <>
                            {image?.map((item, index) => {
                                return (
                                    <>
                                        {item.name ?
                                            <div className={styles.insideboximage}>

                                                <img
                                                    className={styles.editmodelprofile}
                                                    src={URL.createObjectURL(item)}
                                                />
                                                <button className={styles.deletebuttonimage} onClick={() => filterDeleteImage(index)}>
                                                    <ion-icon name="trash-outline"></ion-icon>
                                                </button>
                                            </div> : <></>}
                                    </>
                                )
                            })}
                        </> : <></>}
                    </div>
                    {/* <div>
                        <button className={styles.submits} onClick={handleSubmit(Ratingproduct)}>Submit</button>

                        <div>

<button className={styles.submits} onClick={handleClose1}>Cancel</button>

</div>
                    </div> */}

<div className={styles.reviewbuttons}>

                        
<div>

<button className={styles.submits} onClick={handleClose1}>Cancel</button>

</div>

<div>
<button className={styles.submits} onClick={handleSubmit(Ratingproduct)}>Submit</button>

</div>
</div>
                </div>
            </Modal>
        </div>
    )
}

export default Reviewmodel