import "../styles/globals.css";
import "../styles/App.css";
import "../styles/Layout.css";
import "../styles/section/_global-style.scss";
import Social from "./inner/Social";
import OfferC from "./inner/OfferC";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/section/portfolio.css";
import "../styles/inner/popup.css";
import { useEffect } from "react";

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

        <Social />
      </Layout>
   
    </>
  );
}

export default MyApp;
