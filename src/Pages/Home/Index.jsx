import React from "react";
import Header from "../../Component/RootLayout/Header/index.jsx";
import Navbar from "../../Component/RootLayout/Navbar/Index.jsx";
import Banner from "../../Component/HomePage/Banner/index.jsx";
import FlashSale from "../../Component/HomePage/FlashSale/Index.jsx";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Banner />
      <FlashSale />
    </div>
  );
};

export default Homepage;
