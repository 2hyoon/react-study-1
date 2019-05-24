import React from 'react';
import './PriceCards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PriceCards = props => {
  return (
    <div className="container-fluid">
      <div className="priceCards">
        <div className="container">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-xl-3">
                <PriceCard />
              </div>
              <div className="col-md-6 col-xl-3">
                <PriceCard />
              </div>
              <div className="col-md-6 col-xl-3">
                <PriceCard />
              </div>
              <div className="col-md-6 col-xl-3">
                <PriceCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceCard = props => {
  return (
    <div className="priceCard">
      <div className="text-align-center p-3">
        <h6>libero totam</h6>
        <div className="priceCard__price h1">
          <span className="align-top text-sm">$</span>
          0.00
        </div>
        <p className="priceCard__subtitle text-sm mb-0">
          Vitae aut expedita autem illum quas amet similique deserunt inventore.
        </p>
      </div>
      <hr />
      <ul className="priceCard__ul">
        <li>
          <FontAwesomeIcon icon={faCheckCircle} />
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus earum animi sit, ullam debitis ad error impedit ipsum
          nemo deserunt.
        </li>
        <li>
          <FontAwesomeIcon icon={faCheckCircle} />
          Tenetur facilis incidunt magni eius mollitia autem dolor eveniet
          quisquam consequuntur libero totam eaque repellendus aliquam.
        </li>
      </ul>
    </div>
  );
};

export default PriceCards;
