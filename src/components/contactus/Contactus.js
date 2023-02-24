import React from 'react'
import { Fragment } from 'react';
import Image from 'next/image';
import { ContactText } from '../../consttext/Contactconst';
import styles from './styles/Contactus.module.scss';
import location from '../../assests/login-logos/location.png';
import Email from '../../assests/login-logos/Email.png';
import url from '../../assests/login-logos/url.png';
import Contactlogo from '../../assests/login-logos/Contactno.png';
import offcircle from '../../assests/login-logos/arrowcircle.png';
import circles from '../../assests/login-logos/arrowcircleoff.png';
import ContactForm from './ContactForm';
function Contactus() {
    const Contactdetails = [
        {
            id: 1,
            name: ContactText?.ContactInformation,

        },
        {
            id: 2,
            name: ContactText?.Fillup,

        },
        {
            id: 3,
            name: ContactText?.contactno,
            image: Contactlogo

        },
        {
            id: 4,
            name: ContactText?.contactemail,
            image: Email
        },
        {
            id: 5,
            name: ContactText?.url,
            image: url
        },
        {
            id: 6,
            name: ContactText?.Location,
            image: location

        }
    ]

    return (
        <Fragment>

            <div className={styles.conatctusmainsection}>
                <div className={styles.insidecontactuspage}>
                    <div className={styles.textsizecontact}>
                        {ContactText?.ContactUs}
                    </div>
                    <div className={styles.insidesectionboxcontact}>
                        <div className={styles.cardsectioncontacty}>
                            <div className={styles.leftcontactsection}>
                                {Contactdetails.slice(0, 2).map((item, index) => {
                                    return (
                                        <div>
                                            {item.name == "Contact Information" ? <div className={styles.contactNumberinfor}>{item.name}</div> : <div>
                                                <div className={styles.filename}>
                                                    {item.name}
                                                </div>
                                            </div>}

                                        </div>
                                    )
                                })}

                                <div className="mt-4">

                                    {Contactdetails.slice(2, 7).map((item, index) => {
                                        return (
                                            <div className="mt-2 mb-4">
                                                <div className={styles.contactbox}>
                                                    <div className={styles.contactround}>
                                                        <img src={item?.image?.src} alt="no image" className={styles.contactimage} />
                                                    </div>
                                                    <div className={styles.contacttextsizes}>
                                                        {item.name}
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })}

                                </div>
                                <div className={styles.boxbottomsection}>
                                    <div className={styles.offcirclessection}>
                                        <Image src={offcircle} alt="no image" />
                                    </div>

                                    <div className={styles.offcirclessection1}>
                                        <Image src={circles} alt="no image" />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightcontactsection}>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Contactus