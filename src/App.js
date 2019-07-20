import React, { Component } from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Home from './components/home'
import Navbar from './components/navbar'
import Team from './components/team/Team'
import Events from  './components/events/events'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Navbar />
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/team" component={Team} />
      <Route path="/events" component={Events} />
      </Switch>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;