import { useRouter } from 'next/router';
import React from 'react'
import Head from "next/head";

function DetailsPage() {
    const router = useRouter();
    const { listparams } = router.query;
    if (!listparams) return null;
    return (
        <div>
             <Head>
                <title>Womeyn Detailpage</title>
                <meta name="description" content="Detailpage" key="desc" />
                <meta property="og:title" content="Womeyn Detailpage" />
                <meta
                    property="og:description"
                    content="Detailpage"
                />
                <meta
                    property="og:image"
                    content="https://www.womeyn.cdp360.in/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fwomeyn_logo.72a6530c.png&w=384&q=75"
                />
            </Head>
            {listparams[0] && <div>{listparams[0]}</div>}
            {listparams[1] && <div>{listparams[1]}</div>}
            {listparams[2] && <div>{listparams[2]}</div>}
        </div>
    )
}

export default DetailsPage;
