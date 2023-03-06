import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { oAuthSuccessTokenStage } from '../../services/user-login-service/user-login-services';

function Oauthcomplete() {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // toast.success("Successfully Login!!");

            // router.push("/");
        }, 1700);
        oAuthSuccessTokenStage().then((res) => {
            console.log("kalaioath", res);
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div className='d-flex align-content-center justify-content-center'>
            <LoaderLogo />
        </div>
    )
}

export default Oauthcomplete