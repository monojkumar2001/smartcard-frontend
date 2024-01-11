import Image from "next/image";
import Link from "next/link";
import React from "react";
import Styles from "../../styles/pages/AboutPage/AboutPage.module.css";
const HeroSection = () => {
  return (
    <>
      <section id={Styles.hero_about}>
        <div className="container">
          <div className={Styles.hero}>
            <div
              className={Styles.hero_content}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <h1>
                Non Fungible Token Development <span>Agency </span>
              </h1>

              <p>
              Discover the visionary team behind NFTConstructer.com, a hub for full-stack developers shaping the future of Web 3 and NFT development. Explore our journey, values, and commitment to innovation as we lead the way in the dynamic world of digital assets and decentralized applications.
              </p>

              <div className={Styles.hero_btns}>
                <button className={Styles.btn_hero_1}>
                  <Link href="#about">Hire Me</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
              className={Styles.hero_img2}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={576}
                height={425}
                loading="lazy"
                src="/assets/images/about/hero-bg-img-2.svg"
                alt="about"
              />
            </div>
        <div
              className={Styles.hero_img3}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={1400}
                height={310}
                loading="lazy"
                src="/assets/images/about/hero-bg-img-3.svg"
                alt="about"
              />
            </div>
      </section>

    </>
  );
};

export default HeroSection;
