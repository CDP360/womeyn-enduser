import Head from "next/head";
import NextHead from "next/head";
import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import MobileHeader from "../header/Mobileheader/MobileHeader";
import styles from "./styles/Layoutheader.module.scss";
import Footer from "./../footer/Footer";
import Signupnewsletter from "../home/components/signupfornewsletter/Signupnewsletter";
import Childfooter from "./../footer/Childfooter";
import Script from "next/script";
import { ProductView } from "../../services/productview-service/productview-services";

function LayoutHeader({ setdark, dark, title, children }) {

  useEffect(() => {

    // if (title) {
    //   ProductView(title).then((res) => {
    //     // console.log(res?.data?.productDetails)
    //     setDatas(res?.data?.productDetails)
    //   }).catch((Err) => {
    //     console.log(Err)
    //   })
    // }

  }, [title]);

  return (
    <>
      <Head>


      <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/Mobileviewlogoshort.png"
        ></link>

        {/* <link rel="icon" type="images/png" href="/Mobileviewlogoshort.png" sizes='100x100' /> */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/brands.min.css"
          integrity="sha512-G/T7HQJXSeNV7mKMXeJKlYNJ0jrs8RsWzYG7rVACye+qrcUhEAYKYzaa+VFy6eFzM2+/JT1Q+eqBbZFSHmJQew=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/fontawesome.min.css"
          integrity="sha512-giQeaPns4lQTBMRpOOHsYnGw1tGVzbAIHUyHRgn7+6FmiEgGGjaG0T2LZJmAPMzRCl+Cug0ItQ2xDZpTmEc+CQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <script
          type="module"
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
        ></script>
        <script
          nomodule
          src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
        ></script>
        <link
          rel="stylesheet"
          type="text/css"
          charset="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
          integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />




      </Head>
      <div className={styles.mainheader}>
        <div className={styles.insidesectionlayout}>
          <div className={styles.headersection}>
            <div className={styles.headertopsection}>
              <div className={`d-none d-lg-block`}>
                <Header setdark={setdark} dark={dark} />
              </div>
              <div className={`d-block d-lg-none`}>
                <MobileHeader setdark={setdark} dark={dark} />
              </div>
            </div>
          </div>
          <div className={styles.insidemainscrollsection}>
            {/* <Head>
              <title>{title}</title>
              <meta name="robots" content="all" />

              <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
              <meta name="google" content="notranslate" key="notranslate" />
              {datas?.productDescription && <meta property="og:description" content={datas?.productDescription} />}

              {datas?.productThumbImage && <meta property="og:image" content={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${datas?.productThumbImage}`} />}

            </Head> */}
            {/* <NextHead>
              <meta charSet='UTF-8' />
              <meta name='viewport' content='width=device-width, initial-scale=1' />
              <meta name='description' content={title} />
              <meta property='og:title' content={`${title}`} />
              <meta property='og:description' content={datas?.productDescription} />
              <meta property='og:image' 
               content={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${datas?.productThumbImage}`}
              />
              <meta property='og:image:alt' content='' />
              <meta property='og:locale' content='en_GB' />
              <meta property='og:type' content='website' />
              <meta property='og:url' content='https://url.com' />
              <meta name='twitter:card' content='og.png' />
              <meta name='theme-color' content='#0099ff' />
              <link rel='canonical' href='https://url.com' />
              <link rel='icon' href='/icons/icon.svg' type='image/svg+xml' />
              <link rel='apple-touch-icon' href='/icons/touch.svg' />
              <link
                rel='manifest'
                crossOrigin='use-credentials'
                href='/manifest.json'
              />
              <title>
                {title}
              </title>
              <meta name='description' content={datas?.productDescription} />
            </NextHead> */}
            <meta name="Referrer" content="http://example.com/comic/" />

<meta name="application-name" content="Next.js" />
<meta name="author" content="Seb" />
<link rel="author" href="https://nextjs.org" />
<meta name="author" content="Josh" />
<meta name="generator" content="Next.js" />
<meta name="keywords" content="Next.js,React,JavaScript" />
<meta name="referrer" content="origin-when-cross-origin" />
<meta name="color-scheme" content="dark" />
<meta name="creator" content="Jiachi Liu" />
<meta name="publisher" content="Sebastian Markbåge" />
<meta name="format-detection" content="telephone=no, address=no, email=no" />
            <main>{children}</main>
          </div>
          {
            // title == "Profile" ||
            title == "Women-login" ||
              title == "Women-signup" ||
              title == "Cart" ||
              title == "Checkout" ||
              title == "404 NotFound" ||
              title == "Otp" ||
              title == "Forgetpassword" ||
              title == "Change-password" ||
              // title == "Explore" ||
              title == "Events" ||
              title == "tracking" ||
              title == "detail" ||
              title == "Payment" ||
              // title == "service-booking" ||
              title == "passwordcreate" ? (
              <></>
            ) : (
              <>
                <div className="mb-5">
                  {title == "product-view" ||
                    title == "Payment" ||
                    title == "tracking" ||
                    title == "Payment" ||
                    // title == "service-booking" ||
                    title == "tracking" ||
                    title == "Aboutus"
                    ?
                    (
                      <>
                      </>
                    ) : (
                      <Signupnewsletter />
                    )}
                </div>
                <div>
                  <footer>
                    <Footer />
                    <Childfooter />
                  </footer>
                </div>
              </>
            )}
        </div>
      </div>


    </>
  );
}

export default LayoutHeader;
