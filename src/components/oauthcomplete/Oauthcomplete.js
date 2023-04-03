import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';
import { OauthSuccess } from '../../services/user-login-service/user-login-services';


function Oauthcomplete() {
    const history = useRouter();
    useEffect(() => {
        OauthSuccess().then((res) => {
            localStorage.setItem("userToken", JSON.stringify(res?.data?.tokens?.access?.token));
            localStorage.setItem("userid", JSON.stringify(res?.data?.user?.id));
            localStorage.setItem("auth", true);
            setTimeout(() => {
                history.push("/");
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