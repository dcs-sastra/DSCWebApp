import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <h4>Hello World!</h4>
      </BrowserRouter>
    );
  }
}

export default App;