
import React, { useState, useEffect, Fragment } from "react";
import styles from './styles/Scrollbutton.module.scss';

function Scrollbutton() {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 40) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 20,
            behavior: "smooth",
        });
    };
    console.log(showTopBtn, "kalai scroll");
    return (
        <Fragment>
            <div className={styles.mainscrollbutton}>
                {showTopBtn && (
                    <div
                        className={styles.iconsection}
                        onClick={goToTop}
                    >
                        kalaitopscroll
                    </div>
                )}
            </div>
          
        </Fragment>
    )
}

export default Scrollbutton