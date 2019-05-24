import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import PriceCards from './PriceCards';
import CTA from './CTA';

export default class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Hero />
        <Benefits />
        <PriceCards />
        <CTA />
      </React.Fragment>
    );
  }
}
