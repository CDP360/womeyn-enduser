import React from 'react'
import Contactus from '../../src/components/contactus/Contactus'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
  return (
    <LayoutHeader title="Contactus">
      <meta
        name="description"
        content="Meta description for the About page"
      />
      <Contactus />
    </LayoutHeader>
  )
}

export default index