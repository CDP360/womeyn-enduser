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
    import("react-step-progress-bar/styles.css")
    Router.events.on('routeChangeStart', (url) => {
      setLoading(true);
    })
    Router.events.on('routeChangeComplete', (url) => {
      setLoading(false);
    })
    Router.events.on('routeChangeError', (url) => {
    });
  }, []);


  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      <div className='womeyn-enduser'>

        <div className={'mainscrollbutton'} onClick={goToTop}>
          {showTopBtn && (
            <div
              className={"iconsections"}
              onClick={goToTop}
            >
              <ion-icon name="chevron-up-outline"></ion-icon>
            </div>
          )}
        </div>
        <StrictMode>
          <StoreProviderContext>
            <Errorboundary>
              <Provider store={store}>
                <ToastContainer
                  rtl={false}
                  draggable={false}
                />
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