import React from "react";
import "./modal.css";

function formatedDate(raw) {
  raw = raw.split("T")[0];
  let date = new Date(raw);
  console.log(date);
  let options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  };
  return date.toLocaleString("en-IN", options);
}

const Modal = ({ isOpen, closeModal, data }) => {
  if (isOpen === true) {
    return (
      <div className="modal-wrapper">
        <div className="modal-bg" onClick={closeModal}></div>
        <div className="modal-body-wrapper">
          <div className="modal-body">
            <button className="close" onClick={closeModal}> ✕ </button>
            <div className="content"> 
              <h3 className="yellow-text">{data.name}</h3>
              <div>{data.main}</div>
              <br />
              <div>{data.description}</div>
              <div className="other-info">
                { data.speakers && 
                  <span>
                    Speakers: <span className="red-text">{data.speakers}</span>
                  </span>
                }
                <span>
                  Date :{" "}
                  <span className="green-text">{formatedDate(data.date)}</span>
                </span>
              </div>
              <a href={data.register_link} target="_blank" className="learn-more">
                Register
              </a>
            </div>
            <div className="poster-wrapper">
              <img src={data.poster} className="poster" />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
};

export default Modal;
