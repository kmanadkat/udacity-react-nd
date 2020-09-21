import React from 'react';
import {Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../assets/imgs/logo.png'

function Navigation(){
  const location = useLocation();
  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark py-3">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img height="32" src={logo} alt="My Reads Logo"/> <span className="ml-2">My Reads</span>
        </Link>
        <ul className="navbar-nav">
          <li className={`nav-item mx-4 ${location.pathname === '/' ? 'active' : ''}`}>
            <Link className="nav-link" to="/">My Shelf</Link>
          </li>
          <li className={`nav-item mx-4 ${location.pathname === '/search' ? 'active' : ''}`}>
            <Link className="nav-link" to="/search">All Books</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;