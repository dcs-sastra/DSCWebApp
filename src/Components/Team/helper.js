import React from "react";
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

export const Tech = name => {
  let array = [];
  let iterator = 0;
  for (let i = 1; i <= 6; i++) {
    for (let j = 1; j <= i; j++) {
      let person = data.teams[`${name}`][iterator++];
      if (person) {
        let url = person.imgUrl;
        let name = person.name;
        let jsx = (
          <div className="user-card" key={iterator}>
            <div className="front-side">
              <img src={profileImage[`${url}.jpg`]} alt="" />
              <h6>{name}</h6>
              <span className="social">
                <a href="https://linkedin.com" className="fab fa-linkedin"></a>
                <a className="fab fa-github"></a>
                <a className="fas fa-basketball-ball"></a>
              </span>
            </div>
          </div>
        );
        array.push(jsx);
      }
    }
    array.push(
      <>
        <br id={iterator} />
      </>
    );
  }
  return array;
};

export const nonTech = name => {
  return data.teams.nonTech[`${name}`].map((person, id) => {
    return (
      <div className="col-4 text-center non_tech" key={id}>
        <img
          src={profileImage[`${person.imgUrl}.jpg`]}
          alt=""
          className="team_members"
        />
        <p>{person.name}</p>
        <span className="social nontech_social">
          <a href="https://linkedin.com" className="fab fa-linkedin"></a>
          <a href="https://github.com" className="fab fa-github"></a>
          <a href="https://dribble.com" className="fas fa-basketball-ball"></a>
        </span>
      </div>
    );
  });
};
