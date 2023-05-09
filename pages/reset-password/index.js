import React from 'react'
import Changepassword from '../../src/components/forgetpassword/Changepassword'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Change-password">
            <Head>
                <title>Womeyn Change-password</title>
                <meta name="description" content="Women Change-password" key="desc" />
                <meta property="og:title" content="Women Change-password" />
                <meta
                    property="og:description"
                    content="Change-password"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Changepassword />
        </LayoutHeader>
    )
}

export default index