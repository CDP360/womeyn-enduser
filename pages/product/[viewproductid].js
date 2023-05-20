import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import { ProductView } from './../../src/services/productview-service/productview-services';
import Head from "next/head";

function index() {



  const router = useRouter();

  const viewproductid = router?.query?.viewproductid;


  return (
    <LayoutHeader>
      <Head>
        <title>{viewproductid}</title>
        <meta name="description" content={`womeyn ${viewproductid}`} key="desc" />
        <meta property="og:title" content="Women ProductView" />
        <meta
          property="og:description"
          content="Product"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Viewproducts id={viewproductid} />
    </LayoutHeader>
  )
}

export default index