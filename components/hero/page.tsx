"use client";

import "./hero.css";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

CustomEase.create("hop", "0.9, 0, 0.1, 1");
CustomEase.create("Quart.easeInOut", "0.770, 0, 0.175, 1");

const HeroSection = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      SplitText.create(".hero-texts p", {
        type: "lines",
        linesClass: "line",
        mask: "lines",
        autoSplit: true,
      });

      SplitText.create("h1", {
        type: "lines",
        linesClass: "line",
        mask: "lines",
        autoSplit: true,
      });

      gsap.set(".line", {
        y: "110%",
        opacity: 0,
      });

      gsap.set(".hero-image-wrapper img", {
        scale: 1.5,
        opacity: 0,
      });

      const tl = gsap.timeline({ delay: 5 });

      tl.to(".hero-image-wrapper img", {
        scale: 1,
        opacity: 1,
        duration: 1.75,
        ease: "power4.out",
      });

      tl.to(
        "h1 .line",
        {
          y: 0,
          opacity: 1,
          duration: 1.75,
          ease: "power4.out",
        },
        ">-1.25",
      ).to(
        ".hero-texts p .line",
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          stagger: {
            from: "end",
            each: 0.15,
          },
          ease: "power4.out",
        },
        ">-1.5",
      );
    },
    { scope },
  );
  return (
    <div className="hero" ref={scope}>
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
