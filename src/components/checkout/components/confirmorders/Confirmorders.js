import React, { useEffect, useState, useContext } from 'react'
import styles from './styles/ConfirmOrders.module.scss';
import { ContextStore } from '../../../../Redux/store/Contextstore';
function Confirmorders({ name, totalPrice, step, setStep }) {
    const { state } = useContext(ContextStore);
    const { cart } = state;
    const deliverOrderConfirm = () => {
        setStep(step + 1);
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