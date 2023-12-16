import React from "react";
import HomeProcess from "./HomeProcess";
import HomeNav from "./HomeNav";
import HomeMessage from "./HomeMessage";
import HomeProducts from "./HomeProducts";
import HomeAboutUs from "./HomeAboutUs";
import HomeFooter from "./HomeFooter";

// Home Page Component
const Home = () => {

    return (
    <section className="bg-black lg:w-full w-[120vw]" >
      <HomeNav/>
      <HomeMessage />
      <HomeProcess />
      <HomeProducts />
      <HomeAboutUs />
      <HomeFooter />
    </section>
  );
};

export default Home;
