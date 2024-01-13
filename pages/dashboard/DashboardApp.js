import React from 'react'
import DashboardLayout from '../../component/Layout/DashboardLayout';

const DashboardApp = ({Component,pageProps}) => {
    useEffect(() => {
        Aos.init({
          easing: "ease-out-cubic",
          once: true,
          offset: 50,
        });
      }, []);
    
      return (
        <>
          <DashboardLayout>
            <Component {...pageProps} />
          </DashboardLayout>
       
        </>
      );
}

export default DashboardApp