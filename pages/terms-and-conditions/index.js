import React from 'react'
import Termsandconditions from '../../src/components/termsandconditions/Termsandconditions';
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Terms & conditions">

            <Head>
                <title>Womeyn Terms & conditions</title>
                <meta name="description" content="Women Terms & conditions" key="desc" />
                <meta property="og:title" content="Women Terms & conditions" />
                <meta
                    property="og:description"
                    content="Terms & conditions"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>

            <Termsandconditions />
        </LayoutHeader>
    )
}

export default index