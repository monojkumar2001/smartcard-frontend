import React from "react";
import MentionedImg from "../HomePage/MentionedImg";
import styles from "../../styles/pages/HomePage/Mentioned.module.css"
function Featured({alt}) {
  return (
    <div>
      <section className="cpt-6">
        <div className="mentioned-area"    data-aos="fade-up"
              data-aos-duration="1500">
          <div className="section-title">
            <p className="sm-title">best services </p>
            <h2 className="sec-title">We’ve Been Mentioned In</h2>
            <p>Explore our completed projects and let our clients' success stories inspire your Web 3 journey. Contact us today to discuss how we can take your digital initiatives to the next level.</p>
          </div>
          <div className={styles.mentioned_section}>
            <div className={styles.images_slider}>
              <div className={styles.images_slider_wrapper}>
                <div className={styles.images_slider_imgs}>
                <MentionedImg   alt={alt}/>
                </div>
                <div className={styles.images_slider_imgs}>
                <MentionedImg  alt={alt}/>
                </div>
                <div className={styles.images_slider_imgs}>
                <MentionedImg alt={alt}/>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Featured;
