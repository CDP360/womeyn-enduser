
import { useEffect, useState } from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from '../src/Redux/store/Store';
import Footer from '../src/components/footer/Footer';
import Scrollbutton from '../src/components/scrollbutton/Scrollbutton';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import Login from '../src/components/login/Login';
import { useRouter } from 'next/router';
export default function App({ Component, pageProps }) {
  const history = useRouter();
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
          <ToastContainer />
          <Provider store={store}>
            <Scrollbutton />
            <Component {...pageProps} womeyntheme={womeyntheme} setWomeynTheme={setWomeynTheme} />
          </Provider>
        </StrictMode>
      </div >
    </div >
  )
}



