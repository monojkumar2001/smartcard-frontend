import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/HomeService.module.css";
const Service = () => {
  return (
    <>
      <section className={`${styles.service} cpy-6`}>
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
                <Link href={item.link} key={i}>
                  <div
                    className={styles.service_car}
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    
                  >
                    <div className={styles.service_icon}>
                      <Image
                        width={60}
                        height={60}
                        loading="lazy"
                        src={item.image}
                        alt="nft constructer"
                      />
                    </div>
                    <div className={styles.service_content}>
                      <h3>{item.title}</h3>
                      <p>{item.des}</p>
                    </div>
                    <div className={styles.service_learn_more_btn}>
                      <Link href={item.link}>
                        <p className={styles.learn_more_btns}>Learn More</p>
                      </Link>
                    </div>
                  </div>
                </Link>
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
    image: "/assets/img/icon/minting.png",
    link: "/login",
    des: `With NFT CONSTRUCTER, you can build a feature-rich,
    user-friendly NFT minting platform or marketplace without
    any coding or technical knowledge. Enable your users to
    generate new coins without worrying about the blockchain's
    main plot.`,
  },
  {
    id:2,
    title: "Smart QR Code",
    image: "/assets/img/icon/smart-contract.png",
    link: "/",
    des: `Create your optimum DeFi protocol on blockchain networks
    to expand your business to new heights and participate in
    the financial future. As DeFi gives users more control
    because of its security and reliability, you can get your
    DeFi business developed on any of your desired blockchain
    networks.`,
  },
  {
    id:3,
    title: "Website QR Code",
    image: "/assets/img/icon/crypto.png",
    link: "/",
    des: ` Create excellent, beneficial VR experiences in the
    metaverse as your business's next bold move towards
    success. By developing dynamically changing worlds,
    providing distinctive features and characters, and
    offering an exceptional interactive experience.`,
  },
];
