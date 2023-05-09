import React from 'react'
import Shippingcart from '../../src/components/shippingcart/Shippingcart'
import Head from "next/head";

function index() {
  return (
    <div>
      <Head>
        <title>Womeyn Shipping</title>
        <meta name="description" content="Women Shipping" key="desc" />
        <meta property="og:title" content="Women Shipping" />
        <meta
          property="og:description"
          content="Shipping"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Shippingcart />
    </div>
  )
}

export default index