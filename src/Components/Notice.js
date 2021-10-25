import React, { Component } from "react";
import "../Styles/notice.css";

export default class Notice extends Component {
  render() {
    return (
      <div className="notice">
        <div className="notice-icon-box">
          <i className="fas fa-exclamation"></i>
        </div>
        <div className="notice-text ubuntu">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}
