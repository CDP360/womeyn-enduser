
import { useEffect, useState } from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import Cookies from 'js-cookie';
import Header from '../src/components/header/Header';

export default function App({ Component, pageProps }) {

  const getcookies = Cookies.get("womeyntheme");

  const [womeyntheme, setWomeynTheme] = useState(false);

  useEffect(() => {
    Cookies.set("womeyntheme", womeyntheme);
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");

  }, [womeyntheme]);

  const ThemeChange = () => {
    setWomeynTheme(!womeyntheme)
  }

  return (
    <div className={womeyntheme ? "theme--dark" : "theme--light"}>
      <div className='womeyn-enduser'>
        <Header />
        <Component {...pageProps} setthemes={ThemeChange} womeyntheme={womeyntheme} />

      </div>
    </div>
  )
}
