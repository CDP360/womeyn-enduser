import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Mainservice from '../../src/components/servicedetails/Mainservice'
import Head from "next/head";

function index() {
  return (
    <LayoutHeader title={"Woemyn Services"}>
        <Head>
                <title>Womeyn Services</title>
                <meta name="description" content="Womeyn Service" key="desc" />
                <meta property="og:title" content="Womeyn Service" />
                <meta
                    property="og:description"
                    content="Womeyn Service"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
        <Mainservice/>
    </LayoutHeader>
  )
}

export default index