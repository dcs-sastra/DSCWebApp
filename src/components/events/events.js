import React, { Component } from 'react';
import list from './events.json'

class Events extends Component {

  render() {

    return (
        <div>
            <center><h1>Events</h1></center>
            {list.map(data=><div>
                <h1>{data.name}</h1>
                <p>{data.description}</p>
                <i>{data.date}</i>
                </div>)}
        </div>
    );
  }
}

export default Events;