import React, { useState } from "react";
import banner from "../../Backgrounds/banner-1.png";
import mobileBanner from "../../Backgrounds/phonebanner.png";
import "./banner.css";

const Banner = () => {
  const [open, toggle] = useState(true);
  if (open) {
    return (
      <div className="banner-wrapper">
        <div className="banner-relative-wrapper">
          {/* Change this URL to URL containing DSC Dairy */}
          <a
            href="https://drive.google.com/file/d/1vylyjXZs6HKssF3AQSXmzpmHOycio5yA/view?usp=sharing"
            target="_blank"
          >
            <picture>
              <source media="(min-width:650px)" srcset={banner} />
              <img src={mobileBanner} alt="Flowers" />
            </picture>
          </a>
          <span onClick={() => toggle(false)}>x</span>
        </div>
      </div>
    );
  } else {
    return "";
  }
};

export default Banner;
