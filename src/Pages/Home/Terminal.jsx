import React, { useState } from "react";
import "react-typist/dist/Typist.css";
import Typist from "react-typist";
import "./terminal.css";
import { HashLink as Link } from "react-router-hash-link";

function Terminal() {
  const [tab, setTab] = useState(0);
  return (
    <>
      <div className="terminal-wrapper">
        <div className="terminal-header">
          <div className="terminal-btns">
            <span className="terminal-red-btn"></span>
            <span className="terminal-yellow-btn"></span>
            <span className="terminal-green-btn"></span>
          </div>
          <div className="terminal-header-title">dscsastra.project</div>
        </div>
        <div className="terminal-body">
          <div className="terminal-body-sidebar">
            <div className="terminal-sidebar-block">
              <p className="text-bold">dscsastra.project</p>
              <div className="terminal-sidebar-content">
                <a href="#" onClick={() => setTab(0)}>
                  functions
                </a>
                <a href="#" onClick={() => setTab(2)}>
                  powered by
                </a>
              </div>
            </div>
            <div className="terminal-sidebar-block">
              <p className="text-bold">Teams</p>
              <div className="terminal-sidebar-content">
                <Link to="/teams#Android">android</Link>
                <Link to="/teams#Web">web</Link>
                <Link to="/teams#Flutter">flutter</Link>
                <Link to="/teams#Cloud">cloud</Link>
                <Link to="/teams#Machine_learning">machine learning</Link>
                <Link to="/teams#AR_/_VR">ar / vr</Link>
                <Link to="/teams#Graphic_Designing">graphic designing</Link>
                <Link to="/teams#Content_Writing">content writing</Link>
                <Link to="/teams#Marketing">marketing</Link>
                <Link to="/teams#Event_Coverage">event coverage</Link>
              </div>
            </div>
          </div>
          <div className="terminal-body-workspace">
            {tab === 0 ? (
              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={50}
                key={"rtuyijgug"}
              >
                <div className="pl-1">
                  class <span className="terminal-blue-text">DSC</span> {"{"}
                </div>
                <div className="pl-2"> public: </div>
                <div className="pl-3">
                  <span className="terminal-blue-text">void</span>{" "}
                  functions(params) {"{"}
                </div>
                <div className="pl-4">we_code();</div>
                <div className="pl-4">we_organise();</div>
                <div className="pl-4">we_learn();</div>
                <div className="pl-4">we_teach();</div>
                <div className="pl-4">
                  printf(
                  <span className="terminal-green-text">
                    "We are Team DSC SASTRA"
                  </span>
                  );
                </div>
                <div className="pl-3">{"}"}</div>
                <div className="pl-1">{"}"}</div>
              </Typist>
            ) : (
              <Typist
                cursor={{ hideWhenDone: true }}
                avgTypingDelay={50}
                key={"asddasafsd"}
              >
                <div className="pl-1">
                  class <span className="terminal-blue-text">DSC</span> {"{"}
                </div>
                <div className="pl-2"> public: </div>
                <div className="pl-3">
                  <span className="terminal-blue-text">void</span>{" "}
                  powered_by(params) {"{"}
                </div>
                <div className="pl-4">
                  printf(
                  <span className="terminal-green-text">
                    "Google Developers"
                  </span>
                  );
                </div>
                <div className="pl-3">{"}"}</div>
                <div className="pl-1">{"}"}</div>
              </Typist>
            )}
          </div>
          <div className="terminal-body-output">
            <p className="terminal-build-status">Build Complete.</p>
            <p className="terminal-build-message">
              Organisation Running Successfully.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Terminal;
