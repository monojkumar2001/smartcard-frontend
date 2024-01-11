import React from "react";
import AppLayout from "../component/Layout/Layout";
import Head from "next/head";
import Review from "../component/Section/Review";
import Featured from "../component/Section/Featured";
import ContactBtn from "../component/Section/ContactBtn";
import WhyChose from "../component/Section/WhyChose";
import Faqq from "../component/Section/Faqq";
import Service from "../component/HomePage/Service";
import SaveTime from "../component/Section/SaveTime";
import Intro from "../component/HomePage/Intro";
function Home() {

  return (
    <>
      <Head>
        <title>
          In Non-Fungible Token Development Services, We Are the Experts
        </title>
        <meta property="og:site_name" content="NFT CONSTRUCTER"></meta>
        <meta
          name="google-site-verification"
          content="qLqpdaJEdfR47ipB9hZYNBRaViXucx7nOp3B5VCNLb0"
        />
        <meta property="og:type" content="website"></meta>
        <meta property="og:url" content="https://www.nftconstructer.com" />
        <link rel="canonical" href="https://nftconstructer.com/ " />
        <meta
          name="description"
          content="NFT Constructer offers highly professional website design and development service with affordable pricing specialized for NFT DeFi "
        ></meta>
        <meta
          name="og:description"
          content="NFT Constructer offers highly professional website design and development service with affordable pricing specialized for NFT DeFi "
        ></meta>
        <meta property="og:type" content="article" />
        <meta
          property="og:title"
          content="In Non-Fungible Token Development Services, We Are the Experts"
        />
        <meta property="og:image" content="assets/img/meta/1.jpg" />
        <meta property="image" content="assets/img/meta/1.jpg" />
        <meta
          name="keywords"
          content="Nft minting website development NFT Website Design NFT marketplace development"
        ></meta>
        <link rel="icon" type="image" href="/favicon.png"></link>


      </Head>
      {/* ============= Hero Section ================== */}
      <Intro />

      {/* =============service cards section ================== */}
      <SaveTime />

      {/* ===================service section ================== */}
      <Service />
      {/* ================WHY CHOSE UP SECTION ================  */}
      <WhyChose alt="nft constructer" />
      {/* ===================Mentioned section ================== */}
      <Featured alt="nft constructer" />

      {/* =====================happy clients======================= */}
      <div className="cpy-6">
        <Review alt="nft constructer" />
      </div>

      {/* ==========================faq================== */}
      <Faqq data={HomeFaqData} alt="nft constructer" />

      {/* ===============================contact us ================ */}
      <ContactBtn alt="nft constructer" />

    </>
  );
}
Home.layout = AppLayout;

export default Home;

const HomeFaqData = {
  rows: [
    {
      title: "What is an NFT minting platform?",
      content: `NFT Minting platform is a website where users can mint their various digital assets such as artwork,music,video,game items NFT etc digital collectibles. While minting an NFT users have to pay a gas fee based on the blockchain and platform they wish to mint their NFTs.`,
    },
    {
      title: "How to create a NFT Minting website",
      content: `You can either create an NFT minting website with the use of ready made White label NFT minting software which can reduce the development cost and time. You just need to buy an NFT minting software, customize it based on your business niche requirements and launch it. You can also create an nft minting website from scratch which requires a lot of time and development cost.`,
    },
    {
      title: "Which is the best NFT minting platform development company?",
      content: `With no doubt NFT Constructer is the best one step NFT minting platform development company delivering NFT Minting website development services worldwide such as India, United states, united kingdom and much more.`,
    },
    {
      title: "Which is the best NFT minting platform designing company?",
      content: `With no doubt NFT Constructer is the best one step NFT minting platform development & designing company delivering NFT Minting website development & design services worldwide such as India, United states, united kingdom and much more.`,
    },
    {
      title: "Is it completely secure?",
      content: `Yes, it’s completely secure & tested before we hand over the complete project to the customers.`,
    },
  ],
};

