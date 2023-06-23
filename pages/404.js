import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import image from '../src/assests/homepage-logos/404notfound.png';
import LayoutHeader from '../src/components/Layoutheader/LayoutHeader';
import styles from './styles/Pagenotfound.module.scss';
function ErrorPage() {

    const router = useRouter();
    return (
        <LayoutHeader title={"404 NotFound"}>
            <div className="mainsection">
                <div className="insidesection">
                <div className={styles.mainpagenot}>
                <div className={styles.emptyboxrightsectioncolor}></div>
                <div className={styles.emptyboxleftsectioncolor}></div>

                <div className={styles.insidenotpage}>
                    <Image src={image} alt="no image" className={styles.notfoundimage} />

                    <div className="large-text mt-4">
                        Oops!

                    </div>
                    <div className="small-light-text-grey mt-2 mb-5">
                        We can’t seem to find the page you are looking for
                    </div>
                    <div className={styles.splitpagenotfound}>
                        <Button className={styles.backtohome} onClick={() => router.push("/")}>BACK TO HOMEPAGE</Button>
                        <Button className={styles.backtohomenone}>Read blogs</Button>
                    </div>
                </div>
            </div>
                </div>
            </div>
            
        </LayoutHeader>
    )
}
export default ErrorPage