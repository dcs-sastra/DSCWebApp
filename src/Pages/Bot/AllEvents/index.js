import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const EventsBot = () => {

  const [events, setEvents] = useState([]);

    useEffect(() => {
        const loadData = () => {
        fetch(`https://dscsastraapi.herokuapp.com/events`)
            .then( res => res.json() )
            .then( data => setEvents(data))
        };
        loadData();
    }, []);

    const linksList = events.map((event) => {
        return (
            <li><Link key={ event.id } to={"/bot/event/" + event.id }>{event.name}</Link><li>
        )
    });

    return (
        <div>
          <header><h1>DSC SASTRA Events</h1></header>
            <ul>
              {linksList}
            </ul>
        </div>
    );
  
};

export default EventsBot;
