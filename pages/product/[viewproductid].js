import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Head from "next/head";
import LayoutHeader from '../../src/components/Layoutheader/LayoutHeader';
import Viewproducts from '../../src/components/middleheaderchilderns/ourwomenpreneurs/component/womenviewproduct/Viewproducts';
import { ProductView } from './../../src/services/productview-service/productview-services';
function index() {
  function addProductJsonLd() {
    return {
      __html: `{
          "@context": "https://schema.org/",
          "@type": "Product",
          "name": "Executive Anvil",
          "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
           ],
          "description": "Sleeker than ACME's Classic Anvil, the Executive Anvil is perfect for the business traveler looking for something to drop from a height.",
          "sku": "0446310786",
          "mpn": "925872",
          "brand": {
            "@type": "Brand",
            "name": "ACME"
          },
          "review": {
            "@type": "Review",
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "4",
              "bestRating": "5"
            },
            "author": {
              "@type": "Person",
              "name": "Fred Benson"
            }
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.4",
            "reviewCount": "89"
          },
          "offers": {
            "@type": "Offer",
            "url": "https://example.com/anvil",
            "priceCurrency": "USD",
            "price": "119.99",
            "priceValidUntil": "2020-11-20",
            "itemCondition": "https://schema.org/UsedCondition",
            "availability": "https://schema.org/InStock"
          }
        }
      `,
    };

  }


  const router = useRouter();

  const [productimages, setProductImage] = useState([]);
  const [productdata, setProductData] = useState([]);
  const viewproductid = router?.query?.viewproductid;
  const [pathurl, setPathUrl] = useState("");
  useEffect(() => {
    ProductView(viewproductid).then((res) => {
      setProductData(res?.data?.productDetails);

      const productshowimages = [];
      res?.data?.productDetails?.productImages?.map((item, index) => {
        productshowimages?.push(item)
      })

      setProductImage(productshowimages[0]?.name);
    }).catch((err) => {
      console.log(err);
    })

    const origin =
      typeof window !== 'undefined' && window.location.origin
        ? window.location.origin
        : '';

    const URL = `${origin}${router?.asPath}`;
    setPathUrl(URL);
  }, [pathurl]);




  const ImageProduct = `https://my-demo-11-bucket.s3.ap-south-1.amazonaws.com/${productimages}`;

  const Imageurls = `https://www.womeyn.cdp360.in/+${productimages}`;


  return (
    <LayoutHeader title="product-view">
      <Viewproducts id={viewproductid} />
    </LayoutHeader>
  )
}

export default index