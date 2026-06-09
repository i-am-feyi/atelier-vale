"use client";

import "./preloader.css";

import gsap from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import SplitText from "gsap/SplitText";
import { CustomEase } from "gsap/CustomEase";

gsap.registerPlugin(SplitText, CustomEase);

CustomEase.create("hop", "0.9, 0, 0.1, 1");
CustomEase.create("Quart.easeInOut", "0.770, 0, 0.175, 1");

const Preloader = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      const loaderDigit = document.querySelector<HTMLElement>(".loader-digit")!;

      const counter = { value: 0 };

      const loaderTl = gsap.timeline();
      const imageTl = gsap.timeline({ delay: 0.5 });

      loaderTl
        .to(counter, {
          value: 100,
          duration: 3.8,
          ease: "power2.inOut",
          onUpdate: () => {
            loaderDigit.textContent = String(Math.floor(counter.value));
            gsap.to(".loading-bar.main-bar", {
              scaleX: Math.floor(counter.value) / 100,
            });
          },
        })
        .to(
          ".text-wrapper p",
          {
            yPercent: 100,
            stagger: 0.1,
            duration: 1,
            ease: "power4.in",
          },
          3.8,
        )
        .to(
          ".loading-bars",
          {
            opacity: 0,
            ease: "none",
            duration: 0.75,
          },
          "<0.15",
        )
        .to(
          scope.current,
          {
            clipPath: "inset(0 0 100%)",
            duration: 1,
            ease: "hop",
          },
          ">-0.1",
        );

      imageTl
        .to(".image-wrapper .img", {
          // clipPath: "inset(0% 0 0)",
          height: "25rem",
          stagger: 1,
          duration: 1,
          ease: "Quart.easeInOut",
        })
        .to(
          ".image-wrapper .img img",
          {
            y: "-10%",
            stagger: 1,
            duration: 1,
            ease: "Quart.easeInOut",
          },
          "<-0.2",
        );

      imageTl
        .to(
          ".image-wrapper .img",
          {
            // clipPath: "inset(100% 0 0)",
            height: "0rem",
            stagger: 0,
            duration: 1.4,
            ease: "power4.in",
          },
          3.8 - 1.4,
        )
        .to(
          ".image-wrapper .img img",
          {
            y: "10%",
            stagger: 0,
            duration: 1.4,
            ease: "power4.in",
          },
          "<",
        );
    },
    { scope },
  );

  return (
    <div className="preloader" ref={scope}>
      <div className="content-container">
        <div className="image-wrapper">
          {/* <div className="img">
            <img src="/loader-image-1.jpg" alt="Image 1" />
          </div> */}
          <div className="img">
            <img src="/loader-image-2.jpg" alt="Image 2" />
          </div>
          <div className="img">
            <img src="/loader-image-3.jpg" alt="Image 3" />
          </div>
        </div>
        <div className="loader-container">
          <div className="text-wrapper">
            <p>Loading</p>
            <p className="loader-digits-wrapper">
              <span className="loader-digit">0</span>
              <span>%</span>
            </p>
          </div>

          <div className="loading-bars">
            <div className="loading-bar shadow-bar" />
            <div className="loading-bar main-bar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
