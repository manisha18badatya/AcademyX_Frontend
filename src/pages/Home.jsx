import React from "react";
import HomeHero from "../components/Home/HomeHero";
import TopCreators from "../components/Home/TopCreators";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import "../Stylesheets/base.css";

function Home() {
  return (
    <div>
      <div className="bodydiv">
        <Navbar />
        <HomeHero />
        <TopCreators />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
