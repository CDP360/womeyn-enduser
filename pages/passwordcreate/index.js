import React from 'react'
import Passwordcreate from '../../src/components/forgetpassword/passwordcreate'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'

function index() {
  return (
    <LayoutHeader title={"passwordcreate"}>
        {/* <Changepassword/> */}
        <Passwordcreate/>
    </LayoutHeader>
  )
}

export default index