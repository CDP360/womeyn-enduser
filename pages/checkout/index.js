import React from 'react'
import Checkout from '../../src/components/checkout/Checkout'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Checkout">
            <Head>

                <title>Womeyn Checkout </title>
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
            <Checkout />
        </LayoutHeader>
    )
}

export default index