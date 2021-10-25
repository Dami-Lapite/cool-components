import React, { Component } from "react";
import "../Styles/lightSwitch.css";

export default class LightModeToggle extends Component {
  toggleLightMode = () => {
    let switch_element = document.getElementById("switch");
    let color_moded_elements = document.getElementsByClassName("color-moded");
    if (switch_element.classList.contains("dark")) {
      for (let element of color_moded_elements) {
        element.classList.remove("dark");
      }
    } else {
      for (let element of color_moded_elements) {
        element.classList.add("dark");
      }
    }
  };

  render() {
    return (
      <div className="switch-container">
        <div
          id="switch"
          className="switch color-moded"
          onClick={this.toggleLightMode}
        >
          <div className="sun color-moded"></div>
          <i className="fas fa-moon moon color-moded"></i>
          <span className="label color-moded light-label ubuntu">
            <p>LIGHT</p>
          </span>
          <span className="label color-moded dark-label ubuntu">
            <p>DARK</p>
          </span>
        </div>
      </div>
    );
  }
}
