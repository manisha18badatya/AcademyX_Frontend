import React, { useState } from "react";
import "../../stylesheets/HomeHero.css";
import { NavLink } from "react-router-dom";
function HomeHero() {
  let [signup, setSignUp] = useState("");
  return (
    <div>
      <div className="hero">
        <h1 className="hero__title">
          X-FACTOR IN <br />
          LEARNING
        </h1>
        <h1 className="hero__subtitle">QUALITY EDUCATION ONLINE</h1>
        <NavLink to="/signup" className="signupbutton">
          <div className="signupbutton__text">Sign up for free</div>
        </NavLink>
      </div>
    </div>
  );
}

export default HomeHero;
