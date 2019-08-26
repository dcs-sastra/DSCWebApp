import React, { Component } from "react";
import "./Contact.css";

class ContactUs extends Component {
  state = {
    email: "",
    phone: "",
    message: ""
  };
  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch('https://dscsastra.herokuapp.com/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    });
    this.setState({
      email: "",
      phone: "",
      message: ""
    });
  };
  render() {
    return (
      <>
        <div className="contact_us" id="contact">
          <div className="container">
            <br />
            <br />
            <h3 className="text-center">Contact Us</h3>
            <div className="divider cluster_divider"></div>
            <div>
              <form className="container form_body">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control inp"
                    id="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control inp"
                    id="phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group shadow-textarea">
                  <textarea
                    className="form-control z-depth-1 inp"
                    id="message"
                    rows="3"
                    placeholder="Message"
                    value={this.state.message}
                    onChange={this.handleChange}
                  ></textarea>
                </div>
                <button
                  type="button"
                  className="btn btn-success send_btn"
                  onClick={this.handleSubmit}
                >
                  Send
                </button>
              </form>
              <br />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ContactUs;
