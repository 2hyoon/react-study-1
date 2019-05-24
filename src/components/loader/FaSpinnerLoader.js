import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default class FaSpinnerLoader extends React.Component {
  state = {
    pct: 0
  };

  // TODO: pertange option
  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="fa-spinner-loader my-2 text-align-center">
        <FontAwesomeIcon icon={faSpinner} size="lg" spin />
      </div>
    );
  }
}
