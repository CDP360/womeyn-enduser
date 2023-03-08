import React from 'react'
import Passwordcreate from '../../src/components/forgetpassword/Passwordcreate'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'

function index() {
  return (
    <LayoutHeader title={"passwordcreate"}>
      <Passwordcreate />
    </LayoutHeader>
  )
}

export default index