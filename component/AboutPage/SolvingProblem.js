import React from "react";
import Styles from "../../styles/pages/AboutPage/AboutPage.module.css";
const SolvingProblem = () => {
  return (
    <>
      {/* {/ <!-- ================ Solving Problem Services start ================ --> /} */}
      <section className="solving-problem-service cpt-7"    data-aos="fade-up"
              data-aos-duration="1500">
        <div className="container">
          <div className="solving-problem-service-wrapper">
            <div className={Styles.solving_problem_service_content}>
              <h3>Empowering Solutions Through Service</h3>
              <p>
                NFT Constructer, a pioneer in blockchain development, has been
                serving a global clientele with groundbreaking solutions for
                half a decade. Our dedicated team, comprising over 100
                experienced developers, designers, and marketing experts,
                delivers a spectrum of services covering the entire Web3
                blockchain development journey. From smart contracts and NFTs to
                DeFi, Metaverse, website design, marketing, and analytics, we
                possess the prowess and resources to excel in any project. NFT
                Constructer remains at the forefront by continually updating our
                knowledge of the latest blockchain and Web3 technologies, and
                we've cultivated a robust toolkit to uphold the quality of our
                services. Security is paramount, and we've enforced stringent
                measures to ensure data safety and client confidentiality.
              </p>
            </div>
            <div className={`${Styles.solving_problem_video} cpy-6`}>
              <div className={Styles.video_wrapper}>
                <video
                  className={Styles.video_controls}
                  controls
                  src="https://res.cloudinary.com/ddu4x2opv/video/upload/v1683695137/nft-constructer/NFT_Constructer_Promo_wf7cmp.mp4"
                ></video>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* {/ <!-- ================ Solving Problem Services end ================ --> /} */}
    </>
  );
};

export default SolvingProblem;
