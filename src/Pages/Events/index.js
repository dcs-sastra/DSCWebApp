import React, { useState, useEffect } from "react";
import Events from "./Events";
import loader from "../../loader.gif";

const eventsPerPage = 5;
const EventMain = () => {
  const [events, setEvents] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [direction, setDirection] = useState("left")
  useEffect(() => {
    const loadData = async () => {
      let data = await fetch(`https://dscsastraapi.herokuapp.com/events`);
      let res = await data.json();
      console.log(res);
      setEvents(res);
    };
    loadData();
  }, []);
  const startIndex = eventsPerPage * (pageNo - 1);
  const endIndex = startIndex + eventsPerPage;
  const eventsRendered = events.slice(startIndex, endIndex);
  console.log(eventsRendered);
  const next = () => {
    if (pageNo * eventsPerPage < events.length) {
      console.log(pageNo * eventsPerPage,events.length)
      if(pageNo * eventsPerPage >= events.length-eventsPerPage)
      setDirection("right")
      else
      setDirection("center")
      setPageNo(pageNo + 1);
    }
  };
  const prev = () => {
    if (pageNo != 1) {
      if(pageNo==2)
      setDirection("left")
      else
      setDirection("center")
      setPageNo(pageNo - 1);
    }
  };
  if (events.length === 0) {
    return (
      <div className="loader">
        <img src={loader} />
      </div>
    );
  } else {
    return (
      <Events events={eventsRendered} page={pageNo} next={next} prev={prev} direction={direction}/>
      // <Events events={events} />
    );
  }
};

export default EventMain;
