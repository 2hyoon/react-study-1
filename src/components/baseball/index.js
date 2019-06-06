import React from 'react';
import '../button/Button.scss';
import './Baseball.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFlag,
  faThumbsUp,
  faThumbsDown
} from '@fortawesome/free-solid-svg-icons';

export default class Baseball extends React.Component {
  state = {
    targetNumbers: [],
    guessed: [],
    input: '',
    error: ''
  };

  componentDidMount() {
    this.populateTargetNumbers();
  }

  submitHandler = evt => {
    evt.preventDefault();

    this.validate() &&
      this.setState({
        guessed: [...this.state.guessed, this.calculateInput()],
        input: '',
        error: ''
      });
  };

  inputHandler = evt => {
    this.setState({ input: evt.target.value });
  };

  validate = () => {
    const v1 = this.validateInputLength();
    const v2 = this.validateDuplication();

    if (v1 && v2) {
      return true;
    } else {
      if (!v1) {
        this.setState({ error: 'please enter 4 digits.' });
        return false;
      }

      if (!v2) {
        this.setState({ error: 'please enter unique numbers.' });
        return false;
      }
    }
  };

  validateInputLength = () => {
    return this.state.input.length === 4;
  };

  validateDuplication = () => {
    return [...new Set(this.state.input.split(''))].length < 4 ? false : true;
  };

  calculateInput = () => {
    const { input, targetNumbers } = this.state;
    let strike = 0;
    let ball = 0;

    targetNumbers.map((n, index) => {
      const location = input.indexOf(n);
      location === index && strike++;
      location !== -1 && location !== index && ball++;
    });

    return { input, strike, ball };
  };

  populateTargetNumbers = () => {
    const ten = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    ten.sort(() => Math.random() - 0.5);

    this.setState({ targetNumbers: ten.slice(0, 4) });
  };

  render() {
    const { targetNumbers, guessed, input, error } = this.state;
    const matched =
      guessed.length > 0 &&
      guessed[guessed.length - 1].strike !== undefined &&
      guessed[guessed.length - 1].strike === 4;

    return (
      <React.Fragment>
        <div className="container-fluid">
          <div className="container baseball">
            <div className="row justify-content-center mt-5">
              <div className="col-md-7 text-align-center">
                <h1 className="mb-1">Baseball Game</h1>
                <h6>
                  a.k.a.{' '}
                  <a
                    href="https://en.wikipedia.org/wiki/Bulls_and_Cows"
                    target="_blank"
                  >
                    Bulls & Cows
                  </a>
                </h6>
                <p>
                  Guess 4 unique digits! If you guessed the matching number in
                  the right position, you will get the strike. If you matched a
                  number in different position, you will get the ball.
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="bbcard my-3">
                <div
                  className={
                    matched
                      ? `bbcard__target-numbers matched`
                      : `bbcard__target-numbers`
                  }
                >
                  {matched && <FontAwesomeIcon icon={faThumbsUp} />}

                  {!matched && guessed.length > 0 && (
                    <FontAwesomeIcon icon={faThumbsDown} />
                  )}

                  {targetNumbers.length > 0 &&
                    targetNumbers.map((n, index) =>
                      matched ? (
                        <span key={index}>{n}</span>
                      ) : (
                        <span key={index}>?</span>
                      )
                    )}
                </div>
                <ol className="bbcard__ol">
                  {guessed.map((g, index) => (
                    <li key={index}>
                      <span className="bbcard__guessed">{g.input}</span>
                      <span className="bbcard__result">
                        {g.strike > 1
                          ? `${g.strike} strikes `
                          : `${g.strike} strike `}
                        {g.ball > 1 ? `${g.ball} balls` : `${g.ball} ball`}
                      </span>
                      {g.strike === 4 && <FontAwesomeIcon icon={faFlag} />}
                    </li>
                  ))}
                </ol>
                {!matched && (
                  <form onSubmit={this.submitHandler}>
                    <label htmlFor="bbcard__input" className="bbcard__label">
                      Enter unique 4 digits.
                    </label>
                    <input
                      type="number"
                      autoComplete="off"
                      id="bbcard__input"
                      className="bbcard__input"
                      value={input}
                      onChange={this.inputHandler}
                      name="bbcard__input"
                    />
                    <div className="bbcard__error">{error}</div>
                    <div className="text-align-center mt-2">
                      <button type="submit" className="btn btn--md btn--gray">
                        Submit Your Guess!
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
