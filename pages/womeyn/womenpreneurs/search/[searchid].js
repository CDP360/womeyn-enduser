import { useRouter } from 'next/router';
import React from 'react'
import Womensearch from '../../../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenserach/Womensearch';

function index() {
    const router = useRouter();
    const serachid = router?.query?.searchid;
    return (
        <div>
            <Womensearch id={serachid} />
        </div>
    )
}

export default index