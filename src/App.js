import React, { Component } from 'react';
import {BrowserRouter} from 'react-router-dom';
import './App.css';
import Routes from './Components/Routes/Routes';
import Navbar from './Components/NavBar/Navbar';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <>
          <Navbar />
          <Routes />
          <div className="footer text-center">
                    © Copyrights Reserved
          </div>
        </>
      </BrowserRouter>
    );
  }
}

export default App;