import React from 'react'
import Oauthcomplete from '../../src/components/oauthcomplete/Oauthcomplete'
import Head from "next/head";

function index() {
    return (
        <div>
            <Head>
                <title>Womeyn Oauthcomplete</title>
                <meta name="description" content="Women Oauthcomplete" key="desc" />
                <meta property="og:title" content="Women Oauthcomplete" />
                <meta
                    property="og:description"
                    content="Oauthcomplete"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Oauthcomplete />
        </div>
    )
}

export default index