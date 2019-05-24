import React from 'react';
import './Benefits.scss';
import Shape1 from '../../assets/images/shape-circle.svg';

const Benefits = props => {
  return (
    <div className="container-fluid">
      <div className="benefits">
        <div className="container">
          <div className="row justify-content-center mb-5">
            <div className="col-lg-5">
              <h3>Consectetur quisquam aliquid excepturi</h3>
              <p>
                Nisi, ratione amet nemo nihil laudantium, iusto voluptatum
                eligendi dolores recusandae dignissimos impedit consequuntur
                aliquid!
              </p>
            </div>
            <div className="col-lg-5 text-align-center">
              <Shape1 className="shape1" />
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-5 order-lg-1">
              <h3>Similique omnis sunt exercitationem sit</h3>
              <p>
                Sed eius officia aliquid sit totam officiis esse illum corrupti
                harum consectetur dolorem quas voluptatum nihil, libero non
                possimus quae praesentium.
              </p>
            </div>
            <div className="col-lg-5 order-lg-0">
              <Shape1 className="shape1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
