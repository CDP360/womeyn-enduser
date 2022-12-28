
import { useEffect, useState } from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import Cookies from 'js-cookie';
import Login from '../src/components/login/Login';
import Header from '../src/components/header/Header';
import MobileHeader from '../src/components/header/Mobileheader/MobileHeader';

export default function App({ Component, pageProps }) {
  const getcookies = Cookies.get("womeynauth");
  const [womeyntheme, setWomeynTheme] = useState(false);

  useEffect(() => {
    // Cookies.set("womeyntheme", womeyntheme);
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, [womeyntheme]);

  return (
    <div className={womeyntheme ? "theme--dark" : "theme--light"}>
      <div className='womeyn-enduser'>
        {getcookies ? <>
          <StrictMode>
            <div className='d-none d-lg-block'>
              <Header />
            </div>
            <div className='d-block d-lg-none'>
              <MobileHeader />
            </div>
            <Component {...pageProps} womeyntheme={womeyntheme} setWomeynTheme={setWomeynTheme} />
          </StrictMode>
        </> : <>
          <Login />
        </>}

      </div>
    </div>
  )
}
