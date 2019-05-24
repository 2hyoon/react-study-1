import React from 'react';
import Hero from './Hero';
import Benefits from './Benefits';
import PriceCards from './PriceCards';
import CTA from './CTA';
import { getContents } from './api';
import { FaSpinnerLoader } from '../loader';

export default class Home extends React.Component {
  state = {
    data: null
  };

  componentDidMount() {
    this.getContents();
  }

  getContents = () => {
    getContents().then(contents => {
      this.setState(({ data }) => ({ data: { ...data, contents } }));
    });
  };

  render() {
    return (
      <React.Fragment>
        {!this.state.data ? (
          <div className="py-5">
            <FaSpinnerLoader />
          </div>
        ) : (
          <React.Fragment>
            <Hero contents={this.state.data.contents.hero} />
            <Benefits contents={this.state.data.contents.benefits} />
            <PriceCards contents={this.state.data.contents.prices} />
            <CTA contents={this.state.data.contents.cta} />
          </React.Fragment>
        )}
      </React.Fragment>
    );
  }
}
