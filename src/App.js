import React, { Component } from "react";
import "./Styles/App.css";
import CodeBox from "./Components/CodeBox";
import LightModeToggle from "./Components/LightModeToggle";

export default class App extends Component {
  render() {
    return (
      <div className="App color-moded">
        <div className="container">
          <div className="left-container">
            <div className="header color-moded">
              <h1 className="raleway">
                Cool
                <br />
                Components
              </h1>
              <h3 className="raleway">
                {" "}
                A collection of components I think are cool
              </h3>
            </div>
          </div>
          <div className="right-container">
            <div className="overlay-main">
              <div className="overlay-card-1">
                <div className="overlay-card-2 color-moded">
                  <div className="card-line">
                    <div className="card medium tall">
                      <div className="tag">
                        <p className="ubuntu">medium card</p>
                      </div>
                    </div>
                    <div className="card  small tall">
                      <LightModeToggle />
                      <div className="tag">
                        <p className="ubuntu">light switch</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-line">
                    <div className="card wide tall">
                      <div className="tag">
                        <p className="ubuntu">wide card</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-line">
                    <div className="card small tall">
                      <div className="tag">
                        <p className="ubuntu">small card</p>
                      </div>
                    </div>
                    <div className="card medium short">
                      <div className="notice">
                        <div className="notice-icon-box">
                          <i className="fas fa-exclamation"></i>
                        </div>
                        <div className="notice-text ubuntu">
                          <p>
                            This page is inspired by the Tailwind.css website
                          </p>
                        </div>
                      </div>
                      <div className="tag">
                        <p className="ubuntu">notice</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <CodeBox />
        </div>
      </div>
    );
  }
}
