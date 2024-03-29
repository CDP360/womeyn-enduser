import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import Head from "next/head";

function index() {



  const router = useRouter();

  const viewproductid = router?.query?.viewproductid;



  return (
    <LayoutHeader title={viewproductid}>

      <Viewproducts id={viewproductid} />
    </LayoutHeader>
  )
}

export default index