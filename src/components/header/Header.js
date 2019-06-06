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
              <NavLink exact to="/" activeClassName="enabled">
                REACT STUDY
              </NavLink>
            </div>
          </div>
          <div className="col-6">
            <nav className="nav">
              <ul>
                <li>
                  <NavLink to="/bits-and-pieces/" activeClassName="enabled">
                    Bits & Pieces
                  </NavLink>
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
