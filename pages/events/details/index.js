import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader';

import Eventsdetails from './../../../src/components/middleheaderchilderns/eventsupdate/eventsdetails/Eventsdetails';
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="eventsdetails">
            <Head>
                <title>Womeyn Eventsdetails </title>
                <meta name="description" content="eventsdetails" key="desc" />
                <meta property="og:title" content="Womeyn  eventsdetails " />
                <meta
                    property="og:description"
                    content=" eventsdetails"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Eventsdetails />
        </LayoutHeader>

    )
}

export default index