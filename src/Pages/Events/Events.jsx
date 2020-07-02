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

function truncateString(str, len) {
  return (str.length <= len) 
            ? <span className="card-text">{str}</span> 
            : <span className="card-text">
                {str.slice(0, len-1) + "..."} <span className="more">(more)</span>
              </span>;
}

const MAX_DESCRIPTION_LENGTH = 150;

const Events = (props) => {
  const [modalState, setModal] = useState(false);
  const [selectedItem, setItem] = useState(false);
  let colorId = 0;
  let events =
    props.events != null
      ? props.events.map((event) => {
          colorId = colorId % 4;
          return (
            <div  className="card" 
                  key={event.id} 
                  onClick = {() => {
                    setItem({...event}); 
                    setModal(true)
                  }}
            >
              <h3 style={{ color: colors[colorId++] }}>{event.name}</h3>
              <p>{truncateString(event.description, MAX_DESCRIPTION_LENGTH)}</p>
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
        <div className="events-container">
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
            className={props.direction==="left" ? 'hide':''}
          />
          <PageNo>{props.page}</PageNo>
          <img
            src="https://img.icons8.com/ios/50/000000/long-arrow-right.png"
            onClick={props.next}
            id="right"
            className={props.direction==="right" ? 'hide':''}
          />
        </Pagination>
        <br />
      </div>
    );
  }
};

export default Events;
