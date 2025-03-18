import React, { useRef } from 'react';
import navCSS from './Nav.css';

function Nav() {

  const menu = useRef();

  const menuhandler = () => {
    menu.current.classList.toggle(Nav.openMenu)
  }

  return (
    <div className={navCSS.nav}>
      <div className={navCSS.logo}>
        <a href="#">Kyle</a>
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Portfolio</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <i className="ri-menu-4-line" id ={Nav.bars} onCLick={menuhandler}></i>
    </div>
  );
}

export default Nav;
