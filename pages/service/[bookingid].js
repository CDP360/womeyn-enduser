import { useRouter } from 'next/router'
import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Servicebooking from '../../src/components/servicedetails/components/servicebooking/Servicebooking';

function servicesdetails() {
    const router = useRouter();
    const bookingid = router?.query?.bookingid;
    return (
        <LayoutHeader title={"service-booking"}>
            <Servicebooking id={bookingid} />
        </LayoutHeader>
    )
}

export default servicesdetails;