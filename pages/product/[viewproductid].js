import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Head from "next/head";

import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import { ProductView } from './../../src/services/productview-service/productview-services';
function index() {
    const router = useRouter();

    const [productimages, setProductImage] = useState([]);
    const [productdata, setProductData] = useState([]);


    const viewproductid = router?.query?.viewproductid;
    const searchParams = `https://www.womeyn.cdp360.in/${router?.asPath}`;


    useEffect(() => {
        ProductView(viewproductid).then((res) => {
            setProductData(res?.data?.productDetails);

            const productshowimages = [];
            res?.data?.productDetails?.productImages?.map((item, index) => {
                productshowimages?.push(item)
            })
            // productshowimages?.unshift({
            //     id: 0,
            //     name: res?.data?.productDetails?.productThumbImage
            // });
            setProductImage(productshowimages[0]?.name);
        }).catch((err) => {
            console.log(err);
        })
    }, []);




    const ImageProduct = `https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages}`;

    const Imageurls = `https://www.womeyn.cdp360.in/+${productimages}`;


    return (
        <LayoutHeader title="product-view">

            <Head>
                <title>{viewproductid}</title>
                <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
                <meta property="fb:page_id" content="102988293558" />
                <meta name="robots" content="index" />
                <meta property="og:type" content="website" />
                <meta name="og_site_name" property="og:site_name" content="Womeyn.com" />
                <link rel="apple-touch-icon" sizes="57x57" href={searchParams} />
                <link rel="apple-touch-icon" sizes="72x72" href={searchParams} />
                <link rel="apple-touch-icon" sizes="114x114" href={searchParams} />
                <link rel="apple-touch-icon" sizes="144x144" href={searchParams} />
                <link rel="apple-touch-icon" href="/apple-touch-icon-57x57.png" />
                <meta name="twitter:card" content="app" />
                <meta name="twitter:site" content="@womeyn" />
                <meta name="twitter:creator" content="@womeyn" />
                <meta name="twitter:title" content={viewproductid} />
                <meta name="twitter:description" content={productdata?.productDescription} />
                <meta property="twitter:image" content={Imageurls} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta name="og_title" property="og:title" content={viewproductid} />
                <meta name="keywords" content={productdata?.productDescription} />
                <meta name="description" content={productdata?.productDescription} />
                <meta property="og:description" content={productdata?.productDescription} />
                <link rel="canonical" href={searchParams} />
                <meta name="og_image" property="og:image" content={ImageProduct} />
                <meta name="og_url" property="og:url" content={ImageProduct} />
            </Head>
            <Viewproducts id={viewproductid} />
        </LayoutHeader>
    )
}

export default index