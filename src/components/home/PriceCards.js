import React from 'react';
import './PriceCards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const PriceCards = props => {
  const { items } = props.contents;

  return (
    <div className="container-fluid">
      <div className="priceCards">
        <div className="container">
          <div className="container">
            <div className="row">
              {items.map((item, index) => {
                return (
                  <div className="col-md-6 col-xl-3" key={index}>
                    <PriceCard card={item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const PriceCard = props => {
  const { title, price, subtitle, list } = props.card;

  return (
    <div className="priceCard">
      <div className="text-align-center p-3">
        <h6>{title}</h6>
        <div className="priceCard__price h1">
          <span className="align-top text-sm">$</span>
          {price}
        </div>
        <p className="priceCard__subtitle text-sm mb-0">{subtitle}</p>
      </div>
      <hr />
      <ul className="priceCard__ul">
        {list.map((li, index) => {
          return (
            <li key={index}>
              <FontAwesomeIcon icon={faCheckCircle} />
              {li}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PriceCards;
