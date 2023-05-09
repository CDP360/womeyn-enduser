import React from 'react'
import ProductCategorys from '../../src/components/productcategorys/ProductCategorys'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';
import Head from "next/head";

function index() {
  return (
    <LayoutHeader title="Products">
      <Head>
        <title>Womeyn Products</title>
        <meta name="description" content="Women Products" key="desc" />
        <meta property="og:title" content="Women Products" />
        <meta
          property="og:description"
          content="Products"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <ProductCategorys />
    </LayoutHeader>
  )
}

export default index