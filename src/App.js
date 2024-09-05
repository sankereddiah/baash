import React, { Component } from 'react';
import Menu from './Menu';
import Playlist from './Playlist.js';
import Slider from './Slider';
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      playlists: [],
      selectedPlaylist: null,
      videos: [],
      selectedVideo: [],
      sliderOpen: false,
    };
  }

  componentDidMount() {
    this.fetchPlaylists();
  }

  fetchPlaylists = () => {
    fetch('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getAllPlayList', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Content_Type: 2 }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ playlists: data.data });
      })
      .catch((err) => console.error(err));
  };

  fetchVideos = (playlist) => {
    fetch('https://5yiek6g5g0.execute-api.ap-south-1.amazonaws.com/Prod/api/engt/getfeeds_v1', {
      method: 'POST',
      headers: {
        'X-Api-Key': 'MXqO3cDcr492OTPGZZAot7akPvLmfKbA4bKt5Ryr',
        'X-Tenant-Key': 'TYKE070323',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Index: playlist.PlayListId,
        ContentType: [2],
        IsTagged: false,
        URL: '',
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ selectedPlaylist: playlist, videos: data.data.Feeds });
      })
      .catch((err) => console.error(err));
  };

  handleVideoClick = (video) => {
    this.setState((prevState)=>({ selectedVideo: video, sliderOpen: true }));
  };

  render() {
    const { playlists, selectedPlaylist, videos, selectedVideo, sliderOpen } = this.state;

    return (
      <div className="app-container">
        <Menu playlists={playlists} onPlaylistClick={this.fetchVideos} />
        {selectedPlaylist && <Playlist playlist={selectedPlaylist} videos={videos} onVideoClick={this.handleVideoClick} />}
        {sliderOpen && <Slider video={selectedVideo} />}
      </div>
    );
  }
}

export default App;
