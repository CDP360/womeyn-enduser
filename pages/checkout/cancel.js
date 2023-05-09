import React from 'react'
import Checkoutcancel from '../../src/components/checkout/components/checkoutcancel/Checkoutcancel'
import Head from "next/head";


function cancel() {
  return (
    <div>
      <Head>

        <title>Womeyn Checkout Cancel</title>
        <meta name="description" content=" Checkout Cancel" key="desc" />
        <meta property="og:title" content="Womeyn  Checkout Cancel" />
        <meta
          property="og:description"
          content=" Checkout Cancel"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Checkoutcancel />
    </div>
  )
}

export default cancel