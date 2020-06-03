import React, { useState, useEffect } from "react";
import "./App.css";
import bg1 from "../../Backgrounds/BG_1.png";
import bg2 from "../../Backgrounds/BG_2.png";
import Cluster from "./Cluster";
import arrow from "../Logos/down-arrow.svg";
import loader from "../../loader.gif";
import Footer from "../Footer/Footer";

function getRandomNumber() {
  return parseInt(1 + Math.random() * 99);
}

const Teams = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("https://dscsastraapi.herokuapp.com/MembersbyCluster")
      .then((res) => res.json())
      .then((jsonData) => setData(jsonData[0]));
  }, [setData]);
  console.log(data);
  if (data == null) {
    return (
      <div className="loader">
        <img src={loader} />
      </div>
    );
  } else {
    return (
      <div className="App">
        <img src={bg1} className="bg1" />
        <img src={bg2} className="bg2" />
        <main className="jumbotron">
          <div className="quote-wrapper">
            <h1>Alone we do so little. Together we can change the world</h1>
            <h2>We are team DSC SASTRA </h2>
          </div>
          <a href="#main-team" className="scroller">
            <img src={arrow} />
          </a>
        </main>
        <main id="main-team">
          <section className="lead">
            <div>
              <img src={data.lead.imgUrl} style={{ width: "150px" }} />
              <h3>{data.lead.name}</h3>
              <p>{data.lead.role}</p>
            </div>
          </section>
          <section className="others">
            <Cluster
              name="android"
              img="android"
              color="green"
              right={true}
              id={0}
              data={data.app}
            />
            <Cluster
              name="web"
              img="coding"
              right={false}
              color="blue"
              id={1}
              data={data.web}
            />
            <Cluster
              name="machine learning"
              img="learning"
              color="yellow"
              right={true}
              id={2}
              data={data.ml}
            />

            <Cluster
              name="AR / VR"
              img="vr-glasses"
              right={false}
              color="red"
              id={3}
              data={data.arvr}
            />
            <Cluster
              name="Flutter"
              img="flutterio-icon"
              color="blue"
              right={true}
              id={4}
              data={data.flutter}
            />
            <Cluster
              name="Cloud"
              img="setting"
              right={false}
              color="yellow"
              id={5}
              data={data.cloud}
            />
            <Cluster
              name="Graphic Designing"
              img="tools"
              color="green"
              right={true}
              id={6}
              data={data.graphic}
            />
            <Cluster
              name="Content Writing"
              img="report"
              right={false}
              color="blue"
              id={7}
              data={data.content}
            />
            <Cluster
              name="Marketing"
              img="setting"
              color="red"
              right={true}
              id={8}
              data={data.marketing}
            />
            <Cluster
              name="Event Coverage"
              img="android"
              right={false}
              color="yellow"
              id={9}
              data={data.eventcoverage}
            />
          </section>
        </main>
        <br />
        <Footer />
      </div>
    );
  }
};

export default Teams;
