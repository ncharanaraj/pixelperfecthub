import React from "react";
import Header from "../components/Header";
import Background from "../components/Background";
import BlurContainer from "../components/BlurContainer";
import Search from "../components/Search";

const LandingPage = () => {
  return (
    <Background classNames={["h-screen"]}>
      <Header />
      <div className="font-bold text-7xl max-w-4xl text-center leading-snug">
        Discover over 2,000,000 free Stock Images
      </div>
      <BlurContainer classNames={["flex", "items-center", "mt-8"]}>
        <Search />
      </BlurContainer>
      <BlurContainer classNames={["py-1", "-mt-8"]}>
        <span className="font-semibold text-sm mr-2">Trending:</span>
        <span className="text-sm">Flowers, Love, Foreset, River</span>
      </BlurContainer>
    </Background>
  );
};

export default LandingPage;
