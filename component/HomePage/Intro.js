import React from "react";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/Hero.module.css";
import { BsCheck } from "react-icons/bs";
import Link from "next/link";
const Intro = () => {
  return (
    <div id={styles.home1}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.hero_wrapper}>
            <div
              className={styles.hero_content_wrapper}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className={styles.hero_content}>
                <h1 className={styles.section_title}>
                  Full Stack Web Tech Services For NFT & Fint ech Companies
                </h1>
                <p>
                  We provide full stack web tech development and design services
                  for NFT Defi and fintech start ups that can help you to reach
                  a wider audience and increase of revenue.
                </p>
                <div className="custom-btn mt-3">
                  <Link href={'/login'} >
                    <span>Join Now</span>
                  </Link>
                </div>
              </div>
            </div>
            <div
              className={styles.hero_img}
              data-aos="fade-up"
              data-aos-duration="2000"
            >
              <Image
                width={469}
                height={534}
                loading="lazy"
                src="/assets/new/hero/hero.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Intro;
