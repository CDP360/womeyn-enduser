import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { OauthSuccess, oAuthSuccessTokenStage } from '../../services/user-login-service/user-login-services';
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession, signIn, signOut } from "next-auth/react"

function Oauthcomplete() {
    const { data: session } = useSession();
    const history = useRouter();
    const { redirect } = history.query;
    useEffect(() => {
        OauthSuccess().then(async (res) => {
            // toast.success("Sucess!!!");
            localStorage.setItem("womenUserToken", JSON.stringify(res?.data?.tokens?.access?.token))
            // const result = await signIn("credentials", {
            //     redirect: false,
            //     email: res?.data?.user?.email,
            //     password: res?.data?.user?.password || null
            // })
            setTimeout(() => {
                router.push("/");
            }, 1000)
        }).catch((err) => {
            toast.error("Error !! code!!")
            console.log(err)
        })
    }, [])


    return (
        <div className='d-flex align-content-center justify-content-center authsuccess'>
            <LoaderLogo />
        </div>
    )
}

export default Oauthcomplete