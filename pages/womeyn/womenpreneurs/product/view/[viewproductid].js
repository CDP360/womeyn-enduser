import { useRouter } from 'next/router';
import React from 'react'
import LayoutHeader from '../../../../../src/components/Layoutheader/LayoutHeader';
import Viewproduct from '../../../../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproduct';
function index({dark,setdark}) {
    const router = useRouter();
    const viewproductid = router?.query?.viewproductid;
    return (
        <LayoutHeader dark={dark} setdark={setdark} title="product-view">
            <Viewproduct id={viewproductid} />
        </LayoutHeader>
    )
}

export default index