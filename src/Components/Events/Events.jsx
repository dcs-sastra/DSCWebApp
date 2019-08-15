import React, { Component } from "react";
import "./Events.css";
import list from "../../Store.js";
import task from "../../assets/menu.svg";

function importAll(r) {
  let images = {};
  r.keys().map(item => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const eventPoster = importAll(
  require.context("../../assets/posters", false, /\.(png|jpe?g|svg)$/)
);

export default class Events extends Component {
  state = {
    tempId: 0
  };

  modalPasser = e => {
    this.setState({
      tempId: e.target.id
    });
  };

  render() {
    let events = list.events.map((data, id) => {
      return (
        <div className="cd-timeline-block" key={id}>
          <div className="cd-timeline-img cd-picture">
            <img src={task} alt="" />
          </div>
          <div className="cd-timeline-content">
            <h2 className="heading">{data.name}</h2>
            <p>
              <b>Venue: </b>
              {data.venue}
            </p>
            <p>{data.description}</p>
            <hr />
            <div className="card_footer">
              <p>
                <b>Speakers: </b>
                {data.speakers}
              </p>
              <button
                type="button"
                className="load_more_button"
                id={data.id}
                data-toggle="modal"
                data-target="#myModal"
                onClick={this.modalPasser}
              >
                Learn More..{" "}
              </button>
            </div>

            <span className="cd-date">{data.date}</span>
          </div>
        </div>
      );
    });
    return (
      //   <div>
      //     <h3 className="text-center">
      //       functions() of DSC; these are absolutely public
      //     </h3>
      //     <br />
      //     <div class="Body timeline">
      //       {list.events.map(data => (
      //         <div className={data.id % 2 === 0 ? this.side[0] : this.side[1]}>
      //           <div className="content">
      //             <h2>{data.name}</h2>
      //             <h4>
      //               {data.date} : {data.venue}
      //             </h4>
      //             <p>{data.description}</p>
      //             <button
      //               type="button"
      //               className="load_more_button"
      //               id={data.id}
      //               data-toggle="modal"
      //               data-target="#myModal"
      //               onClick={this.modalPasser}
      //             >
      //               Learn more..
      //             </button>
      //           </div>

      //       </div>
      //     ))}
      //   </div>
      // </div>
      <div className="section-wrapper">
        <h3 className="text-center">
          functions() of DSC; These are absolutely public
        </h3>
        <div className="divider"></div>
        <section id="cd-timeline" className="cd-container">
          {events}
        </section>
        <div className="container">
          <div className="modal fade" id="myModal">
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="modal-title">
                    {list.events[this.state.tempId].name}
                  </h4>
                  <button type="button" className="close" data-dismiss="modal">
                    &times;
                  </button>
                </div>

                <div className="modal-body">
                  <h5>Speaker(s): {list.events[this.state.tempId].speakers}</h5>
                  <div>
                  <img 
                    src = {eventPoster[`${list.events[this.state.tempId].poster}`]}
                    alt="..." className = "event_poster"
                  />
                  </div>
                  {list.events[this.state.tempId].main}
                </div>

                <div className="modal-footer">
                  <a
                    className="btn btn-danger"
                    href={list.events[this.state.tempId].register_link}
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
