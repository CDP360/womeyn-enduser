import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { OauthSuccess, oAuthSuccessTokenStage } from '../../services/user-login-service/user-login-services';
import CredentialsProvider from "next-auth/providers/credentials";
import { useSession, signIn, signOut } from "next-auth/react"

function Oauthcomplete() {

    const router = useRouter();
    // useEffect(() => {
    //     oAuthSuccessTokenStage().then((res) => {
    //         console.log("kalaioath", res);
    //         setTimeout(() => {
    //             toast.success("Successfully Login!!");
    //             router.push("/");
    //         }, 1000);
    //     }).catch((err) => {
    //         console.log(err);
    //         toast.error("Error Something!!");
    //     })
    // }, [])


    useEffect(() => {
        OauthSuccess().then(async (res) => {
            toast.success("Sucess!!!");
            localStorage.setItem("womenUseToken", JSON.stringify(res?.tokens?.access?.token))
            try {
                const result = await signIn("credentials", {
                    redirect: false,
                    email: res?.data?.user?.email,
                    password
                })
                if (result.error) {
                    toast.error(result.error);
                }

            }
            catch (err) {
                console.log(err);
            }
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