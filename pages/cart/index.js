import React from 'react'
import Cart from '../../src/components/cart/Cart'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Cart">
            <Head>

                <title>Womeyn Cart</title>
                <meta name="description" content="Cart" key="desc" />
                <meta property="og:title" content="Womeyn Cart" />
                <meta
                    property="og:description"
                    content="Cart"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>

            <Cart />
        </LayoutHeader>
    )
}

export default index