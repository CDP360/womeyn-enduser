
import React from 'react'
import Login from '../../src/components/login/Login'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Women-login">
             <Head>
                <title>Womeyn Login</title>
                <meta name="description" content="Women-login" key="desc" />
                <meta property="og:title" content="Women-login" />
                <meta
                    property="og:description"
                    content="List"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Login />
        </LayoutHeader>
    )
}

export default index;