import React from 'react';
import PropTypes from 'prop-types';
import './RepoCards.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faMedal,
  faUser,
  faCubes
} from '@fortawesome/free-solid-svg-icons';

export const RepoCards = props => {
  return (
    <div className="container">
      <ol className="repoCards row">
        {props.repos.map((repo, index) => (
          <Repo key={repo.id} repo={repo} rank={index + 1} />
        ))}
      </ol>
    </div>
  );
};

RepoCards.propTypes = {
  repos: PropTypes.array.isRequired
};

export const Repo = props => {
  const { name, forks, stargazers_count, owner } = props.repo;
  const { avatar_url, html_url } = owner;

  return (
    <li className="col-sm-6 col-lg-4 col-xl-3">
      <div className="repoCard">
        <div className="repoCard__header text-align-center">
          <div className="repoCard__rank">
            <FontAwesomeIcon icon={faMedal} />
            {props.rank}
          </div>
          <h2 className="text-truncate">{name}</h2>
          <img src={avatar_url} alt={name} className="repoCard__pic" />
        </div>
        <ul className="repoCard__body ">
          <li className="repoCard__name text-truncate">
            <FontAwesomeIcon icon={faUser} />
            <a href={html_url} target="_blank">
              {name}
            </a>
          </li>
          <li className="repoCard__stars">
            <FontAwesomeIcon icon={faStar} />
            {stargazers_count} stars
          </li>
          <li className="repoCard__forks">
            <FontAwesomeIcon icon={faCubes} />
            {forks} forks
          </li>
        </ul>
      </div>
    </li>
  );
};

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
  rank: PropTypes.number.isRequired
};
