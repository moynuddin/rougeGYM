import React, { useRef, useEffect } from "react";
import Typed from "typed.js";
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import "../components/Footer.scss";

const Footer = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Rogue GYM", "We lift iron", "Muscles feats"],
      startDelay: 400,
      typeSpeed: 100,
      loop: true,
      showCursor: true,
      cursorChar: "!",
    });

    return () => typed.destroy();
  }, []);
  return (
    <>
      <div className="footer">
        <div className="typography">
          <p ref={el}></p>
        </div>
        <div className="socials">
          <div className="icons-wrapper">
            <div className="linkedin">
              <FaLinkedin />
            </div>
            <div className="github">
              <FaGithubSquare />
            </div>
          </div>
          <div className="copy-right">
            <p>&copy; All Rights Reversed.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
