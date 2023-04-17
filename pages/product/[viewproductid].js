import { useRouter } from 'next/router';
import React from 'react'
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import Head from 'next/head';

function index() {
    const router = useRouter();
    const viewproductid = router?.query?.viewproductid;
    return (
        <LayoutHeader title="product-view">
            <meta
                name="description"
                content="Meta description for the About page"
            />
            <title>SAMSUNG Galaxy S21 FE 5G ( 128 GB Storage, 8 GB RAM ) Online at Best Price On Flipkart.com</title>
            <meta http-equiv="Content-type" content="text/html; charset=utf-8" />
            <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
            <meta property="fb:page_id" content="102988293558" />
            <meta name="robots" content="index" />
            <meta property="og:type" content="website" />
            <meta name="og_site_name" property="og:site_name" content="Womeyn.com" />
            <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon-57x57.png" />
            <meta name="twitter:card" content="app" />
            <meta name="twitter:site" content="@womeyn" />
            <meta name="twitter:creator" content="@womeyn" />
            <meta name="twitter:title" content="SAMSUNG Galaxy S21 FE 5G ( 128 GB Storage, 8 GB RAM ) Online at Best Price On Flipkart.com" />
            <meta name="twitter:description" content="Shop for electronics, apparels & more using our Flipkart app Free shipping & COD." />
            <meta property="twitter:image" content="http://rukmini1.flixcart.com/image/300/300/kzpw2vk0/mobile/u/o/q/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.jpeg" />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta name="og_title" property="og:title" content="SAMSUNG Galaxy S21 FE 5G ( 128 GB Storage, 8 GB RAM ) Online at Best Price On Flipkart.com" />
            <meta name="keywords" content="Buy Galaxy S21 FE 5G Online, Galaxy S21 FE 5G Price, Galaxy S21 FE 5G Features and Specifications, Galaxy S21 FE 5G Reviews" />
            <meta name="description" content="Buy SAMSUNG Galaxy S21 FE 5G online at best price with offers in India. SAMSUNG Galaxy S21 FE 5G (Lavender, 128 GB) features and specifications include 8 GB RAM,  128 GB ROM, 4500 mAh battery, 12 MP back camera and 32 MP front camera. Compare Galaxy S21 FE 5G by price and performance to shop at Flipkart" />
            <meta property="og:description" content="Buy SAMSUNG Galaxy S21 FE 5G online at best price with offers in India. SAMSUNG Galaxy S21 FE 5G (Lavender, 128 GB) features and specifications include 8 GB RAM,  128 GB ROM, 4500 mAh battery, 12 MP back camera and 32 MP front camera. Compare Galaxy S21 FE 5G by price and performance to shop at Flipkart" />
            <link rel="canonical" href="https://www.flipkart.com/samsung-galaxy-s21-fe-5g-lavender-128-gb/p/itm3b094762fb621" />
            <meta name="og_image" property="og:image" content="http://rukmini1.flixcart.com/image/300/300/kzpw2vk0/mobile/u/o/q/galaxy-s21-fe-5g-lavender-8gb-128gb-storage-sm-g990elviinu-original-imagbnbdaj3tygup.jpeg" />
            <meta name="og_url" property="og:url" content="https://www.flipkart.com/samsung-galaxy-s21-fe-5g-lavender-128-gb/p/itm3b094762fb621" />
            <Viewproducts id={viewproductid} />
        </LayoutHeader>
    )
}

export default index