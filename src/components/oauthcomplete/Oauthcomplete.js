import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import LoaderLogo from '../loaderlogo/LoaderLogo';

function Oauthcomplete() {

    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            // toast.success("Successfully Login!!");
            router.push("/");
        }, 1400);
    }, [])
    return (
        <div>
            <LoaderLogo />
        </div>
    )
}

export default Oauthcomplete