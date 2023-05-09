import React from 'react'
import Passwordcreate from '../../src/components/forgetpassword/Passwordcreate'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Head from "next/head";

function index() {
  return (
    <LayoutHeader title={"passwordcreate"}>
      <Head>
        <title>Womeyn Passwordcreate</title>
        <meta name="description" content="Women passwordcreate" key="desc" />
        <meta property="og:title" content="Women passwordcreate" />
        <meta
          property="og:description"
          content="passwordcreate"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Passwordcreate />
    </LayoutHeader>
  )
}

export default index