
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
import 'react-loading-skeleton/dist/skeleton.css'
import Cookies from 'js-cookie';
export default function App({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    import("slick-carousel/slick/slick.css");
    import("slick-carousel/slick/slick-theme.css");

  }, []);



  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(dark));
  }, [dark]);
  useEffect(() => {
    const theme = JSON.parse(localStorage.getItem("theme"));
    if (theme) {
      setDark(theme);
    }
  }, []);
  function setTheme() {
   setDark(!dark);
  }


  return (
    <div className={dark ? "theme--dark" : "theme--light"}>
      <button onClick={setTheme}>kalai</button>
      <div className='womeyn-enduser'>
        <StrictMode>
          <ToastContainer />
          <Scrollbutton />

          <Provider store={store}>
            <Component {...pageProps} setdark={setDark} dark={dark} />
          </Provider>
        </StrictMode>
      </div >
    </div >
  )
}



