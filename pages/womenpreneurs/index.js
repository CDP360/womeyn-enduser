import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Womenpreneurs from './../../src/components/middleheaderchilderns/ourwomenpreneurs/Womenpreneurs';
import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Womeynpreneurs">
            <Head>
                <title>Womeyn Womeynpreneurs</title>
                <meta name="description" content="Women Womeynpreneurs" key="desc" />
                <meta property="og:title" content="Women Womeynpreneurs" />
                <meta
                    property="og:description"
                    content="Womeynpreneurs"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Womenpreneurs />
        </LayoutHeader>

    )
}

export default index