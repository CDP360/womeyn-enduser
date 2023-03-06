import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { oAuthSuccessTokenStage } from '../../services/user-login-service/user-login-services';
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession, signIn, signOut } from "next-auth/react"

function Oauthcomplete() {

    const router = useRouter();
    useEffect(() => {

        oAuthSuccessTokenStage().then((res) => {
            console.log("kalaioath", res);
            // try {
            //     const result = await signIn("credentials", {
            //         redirect: false,
            //         email: res?.data?.email,
            //         password: res?.data?.password,
            //         // password
            //         res
            //     })
            //     if (result.error) {
            //         toast.error(result.error);
            //     }
            // }
            // catch (err) {
            //     console.log(err);
            // }
            setTimeout(() => {
                toast.success("Successfully Login!!");
                router.push("/");
            }, 1000);
        }).catch((err) => {
            console.log(err);
            toast.error("Error Something!!");
        })
    }, [])
    return (
        <div className='d-flex align-content-center justify-content-center h-100'>
            <LoaderLogo />
        </div>
    )
}

export default Oauthcomplete