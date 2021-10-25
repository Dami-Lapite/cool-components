import React, { Component } from "react";
import "../Styles/photoCard.css";

export default class PhotoCard extends Component {
  render() {
    return (
      <div className="photo-card center-container">
        <img src={this.props.avatar} alt="my avatar" />
        <p className="details roboto-condensed">
          <span className="name">{this.props.name}</span>
          <br /> <span className="position">{this.props.position}</span>
          &nbsp;
          <a className="fas fa-link" href={this.props.link} target="_blank"></a>
        </p>
      </div>
    );
  }
}
