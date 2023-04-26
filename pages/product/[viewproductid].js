import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Head from "next/head";
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import { ProductView } from './../../src/services/productview-service/productview-services';
function index() {



  const router = useRouter();

  const viewproductid = router?.query?.viewproductid;


  return (
    <LayoutHeader>
      <Viewproducts id={viewproductid} />
    </LayoutHeader>
  )
}

export default index