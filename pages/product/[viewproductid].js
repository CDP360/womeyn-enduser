import { useRouter } from 'next/router';
import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import Head from 'next/head';

function index() {
    const router = useRouter();
    const viewproductid = router?.query?.viewproductid;
    return (
        <LayoutHeader title="product-view">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            {/* <Head>
            <title>Womeyn {viewproductid}</title>
            </Head> */}
            <Viewproducts id={viewproductid} />
        </LayoutHeader>
    )
}

export default index