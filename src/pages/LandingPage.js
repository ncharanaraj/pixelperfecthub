import React from "react";
import { Header, Background, BlurContainer, Search } from "../components";

const LandingPage = () => {
  return (
    <Background classNames={["h-screen"]}>
      <Header />
      <div className="font-bold md:text-7xl text-5xl leading-tight max-w-4xl text-center md:leading-snug">
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
