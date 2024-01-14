import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, EffectCoverflow } from "swiper";
import Image from "next/image";
import styles from "../../styles/pages/HomePage/Review.module.css";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
function Review({ alt }) {
  return (
    <>
      <section className={styles.section_wrap}>
        <div className="container">
          <div className={`section-title`}>
            <h2 className="sec-title">
              Hear from our <span>clients</span>
            </h2>
            <p className="sec-des">
              At the forefront of innovation in custom blockchain solutions, NFT
              craftsmanship, DeFi wizardry, and metaverse mastery, we sculpt the
              digital landscape. Our expertise, whether through crafting,
              consulting, or creating, transforms your digital assets into
              tokens that bridge the realms of artistry and prosperity.
            </p>
          </div>

          <div
            className={styles.client_review}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <Swiper
              modules={[Navigation, A11y, EffectCoverflow]}
              spaceBetween={50}
              // slidesPerView={3}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              // slidesPerView={3}
              coverflowEffect={{
                rotate: 0,
                stretch: 46,
                depth: 142,
                modifier: 1,
                slideShadows: true,
              }}
              breakpoints={{
                350: {
                  slidesPerView: 1,
                },
                680: {
                  slidesPerView: 1.4,
                },
                1050: {
                  slidesPerView: 2,
                },
                1400: {
                  slidesPerView: 2.5,
                },
              }}
              navigation={{
                prevEl: ".prev",
                nextEl: ".next",
              }}
              loop="true"
            >
              {slideItem.map((item, i) => {
                return (
                  <SwiperSlide key={i}>
                    <div className={styles.client_review_slider}>
                      <div className={styles.review_icon}>
                        <Image
                          width={55}
                          height={39}
                          src={item.icon}
                          alt={alt}
                        />
                      </div>
                      <div className={styles.review_title}>
                        <h3>{item.title}</h3>
                      </div>
                      <div className={styles.review_dis}>
                        <p>{item.des}</p>
                      </div>
                      <div className={styles.review_profile}>
                        <div className={styles.review_user_img}>
                          <Image
                            width={51}
                            height={51}
                            src={item.userImg}
                            alt={alt}
                          />
                        </div>
                        <div className={styles.review_user_name}>
                          <h4>{item.userName}</h4>
                          <span>{item.profession}</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className={`${styles.slider_navAll} slider_nav`}>
              <div className="prev">
                <span>
                  <FaAngleLeft />
                </span>
              </div>
              <div className="next">
                <span>
                  <FaAngleRight />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.yellow_filter}></div>
      </section>
    </>
  );
}

export default Review;

const slideItem = [
  {
    id: 1,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-1.png",
    title: "NFT DEVELOPMENT",
    des: `Your team's blockchain expertise is top-notch! They transformed my NFT idea into reality, and now I have a thriving digital art collection. Your services have been a game-changer.`,
    userName: "John H.",
    profession: "Blockchain Enthusiast",
  },
  {
    id: 2,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-3.png",
    title: "10XGroth",
    des: `I couldn't have navigated the DeFi space without your guidance. Your consulting services helped me make informed decisions and yielded great returns. You've earned my trust.`,
    userName: "Samantha R.",
    profession: "DeFi Investor",
  },
  {
    id: 3,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-2.png",
    title: "WEB3",
    des: `The metaverse is the future, and your design work is taking me there. Your team brought my virtual world to life, making my dreams a digital reality. Thank you!`,
    userName: "Mark S.",
    profession: "Metaverse Innovator",
  },

  {
    id: 4,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-4.png",
    title: "BEST MARKETING",
    des: `As an NFT artist, I needed a platform to showcase my work. Your custom NFT development services made it easy. My art is now tokenized, and I'm gaining recognition.`,
    userName: "Alicia G.",
    profession: "NFT Creator",
  },
  {
    id: 5,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-5.png",
    title: "METAVERSE DEVELOPMENT",
    des: `Your team unlocked the potential of blockchain technology for my business. Our digital assets are now tokenized, opening up new revenue streams. It's been a great partnership.`,
    userName: "Michael P.",
    profession: "Business Owner",
  },
  {
    id: 6,
    icon: "/assets/images/review/review-icon.svg",
    userImg: "/assets/images/review/user-img-6.png",
    title: "WEBSITE DESIGN",
    des: `Your design services are a class apart. You've given my NFTs and metaverse projects an aesthetic edge. It's the attention to detail that sets you apart. Bravo!`,
    userName: "Emily C.",
    profession: "Design Aficionado",
  },
];
