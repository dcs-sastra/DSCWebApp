import React from "react";
import "./Team.css";
import teamLogo from "../../assets/team.svg";
import data from "../../Store.js";

export default function Team() {
  let appDevelopers = [];
  let iterator = 0;
  for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
      let person = data.teams.app[iterator++];
      if (person) {
        console.log(person.imgUrl);
        let url = person.imgUrl;
        let name = person.name;
        let jsx = (
          <div className="user-card" key={iterator}>
            <div className="front-side">
              <img src={url} alt="" />
              <h6>{name}</h6>
              <span className="social">
                <a href="https://linkedin.com" className="fab fa-linkedin"></a>
                <a className="fab fa-github"></a>
                <a className="fas fa-basketball-ball"></a>
              </span>
            </div>
          </div>
        );
        appDevelopers.push(jsx);
      }
    }
    appDevelopers.push(
      <>
        <br id={iterator} />
      </>
    );
  }

  let nonTech = data.teams.nonTech.map((person, id) => {
    return (
      <div className="col-4 text-center non_tech" key={id}>
        <img src={person.imgUrl} alt="" className="team_members" />
        <p>{person.name}</p>
        <span className="social nontech_social">
          <a href="https://linkedin.com" className="fab fa-linkedin"></a>
          <a className="fab fa-github"></a>
          <a className="fas fa-basketball-ball"></a>
        </span>
      </div>
    );
  });

  return (
    <div className="container">
      <br />
      <h3 className="text-center"> Some good caption here </h3>
      <div className="row">
        <div className="col-md-6">
          <img src={teamLogo} alt="" width="100%" />
        </div>
        <div className="col-md-6">
          <br />
          <br />
          <div className="Lead__div">
            <div className="lead__image">
              <img src="https://i.pravatar.cc/200" alt="" />
            </div>
            <div>
              <h3>Kavin Raju S</h3>
              <small className="text-secondary">DSC Lead, App Developer</small>
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
          <div className="tech_team img1">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper ">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left">Android Developers</h3>
              </div>
            </div>
          </div>
          <div className="tech_team img2">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left text-white">Flutter Developers</h3>
              </div>
            </div>
          </div>
          <div className="tech_team img3">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-center">Web Developers</h3>
              </div>
            </div>
          </div>
          <div className="tech_team img4">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left text-white">
                  Machine Learning Enthusiasts
                </h3>
              </div>
            </div>
          </div>
          <div className="tech_team img1">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper ">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left">Cloud Engineers</h3>
              </div>
            </div>
          </div>
          <div className="tech_team img2">
            <div className="row">
              <div style={{ width: "100%" }}>
                <div className="appDevelopers_wrapper ">{appDevelopers}</div>
              </div>
              <div className="team_title">
                <h3 className="text-left text-white">AR / VR</h3>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <div className="container">
          <h3 className="text-center"> Non - Tech Team </h3>
          <div className="divider"></div>
          <div className="card nonTechTeam">
            <div className="container">
              <br />
              <h4 className="text-center">Graphic Designing</h4>

              <div className="row ">{nonTech}</div>
              <br />
              <h4 className="text-center">Content Writing</h4>

              <div className="row ">{nonTech}</div>
              <br />
              <h4 className="text-center">Marketing</h4>

              <div className="row ">{nonTech}</div>
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
