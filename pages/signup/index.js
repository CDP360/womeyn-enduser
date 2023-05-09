import React from 'react'
import Signup from '../../src/components/signup/Signup';

import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Women-signup">
            <Head>
                <title>Womeyn-signup</title>
                <meta name="description" content="Womeyn-signup" key="desc" />
                <meta property="og:title" content="Womeyn-signup" />
                <meta
                    property="og:description"
                    content="Womeyn-signup"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Signup />
        </LayoutHeader>

    )
}

export default index
