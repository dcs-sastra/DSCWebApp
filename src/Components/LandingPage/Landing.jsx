import React, { Component } from 'react';
import './Landing.css';
import abstract1 from '../../assets/abstract1.svg';
import abstract2 from '../../assets/abstract2.svg';
import abstract3 from '../../assets/abstract3.svg';
import abstract4 from '../../assets/abstract4.svg';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


class Landing extends Component {
    state = {
        email:'',
        phone:'',
        message:'',
        typerLine: 0
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
      incrementLine = () => {
          this.setState({
              typerLine: this.state.typerLine + 1
          });
      }
    render() {
        return (
            <div className = 'landing_cover'>
                <div className = 'abstract__wrapper'>
                    <img src={abstract1} alt="" className = 'landing__abstract'/>
                    <img src={abstract2} alt="" className = 'landing__abstract'/>
                    <img src={abstract3} alt="" className = 'landing__abstract'/>
                    <img src={abstract4} alt="" className = 'landing__abstract'/>
                </div>
                <div className = "jumbotron__wrapper text-center">
                    <div>
                    <h1>Some attractive caption!</h1>
                    <h6>By line comes here</h6>
                    </div>
                </div>
                <div className = "terminal">
                    <div className = 'terminal_menu'>
                        <span><i className="fas fa-times"></i></span>
                        <span><i className="far fa-window-maximize"></i></span>
                        <span><i className="fas fa-window-minimize"></i></span>
                        <p>Terminal</p>
                    </div>
                    <div className = 'terminal_content container'>
                        <div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  <Typist className = 'terminal_typing' onTypingDone = {this.incrementLine} cursor={{ hideWhenDone: true }} avgTypingDelay={50}> &nbsp; We code </Typist>
                        </div>
                        {this.state.typerLine >= 1 && <div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  <Typist className = 'terminal_typing' onTypingDone = {this.incrementLine} cursor={{ hideWhenDone: true }} avgTypingDelay={50}> &nbsp; We Organise </Typist>
                        </div>}
                        {this.state.typerLine >= 2 &&<div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  <Typist className = 'terminal_typing' onTypingDone = {this.incrementLine} cursor={{ hideWhenDone: true }} avgTypingDelay={50}> &nbsp; We Learn </Typist>
                        </div>}
                        {this.state.typerLine >= 3 &&<div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  <Typist className = 'terminal_typing' onTypingDone = {this.incrementLine} cursor={{ hideWhenDone: true }} avgTypingDelay={50}> &nbsp; We Teach </Typist>
                        </div>}
                        {this.state.typerLine >= 4 && <div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  <Typist className = 'terminal_typing' onTypingDone = {this.incrementLine} avgTypingDelay={50}> &nbsp; We are team DSC! </Typist>
                        </div>}
                    </div>
                </div>
                <div className = 'about__dsc'>
                    <div className = "container">
                        <br/><br/>
                        <h3 className ='text-center'>About Developer Students Club</h3>
                        <div className = 'divider'></div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam rerum voluptate minus eaque provident adipisci, ducimus fugiat dignissimos necessitatibus quod a laboriosam saepe, culpa fuga dolorum, sapiente aliquid veniam molestiae.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam minus asperiores incidunt voluptatem, aliquid iusto natus placeat, at maxime eius harum tempore suscipit beatae praesentium saepe est eveniet officiis vel.
                        </p>
                    </div>
                </div>
                {/* Clusters */}
                <div className = 'clusters'>
                    <div className="container">
                        <h3 className ='text-center'>Clusters</h3>
                        <div className = 'divider'></div>
                    </div>
                </div>
                {/* Contact Us */}
                <div className = 'contact_us' id = 'contact'>
                    <div className = 'container'>
                    <br/><br/>
                        <h3 className ='text-center'>Contact Us</h3>
                        <div className = 'divider'></div>
                        <div>
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
                                    <button type="button" class="btn btn-success send_btn" onClick={this.handleSubmit}>Send</button>
                            </form>
                            <br/>
                        </div>

                    </div>
                </div>
                <div className = 'Landing__address container'>
                    <br/>
                    <h4>DSC SASTRA - Powered By Google </h4>
                    Sastra Deemed to be University,<br/>
                    Thanjavur,<br/>
                    Tamil Nadu
                </div>
                
            </div>
        );
    }
}

export default Landing;