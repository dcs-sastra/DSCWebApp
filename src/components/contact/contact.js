import React, { Component } from 'react';
import './contact.css'
class Contact extends Component
{

  state = {
    email:'',
    phone:'',
    message:''
  }
  handleChange = (e) =>
  {
    this.setState({
      [e.target.id] : e.target.value
    })
    
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
    this.setState({
      email:'',
      phone:'',
      message:''
    })
  }

  render()
  {
    return (
    <div style={{backgroundColor:"#c2c2a3"}}>
        <div className="container">
            <div className="cont_body">
            <center><span className="about_head">Contact Us</span></center>
            <hr></hr>

            </div>

        </div>
        <form className="container form_body">
  <div class="form-group">
    <input type="email" class="form-control inp" id="email"  placeholder="Email" value={this.state.email} onChange={this.handleChange}/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <input type="text" class="form-control inp" id="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange}/>
  </div>

  <div class="form-group shadow-textarea">
  <textarea class="form-control z-depth-1 inp" id="message" rows="3" placeholder="Message" value={this.state.message} onChange={this.handleChange}></textarea>
</div>

  <button type="button" class="btn btn-success" onClick={this.handleSubmit}>Send</button>
</form>

    </div>
    );
  }
}


export default Contact;