import React from 'react'



import Womenpreneusdetails from './../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails';
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Product">
            <Head>
                <title>Womeyn Product</title>
                <meta name="description" content="Women Product" key="desc" />
                <meta property="og:title" content="Women Product" />
                <meta
                    property="og:description"
                    content="Product"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Womenpreneusdetails />
        </LayoutHeader>



    )
}

export default index