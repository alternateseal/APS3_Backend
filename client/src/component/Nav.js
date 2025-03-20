import React, { useRef } from "react";
import navCSS from './Nav.module.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Nav() {

  const menu = useRef();

  const menuhandler = () => {
    menu.current.classList.toggle(navCSS.openMenu)
  };

  const handleLinkClick = (label) => {
    if (label !== 'Home' && label !== 'Contact') {
      toast.info('Under Contruction :(');
    }
  };

  return (
    <div className={navCSS.nav}>
      <div className={navCSS.logo}>
        <a href="#">KRBꓤꓘ</a>
      </div>

      <ul ref={menu}>
        <li><a href="https://krbrk.com" onClick={() => handleLinkClick('Home')}>Home</a></li>
        <li><a href="#" onClick={() => handleLinkClick('About')}>About</a></li>
        <li><a href="#" onClick={() => handleLinkClick('Services')}>Services</a></li>
        <li><a href="#" onClick={() => handleLinkClick('Portfolio')}>Portfolio</a></li>
        <li><a href="mailto:altcl.99@gmail.com" onClick={() => handleLinkClick('Contact')}>Contact</a></li>
      </ul>

      <i className="ri-menu-4-line" id={navCSS.bars} onClick={menuhandler}></i>
      
    </div>
  );
}

export default Nav;
