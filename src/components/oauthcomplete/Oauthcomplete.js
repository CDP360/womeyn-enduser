import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { oAuthSuccessTokenStage } from '../../services/user-login-service/user-login-services';
import CredentialsProvider from "next-auth/providers/credentials";

function Oauthcomplete() {

    const router = useRouter();
    useEffect(() => {

        oAuthSuccessTokenStage().then((res) => {
            console.log("kalaioath", res);
            setTimeout(() => {
                // toast.success("Successfully Login!!");
                router.push("/");
            }, 1700);
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