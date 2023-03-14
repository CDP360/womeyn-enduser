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
import { StoreProviderContext } from '../src/Redux/store/Contextstore';
import LoaderLogo from '../src/components/loaderlogo/LoaderLogo';
import Errorboundary from '../src/components/errorboundary/Errorboundary';
function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
    Router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    })
    Router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
    })
    Router.events.on('routeChangeError', (url) => {
    });
  }, []);
  return (
    <div>
      <div className='womeyn-enduser'>
        <StrictMode>
          <StoreProviderContext>
            <Errorboundary>
              <Provider store={store}>
                <ToastContainer />
                {loading ? <div className="blursectionhome">
                  <LoaderLogo />
                </div> :
                  <>
                    <Component {...pageProps} />
                  </>}
              </Provider>
            </Errorboundary>
          </StoreProviderContext>
        </StrictMode>
      </div >
    </div >
  )
}

export default App;