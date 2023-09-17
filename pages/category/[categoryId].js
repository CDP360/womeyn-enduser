import React from 'react'
import Categorys from '../../src/components/categorys/Categorys';
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import { useRouter } from 'next/router'
import Head from "next/head";



function index() {
  const router = useRouter();
  const categoryId = router?.query?.categoryId;
  return (
    <LayoutHeader title="Womeyn Product Category">
      <Head>

        <title>Womeyn Product Category</title>
        <meta name="description" content="Category" key="desc" />
        <meta property="og:title" content="Womeyn Category" />
        <meta
          property="og:description"
          content="Category"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Categorys id={categoryId} />
    </LayoutHeader>
  )
}

export default index