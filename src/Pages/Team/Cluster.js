import React, { useState } from "react";
import "./cluster.css";
import git from "../Logos/github.svg";
import linkedin from "../Logos/linkedin.svg";

function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const clusters = importAll(
  require.context("../../clusters", false, /\.(png|jpe?g|svg)$/)
);

function getRandomNumber() {
  return parseInt(1 + Math.random() * 99);
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const Cluster = (props) => {
  const [clusterState, setClusterState] = useState(false);
  const handleClusterClick = () => {
    setClusterState(!clusterState);
  };
  const thumbs = props.data.map((person) => (
    <img
      key={person._id}
      src={
        person.imgUrl === ""
          ? `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`
          : person.imgUrl
      }
    />
  ));
  const width = window.screen.width;
  const members = props.data.map((person) => (
    <div key={person._id} className="member">
      <img
        src={
          person.imgUrl === ""
            ? `https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`
            : person.imgUrl
        }
      />
      <p>{person.name}</p>
      <div className="social">
        <a href={person.github} target="_blank">
          <img src={git} />
        </a>
        <a href={person.linkedin} target="_blank">
          <img src={linkedin} />
        </a>
      </div>
    </div>
  ));

  const newStyles = {
    flexFlow: clusterState ? "column" : "",
  };
  const sectionStyle = {
    width: clusterState ? "40%" : "",
    height: clusterState ? "8vh" : "",
  };
  let title = "";
  if (width < 600) {
    title = <h3>{capitalizeFirstLetter(props.name)}</h3>;
  } else if (clusterState == true) {
    title = <h3>{capitalizeFirstLetter(props.name)}</h3>;
  } else {
    title = "";
  }
  if (props.right) {
    return (
      <div
        className="cluster"
        onClick={() => handleClusterClick(0)}
        style={newStyles}
        id={capitalizeFirstLetter(props.name).split(" ").join("_")}
      >
        <section className={props.color} style={sectionStyle}>
          {title}
          <div className="thumbs">{!clusterState && thumbs}</div>
        </section>
        {!clusterState && <h3>{capitalizeFirstLetter(props.name)}</h3>}
        {!clusterState && <img src={clusters[`${props.img}.svg`]} />}
        {clusterState && <div className="drawer">{members}</div>}
      </div>
    );
  } else {
    return (
      <div
        className="cluster"
        onClick={() => handleClusterClick(0)}
        style={newStyles}
        id={capitalizeFirstLetter(props.name).split(" ").join("_")}
      >
        {!clusterState && <img src={clusters[`${props.img}.svg`]} />}
        {!clusterState && <h3>{capitalizeFirstLetter(props.name)}</h3>}
        <section className={props.color} style={sectionStyle}>
          {title}
          <div className="thumbs">{!clusterState && thumbs}</div>
        </section>
        {clusterState && <div className="drawer">{members}</div>}
      </div>
    );
  }
};

export default Cluster;
