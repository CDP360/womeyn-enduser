import { useEffect, useState } from 'react';
import Router from 'next/router';
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
import LoaderLogo from '../src/components/loaderlogo/LoaderLogo';
function App({ Component, pageProps }) {


  const [loading, setLoading] = useState(false);


  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");

    Router.events.on('routeChangeStart', (url) => {
      console.log("start Loding.....")
      setLoading(true);
    })
    Router.events.on('routeChangeComplete', (url) => {
      console.log("complete Loding.....")
      setLoading(false);

    })
    Router.events.on('routeChangeError', (url) => {
      console.log("Error Loding.....");
      // setLoading(true);

    });

  }, []);

  return (
    <div>
      <div className='womeyn-enduser'>
        <StrictMode>
          <SessionProvider session={pageProps.session}>
            <StoreProviderContext>
              <Provider store={store}>
                <ToastContainer />
                {loading ? <div className="blursectionhome">
                  <LoaderLogo />
                </div> :
                  <>
                    <Component {...pageProps} />
                  </>}

              </Provider>
            </StoreProviderContext>
          </SessionProvider>
        </StrictMode>
      </div >
    </div >
  )
}

export default App;