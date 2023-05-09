import React from 'react'
import Contactus from '../../src/components/contactus/Contactus'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";


function index() {
  return (
    <LayoutHeader title="Contactus">
      <Head>
        <title>Womeyn Contactus </title>
        <meta name="description" content=" Contactus" key="desc" />
        <meta property="og:title" content="Womeyn  Contactus " />
        <meta
          property="og:description"
          content=" Contactus"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Contactus />
    </LayoutHeader>
  )
}

export default index