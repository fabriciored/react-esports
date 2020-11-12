import React from 'react';
import './styles.css';
import logo from '../../assets/csgo.png'

function Header() {
    return (
      <div className="header">
          <img className="logo" src={logo}></img>
        </div>
    );
  }
  
  export default Header;