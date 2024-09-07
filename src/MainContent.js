import React from 'react';
import './MainContent.css';
import Image465 from "./assets/images/Image462.png"

const MainContent = (props) => {
  let{playlists,fetchVideos}=props
  
    
  

  return (
    <div className="main-content">
      <h2>Product Playlists</h2>
      <div className="playlist-grid">
        {playlists.map((item) => (
          <div className="playlist-item" key={item} onClick={()=>(fetchVideos(item))}>
            <div className="playlist-thumbnail">
              <img src={Image465} alt="Thumbnail"  />
            </div>
            
            <div className="playlist-info">
              <p>{item.Name}</p>
              <p>{item.Post_Ids.length} Videos</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;
