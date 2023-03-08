import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Mainservice from '../../src/components/servicedetails/Mainservice'

function index() {
  return (
    <LayoutHeader title={"Service"}>
        <Mainservice/>
    </LayoutHeader>
  )
}

export default index