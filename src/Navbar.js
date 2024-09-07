import React from 'react';
import './Navbar.css';
import logo from './assets/images/Ellipse7.jpeg'
import first from './assets/images/ContactSupport1_x2.svg'
// import second from './assests/images/Image19Traced1_x2.svg'


const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h2>Design Studio</h2>
      </div>
      
      <div className="navbar-right">
      <div className="navbar-center">
        <button id='button'>Support Request</button>
        <button>Product Tour</button>
        <input type="text" placeholder="Search Project..." />
      </div>
        <div className="user-profile">
          <img src={logo} alt="User" />
          <span>Leonardo</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
