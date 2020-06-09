import React, { useState } from "react";
import "./Events.css";
import Model from "./Event_Modal";
import Background from "./Background";
import styled from "styled-components";
const colors = ["#4285f4", "#db4437", "#f4b400", "#0f9d58"];

const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const PageNo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 800;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  color: white;
  background-color: ${colors[2]};
`;

const Events = (props) => {
  const [modalState, setModal] = useState(false);
  const [selectedItem, setItem] = useState(false);
  let colorId = 0;
  let events =
    props.events != null
      ? props.events.map((event) => {
          colorId = colorId % 4;
          return (
            <div className="card" key={event.id}>
              <h2 style={{ color: colors[colorId++] }}>{event.name}</h2>
              <p>{event.description}</p>
              <button
                className="learn-more"
                onClick={() => {
                  setItem({ ...event });
                  setModal(true);
                }}
              >
                Learn More
              </button>
            </div>
          );
        })
      : "";

  if (props.events === null) {
    return <h5>Loading.....</h5>;
  } else {
    return (
      <div className="event-wrapper">
        <Background />
        <div className="container">
          <h1 className="event-title"> Our Events</h1>
          <div className="cards-wrapper">{events}</div>
        </div>
        <Model
          isOpen={modalState}
          closeModal={() => {
            setModal(false);
            setItem(null);
          }}
          data={selectedItem}
        />
        <Pagination>
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-left.png"
            onClick={props.prev}
          />
          <PageNo>{props.page}</PageNo>
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"
            onClick={props.next}
          />
        </Pagination>
        <br />
      </div>
    );
  }
};

export default Events;
