import React from "react";
import { Parallax } from "react-parallax";
import "../components/Parallex.scss";
const Parallex = () => {
  return (
    <div>
      <Parallax
        blur={5}
        bgImage="https://images.pexels.com/photos/221247/pexels-photo-221247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        bgImageAlt="the cat"
        strength={200}
      >
        <div className="newsletter">
          <h1>Subscribe to our newsletter to get weekly tips.</h1>
          <div className="input-wrapper">
            <input
              className="form-control"
              type="email"
              placeholder="Enter your email here..."
            />
            <button className="subscribe">Subscribe</button>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Parallex;
