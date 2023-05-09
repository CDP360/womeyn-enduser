import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Otp from '../../src/components/otp/Otp'
import Head from "next/head";

function index() {
  return (
    <LayoutHeader title="Otp">
      <Head>
                <title>Womeyn Otp</title>
                <meta name="description" content="Women Otp" key="desc" />
                <meta property="og:title" content="Women Otp" />
                <meta
                    property="og:description"
                    content="Otp"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
      <Otp />
    </LayoutHeader>
  )
}

export default index