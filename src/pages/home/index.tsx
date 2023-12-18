import Apartment from "@/Component/Apartment";
import Banner from "@/Component/Banner";
import Explore from "@/Component/Explore";
import Footer from "@/Component/Footer";
import Header from "@/Component/Header";
import HowWork from "@/Component/HowWork";
import Looksection from "@/Component/Looksection";

import React from "react";
const index = () => {
  return (
    <>
      <Header />
      <Banner />
      <Looksection />
      <HowWork />
      <Explore />
      <Apartment />

      <Footer />
    </>
  );
};

export default index;
