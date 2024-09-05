import React, { Component } from 'react';
import './App.css'

class Playlist extends Component {
  render() {
    const { videos, onVideoClick } = this.props;
    return (
      <div className="playlist-section">
        <h2>Videos in Playlist</h2>
        <div className="videos">
          {videos.map((video) => (
            <div key={video.Thumbnail_Title} className="video-card" onClick={() => onVideoClick(video)}>
              <img src={video.Thumbnail_URL} alt={video.title} />
              <h3>{video.Thumbnail_Title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Playlist;
