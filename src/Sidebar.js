import React from 'react';
import './Sidebar.css';
import logo from './assets/images/Image18.png'
import first from './assets/images/Category1_x2.svg'
import second from './assets/images/Image29_x2.svg'
import third from './assets/images/MouseSquare2_x2.svg'
import forth from './assets/images/Calendar2_x2.svg'
import fifth from './assets/images/Setting_x2.svg'

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} className='logo'/>
      <ul className='left-container'>
        <li><img className='small' src={first}/><span className='small-text'>Revenue</span></li>
        <li><img className='small' src={second}/><span className='small-text'>Shoppable Video</span></li>
        <li><img className='small' src={second}/><span className='small-text'>Story</span> </li>
        <li><img className='small' src={second}/><span className='small-text'>Live Commerce</span></li>
        <li>
          <ul>
            <li><img className='small' src={second}/><span className='small-text'>Playlist Manager</span></li>
            <li className='inner' id='inner'>Product playlist</li>
          </ul>
        </li>
        <li><img className='small' src={third}/><span className='small-text'>One Click Post</span></li>
        <li><img className='small' src={forth}/><span className='small-text'>Calendar</span></li>
        <li><img className='small' src={fifth}/><span className='small-text'>Hire Influencer</span></li>
      </ul>
    </div>
  );
};

export default Sidebar;
