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
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");
    Cookies.set("kalaiwomeyn", dark)
  }, []);

  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className={dark ? "theme--dark" : "theme--light"}>
      <div className='womeyn-enduser'>
        <StrictMode>
          <ToastContainer />
          <SessionProvider session={pageProps.session}>
            <Provider store={store}>
              <div className='inside-main-apphome'>
                <div className='header-appsection'>
                  <LayoutHeader setdark={setDark} dark={dark} />
                </div>
             
             
                {isVisible && (
        <div onClick={scrollToTop} className="goTop">
          <h3>Go up!</h3>
        </div>
      )}
                <div className='body-section-app'>
                  <Component {...pageProps} />
                </div>
              </div>
            </Provider>
          </SessionProvider>
        </StrictMode>
      </div >
    </div >
  )
}

export default App;