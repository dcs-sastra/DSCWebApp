import React, { Component } from 'react';
import './contact.css'
const Contact = () =>
{
    return (
    <div style={{backgroundColor:"#f2eeed"}}>
        <div className="container">
            <div className="cont_body">
            <center><span className="about_head">Contact Us</span></center>
            <hr></hr>

            </div>

        </div>
        <form className="container form_body">
  <div class="form-group">
    <input type="email" class="form-control inp" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email" />
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <input type="password" class="form-control inp" id="exampleInputPassword1" placeholder="Password" />
  </div>

  <div class="form-group shadow-textarea">
  <textarea class="form-control z-depth-1 inp" rows="3" placeholder="Message"></textarea>
</div>

  <button type="button" class="btn btn-success">Send</button>
</form>

    </div>
    );
  }


export default Contact;