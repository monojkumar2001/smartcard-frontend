import React, { useEffect, useState } from "react";
import Link from "next/link";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import styles from "../../styles/pages/BlogPage/LatestBlog.module.css";
import Image from "next/image";
function LatestBlog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://api.nftconstructer.com/api/latest/post")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <section>
      <div className={styles.latest_blog}>
        <div className={styles.container}>
          <div className="latest-post-title">
            <h2 className={styles.raleway_black_24}>CONTINUE READING</h2>
          </div>
          <div className="latest-post-container">
            <div className={styles.latest_post_card}>
              <div className="post-card-wrapper">
                <Swiper
                  // install Swiper modules
                  modules={[Navigation, A11y]}
                  spaceBetween={30}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    prevEl: ".prev",
                    nextEl: ".next",
                  }}
                  loop="true"
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log("slide change")}
                  breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    900: {
                      slidesPerView: 3,
                      spaceBetween: 30,
                    },
                  }}
                >
                  {posts.map((post, index) => (
                    <SwiperSlide
                      className={styles.latest_blog_post}
                      key={post.id}
                    >
                      <Link href={post.slug}>
                        <div
                          className={`${styles.blog_post} ${styles.post_card}`}
                        >
                          <div className={styles.blog_img}>
                            <img
                              height={216}
                              width={411}
                              src={post.main_image}
                              alt={post.seo_title}
                            />
                          </div>
                          <div className={styles.about_blog}>
                            <button>ANNOUNCEMENTS</button>

                            <h4 className={styles.urbanist_black_18}>
                              {post.title}
                            </h4>
                          </div>
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div
                  className={`${styles.slider_nav} ${styles.latest_post_nav_arrow}`}
                >
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
          </div>
        </div>
      </div>
    </section>
  );
}

export default LatestBlog;
