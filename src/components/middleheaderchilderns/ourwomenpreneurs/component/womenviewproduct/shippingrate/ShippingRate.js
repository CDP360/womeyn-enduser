import React,{useEffect,useState} from 'react'
import styles from '../styles/Womenview.module.scss';
import { postShipmentrates } from '../../../../../../services/shipping-service/shipping-service';
import { toast } from 'react-toastify';

import Image from 'next/image';

function ShippingRate({productdata,location}) {
    const [pincodes,setPincodes]=useState("");
    console.log(productdata,"productdata")

    useEffect(()=>{
    },[])

    const PinCodeCheck=async()=>{
        const forms={
            toPinCode:pincodes,
            productId:productdata?.id,

        }
postShipmentrates(forms).then((res)=>{
console.log(res?.data,"res")
toast.success("success")
}).catch((err)=>{
    console.log(err);
})
    }
    return (
        <div>
            <div className={styles.locationsection}>
                <div>
                </div>
                {productdata?.isShippingRequired === 1 ? <>
                </> : <>

                    <div className={styles.deverisection}>
                        <div>
                            <Image src={location} alt="no image" className={styles.deliveryicon} />
                        </div>
                        <div className={styles.deliverytexts}>Delivery To</div>
                    </div>
                    <div className={styles.inputlocationfield}>
                        <div>
                            <input type="text" placeholder='7000' className={styles.location} onChange={(e)=>setPincodes(e?.target.value)}/>
                        </div>
                        <div>
                            <button className={styles.check} onClick={PinCodeCheck}>Check</button>
                        </div>
                    </div>
                    {/* <div className='mt-2'>
                        Delivery in days Thursday |  <span className={styles.free}>Free</span>  <del> A$ 40</del> is orderd before 3:34pm
                    </div> */}
                </>}


            </div>
        </div>
    )
}

export default ShippingRate