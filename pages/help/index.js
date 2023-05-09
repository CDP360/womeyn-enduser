import React from 'react'
import Help from '../../src/components/help/Help'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";

function index() {
  return (
    <LayoutHeader title="Help">
       <Head>
                <title>Womeyn Help</title>
                <meta name="description" content="Help" key="desc" />
                <meta property="og:title" content="Womeyn Help " />
                <meta
                    property="og:description"
                    content="Help"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
        <Help/>
    </LayoutHeader>
  )
}

export default index