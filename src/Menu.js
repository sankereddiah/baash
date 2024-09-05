import React, { Component } from 'react';
import './App.css'

class Menu extends Component {
  render() {
    const { playlists, onPlaylistClick } = this.props;
    return (
      <div className="menu">
        <h2>Playlists</h2>
        {playlists.map((playlist) => (
          <div key={playlist.id} className="playlist">
            <img src={playlist.thumbnail} alt={playlist.name} />
            <h3>{playlist.Name}</h3>
            <button onClick={() => onPlaylistClick(playlist)}>View Playlist</button>
          </div>
        ))}
      </div>
    );
  }
}

export default Menu;
