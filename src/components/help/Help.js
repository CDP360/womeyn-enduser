import React, { useState,useEffect } from 'react'
import styles from './styles/Help.module.scss';
import helpimage from '../../assests/category-logos/helpimage.png';
import messagebox from '../../assests/category-logos/messagebox.png';
import phone from '../../assests/category-logos/phone.png';

import Image from 'next/image';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import { Gettermsandconditions } from '../../services/termsandconditions-service/termsandconditions_services';
import ReactHtmlParser from "react-html-parser";

function Help() {
    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);

    const [terms,setTerms]=useState([]);
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        formState: { errors },
    } = useForm();
    const onSubmit = (e) => {
    }

    useEffect(() => {
        const ids = 4;

Gettermsandconditions(ids).then((res)=>{
    setTerms(res?.data);
}).catch((err)=>{
    console.log(err);
})
    }, []);

    console.log(terms,"terms")

    return (

        <div className={styles.mainsectionhelp}>
            <div className={styles.howcanhelp}>
                Hello? How Can we help you.
            </div>
            <div className={styles.borderboxhelp}>
                <div className={styles.ordersslice} onClick={() => setDropdown1(!dropdown1)}>
                    <div className={styles.imagesectionhelp}>
                        {/* <div>
                            <Image src={helpimage} alt="no image" className={styles.imagehelp} />
                        </div> */}
                        <div className={styles.yours}>
                            1. Orders
                        </div>
                    </div>
                    <div className={styles.arrowsection}>
                        {dropdown1 ?
                            <ion-icon name="chevron-up-outline" size="small" onClick={() => setDropdown1(!dropdown1)}></ion-icon> :
                            <ion-icon name="chevron-down-outline" size="small" onClick={() => setDropdown1(!dropdown1)}></ion-icon>}
                    </div>
                </div>
                {dropdown1 && <div>
                    <div className={styles.bordertopsection}>
                        <div className="mt-3 mb-3">
                            If the estimated delivery date for your order has passed and your item hasn't arrived, please let the seller know by logging a dispute case with the seller stating that you didn't receive the item.

                        </div>


                        <div className="mt-3 mb-3">
                            For local delivery you have 15 days and for interstate deliveries 21 days before you can lodge a dispute and seek a status before requesting a refund.

                        </div>


                        <div>
                            On lodging the dispute the Seller will revert back to you with 3 working days and provide a status update of the shipment or acknowledge the refund request. Similar process will also be applicable for part shipment and for items not received.

                        </div>


                        <div className="mt-3 mb-3">
                            In case your item has arrived during this period, please close the dispute as resolved.

                        </div>

                    </div>
                </div>}
            </div>
            <div className={styles.borderboxhelp}>
                <div className={styles.ordersslice} onClick={() => setDropdown2(!dropdown2)}>
                    <div className={styles.imagesectionhelp}>
                        {/* <div>
                            <Image src={helpimage} alt="no image" className={styles.imagehelp} />
                        </div> */}
                        <div className={styles.yours}>
                            2. How do I track my order
                        </div>
                    </div>
                    <div className={styles.arrowsection}>
                        {dropdown2 ? <ion-icon name="chevron-up-outline" size="small" onClick={() => setDropdown2(!dropdown2)}></ion-icon> :
                            <ion-icon name="chevron-down-outline" size="small" onClick={() => setDropdown2(!dropdown2)}></ion-icon>}
                    </div>
                </div>
                {dropdown2 && <div>
                    <div className={styles.bordertopsection}>
                        <div className="mt-3 mb-3">
                            On successful completion of a transaction WomeynPreneur will uploads tracking information that you can check online all the way to your delivery address.

                        </div>


                        <div className="mt-3 mb-3">
                            If the WomeynPreneur is using a tracked delivery service, you'll be able to view carrier information and your order's current location. If your item isn't sent with tracking, you'll be able to see the expected delivery date for your package.

                        </div>

                        <div className="mt-3 mb-3">
                            You can also check your order's delivery status in your Purchase history. If the seller is using a tracked service, you'll see the item's tracking number as a link next to the item.

                        </div>
                    </div>
                </div>}
            </div>

            <div className={styles.borderboxhelp}>
                <div className={styles.ordersslice} onClick={() => setDropdown3(!dropdown3)}>
                    <div className={styles.imagesectionhelp}>
                        {/* <div>
                            <Image src={helpimage} alt="no image" className={styles.imagehelp} />
                        </div> */}
                        <div className={styles.yours}>
                            3. Disputes & Refunds
                        </div>
                    </div>
                    <div className={styles.arrowsection}>
                        {dropdown3 ? <ion-icon name="chevron-up-outline" size="small" onClick={() => setDropdown3(!dropdown3)}></ion-icon> :
                            <ion-icon name="chevron-down-outline" size="small" onClick={() => setDropdown3(!dropdown3)}></ion-icon>}
                    </div>
                </div>
                {dropdown3 && <div>
                    <div className={styles.bordertopsection}>
                        <div className="mt-3 mb-3">

                            a)     You have not received an item
                        </div>

                        <div className="mt-3 mb-3">
                            b)    Some of the item or items ordered are missing

                        </div>

                        <div className="mt-3 mb-3">
                            c)     The item is damaged in transit

                        </div>

                        <div className="mt-3 mb-3">
                            d)    The item delivered is not what was ordered

                        </div>

                        <div className="mt-3 mb-4">

                            Once the dispute / case is lodged, you are recommended to connect with the WomeynPreneur to amicably resolve the dispute. Womeyn is an intermediary / aggregator platform and will endeavour to assist the WomeynPatron (you) to seek a refund or a product replacement. If the settlement is via a refund, please allow 7 to 15 working days for the credit to reflect in your account.

                        </div>
                    </div>
                </div>}
            </div>
            <div className="mt-5 mb-5">
                <div className={styles.did}>

                    Didnt Find anything?
                </div>


                <div className={styles.loream}>

                {terms?.content ? <>{ReactHtmlParser(terms?.content.replace(/&lt;/g, "<"))}</> : null}

                    {/* If you were unable to find specific information on <span><a href="https://www.womeyn.com">https://www.womeyn.com</a></span> then please feel free to reach out by filling in the details below and one of our support consultants will call or reply back within 24 to 48 hours. */}
                </div>


                <div>
                    <Form.Group className="mb-3" controlId="formBasicEmail">

                        <Form.Control as="textarea" type="text" rows={2} placeholder="Please type your query here" className={styles.sendmessagebox}
                            {...register("help", {
                                required: " Please type your query here",

                            })}

                        />
                        <Form.Text className="text-muted">
                            {errors.help && <span className="active">{errors.help.message}</span>}
                        </Form.Text>
                    </Form.Group>
                </div>



                <div>

                    <button className={styles.send} onClick={handleSubmit(onSubmit)}>Send</button>
                </div>


                <div className={styles.helpboximage}>
                    <div className={styles.commonboximage}>
                        <div>
                            <Image src={messagebox} alt="no image" className={styles.logbox} />
                        </div>
                        <div className={styles.comtexts}>Help@womeyn.com</div>

                    </div>
                    <div className={styles.commonboximage}>

                        <div>
                            <Image src={phone} alt="no image" className={styles.logbox} />
                        </div>
                        <div className={styles.comtexts}>+1800-989-0999</div>

                    </div>


                </div>

            </div>
        </div>

    )
}

export default Help