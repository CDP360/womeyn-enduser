import React from "react";
import Ordertarcking from "../../src/components/userprofile/components/order/components/ordertracking/Ordertarcking";
import LayoutHeader from "./../../src/components/Layoutheader/LayoutHeader";
import Head from "next/head";

function tracking() {
  return (
    <LayoutHeader title="tracking">
      <Head>
        <title>Womeyn tracking</title>
        <meta name="description" content="Women tracking" key="desc" />
        <meta property="og:title" content="Women tracking" />
        <meta
          property="og:description"
          content="tracking"
        />
        <meta
          property="og:image"
          content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
        />
      </Head>
      <Ordertarcking />
    </LayoutHeader>
  );
}

export default tracking;
