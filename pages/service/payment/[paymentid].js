import { useRouter } from 'next/router'
import React from 'react'
import LayoutHeader from '../../../src/components/Layoutheader/LayoutHeader';
import Servicepayment from '../../../src/components/servicedetails/components/servicepayment/Servicepayment';
function servicepayment() {
    const router = useRouter();
    const paymentid = router?.query?.paymentid;
    return (
        <LayoutHeader title={"service-booking"}>
            <Servicepayment id={paymentid} />
        </LayoutHeader>
    )
}

export default servicepayment;