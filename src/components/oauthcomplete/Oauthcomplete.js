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
        }, 1700);
    }, [])
    return (
        <div className='d-flex align-content-center justify-content-center'>
            <LoaderLogo />
        </div>
    )
}

export default Oauthcomplete