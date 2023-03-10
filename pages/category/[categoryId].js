import React from 'react'
import Categorys from '../../src/components/categorys/Categorys';
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import { useRouter } from 'next/router'

function index() {
  const router = useRouter();
  const categoryId = router?.query?.categoryId;
  return (
    <LayoutHeader title="Category">
      <meta
        name="description"
        content="Meta description for the About page"
      />
      <Categorys id={categoryId} />
    </LayoutHeader>
  )
}

export default index