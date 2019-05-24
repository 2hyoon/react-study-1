import React from 'react';
import './Hero.scss';
import '../button/Button.scss';
import Pic1 from '../../assets/images/shape-polygon.svg';

const Hero = props => {
  const {
    title,
    body,
    btn1_txt,
    btn2_txt,
    btn1_link,
    btn2_link
  } = props.contents;

  return (
    <div className="container-fluid">
      <div className="hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5">
              <h1>{title}</h1>
              <p>{body}</p>
              <a
                href={btn1_link}
                target="_blank"
                className="btn btn--md btn--gray my-1"
              >
                {btn1_txt}
              </a>
              <a
                href={btn2_link}
                target="_blank"
                className="btn btn--md btn--white m-1"
              >
                {btn2_txt}
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
