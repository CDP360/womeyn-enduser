import { useRouter } from 'next/router'
import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Womenpreneusdetails from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails';


function index({ setdark, dark }) {
    const router = useRouter();
    const womeynid = router?.query?.womeynid;
    return (
        <LayoutHeader title="product" setdark={setdark} dark={dark}>
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <Womenpreneusdetails id={womeynid} />
        </LayoutHeader>

    )
}

export default index