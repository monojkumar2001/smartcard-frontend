import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Layout.css";
import "../styles/style.css";
import "../styles/bootstrap.min.css";
import '../styles/dashboard.css';
import "../styles/section/_global-style.scss";
import Social from "../components/inner/Social";

import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/inner/popup.css";
import { useEffect } from "react";
import OfferC from "../components/inner/OfferC";


function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Layout = Component.layout ;

  return (
    <>
      <Layout>

        {/* <OfferC /> */}

        <Component {...pageProps} />

        {/* <Social /> */}
      </Layout>
    
   
    </>
  );
}

export default MyApp;
