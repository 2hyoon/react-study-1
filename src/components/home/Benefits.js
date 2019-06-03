import React from 'react';
import './Benefits.scss';
import Shape1 from '../../assets/images/shape-circle.svg';

const Benefits = props => {
  const { items } = props.contents;

  return (
    <div className="container-fluid">
      <div className="benefits">
        <div className="container">
          {items.map((item, index) => {
            return (
              <div
                className="row justify-content-center mb-5 scroll-animate"
                key={index}
              >
                <div className={`col-lg-5 ${index % 2 == 1 && 'order-lg-1'}`}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </div>
                <div className="col-lg-5 text-align-center">
                  <Shape1 className="shape1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Benefits;
