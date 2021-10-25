import React, { Component } from "react";
import "./Styles/App.css";
import CodeBox from "./Components/CodeBox";
import LightModeToggle from "./Components/LightModeToggle";
import DateWeather from "./Components/DateWeather";
import Notice from "./Components/Notice";
import PhotoCard from "./Components/PhotoCard";
import avatar from "./Images/avataaars_me.png";

export default class App extends Component {
  render() {
    return (
      <div className="App color-moded">
        <div className="container">
          <div className="left-container">
            <div className="center-container">
              <div className="header color-moded">
                <h1 className="lato">
                  Web
                  <br />
                  Widgets
                </h1>
                <h3 className="raleway">
                  Useful and simple web widget components that can be easily
                  placed into any website.
                </h3>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="overlay-main">
              <div className="overlay-card-1">
                <div className="overlay-card-2 color-moded">
                  <div className="card-line">
                    <div className="card medium tall">
                      <DateWeather />
                      <div className="tag">
                        <p className="ubuntu">date & weather</p>
                      </div>
                    </div>
                    <div className="card small tall">
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
                    <div className="card small taller">
                      <PhotoCard
                        avatar={avatar}
                        name="DAMI LAPITE"
                        position="Web Developer"
                        link="https://www.damilapite.com/"
                      />
                      <div className="tag">
                        <p className="ubuntu">photo card</p>
                      </div>
                    </div>
                    <div className="card medium short">
                      <Notice text="Inspiration for components will be credited in notice boxes" />
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
