import React from 'react';
import './Hero.scss';
import '../button/Button.scss';
import Pic1 from '../../assets/images/shape-polygon.svg';

const Hero = props => {
  return (
    <div className="container-fluid">
      <div className="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Quibusdam sequi eius facilis tempore voluptatem repellat!
                Eveniet molestias incidunt at dolores!
              </p>
              <a
                href="https://reactjs.org"
                className="btn btn--md btn--gray my-1"
              >
                START FOR FREE
              </a>
              <a
                href="https://reactjs.org/docs/getting-started.html"
                className="btn btn--md btn--white m-1"
              >
                READ DOCS
              </a>
            </div>
            <div className="col-lg-5 text-align-center">
              <Pic1 />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
