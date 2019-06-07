import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import '../button/Button.scss';
import './LangNav.scss';

const LangNav = props => {
  const languages = ['All', 'Javascript', 'CSS', 'JAVA', 'Python', 'PHP', 'C'];
  return (
    <div className="container">
      <ul className="langNav">
        {languages.map(language => (
          <li key={language}>
            <Link
              className={`btn btn--white btn--md text-bold ${
                language === props.language ? 'enabled' : null
              }`}
              onClick={() => props.onUpdateLanguage(language)}
              to={`/bits-and-pieces/gitranks?language=${language}`}
            >
              {language}
            </Link>
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
