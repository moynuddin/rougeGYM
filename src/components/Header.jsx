import React, { useRef, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Header.scss";
import banner from "../assets/images/banner.jpg";
const Header = () => {
  const brand = useRef(null);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    const typed = new Typed(brand.current, {
      strings: ["Rogue ^500 <span>GYM</span>"],
      startDelay: 400,
      typeSpeed: 200,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  const handleExercise = () => {
    window.scrollTo({ top: 1200, behavior: "smooth" });
  };
  const handleHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="wrapper">
      <div className="container">
        <p className="brandName" ref={brand}></p>
        <nav>
          <ul>
            <li onClick={handleHome}>Home</li>
            <li onClick={handleExercise}>Exercise</li>
          </ul>
        </nav>
        <div className="menu">
          <FaBars />
        </div>
        <div
          className="img-wrapper"
          data-aos="fade-left"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          <img src={banner} alt="banner" />
        </div>
      </div>
      <div className="banner-container">
        <h1
          className="heading"
          data-aos="fade-right"
          data-aos-delay="200"
          data-aos-duration="1000"
        >
          It's a slow process. But quitting won't speed it up.
        </h1>
      </div>
    </div>
  );
};

export default Header;
