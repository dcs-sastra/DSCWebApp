import React, { Component } from "react";
import "./Landing.css";
import Terminal from "./Terminal/terminal";
import AboutUs from "./About/AboutUs";
import Clusters from "./Clusters/Clusters";
import ContactUs from "./ContactUs/ContactUs";

class Landing extends Component {
  render() {
    return (
      <div className="landing_cover">
        <Terminal />
        <AboutUs />
        <Clusters />
        <ContactUs />
        <div className="Landing__address container">
          <br />
          <h4>DSC SASTRA - Powered By Google </h4>
          Sastra Deemed to be University,
          <br />
          Thanjavur,
          <br />
          Tamil Nadu
        </div>
      </div>
    );
  }
}

export default Landing;
