import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import image from '../../../src/assests/homepage-logos/404notfound.png';
import styles from './styles/Redirect.module.scss';


function RedirectPathuser() {

    const history = useRouter();
    useEffect(() => {
        const token = localStorage.getItem("userToken");
   

    }, []);

    const NavigatePath = () => {
        history.push("/");
        localStorage.removeItem("userid");
        localStorage.removeItem("userToken");
        localStorage.removeItem("profile");
        localStorage.removeItem("whish");
        localStorage.removeItem("user");
        localStorage.removeItem("auth");
        localStorage.removeItem("productid");
    }
    return (
        <>

            <div className={styles.mainpagenot}>


                <div className={styles.insidenotpage}>
                    <Image src={image} alt="no image" className={styles.notfoundimage} />

                    <div className={styles.opps}>
                        Oops!

                    </div>
                    <div className={styles.something}>
                        Something's Missing
                    </div>

                    <button className={styles.backtohomenones} onClick={NavigatePath}>Go Back..!</button>

                </div>
            </div>
            <div className={styles.emptyboxrightsectioncolor}></div>
            <div className={styles.emptyboxleftsectioncolor}></div>
        </>
    )
}

export default RedirectPathuser