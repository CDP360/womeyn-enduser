import React, { useEffect, useState } from 'react'
import styles from '../styles/Womenview.module.scss';
import { postShipmentrates } from '../../../../../../services/shipping-service/shipping-service';
import { toast } from 'react-toastify';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'next/image';
import { usePlacesWidget } from "react-google-autocomplete";


function ShippingRate({ productdata, location }) {

    const [postalcodeset, setPostalCodes] = useState("");
    const [errorpost, setErrorPostCode] = useState(false);

    const [shippdata,setShippData]=useState([]);


    const [codes,setCodes]=useState("");



    useEffect(() => {
    }, [])

    const PinCodeCheck = async () => {
        const forms = {
            toPinCode: postalcodeset,
            productId: productdata?.id,
        }

        if(postalcodeset?.length===0)
        {
            setErrorPostCode(true);
        }
        if(postalcodeset){
            postShipmentrates(forms).then((res) => {
                setShippData(res?.rate_response?.rates[0])
            }).catch((err) => {
                console.log(err);
            })
        }
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
                          

                             <input type="text" placeholder='PinCode' className={styles.location}
                                maxLength={4}
                              
                                value={postalcodeset}
                                onChange={(e) => setPostalCodes(e?.target?.value)}
                            />


                        </div>
                        <div>
                            <button className={styles.check} onClick={PinCodeCheck}>Check</button>
                        </div>
                      
                    </div>

                    <div>
{errorpost && postalcodeset?.length<=0 ?<div className="text-danger mt-1">Post Code is Required</div>:<></>}
                        </div>
                    {shippdata?.length===0 ?<>
                       
                    </>:<>
                    <div className='mt-2'>

                        <span>{shippdata?.estimated_delivery_date==null?<>
                        Not Estimated delivery date
                        </>:<>

                        Delivery in days Thursday |
                        
                        
                        </>}</span>

                         <span className={styles.free}>
                        {/* Free */}
                        Delivery Charge 
                            </span><span className={styles.shippingcharge}> A$ {shippdata?.shipping_amount?.amount}</span>
                             {/* is orderd before 3:34pm */}
                    </div>
                    </>}
                    
                </>}


            </div>
        </div>
    )
}

export default ShippingRate