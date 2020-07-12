import React, { useEffect } from "react";
import { TwitterTimelineEmbed } from "react-twitter-embed";
import Terminal from "./Terminal";
import path1 from "../../Backgrounds/P1.svg";
import path2 from "../../Backgrounds/P2.svg";
import path3 from "../../Backgrounds/P3.svg";
import styled from "styled-components";
import clusters from "./data";
import ContactUs from "./ContactUs";

const BG1 = styled.img`
  position: absolute;
  width: 130vw;
  left: 50%;
  top: 10vh;
  z-index: -10;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    top: 2vh;
    width: 200vw;
  }
`;

const BG2 = styled.img`
  position: absolute;
  width: 120vw;
  left: 50%;
  z-index: -10;
  top: 50vh;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    top: 40vh;
    width: 200vw;
  }
`;
const BG3 = styled.img`
  position: absolute;
  left: 50%;
  z-index: -10;
  top: 55vh;
  transform: translate(-50%, -50%);
  @media (max-width: 768px) {
    top: 40vh;
    width: 200vw;
  }
`;
const BG4 = styled.img`
  position: absolute;
  left: -20vw;
  z-index: -10;
  top: 0;
  width: 80%;
  @media (max-width: 768px) {
    top: 10vh;
    width: 200vw;
  }
`;
const Section = styled.section`
  position: relative;
  height: 91vh;
  display: ${(props) => (props.sm ? "none" : "flex")};
  @media (max-width: 768px) {
    display: ${(props) => (props.sm ? "block" : "")};
  }
`;

const Card = styled.div`
  background-color: white;
  width: 50%;
  margin: auto auto;
  border-radius: 30px;
  position: relative;
  box-shadow: 1px 1px 15px var(--shadow-grey);
  @media (max-width: 768px) {
    width: 90%;
    padding-top: 20px;
  }
`;

const Title = styled.div`
  background-color: var(--green);
  padding: 5px 10px;
  width: 100%;
  max-width: ${(props) => (props.width ? props.width : "400px")};
  position: absolute;
  top: 0px;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 200px;
  color: white;
  text-align: center;
  font-size: 1.2rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  text-align: center;
  width: 80%;
  margin: 7% auto;
  line-height: 1.7;
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 10% auto;
  & > input,
  textarea {
    margin: 10px;
    border-radius: 30px;
    outline: none;
    border: 1px solid #c9c9c9;
    padding: 15px 20px;
    font-size: 20px;
  }

  & > button {
    width: 20%;
    background-color: var(--green);
    color: white;
    font-size: 20px;
    padding: 10px;
    border-radius: 100px;
    outline: none;
    border: 1px solid var(--green);
    margin-left: auto;
    margin-right: 1%;
  }
  @media (max-width: 768px) {
    width: 90%;
    & > button {
      width: 70%;
      margin: 0 auto;
    }
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  align-items: center;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  width: 90%;
  margin: 0 auto;
`;

const ClusterCard = styled.div`
  background-color: white;
  width: 100%;
  min-width: 240px;
`;

const TwitterAndContact = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-space-evenly;
  align-items: center;
  width: 100%;
  min-height: 91vh;
  margin-bottom: 10vh;
`;
const TwitterFeed = styled.div`
  margin: 0 auto;
  width: 40%;
  height: 520px;
  box-shadow: 1px 1px 15px var(--shadow-grey);
  border-radius: 10px;
  @media (max-width: 768px) {
    margin: 0 auto;
    margin-top: 10vh;
    width: 90%;
  }
`;

const Home = () => {
  const clusterData = clusters.map((cluster, id) => {
    if (cluster) {
      return (
        <div key={id}>
          <a href={cluster.link}>
            <div className=" cluster_card">
              <img src={clusters[`${cluster.img}`]} alt="" />
              <div className={`card-overlay ${cluster.backgroundColor}`}>
                <div className="card-info ">{cluster.name}</div>
              </div>
            </div>
          </a>
        </div>
      );
    }
  });
  return (
    <>
      <Section>
        <BG1 src={path1} width="100%" />
        <Terminal />
      </Section>
      <Section id="about">
        <BG2 src={path2} width="100%" />
        <Card>
          <Title width="250px">About Us</Title>
          <Paragraph>
            Developer Student Clubs is a community where everyone is welcome. We
            help students bridge the gap between theory and practice and grow
            their knowledge by providing a peer-to-peer learning environment, by
            conducting workshops, study jams and building solutions for local
            businesses. Developer Student Clubs is a program supported by Google
            Developers.
          </Paragraph>
        </Card>
      </Section>
      <br />
      <TwitterAndContact id="contact">
        <BG3 src={path3} width="100%" />
        <ContactUs />

        <TwitterFeed>
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="dsc_sastra"
            options={{ height: 520, width: 1000 }}
          />
        </TwitterFeed>
      </TwitterAndContact>
    </>
  );
};

export default Home;
