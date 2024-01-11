import React, { useEffect, useState } from "react";
import AppLayout from "../../component/Layout/Layout";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";
import styles from "../../styles/pages/BlogPage/BlogPage.module.css";
import Loading from "../../component/Loading/Loading";

function Blog() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.nftconstructer.com/api/blog")
      .then((res) => setPosts(res.data));
    setLoading(false);

    
  }, []);

  if (loading) {
    return (
      <Loading/>
    );
  }

  console.log("blog", posts);

  return (
    <>
      <Head>
        <title>
          Explore more about nft defi and blockchain fundamentals- NFT
          Constructer
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://nftconstructer.com/blog" />
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <link rel="canonical" href="https://nftconstructer.com/blog" />

        <meta
          name="description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta
          name="og:description"
          content="Blockchain development is increasing day by day and business of nft development, metaverse development, DeFi development getting important…"
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="Explore more about nft defi and blockchain fundamentals- NFT Constructer"
        />
        <meta property="og:image" content="assets/img/meta/blog.jpg" />
        <meta property="image" content="assets/img/meta/blog.jpg" />
        <meta
          name="keywords"
          content="nft, full stack, web development, website, website design , website development,development, nft constructer, minting website"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-MLNPCQK"
          className="tag-man"
        ></iframe>
      </noscript>

      <section id="blog" className={`${styles.blog_page} cpy-6`}>
        <div className={styles.yellow_filter}></div>
        <div className={styles.blue_filter}></div>
        <div className={styles.container}>
          <div className={styles.section_title}>
            <p className={styles.sm_title}>My Blog</p>
            <h2 className={styles.sec_title}>Latest News</h2>
            <p className="sec-des">
              Discover valuable insights on software development in our blogs,
              covering exchange software, wallet software, derivative products,
              and more. Stay informed and up-to-date with our informative blog
              content.
            </p>
          </div>

          <div className={styles.blog_container}>
            {posts.length == 0 ? (
              <Loading/>
            ) : (
              posts.map((post, index) => (
                <Link href={`/blog/${post.slug}`} key={index}>
                  <div className={styles.blog_post}>
                    <div className={styles.blog_img}>
                      <img
                        height="auto"
                        width="auto"
                        src={post.main_image}
                        alt={"blog"}
                      />
                    </div>
                    <div className={styles.about_blog}>
                      <button>ANNOUNCEMENTS</button>
                      <h4 className={styles.urbanist_black_18}>{post.title}</h4>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </section>
    </>
  );
}

Blog.layout = AppLayout;

export default Blog;
