import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = props => {
  return (
    <header className="container-fluid header">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-6">
            <div className="logo">
              <NavLink to="/">REACT STUDY</NavLink>
            </div>
          </div>
          <div className="col-6">
            <nav className="nav">
              <ul>
                <li>
                  <NavLink to="/gitranks">REPO RANKS</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
