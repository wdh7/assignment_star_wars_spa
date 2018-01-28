import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h3>Star Wars API</h3>
      <div className='links-wrapper'>
        <NavLink activeClassName='active-link' to='/people'>People</NavLink>
        <NavLink activeClassName='active-link' to='/planets'>Planets</NavLink>
        <NavLink activeClassName='active-link' to='/vehicles'>Vehicles</NavLink>
      </div>
    </header>
  )
};


export default Header;
