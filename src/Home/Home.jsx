import React from "react";
import HomeNav from "./HomeNav";
import HomeMessage from "./HomeMessage";
import "./home.css"


import HomeProcess from "./HomeProcess";
import HomeProducts from "./HomeProducts";
import HomeAboutUs from "./HomeAboutUs";
import HomeFooter from "./HomeFooter";

// Home Page Component
const Home = () => {
  return (
    <div id="home">
      <HomeNav />

     <section>
        <HomeMessage />
      </section> 

      
      <section>
        <HomeProcess />
      </section>

      
      <section>
        <HomeProducts />
      </section>

      <section>
        <HomeAboutUs />
      </section>


      <section>
        <HomeFooter />
      </section>
    </div>
  );
};

export default Home;
