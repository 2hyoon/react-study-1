import React from 'react';
import { NavLink } from 'react-router-dom';
import './BitsAndPieces.scss';

export default class BitsAndPieces extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container">
            <h1 className="h2 mt-5">Bits & Pieces</h1>
            <ul className="mt-1 list">
              <li>
                <NavLink
                  to="/bits-and-pieces/gitranks"
                  activeClassName="enabled"
                >
                  Popular Repos by Language
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/bits-and-pieces/baseball"
                  activeClassName="enabled"
                >
                  Baseball Game
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
