import { useRouter } from 'next/router';
import React from 'react'
import LayoutHeader from '../../../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
function index({ dark, setdark }) {
    const router = useRouter();
    const viewproductid = router?.query?.viewproductid;
    return (
        <LayoutHeader dark={dark} setdark={setdark} title="product-view">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Viewproducts id={viewproductid} />
        </LayoutHeader>

    )
}

export default index