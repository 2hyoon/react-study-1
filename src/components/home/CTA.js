import React from 'react';
import './CTA.scss';

const CTA = props => {
  return (
    <div className="container-fluid">
      <div className="CTA">
        <div className="container text-align-center">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <h2>Ipsam minima consectetur facere.</h2>
              <p>
                Molestias ex nobis non minima tempore blanditiis dolor molestiae
                harum dolores nihil, doloremque distinctio vel, eveniet quos
                corrupti quidem. Accusantium, placeat necessitatibus?
              </p>
              <a
                href="https://reactjs.org/"
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
