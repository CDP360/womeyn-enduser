import React, { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { OauthSuccess } from '../../services/user-login-service/user-login-services';
import Modal from 'react-bootstrap/Modal';
import womenlog from '../../assests/homepage-logos/womeyn_logo.png';
import styles from './styles/Oauthcomplete.module.scss';
function Oauthcomplete() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [emailexists, setEmailExists] = useState("");
    const history = useRouter();
    useEffect(() => {
        GoogleAuthComplete();
    }, [emailexists]);


    const GoogleAuthComplete = async () => {
        try {
            const res = await OauthSuccess();
            console.log(res?.data, "kalaitoken")
            localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
            localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
            localStorage.setItem("auth", true);
            setTimeout(() => {
                history.push("/");
            }, 1000)
        }
        catch (err) {
            console.log(err?.response?.data?.message, "kalaiauth");
            if (err?.response?.data?.message || err?.response?.data?.code) {
                handleShow();
                setEmailExists(err?.response?.data?.message);
            }
        }


        // OauthSuccess().then((res) => {
        //     localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
        //     localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
        //     localStorage.setItem("auth", true);

        // setTimeout(() => {
        //     history.push("/");
        // }, 1000)
        // }).catch((err) => {

        // })
    }


    return (
        <Fragment>
            <div className='d-flex align-content-center justify-content-center authsuccess'>
                <LoaderLogo />
            </div>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Womeyn
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <div className={styles.logsection}>
                            <img src={womenlog?.src} alt="no image" className={styles.womenlogo} />
                        </div>
                        <div className={styles.emailtextsexists}>
                            {emailexists}
                        </div>
                        <div className={styles.roundlogins}>
                            <button onClick={handleClose} className={styles.authlogin}>
                                Login
                            </button>
                        </div>
                    </div>
                </Modal.Body>

            </Modal>
        </Fragment>
    )
}

export default Oauthcomplete