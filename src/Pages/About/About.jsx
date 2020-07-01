import React from "react";
import Contact from "./Contact";
import "./about.css";
import arrow from "../Logos/down-arrow.svg";
import styled from "styled-components";
import grow from "../Logos/grow.svg";
import learn from "../Logos/learn.svg";
import connect from "../Logos/connect.svg";

const AboutUs = styled.div`
  font-size: 2em;
  width: 80%;
  padding: 10vh 0;
  margin: auto;
  @media (max-width: 768px) {
    font-size: 1.5em;
  }
`;

const Principles = styled.div`
  padding: 7vh 10%;
  background-color: #f1f1f1;
  display: grid;
  grid-template-columns: auto auto auto;
  justify-content: space-evenly;
  grid-column-gap: 5%;
  @media (max-width: 768px) {
    padding: 7vh 5%;
    grid-template-columns: auto;
    grid-template-rows: auto auto auto;
    grid-row-gap: 5vh;
  }
`;

const Principle = styled.div`
  & > h2 {
    color: black;
    text-align: left;
    margin: 10px 0;
  }
`;

const PrincipleIcon = styled.div`
  background-color: #4285f4;
  border-radius: 50%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const principle = (icon, title, text) => (
  <Principle>
    <PrincipleIcon>
      <img src={icon} width="35px" />
    </PrincipleIcon>
    <h2>{title}</h2>
    <p>{text}</p>
  </Principle>
);

const About = () => {
  return (
    <div>
      <main className="jumbotron">
        <div className="quote-wrapper">
          <h1>Alone we do so little. Together we can change the world</h1>
          <h2>We are team DSC SASTRA </h2>
        </div>
        <a href="#about" className="scroller">
          <img src={arrow} />
        </a>
      </main>

      <AboutUs id="about">
        We are the team behind DSC SASTRA. We are a proud community of passionate
        programmers who continuously strive to both improve ourselves and also 
        help others in their programming endavours. We aim to foster an inclusive
        society wherein our beloved members have an opportunity to Network, Learn 
        and Grow as both individuals and a team.
      </AboutUs>

      <Principles>
        {principle(
          connect,
          "Connect",
          "  Meet other students on campus interested in developer technologies. All are welcome, including those with diverse backgrounds and different majors."
        )}
        {principle(
          learn,
          "Learn",
          "  Learn about a wide range of technical topics where new skills are gained through hands-on workshops, in-person training and project building activities"
        )}
        {principle(
          grow,
          "Grow",
          "  Apply your new learnings and connections to build great solutions for local problems. Advance your skills, career and network. Give back to your community by helping others learn as well."
        )}
      </Principles>
      <Contact />
    </div>
  );
};
export default About;
