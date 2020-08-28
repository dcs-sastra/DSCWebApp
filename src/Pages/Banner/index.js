import React, { useState } from "react";
import dsclogo from "../../Backgrounds/dsclogo.png";
import "./banner.css";

const Banner = () => {
  const [open, toggle] = useState(true);
  if (open) {
    return (
      <div className="banner-wrapper">
        <div className="banner-flex">
          <img src={dsclogo} className="banner-dsc-logo" alt="..." />
          <a
            href="https://drive.google.com/file/d/1vylyjXZs6HKssF3AQSXmzpmHOycio5yA/view?usp=sharing"
            target="_blank"
            className="banner-link"
          >
            <p>
              DSC SASTRA Diary is available now.{" "}
              <span className="banner-blue-text"> Grab your copies here </span>
            </p>
          </a>
          <span className="banner-close" onClick={() => toggle(false)}>
            &#10006;
          </span>
        </div>
      </div>
    );
  }
  return "";
};
export default Banner;
