import React, { Component } from "react";
import "./Styles/App.css";
import avatar from "./Images/avataaars_me.png";
import CodeBox from "./Components/CodeBox";
import LightModeToggle from "./Components/LightModeToggle";
import DateWeather from "./Components/DateWeather";
import Notice from "./Components/Notice";
import PhotoCard from "./Components/PhotoCard";
import ImageCarousel from "./Components/ImageCarousel";
import cat1 from "./Images/Cats/laura-chouette-g6Ny4dvHlE0-unsplash.jpg";
import cat2 from "./Images/Cats/manja-vitolic-gKXKBY-C-Dk-unsplash.jpg";
import cat3 from "./Images/Cats/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg";

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
              <div className="scroll-prompt bob">
                <p>
                  <i className="fas fa-long-arrow-alt-down"></i>
                  <br />
                  <span className="ubuntu">Scroll</span>
                </p>
              </div>
            </div>
          </div>
          <div className="right-container">
            <div className="overlay-main">
              <div className="overlay-card-1">
                <div className="overlay-card-2 color-moded">
                  <div className="card-line">
                    <div className="card white medium tall">
                      <DateWeather />
                      <div className="tag">
                        <p className="ubuntu">date & weather</p>
                      </div>
                    </div>
                    <div className="card white small tall">
                      <LightModeToggle />
                      <div className="tag">
                        <p className="ubuntu">light switch</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-line">
                    <div className="card white wide tall">
                      <ImageCarousel images={[cat1, cat2, cat3, cat1, cat2]} />
                      <div className="tag">
                        <p className="ubuntu">wide card</p>
                      </div>
                    </div>
                  </div>
                  <div className="card-line">
                    <div className="card white small taller">
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
                    <div className="card white medium short">
                      <Notice
                        id="notice-text"
                        text="Inspiration for components will be credited in notice boxes"
                      />
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
        <div className="smaller-container">
          <CodeBox />
        </div>
      </div>
    );
  }
}
