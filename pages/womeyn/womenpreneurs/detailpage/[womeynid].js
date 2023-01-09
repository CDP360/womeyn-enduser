import { useRouter } from 'next/router'
import React from 'react'
import Womenpreneusdetails from '../../../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenpreneursdetails/Womenpreneusdetails'

function index() {
    const router = useRouter();
    const womeynid = router?.query?.womeynid;
    return (
        <div>
            <Womenpreneusdetails id={womeynid} />
        </div>
    )
}

export default index