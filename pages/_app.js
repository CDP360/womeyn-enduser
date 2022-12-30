
import { useEffect, useState } from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import Layout from './layout/index';
import { Provider } from "react-redux";
import store from '../src/Redux/store/Store';
import Footer from '../src/components/footer/Footer';
import Scrollbutton from '../src/components/scrollbutton/Scrollbutton';
export default function App({ Component, pageProps }) {
  const [womeyntheme, setWomeynTheme] = useState(false);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
  }, [womeyntheme]);

  return (
    <div className={womeyntheme ? "theme--dark" : "theme--light"}>
      <div className='womeyn-enduser'>
        <StrictMode>
          <Provider store={store}>
            <Scrollbutton />
            <Layout />
            <Component {...pageProps} womeyntheme={womeyntheme} setWomeynTheme={setWomeynTheme} />
            {/* <Footer /> */}
          </Provider>
        </StrictMode>
      </div >
    </div >
  )
}
