import React, { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import Typed from "typed.js";
import AOS from "aos";
import "aos/dist/aos.css";
import "../components/Header.scss";
import banner from "../assets/images/banner.jpg";
const Header = (props) => {
  const navigate = useNavigate();

  const brand = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      once: true,
    });
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
    navigate("/");
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
        <div className="menu" onClick={toggleMenu}>
          <FaBars />
        </div>
        {isOpen ? (
          <div className="menu-items">
            <p onClick={handleHome}>Home</p>
            <p onClick={handleExercise}>Exercise</p>
          </div>
        ) : (
          ""
        )}
        {!props.hide ? (
          <div
            className="img-wrapper"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <img src={banner} alt="banner" />
          </div>
        ) : (
          ""
        )}
      </div>
      {!props.hide ? (
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
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
