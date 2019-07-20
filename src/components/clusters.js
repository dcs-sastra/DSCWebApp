import React, { Component } from 'react';
import web from '../images/web.jpg';

const About = () =>
{
    return (
        <div className="container">
            <center><span className="about_head">Clusters</span></center>
        <hr />
  
        <div class="d-flex flex-row bd-highlight mb-3">
            <div style={{paddingRight:"5%"}}><img class="img-fluid inp" src={web}/></div>
            <div style={{paddingRight:"5%"}}><img class="img-fluid inp" src={web}/></div>
            <div style={{paddingRight:"5%"}}><img class="img-fluid inp" src={web}/></div>

        </div>


        </div>
    );
  }


export default About;