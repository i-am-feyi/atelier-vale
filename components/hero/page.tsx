"use client";

import "./hero.css";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-image-wrapper">
        <img src="/hero-image.png" alt="Hero Image" />
      </div>

      <div className="hero-content">
        <div className="hero-heading">
          <h1>
            <span>Ateliér</span>
            <span>Vale</span>
          </h1>
        </div>
        <div className="hero-texts">
          <p>Crafting furniture for spaces of lasting character.</p>
          <p className="md:max-w-[475px] max-w-[370px]">
            Designed with precision and shaped by exceptional materials, each piece brings
            balance, comfort, and quiet sophistication to contemporary interiors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
