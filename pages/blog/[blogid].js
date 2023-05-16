import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Head from "next/head";
import { useRouter } from 'next/router';
import Eventsdetails from './../../src/components/middleheaderchilderns/eventsupdate/eventsdetails/Eventsdetails';

function viewdetailsid() {
  const router = useRouter();
  const { blogid } = router.query;

  return (
    <LayoutHeader>
      <Head>
        <title>Womeyn Blog View</title>
        <meta name="description" content=" Blog View" key="desc" />
        <meta property="og:title" content="Womeyn  Blog View " />
        <meta
          property="og:description"
          content=" Blog View"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Eventsdetails id={blogid} />
    </LayoutHeader>
  )
}

export default viewdetailsid