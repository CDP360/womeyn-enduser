import Head from "next/head";
import React, { useEffect } from "react";
import Header from "../header/Header";
import MobileHeader from "../header/Mobileheader/MobileHeader";
import styles from "./styles/Layoutheader.module.scss";
import Footer from "./../footer/Footer";
import Signupnewsletter from "../home/components/signupfornewsletter/Signupnewsletter";
import Childfooter from "./../footer/Childfooter";
function LayoutHeader({ setdark, dark, title, children }) {
  useEffect(() => { }, [title]);
  return (
    <>
      <Head>
        <title>{title ? title + "- Womeyn" : "Womeyn"}</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />



        {/* <link rel="icon" href="/favicon.ico" /> */}
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
            <main>{children}</main>
          </div>
          {title == "Profile" ||
            title == "Women-login" ||
            title == "Women-signup" ||
            title == "Cart" ||
            title == "Checkout" ||
            title == "404 NotFound" ||
            title == "Otp" ||
            title == "Forgetpassword" ||
            title == "Change-password" ||
            title == "Explore" ||
            title == "Events" ||
            title == "tracking" ||
            title == "detail" ||
            title == "Service" ||
            title == "Payment" ||
            title == "service-booking" ||
            title == "passwordcreate" ? (
            <></>
          ) : (
            <>
              <div className="mb-5">
                {title == "product-view" ||
                  title == "Payment" ||
                  title == "Service" ||
                  title == "tracking" ||
                  title == "Payment" ||
                  title == "service-booking" ||
                  title == "tracking"||
                  title=="Aboutus"
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

      {/* 
            <div className={styles.mainsectionlayout}>

                <div className={styles.insidesectionlayout}>

                    <div className={styles.headertopsection}>
                        <div className={`d-none d-lg-block`}>
                            <Header setdark={setdark} dark={dark} />
                        </div>
                        <div className={`d-block d-lg-none`}>
                            <MobileHeader setdark={setdark} dark={dark} />
                        </div>

                    </div>

                    <main>

                        {children}

                    </main>
                    <footer>
                        <div>
                            <Footer />
                        </div>
                    </footer>
                </div>
            </div> */}
    </>
  );
}

export default LayoutHeader;
