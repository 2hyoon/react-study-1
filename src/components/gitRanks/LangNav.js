import React from 'react';
import PropTypes from 'prop-types';
import '../button/Button.scss';
import './LangNav.scss';

const LangNav = props => {
  const languages = ['All', 'Javascript', 'CSS', 'JAVA', 'Python'];
  return (
    <div className="container">
      <ul className="langNav">
        {languages.map(language => (
          <li key={language}>
            <button
              className={`btn btn--white btn--md text-bold ${
                language === props.language ? 'enabled' : null
              }`}
              onClick={() => props.onUpdateLanguage(language)}
            >
              {language}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

LangNav.propTypes = {
  language: PropTypes.string.isRequired,
  onUpdateLanguage: PropTypes.func.isRequired
};

export default LangNav;
