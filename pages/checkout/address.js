import React from 'react'
import Addressdetail from '../../src/components/checkout/components/addressdetails/Addressdetail'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import AddressCreate from '../../src/components/userprofile/components/manageaddress/addresscreate/AddressCreate'
import ModelAddress from '../../src/components/checkout/components/addressdetails/ModelAddress'

function address() {
    return (
        <LayoutHeader title={"Checkout Address"}>
      <ModelAddress/>
        </LayoutHeader>
    )
}

export default address