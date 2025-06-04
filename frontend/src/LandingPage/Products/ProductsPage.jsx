import React from "react";
import Universe from "./Universe";
import Hero from "./Hero";
import LeftImageSection from "./LeftImageSection";
import RightImageSection from "./RightImageSection";

function ProductsPage() {
  const dashboardURL = import.meta.VITE_DASHBOARD_URL;
  return (
    <>
      <Hero />
      <LeftImageSection
        imageURL="images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        link1="Try demo"
        link1_URL={dashboardURL}
        link2="Learn more"
        link2_URL=""
        googlePlay=""
        appStore=""
      />
      <RightImageSection
        imageURL="images/console.png"
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        link1="Learn more"
        link1_URL=""
        link2=""
        link2_URL=""
      />
      <LeftImageSection
        imageURL="images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        link1="Coin"
        link1_URL=""
        link2=""
        link2_URL=""
        googlePlay=""
        appStore=""
      />
      <RightImageSection
        imageURL="images/kiteconnect.png"
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        link1="Kite Connect"
        link1_URL={dashboardURL}
        link2=""
        link2_URL=""
      />
      <LeftImageSection
        imageURL="images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        link1=""
        link1_URL=""
        link2=""
        link2_URL=""
        googlePlay=""
        appStore=""
      />
      <p className="text-center fs-5 mb-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}

export default ProductsPage;
