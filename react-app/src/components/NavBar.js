
import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';

const NavBar = () => {
  return (
    <nav className='nav-header'>
      <div className='flex-row'>
        <img className='masthead' src="//cdn.otstatic.com/cfe/9/images/opentable-logo-153e80.svg" />
      </div>

      <div className='flex-row'>
        Right
      </div>
    </nav>
  );
}

export default NavBar;
