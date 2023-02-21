import { useEffect, useState } from 'react';
import '../styles/index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import { Provider } from "react-redux";
import store from '../src/Redux/store/Store';
import { ToastContainer, } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-loading-skeleton/dist/skeleton.css'
import Cookies from 'js-cookie';
import { SessionProvider } from "next-auth/react";
import { StoreProviderContext } from '../src/Redux/store/Contextstore';
function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
    Cookies.set("kalaiwomeyn", dark)
  }, []);

  return (
    <div className={dark ? "theme--dark" : "theme--light"}>
      <div className='womeyn-enduser'>
        <StrictMode>
          <SessionProvider session={pageProps.session}>
            <StoreProviderContext>
            <Provider store={store}>
              <ToastContainer />
              <Component {...pageProps} setdark={setDark} dark={dark} />
            </Provider>
            </StoreProviderContext>
          </SessionProvider>
        </StrictMode>
      </div >
    </div >
  )
}

export default App;