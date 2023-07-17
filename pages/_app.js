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
import { useRouter } from 'next/router';
// import TagManager from 'react-gtm-module';
function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  const history = useRouter();
  const [logins, setLogin] = useState(true);

  const Checkforinactive = () => {
    const expireTime = localStorage.getItem("expireTime");

    if (expireTime < Date.now()) {
      localStorage.clear();
      history.push("/")
      setLogin(false);
    }
  }

  const UpdateExpireTime = () => {
    const expireTime = Date.now() + 7 * 3600 * 1000;
    localStorage.setItem("expireTime", expireTime);
  }

  useEffect(() => {
    // TagManager.initialize({ gtmId: 'GTM-WTPC2H3' });

    const intervals = setInterval(() => {
      Checkforinactive();
    }, 1000);
    return () => clearInterval(intervals)
  }, [])
  useEffect(() => {
    UpdateExpireTime();

    window.addEventListener("click", UpdateExpireTime);
    window.addEventListener("keypress", UpdateExpireTime);
    window.addEventListener("scroll", UpdateExpireTime);
    window.addEventListener("mousemove", UpdateExpireTime);


    return () => {
      window.removeEventListener("click", UpdateExpireTime);
      window.removeEventListener("keypress", UpdateExpireTime);
      window.removeEventListener("scroll", UpdateExpireTime);
      window.removeEventListener("mousemove", UpdateExpireTime);
    }

  }, [])
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