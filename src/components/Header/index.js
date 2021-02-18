import React from "react";
import logo from '../../nsv.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo_nsv">
        <img src={logo} width="80px" alt=""/>
      </div>
      <div className="Donate">
        <button>Donate</button>
      </div>
    </header>
  )
}

export default Header
