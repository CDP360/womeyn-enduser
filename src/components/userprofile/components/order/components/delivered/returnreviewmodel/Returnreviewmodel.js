import React, { useState, useEffect } from 'react'
import { useForm } from "react-hook-form";
import { toast } from 'react-toastify';
import Modal from 'react-bootstrap/Modal';
import styles from './styles/Returnviewmodel.module.scss';
import Form from 'react-bootstrap/Form';
import Image from 'next/image';
import moment from 'moment';
import camera from '../../../../../../../assests/womeynlogos/cameraprofile.png';
import Skeleton from 'react-loading-skeleton';

function Returnreviewmodel({ show2, handleClose2, orderlist }) {
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
        setValue("username", names);





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
                show={show2}
                onHide={handleClose2}
                backdrop="static"
                keyboard={false}
                centered
                size="lg"
               
                
            >
                <div className={styles.reviewrating}>
                    <div className={styles.insidemodelpopup}>
                        <div className={styles.removetexts}>
                            Return Product
                        </div>
                        <div onClick={handleClose2}>
                            <ion-icon name="close-outline" size="large"></ion-icon>
                        </div>
                    </div>


                    <div className={styles.retrunbox}>

                        <div>
                            <div >
                                {orderlist?.productThumbImage ? <>
                                    <img
                                        className={styles.img}
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${orderlist?.productThumbImage}`}
                                        alt="profile-pic"
                                    />
                                </> : <>
                                    <Skeleton className={styles.img} />
                                </>}

                            </div>
                        </div>
                        <div>
                        <div>
                          <div className='carttextsmall' onClick={() => Productview(orderlist?.productSlugName)}>
                            {orderlist?.productName}
                          </div>

                          <div className='carttextsmall mt-3' onClick={() => Productview(orderlist?.productSlugName)}>
                            A$ {orderlist?.price}
                          </div>
                          <div>
                            {orderlist?.variations?.map((itemss, index) => {
                              return (
                                <div >
                                  <span className="sizecolor">{orderlist?.name}</span> : {orderlist?.value}
                                </div>
                              )
                            })}
                          </div>
                          <div>

                          </div>
                        </div>
                        </div>

                    </div>

                    <div>

                        <div>Reason</div>


                        <div className="mt-2 ">
                            <label htmlFor="field-rain1">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="Expected delivery time is very long
                        "
                                    id="field-rain1"
                                />
                                <span className="ms-2">
                                    Expected delivery time is very long
                                </span>
                            </label>
                        </div>
                        <div className="mt-2 mb-2">
                            <label htmlFor="field-rain2">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                    I will not available at home on delivery day
                        "
                                    id="field-rain2"
                                />
                                <span className="ms-2">
                                    I will not available at home on delivery day
                                </span>
                            </label>
                        </div>

                        <div className="mt-2 mb-2">
                            <label htmlFor="field-rain3">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                        Have purchased the product elsewhere
                        "
                                    id="field-rain3"
                                />
                                <span className="ms-2">
                                    Have purchased the product elsewhere
                                </span>
                            </label>
                        </div>

                        <div className="mt-2 mb-2">
                            <label htmlFor="field-rain4">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                        I want cancel due to product quality issues
                        "
                                    id="field-rain4"
                                />
                                <span className="ms-2">
                                    I want cancel due to product quality issues
                                </span>
                            </label>
                        </div>


                        <div className="mt-2 mb-2">
                            <label htmlFor="field-rain5">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                        I want to change address for the order
                        "
                                    id="field-rain5"
                                />
                                <span className="ms-2">
                                    I want to change address for the order
                                </span>
                            </label>
                        </div>

                        <div className="mt-2 mb-2">
                            <label htmlFor="field-rain6">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                        Price for the product has decreased
                        "
                                    id="field-rain6"
                                />
                                <span className="ms-2">
                                    Price for the product has decreased
                                </span>
                            </label>
                        </div>


                        <div className="mt-2 mb-2">
                            <label htmlFor="field-rain7">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                        I have changed my mind
                        "
                                    id="field-rain7"
                                />
                                <span className="ms-2">
                                    I have changed my mind
                                </span>

                            </label>
                        </div>

                        <div>
                            <label htmlFor="field-rain8">
                                <input
                                    {...register("weather")}
                                    type="radio"
                                    value="
                        I want to change my phone number
                        "
                                    id="field-rain8"
                                />
                                <span className="ms-2">
                                    I want to change my phone number
                                </span>

                            </label>
                        </div>
                    </div>

                    {/* <div className="mb-3 mt-3">
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
                    </div> */}
                    <div className="mb-3 mt-3">
                        <div className='mb-2'>
                            Title
                        </div>
                        <div>
                            <Form.Control
                                className='form-control-profiles'
                                placeholder="Enter  title..."
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
                            Description
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

                            <button className={styles.submits} onClick={handleClose2}>Cancel</button>

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

export default Returnreviewmodel