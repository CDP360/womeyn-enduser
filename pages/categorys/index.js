import React from 'react'
import Categorys from './../../src/components/categorys/Categorys';
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
  return (
    <LayoutHeader title="Categorys">
      <Categorys/>
    </LayoutHeader>
  )
}

export default index