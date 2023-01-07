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
import LayoutHeader from '../src/components/Layoutheader/LayoutHeader';
import { SessionProvider } from "next-auth/react";
function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
    Cookies.set("kalaiwomeyn", dark)
  }, []);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 40) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 20,
      behavior: "smooth",
    });
  };
  return (
    <div className={dark ? "theme--dark" : "theme--light"}>
      <div className='womeyn-enduser'>
        <div className='inside-main-apphome'>
          <div className='header-appsection'>
            <LayoutHeader setdark={setDark} dark={dark} />
          </div>
          <div className='body-section-app'>
            <StrictMode>
              <ToastContainer />
              <div className="mainscrollbutton">
                {showTopBtn && (
                  <div
                    className="iconsection"
                    onClick={goToTop}
                  >
                    topsection
                  </div>
                )}
              </div>
              <SessionProvider session={pageProps.session}>
                <Provider store={store}>
                  <Component {...pageProps} />
                </Provider>
              </SessionProvider>
            </StrictMode>
          </div>
        </div>

      </div >
    </div >
  )
}

export default App;