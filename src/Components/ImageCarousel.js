import React, { Component } from "react";
import "../Styles/imageCarousel.css";

export default class ImageCarousel extends Component {
  render() {
    return (
      <div className="image-carousel-container">
        <div className="image-carousel">
          {this.props.images.map((image, i) => (
            <img src={image} alt={"cat-" + i} />
          ))}
        </div>
      </div>
    );
  }
}
