import React from 'react'
import ProductCategorys from '../../src/components/productcategorys/ProductCategorys'
import LayoutHeader from './../../src/components/Layoutheader/LayoutHeader';

function index() {
  return (
    <LayoutHeader title="Products">
        <ProductCategorys/>
    </LayoutHeader>
  )
}

export default index