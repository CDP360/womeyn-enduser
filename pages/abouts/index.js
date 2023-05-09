import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Aboutus from '../../src/components/middleheaderchilderns/abouts/Aboutus'
import Head from "next/head";


function index() {
    return (
        <LayoutHeader title="Aboutus" >

            <Head>

                <title>Womeyn Aboutus</title>
                <meta name="description" content="Aboutus" key="desc" />
                <meta property="og:title" content="Womeyn Aboutus" />
                <meta
                    property="og:description"
                    content="Aboutus"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>

            <Aboutus />
        </LayoutHeader>

    )
}

export default index