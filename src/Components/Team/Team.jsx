import React from "react";
import "./Team.css";
import teamLogo from "../../assets/team.svg";
import { Tech, nonTech } from "./helper";
import data from "../../Store.js";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const profileImage = importAll(
  require.context("../../assets/members", false, /\.(png|jpe?g|svg)$/)
);

export default function Team() {
  let appDevelopers = [],
    webDevelopers = [],
    mlexperts = [],
    flutter = [],
    cloud = [],
    graphics = [],
    content = [],
    marketing = [];
  appDevelopers = Tech("app");
  webDevelopers = Tech("web");
  mlexperts = Tech("ml");
  flutter = Tech("flutter");
  cloud = Tech("cloud");
  graphics = nonTech("graphic");
  content = nonTech("content");
  marketing = nonTech("marketing");

  return (
    <div className="container">
      <br />
      <h3 className="text-center">
        {" "}
        The Parent Classes; get ready to derive everything from them{" "}
      </h3>
      <div className="divider"></div>
      <br />
      <div className="row">
        <div className="col-md-6">
          <img src={teamLogo} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <br />
          <br />
          <div className="Lead__div">
            <div className="lead__image">
              <img src={profileImage[`${data.teams.lead.imgUrl}.jpg`]} alt="" />
            </div>
            <div>
              <h3>{data.teams.lead.name}</h3>
              <small className="text-secondary">{data.teams.lead.role}</small>
            </div>
          </div>
        </div>
      </div>
      <br />
      <div>
        <br />
        <br />
        <div className="container">
          <h3 className="text-center"> Tech Team </h3>
          <div className="divider"></div>
          <div className="tech_team img1" id="android">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper ">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left">Android Developers</h3>
              </div>
            </div>
          </div>
          {/* <div className="tech_team img2" id="flutter">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper">{flutter}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left text-white">Flutter Developers</h3>
              </div>
            </div>
          </div> */}
          <div className="tech_team img2" id="web">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper">{webDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-center text-white">Web Developers</h3>
              </div>
            </div>
          </div>
          <div className="tech_team img3" id="ML">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper">{mlexperts}</div>
              </div>
              <div className="team_title">
                <h3 className="text-center">Machine Learning Enthusiasts</h3>
              </div>
            </div>
          </div>
          <div className="tech_team img4" id="cloud">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper ">{cloud}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left text-white">Cloud and AR / VR </h3>
              </div>
            </div>
          </div>
          {/* <div className="tech_team img2" id="ar_vr">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper ">{cloud}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left text-white">AR / VR</h3>
              </div>
            </div>
          </div> */}
        </div>
        <br />
        <br />
        <div className="container">
          <h3 className="text-center"> Non - Tech Team </h3>
          <div className="divider"></div>
          <div className="card nonTechTeam">
            <div className="container">
              <br />
              <div id="graphics">
                <h4 className="text-center">Graphic Designing</h4>
                <div className="row ">{graphics}</div>
              </div>
              <hr />
              <div id="content_writing">
                <h4 className="text-center">Content Writing</h4>
                <div className="row ">{content}</div>
              </div>
              <hr />
              <div id="marketing">
                <h4 className="text-center">Marketing</h4>
                <div className="row ">{marketing}</div>
              </div>
              <br />
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
      <br />
    </div>
  );
}
