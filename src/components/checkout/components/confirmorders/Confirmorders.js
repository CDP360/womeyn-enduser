import React, { useEffect, useState, useContext } from 'react'
import styles from './styles/ConfirmOrders.module.scss';
import { ContextStore } from '../../../../Redux/store/Contextstore';
import { CustomerOrders } from '../../../../services/customer-order-service/customer-order-service';
import { toast } from 'react-toastify';
function Confirmorders({ name, totalPrice, step, setStep }) {
    const [overs, setOvers] = useState([]);
    const { state, dispatch } = useContext(ContextStore);

    const [orders, setOrders] = useState([]);

    const { cart } = state;
    const datas = [
        {
            id: 1,
            name: "kalai",
            address: 1,
            saleprice: 700,
            counts: 5,
            phonenumbetrs: 2,
        },
        {
            id: 2,
            name: "kalai",
            address: 1,
            saleprice: 700,
            counts: 5,
            phonenumbetrs: 2,
        },
        {
            id: 3,
            name: "kalai",
            address: 1,
            saleprice: 700,
            counts: 5,
            phonenumbetrs: 2,
        }
    ]

    // useEffect(() => {
    //     let storesfilter = [];
    //     cart?.cartData?.map((item, index) => {
    //         storesfilter.push({
    //             productName: item?.productName,
    //             productId: item?.id,
    //             price: item?.salePrice,
    //             deliveryFee: "40",
    //             quantity: item?.quantity,
    //             variations: item?.variations,
    //             sellerId: item?.sellerId,
    //             sellerBusinessName: item?.sellerBussinesName,
    //             productThumbImage: item?.productThumbImage,
    //             couponName: "SUMMER50",
    //         })
    //     })
    //     setOrders(storesfilter);
    // }, [overs, name])


    const deliverOrderConfirm = () => {

        setStep(step + 1);

        // const userName=JSON.parse(localStorage.getItem("womenuser"));
        // const overAllorders = {
        //     deliveryAddressId: name,
        //     itemsOrdered: orders,
        //     totalOrderAmount:totalPrice,
        //     customerName:userName
        // }
        // CustomerOrders(overAllorders).then((res) => {
        //     toast.success(res?.data?.message, {
        //         position: "top-center",
        //         autoClose: 3000,
        //         hideProgressBar: false,
        //         closeOnClick: true,
        //         pauseOnHover: true,
        //         draggable: true,
        //         progress: undefined,
        //         theme: "success",

        //     })
        // }).catch((err) => {
        //     console.log(err);
        // })

        // console.log("cart", overAllorders)
    }
    return (
        <div className={styles.mainconfirmorders}>
            <div className={styles.insideconfirmorrders}>
                {cart?.cartData?.length > 0 ? <>
                    {cart?.cartData?.map((item, index) => {
                        return (
                            <div className={styles.splitorderconfirm}>
                                <div className={styles.boxsectionimage}>
                                    <img
                                        className={styles.editprofilesection}
                                        src={`https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${item?.productThumbImage}`}
                                        alt="profile-pic"
                                    />
                                </div>
                                <div>
                                    <div className={styles.productNamesize}>
                                        {item?.productName}
                                    </div>
                                    <div>
                                        Rs.{item?.salePrice} <span>
                                            {item?.offerPercentag == 0 ? <span></span> : <>
                                                <del>
                                                    <span>{item?.actualPrice}</span>
                                                </del>
                                            </>}
                                            {item?.offerPercentag == 0 ? <></> : <> {item?.offerPercentag} off</>}
                                        </span>
                                    </div>
                                    <div>
                                        {item?.productDescription}
                                    </div>
                                </div>

                            </div>

                        )
                    })}
                    <div className="mt-4">
                        <button className={styles.continuebutton} onClick={deliverOrderConfirm}>Continue</button>
                    </div>
                </> : <>
                </>}
            </div>
        </div>
    )
}

export default Confirmorders