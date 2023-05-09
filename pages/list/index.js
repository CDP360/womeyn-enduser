import React from 'react'
import List from '../../src/components/list/List'
import Head from "next/head";

function index() {
    return (
        <div>
             <Head>
                <title>Womeyn List</title>
                <meta name="description" content="List" key="desc" />
                <meta property="og:title" content="Womeyn List" />
                <meta
                    property="og:description"
                    content="List"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            <List />
        </div>
    )
}

export default index
