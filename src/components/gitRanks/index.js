import React from 'react';
import Header from './Header';
import LangNav from './LangNav';
import { RepoCards } from './RepoCards';
import { fetchRepos } from './api';
import { FaSpinnerLoader } from '../loader';
import queryString from 'query-string';

export default class GitRanks extends React.Component {
  state = {
    language: 'All',
    repos: {}
  };

  componentDidMount() {
    const { language } = queryString.parse(this.props.location.search);
    this.updateLanguage(language ? language : this.state.language);
  }

  updateLanguage = language => {
    this.setState(() => ({
      language
    }));

    if (!this.state.repos[language]) {
      fetchRepos(language)
        .then(data => {
          this.setState(({ repos }) => ({
            repos: { ...repos, [language]: data }
          }));
        })
        .catch(() => {
          console.warn('Errors in fetchRepos');
        });
    }
  };

  isLoading = () => {
    const { language, repos } = this.state;
    return !repos[language];
  };

  render() {
    const { language, repos } = this.state;

    return (
      <React.Fragment>
        <Header />
        <LangNav onUpdateLanguage={this.updateLanguage} language={language} />
        {this.isLoading() ? (
          <FaSpinnerLoader />
        ) : (
          <RepoCards repos={repos[language]} />
        )}
      </React.Fragment>
    );
  }
}
