import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Explore from './../../src/components/middleheaderchilderns/explore/Explore';
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Explore">
            <Head>
                <title>Womeyn Explore </title>
                <meta name="description" content=" Explore" key="desc" />
                <meta property="og:title" content="Womeyn  Explore " />
                <meta
                    property="og:description"
                    content=" Explore"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Explore />
        </LayoutHeader>

    )
}

export default index    