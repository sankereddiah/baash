import React from 'react';
import './RightPanel.css';

const RightPanel = (props) => {
  let {videos}=props
  return (
    <div className="right-panel">
      <div className="video-details">
        <h3>Thumbnail Title</h3>
        <input type="text" placeholder="Get Sporty in Style" />
        <div>
          <label id="label">Video Status</label>
          <input type="radio" name="status" checked /> Active
          <input type="radio" name="status" /> Inactive
        </div>
        <h3>Product List</h3>
        <ul className="product-list">
          {videos.map((item) => (
            <li key={item}>
              <img src={item.Thumbnail_URL} alt="Video" />
              <div>
                <p>{item.Thumbnail_Title}</p>
                <p id='secondpara'>4:05:60</p>
                <p>Products Attached: 5</p>
              </div>
            </li>
          ))}
        </ul>
        <button className="update-btn">Update Playlist</button>
      </div>
    </div>
  );
};

export default RightPanel;
