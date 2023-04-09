import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Button } from 'react-bootstrap';
import image from '../../../src/assests/homepage-logos/404notfound.png';
import styles from './styles/Redirect.module.scss';
function RedirectPathuser() {

    const history = useRouter();
    useEffect(() => {
    }, [])

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

        <div className={styles.mainpagenot}>
            <div className={styles.emptyboxrightsectioncolor}></div>
            <div className={styles.emptyboxleftsectioncolor}></div>

            <div className={styles.insidenotpage}>
                <Image src={image} alt="no image" className={styles.notfoundimage} />

                <div className="large-text mt-4">
                    Oops!

                </div>
                <div className="small-light-text-grey mt-2 mb-5">
                    Something's missing.
                </div>
                <div className={styles.splitpagenotfound}>
                    <Button className={styles.backtohomenone} onClick={NavigatePath}>Go Back</Button>
                </div>
            </div>
        </div>
    )
}

export default RedirectPathuser