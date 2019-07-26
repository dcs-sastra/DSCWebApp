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
                        <Typist >
                        <div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$   &nbsp; We code
                        </div>
                        <div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  &nbsp;  We Organise
                        </div><div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  &nbsp;  We Learn
                        </div><div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  &nbsp;  We Teach
                        </div><div>
                        <span className = 'terminal_root_user'>dsc@sastra:</span><span>~/</span>$  &nbsp;  We are team DSC!
                        </div>
                        </Typist>
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
                {/* <div className = 'clusters'>
                    <h3 className = 'text-center'>Clusters</h3>
                    <div className="divider2"></div>
                    <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'col-md-3'>
                            <div className="image_overlay">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="http://placehold.it/316x195" alt=""/>
                                        <div className="overlay">
                                            <h2>Web</h2>
                                            <p>
                                                <a href = '#'>
                                                    <i>Click to know more</i>
                                                </a>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-md-3'>
                            <div className="image_overlay">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="http://placehold.it/316x195" alt=""/>
                                        <div className="overlay">
                                            <h2>Web</h2>
                                            <p>
                                                <a href = '#'>
                                                    <i>Click to know more</i>
                                                </a>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-md-3'>
                            <div className="image_overlay">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="http://placehold.it/316x195" alt=""/>
                                        <div className="overlay">
                                            <h2>Web</h2>
                                            <p>
                                                <a href = '#'>
                                                    <i>Click to know more</i>
                                                </a>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className = 'col-md-3'>
                            <div className="image_overlay">
                                <div className="hovereffect">
                                    <img className="img-responsive" src="http://placehold.it/316x195" alt=""/>
                                        <div className="overlay">
                                            <h2>Web</h2>
                                            <p>
                                                <a href = '#'>
                                                    <i>Click to know more</i>
                                                </a>
                                            </p>
                                        </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                    
                    </div>
                </div> */}
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