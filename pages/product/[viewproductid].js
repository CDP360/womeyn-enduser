import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Head from "next/head";
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import { ProductView } from './../../src/services/productview-service/productview-services';
function index() {



  const router = useRouter();

  // const [productimages, setProductImage] = useState([]);
  // const [productdata, setProductData] = useState([]);
  const viewproductid = router?.query?.viewproductid;
  // const [pathurl, setPathUrl] = useState("");
  // useEffect(() => {
  //   ProductView(viewproductid).then((res) => {
  //     setProductData(res?.data?.productDetails);

  //     const productshowimages = [];
  //     res?.data?.productDetails?.productImages?.map((item, index) => {
  //       productshowimages?.push(item)
  //     })

  //     setProductImage(productshowimages[0]?.name);
  //   }).catch((err) => {
  //     console.log(err);
  //   })

  //   const origin =
  //     typeof window !== 'undefined' && window.location.origin
  //       ? window.location.origin
  //       : '';

  //   const URL = `${origin}${router?.asPath}`;
  //   setPathUrl(URL);
  // }, [pathurl]);

  return (
    <LayoutHeader title={viewproductid}>
      <Viewproducts id={viewproductid} />
    </LayoutHeader>
  )
}

export default index