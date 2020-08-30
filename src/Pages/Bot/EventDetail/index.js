import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const EventBotDetail = () => {

    const [event, setEvent] = useState({});
    const params = useParams(); 
    useEffect(() => {
        const loadData = () => {
        fetch(`https://dscsastraapi.herokuapp.com/events/${params.id}`)
            .then( res => res.json() )
            .then( data => setEvent(data))
        };
        loadData();
    }, []);

    const getJSON = () => {
        return JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            "name": event.name,
            "startDate": event.date,
            "eventStatus": "https://schema.org/EventScheduled",
            "eventAttendanceMode": "https://schema.org/OnlineEventAttendanceMode",
            "location": {
              "@type": "VirtualLocation",
              "url": event.register_link
              },
            "image": [
              event.poster
             ],
            "description": event.description,
            "performer": {
              "@type": "PerformingGroup",
              "name": event.speakers
            },
            "organizer": {
                "@type": "Organization",
                "name": "DSC SASTRA",
                "url": "https://dscsastra.com"
            }
          })
    }
    

    return (
        <script type="application/ld+json">
        {getJSON()}
        </script>
        <h1>{event.name}</h1>
        <p>{event.description}</p>
        <img src={event.poster} alt={event.name} />
         <h3>Performers</h3>
         <h4>{event.speakers}</h4>
    );
  
};

export default EventBotDetail;
