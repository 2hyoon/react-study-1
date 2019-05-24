import React from 'react';
import { NavLink } from 'react-router-dom';
import '../button/Button.scss';

export default class Error404 extends React.Component {
  render() {
    return (
      <div class="mt-5 text-align-center">
        <h1>OOPS 404</h1>
        <p>Something went wrong. You can start from here.</p>
        <NavLink to="/" className="btn btn--md btn--gray">
          Start from Home
        </NavLink>
      </div>
    );
  }
}
