import React from "react";
import logo from '../../logo.svg';

const Header = () => {
  return (
    <header className="header">
      <div class="logo_nsv">
        <img src={logo} width="80px"/>
      </div>
      <div class="Donate">
        <button>Donate</button>
      </div>
    </header>
  )
}

export default Header