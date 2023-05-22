import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Head from "next/head";
import { useRouter } from 'next/router';
import Blogdetails from './../../src/components/middleheaderchilderns/eventsupdate/blogdetails/Blogdetails';

function viewdetailsid() {
  const router = useRouter();
  const { viewdetailsid } = router.query;
  return (
    <LayoutHeader>
      <Head>
        <title>Womeyn Event View</title>
        <meta name="description" content=" Event View" key="desc" />
        <meta property="og:title" content="Womeyn  Event View " />
        <meta
          property="og:description"
          content=" Event View"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Blogdetails id={viewdetailsid} />
    </LayoutHeader>
  )
}

export default viewdetailsid