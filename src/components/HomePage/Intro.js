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
                  Bring your concepts for QR Codes to life.
                </h1>
                <p>
                  QR codes revolutionize interaction, from interactive marketing and contactless transactions to healthcare solutions. They streamline processes, enhance experiences, and offer efficiency across various applications.
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
                src="/assets/images/home/hero.svg"
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
