import React from "react";
import Link from "next/link";
import styles from "../../styles/pages/HomePage/HomeService.module.css";
const Service = () => {
  return (
    <>
      <section id="service" className={`${styles.service} cpy-6`}>
        <div className="container">
          <div className="section-title">
            <h2 className="sec-title">Services</h2>
            <p className="sec-des">
              Prepare to launch a billion-dollar start-up on the NFT Fintech and
              Crypto Platform with its new, exciting features and capabilities.
            </p>
          </div>

          <div className={styles.service_grid}>
            {data.map((item, i) => {
              return (
                  <div
                    className={styles.service_car}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={i}
                    
                  >
                    <div className={styles.service_icon}>
                      <img
                        loading="lazy"
                        src={item.image}
                        alt="nft constructer"
                      />
                    </div>
                    <div className={styles.service_content}>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                  </div>
               
              );
            })}
          </div>
        </div>
        <div className={styles.green_filter}></div>
      </section>
    </>
  );
};

export default Service;

const data = [
  {
    id:1,
    title: "Business Page QR Code",
    image: "/assets/images/service/smart.svg",
    des: `Empower your business with a dedicated QR code. Boost engagement and accessibility by linking it to your website, promotions, or contact details. Elevate your brand presence effortlessly.`,
  },
  {
    id:2,
    title: "Smart QR Code",
    image: "/assets/images/service/smart2.svg",
    des: `Unlock the potential of Smart QR Codes for seamless interactions. Enhance user experiences with dynamic content, easy access to information, and versatile applications for a connected and innovative approach`,
  },
  {
    id:3,
    title: "Website QR Code",
    image: "/assets/images/service/smart3.svg",
    des: `Maximize online visibility with a Website QR Code. Streamline user access to your site, products, or services instantly. Elevate your digital presence and engage customers effortlessly through scanning`,
  },
];
