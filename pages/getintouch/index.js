import React from 'react'
import Getintouch from '../../src/components/getintouch/Getintouch'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Getintouch">
           <Head>
                <title>Womeyn Getintouch</title>
                <meta name="description" content="Getintouch" key="desc" />
                <meta property="og:title" content="Womeyn Getintouch " />
                <meta
                    property="og:description"
                    content="Getintouch"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
         <Getintouch/>
        </LayoutHeader>
    

    )
}

export default index