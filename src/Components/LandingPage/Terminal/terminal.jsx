import React, { Component } from "react";
import Typist from "react-typist";
import abstract1 from "../../../assets/abstract1.svg";
import abstract2 from "../../../assets/abstract2.svg";
import abstract3 from "../../../assets/abstract3.svg";
import abstract4 from "../../../assets/abstract4.svg";
import "./terminal.css";
import "react-typist/dist/Typist.css";

class Terminal extends Component {
  state = {
    typerLine: 0
  };
  incrementLine = () => {
    this.setState({
      typerLine: this.state.typerLine + 1
    });
  };
  render() {
    return (
      <>
        <div className="abstract__wrapper">
          <img src={abstract1} alt="" className="landing__abstract" />
          <img src={abstract2} alt="" className="landing__abstract" />
          <img src={abstract3} alt="" className="landing__abstract" />
          <img src={abstract4} alt="" className="landing__abstract" />
        </div>
        <div className="jumbotron__wrapper text-center">
          <div>
            <h1>Some attractive caption!</h1>
            <h6>By line comes here</h6>
          </div>
        </div>
        <div className="terminal">
          <div className="terminal_menu">
            <span>
              <i className="fas fa-times"></i>
            </span>
            <span>
              <i className="far fa-window-maximize"></i>
            </span>
            <span>
              <i className="fas fa-window-minimize"></i>
            </span>
            <p>Terminal</p>
          </div>
          <div className="terminal_content container">
            <div>
              <span className="terminal_root_user">dsc@sastra:</span>
              <span>~/</span>${" "}
              <Typist
                className="terminal_typing"
                onTypingDone={this.incrementLine}
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={50}
              >
                {" "}
                &nbsp; We code{" "}
              </Typist>
            </div>
            {this.state.typerLine >= 1 && (
              <div>
                <span className="terminal_root_user">dsc@sastra:</span>
                <span>~/</span>${" "}
                <Typist
                  className="terminal_typing"
                  onTypingDone={this.incrementLine}
                  cursor={{ hideWhenDone: true }}
                  avgTypingDelay={50}
                >
                  {" "}
                  &nbsp; We Organise{" "}
                </Typist>
              </div>
            )}
            {this.state.typerLine >= 2 && (
              <div>
                <span className="terminal_root_user">dsc@sastra:</span>
                <span>~/</span>${" "}
                <Typist
                  className="terminal_typing"
                  onTypingDone={this.incrementLine}
                  cursor={{ hideWhenDone: true }}
                  avgTypingDelay={50}
                >
                  {" "}
                  &nbsp; We Learn{" "}
                </Typist>
              </div>
            )}
            {this.state.typerLine >= 3 && (
              <div>
                <span className="terminal_root_user">dsc@sastra:</span>
                <span>~/</span>${" "}
                <Typist
                  className="terminal_typing"
                  onTypingDone={this.incrementLine}
                  cursor={{ hideWhenDone: true }}
                  avgTypingDelay={50}
                >
                  {" "}
                  &nbsp; We Teach{" "}
                </Typist>
              </div>
            )}
            {this.state.typerLine >= 4 && (
              <div>
                <span className="terminal_root_user">dsc@sastra:</span>
                <span>~/</span>${" "}
                <Typist
                  className="terminal_typing"
                  onTypingDone={this.incrementLine}
                  avgTypingDelay={50}
                >
                  {" "}
                  &nbsp; We are team DSC!{" "}
                </Typist>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}

export default Terminal;
