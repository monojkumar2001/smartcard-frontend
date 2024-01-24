import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/Layout.css";
// import "../styles/style.css";
import "../styles/dashboard.css";
import { AuthProvider } from "./auth/authContext";

// import Social from "../components/inner/Social";

import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/inner/popup.css";
import { useEffect } from "react";
import OfferC from "../components/inner/OfferC";
import "../styles/responsive.css";
// import '../styles/bootstrap.bundle.min.js';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  const Layout = Component.layout;

  return (
    <>
      <Layout>
        {/* <OfferC /> */}
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>

        {/* <Social /> */}
      </Layout>
    </>
  );
}

export default MyApp;
