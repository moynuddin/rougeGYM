import React, { useEffect } from "react";
import "./Testimony.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import iconOne from "../assets/images/icon-1.png";
import iconTwo from "../assets/images/icon-2.jpeg";
import iconThree from "../assets/images/icon-3.jpeg";
import iconFour from "../assets/images/icon-4.jpeg";
import iconFive from "../assets/images/icon-5.png";
import iconSix from "../assets/images/icon-6.png";
import iconSeven from "../assets/images/icon-7.png";
import iconEight from "../assets/images/icon-8.png";
import iconNine from "../assets/images/icon-9.jpeg";
import iconTen from "../assets/images/icon-10.png";
import iconEleven from "../assets/images/icon-11.jpeg";
import iconTwelve from "../assets/images/icon-12.jpeg";
const Testimony = () => {
  useEffect(() => {
    AOS.init({
      once: true,
    });
    AOS.refresh();
  });
  return (
    <div className="brands-container">
      <div className="testimony-content">
        <h1>Our Partners</h1>
      </div>
      <div className="brands-wrapper">
        <div
          data-aos="zoom-in-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={iconOne} alt="Brand One" />
        </div>
        <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000">
          <img src={iconTwo} alt="Brand One" />
        </div>
        <div data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">
          <img src={iconThree} alt="Brand One" />
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={iconFour} alt="Brand One" />
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={iconFive} alt="Brand One" />
        </div>
        <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000">
          <img src={iconSix} alt="Brand One" />
        </div>
        <div data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">
          <img src={iconSeven} alt="Brand One" />
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={iconEight} alt="Brand One" />
        </div>
        <div
          data-aos="zoom-in-right"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={iconNine} alt="Brand One" />
        </div>
        <div data-aos="flip-up" data-aos-delay="500" data-aos-duration="1000">
          <img src={iconTen} alt="Brand One" />
        </div>
        <div data-aos="flip-down" data-aos-delay="500" data-aos-duration="1000">
          <img src={iconEleven} alt="Brand One" />
        </div>
        <div
          data-aos="zoom-in-left"
          data-aos-delay="500"
          data-aos-duration="1000"
        >
          <img src={iconTwelve} alt="Brand One" />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
