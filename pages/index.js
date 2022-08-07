import React from "react";

import { Product, HeroBanner, FooterBanner } from "../components";

const Home = () => (
  <div>
    <HeroBanner />
    <div className="products-heading">
      <h2>Best Selling Product</h2>
      <p>Speakers of many Variations</p>
    </div>
    <div className="products-container">
      {["Product 1", "Product 2"].map((product) => product)}
    </div>
    <FooterBanner />
  </div>
);

export default Home;
