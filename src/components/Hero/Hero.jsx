import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__image">
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/image-hero-desktop.png`}
            media="(min-width: 1068px)"
          />
          <img
            src={`${process.env.PUBLIC_URL}/image-hero-mobile.png`}
            alt="hero"
          />
        </picture>
      </div>
      <div className="hero__content">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="hero__company-logo-container">
          <img
            src={`${process.env.PUBLIC_URL}/client-databiz.svg`}
            alt="databiz"
          />
          <img
            className="hero__audiophile"
            src={`${process.env.PUBLIC_URL}/client-audiophile.svg`}
            alt="audiophile"
          />
          <img src={`${process.env.PUBLIC_URL}/client-meet.svg`} alt="meet" />
          <img src={`${process.env.PUBLIC_URL}/client-maker.svg`} alt="maker" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
