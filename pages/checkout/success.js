import React from 'react'
import Checkoutsuccess from '../../src/components/checkout/components/checkoutsuccess/Checkoutsuccess'
import Head from "next/head";


function success() {
    return (
        <div>
            <Head>
                <title>Womeyn Success </title>
                <meta name="description" content=" Checkout" key="desc" />
                <meta property="og:title" content="Womeyn  Checkout " />
                <meta
                    property="og:description"
                    content=" Checkout"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Checkoutsuccess />
        </div>
    )
}

export default success