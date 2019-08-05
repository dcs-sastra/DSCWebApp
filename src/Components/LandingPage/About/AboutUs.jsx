import React from "react";
import "./About.css";
import data from "../../../Store";

export default function AboutUs() {
  return (
    <>
      <div className="about__dsc">
        <div className="container">
          <br />
          <br />
          <h3 className="text-center">About Developer Students Club</h3>
          <div className="divider "></div>
          {/* Change the content in Store.js to see the changes */}
          <p>{data.aboutDSC}</p>
        </div>
      </div>
    </>
  );
}
