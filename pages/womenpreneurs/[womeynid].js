import { useRouter } from 'next/router'
import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Womenpreneusdetails from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails';
import Head from "next/head";


function index() {
    const router = useRouter();
    const womeynid = router?.query?.womeynid;
    return (
        <LayoutHeader title="product">

            <Head>
                <title>Womeyn Womenpreneurs</title>
                <meta name="description" content="Women Womenpreneurs" key="desc" />
                <meta property="og:title" content="Women Womenpreneurss" />
                <meta
                    property="og:description"
                    content="Womenpreneurs"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>

            <Womenpreneusdetails id={womeynid} />
        </LayoutHeader>

    )
}

export default index