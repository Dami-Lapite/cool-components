import React, { Component } from "react";
import "../Styles/notice.css";

export default class Notice extends Component {
  hideContent = () => {
    let notice_text = document.getElementById("switch");
    // if (notice_text.classList.contains("hidden")) {
    //   notice_text.classList.remove("hidden");
    // } else {
    //   notice_text.classList.add("hidden");
    // }
    console.log(notice_text.classList);
  };

  render() {
    return (
      <div className="notice" onClick={this.hideContent}>
        <div className="notice-icon-box">
          <i className="fas fa-exclamation exclamation"></i>
        </div>
        <div className="notice-text ubuntu">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
