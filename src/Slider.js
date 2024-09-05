import React, { Component } from 'react';
import './App.css'

class Slider extends Component {
  render() {
    const { video } = this.props;
    return (
      <div className="slider">
        <img src={video.Thumbnail_URL} className='slider_image' alt="slider"/>
        <h2>{video.Thumbnail_Title}</h2>
        <p>{video.description}</p>
      </div>
    );
  }
}

export default Slider;
