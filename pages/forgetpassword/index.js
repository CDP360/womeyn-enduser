import React from 'react'
import Forgetpassword from '../../src/components/forgetpassword/Forgetpassword'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Forgetpassword">
            <Head>
                <title>Womeyn Forgetpassword</title>
                <meta name="description" content="Forgetpassword" key="desc" />
                <meta property="og:title" content="Womeyn Forgetpassword " />
                <meta
                    property="og:description"
                    content="Forgetpassword"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Forgetpassword />
        </LayoutHeader>
    )
}

export default index