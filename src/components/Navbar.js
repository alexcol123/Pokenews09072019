import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = props => {


  return (
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <Link to="/home" className="brand-logo left ">
          PokeTimes
        </Link>
        <ul className="right">
          <li>
            <NavLink to="/home">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Navbar);
