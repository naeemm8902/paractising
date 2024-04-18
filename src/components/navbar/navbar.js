import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IoClose, IoMenu } from 'react-icons/io5';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import './navbar2.css';
import Navbartop from './navbartop';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
    setShowDropdown(false); // Close dropdown when menu is closed
  };

  const handleDropdownHover = (isHovering) => {
    setShowDropdown(isHovering);
  };

  return (
    <>
      <Navbartop />
      <nav id='navbar' className="navbar">
        <a className="imgg" href="/">
          <img src="./images/logo.svg" alt="Logo" />
        </a>
        <div className="mobile-menu" onClick={handleMenuClick}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>
        <ul className={`nav-links ${showMenu ? 'show' : ''}`}>
          <li onClick={closeMenu}>
            <NavLink to="/" activeClassName="active" exact>
              Home
            </NavLink>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/about" activeClassName="active">
              Company
            </NavLink>
          </li>
          <li
            className="dropdown_service"
            onMouseEnter={() => handleDropdownHover(true)}
            onMouseLeave={() => handleDropdownHover(false)}
          >
            <NavLink to="/service" activeClassName="active">
              Service {showDropdown ? <IoIosArrowDown /> : <IoIosArrowForward />}
            </NavLink>
            <ul
              className={showDropdown ? 'dropdown-menu show' : 'dropdown-menu'}
            
            >
              <li onClick={closeMenu}>
                <NavLink to="/service1" activeClassName="active"> 
                  Service 1 
                </NavLink>
              </li>
              <li onClick={closeMenu}>
                <NavLink to="/service2" activeClassName="active">
                  Service 2
                </NavLink>
              </li>
            </ul>
          </li>
          <li onClick={closeMenu}>
            <NavLink to="/contact" activeClassName="active">
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
