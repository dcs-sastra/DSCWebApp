import React, { Component } from 'react';
import './Landing.css';
import abstract1 from '../../assets/abstract1.svg';
import abstract2 from '../../assets/abstract2.svg';
import abstract3 from '../../assets/abstract3.svg';
import abstract4 from '../../assets/abstract4.svg';
import Typist from 'react-typist';
import 'react-typist/dist/Typist.css';


class Landing extends Component {
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
                <div className = 'clusters'>
                    <h3 className = 'text-center'>Clusters</h3>
                    <div className="divider2"></div>
                    <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12">
    <div class="hovereffect">
        <img class="img-responsive" src="http://placehold.it/316x195" alt=""/>
            <div class="overlay">
                <p>
                    <a>Hello</a>
                </p>
            </div>
    </div>
</div>

                </div>
            </div>
        );
    }
}

export default Landing;