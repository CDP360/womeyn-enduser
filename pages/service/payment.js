import React from 'react'
import Servicepayment from '../../src/components/servicedetails/components/servicepayment/Servicepayment';
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function payment() {
  return (
    <LayoutHeader title={"Payment"}>
<Servicepayment/>
    </LayoutHeader>
  )
}

export default payment
