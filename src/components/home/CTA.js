import React from 'react';
import './CTA.scss';

const CTA = props => {
  const {
    title,
    body,
    btn1_txt,
    btn1_link,
    btn2_txt,
    btn2_link
  } = props.contents;

  return (
    <div className="container-fluid">
      <div className="CTA scroll-animate">
        <div className="container text-align-center">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2>{title}</h2>
              <p>{body}</p>
              <a href={btn1_link} className="btn btn--md btn--gray my-1">
                {btn1_txt}
              </a>
              <a href={btn2_link} className="btn btn--md btn--white m-1">
                {btn2_txt}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
