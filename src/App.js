import React, { useState } from "react";
import "./App.css";
import android from "./android.svg";
import bg1 from "./Backgrounds/BG_1.png";
import bg2 from "./Backgrounds/BG_2.png";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const clusters = importAll(
  require.context("./clusters", false, /\.(png|jpe?g|svg)$/)
);

function getRandomNumber() {
  return parseInt(1 + Math.random() * 99);
}

const App = () => {
  const thumbs = [];
  for (let i = 0; i <= 6; i++) {
    let num = getRandomNumber();
    thumbs.push(
      <img src={`https://randomuser.me/api/portraits/men/${num}.jpg`} />
    );
  }

  const android_members = "";

  const [clusterState, setClusterState] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false
  ]);

  const handleClusterClick = id => {
    console.log(clusterState);
    let newClusterState = clusterState.slice();
    newClusterState[id] = !newClusterState[id];
    setClusterState(newClusterState);
  };
  return (
    <div className="App">
      <img src={bg1} className="bg1" />
      <img src={bg2} className="bg2" />
      <nav>
        <h3>DSC SASTRA</h3>
      </nav>
      <main>
        <section className="lead">
          <div>
            <img
              src={`https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`}
              style={{ width: "100px" }}
            />
            <h3>Kavin Raju S</h3>
            <p>Lead</p>
          </div>
        </section>
        <section className="others">
          <div className="cluster" onClick={() => handleClusterClick(0)}>
            <section className="green">
              <h3>Android</h3>
              <div className="thumbs">{thumbs}</div>
              {clusterState[0] && (
                <div className="drawer">{android_members}</div>
              )}
            </section>
            <h3>Android</h3>
            <img src={clusters["android.svg"]} />
          </div>
          <div className="cluster">
            <img src={clusters["coding.svg"]} />
            <h3>Web</h3>
            <section className="blue">
              <h3>Web</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
          </div>
          <div className="cluster">
            <section className="yellow">
              <h3>Machine Learning</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
            <h3>Machine Learning</h3>
            <img src={clusters["learning.svg"]} />
          </div>
          <div className="cluster">
            <img src={clusters["vr-glasses.svg"]} />
            <h3>AR / VR</h3>
            <section className="red">
              <h3>AR / VR</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
          </div>
          <div className="cluster">
            <section className="blue">
              <h3>Flutter</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
            <h3>Flutter</h3>
            <img src={clusters["flutterio-icon.svg"]} />
          </div>
          <div className="cluster">
            <img src={clusters["setting.svg"]} />
            <h3>Cloud</h3>
            <section className="yellow">
              <h3>Cloud</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
          </div>
          <div className="cluster">
            <section className="green">
              <h3>Graphic Designing</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
            <h3>Graphic Designing</h3>
            <img src={clusters["tools.svg"]} />
          </div>
          <div className="cluster">
            <img src={clusters["report.svg"]} />
            <h3>Content Writing</h3>
            <section className="blue">
              <h3>Content Writing</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
          </div>
          <div className="cluster">
            <section className="red">
              <h3>Marketing</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
            <h3>Marketing</h3>
            <img src={clusters["setting.svg"]} />
          </div>
          <div className="cluster">
            <img src={android} />
            <h3>Event Coverage</h3>
            <section className="yellow">
              <h3>Event Coverage</h3>
              <div className="thumbs">{thumbs}</div>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;
