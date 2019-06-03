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

  // For scroll in animation
  animateElements = [];

  componentDidMount() {
    this.getContents();
  }

  componentDidUpdate() {
    window.removeEventListener('scroll', this.onScroll);
    this.setupScroll();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll);
  }

  getContents = () => {
    getContents().then(contents => {
      this.setState(({ data }) => ({ data: { ...data, contents } }));
    });
  };

  setupScroll = () => {
    this.animateElements = Array.from(
      document.getElementsByClassName('scroll-animate')
    );
    window.addEventListener('scroll', this.onScroll);
  };

  onScroll = evt => {
    let posY = window.scrollY + window.innerHeight * 0.9;
    this.animateElements.map((ele, index) => {
      if (
        posY >= ele.offsetTop &&
        !ele.classList.contains('scroll-animate-out')
      ) {
        ele.classList.add('scroll-animate-out');
      } else {
        return;
      }
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
