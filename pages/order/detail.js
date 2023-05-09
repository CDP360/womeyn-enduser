import React from "react";
import Orderdetails from "../../src/components/userprofile/components/order/components/orderdetails/Orderdetails";
import LayoutHeader from "./../../src/components/Layoutheader/LayoutHeader";
import Head from "next/head";

function details() {
  return (
    <LayoutHeader title="detail">
      <Head>
                <title>Womeyn Detail</title>
                <meta name="description" content="Women Detail" key="desc" />
                <meta property="og:title" content="Women Detail" />
                <meta
                    property="og:description"
                    content="Detail"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
      <Orderdetails />
    </LayoutHeader>
  );
}

export default details;
