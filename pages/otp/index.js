import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader'
import Otp from '../../src/components/otp/Otp'

function index() {
  return (
    <LayoutHeader title="Otp">
      <meta
        name="description"
        content="Meta description for the About page"
      />
      <Otp />
    </LayoutHeader>
  )
}

export default index