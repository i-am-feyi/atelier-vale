"use client";

import "./navbar.css";

import gsap from "gsap";
import Link from "next/link";
import Image from "next/image";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Navbar = () => {
  const scope = useRef(null);

  useGSAP(
    () => {
      if (!scope.current) return;

      SplitText.create(".nav-wrapper span", {
        type: "lines",
        mask: "lines",
        linesClass: "line",
        autoSplit: true,
      });

      gsap.set(".line, .logo-wrapper img", {
        y: "100%",
      });

      const tl = gsap.timeline({ delay: 6 });
      tl.to(".line, .logo-wrapper img", {
        y: 0,
        opacity: 1,
        duration: 2,
        stagger: 0.15,
        ease: "power4.out",
      });
    },
    { scope },
  );

  return (
    <div className="navbar" ref={scope}>
      <div className="nav-wrapper">
        <div className="logo">
          <div className="logo-wrapper">
            <Link href="/">
              <Image src="/logo.svg" alt="Logo" width={160} height={46} />
            </Link>
          </div>
        </div>
        <div className="links">
          <a href="#">
            <span>Collections</span>
          </a>
        </div>
        <div className="cta">
          <a href="#">
            <span>Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
