import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Notifications from '../../src/components/notifications/Notifications'
import Head from "next/head";

function index() {
    return (
        <LayoutHeader title="Notifications">
            <Head>
                <title>Womeyn Notifications</title>
                <meta name="description" content="Women Notifications" key="desc" />
                <meta property="og:title" content="Women Notifications" />
                <meta
                    property="og:description"
                    content="Notifications"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <Notifications />
        </LayoutHeader>
    )
}

export default index