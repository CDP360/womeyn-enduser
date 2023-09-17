import React from 'react'

import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Eventsupdate from './../../src/components/middleheaderchilderns/eventsupdate/Eventsupdate';
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Events and Blogs">
            <Head>
                <title>Womeyn Events and Blogs </title>
                <meta name="description" content=" Events" key="desc" />
                <meta property="og:title" content="Womeyn  Events " />
                <meta
                    property="og:description"
                    content=" Events"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Eventsupdate />
        </LayoutHeader>


    )
}

export default index