import React from 'react';

const LangNav = props => {
  return (
    <div className="container">
      <header className="text-align-center">
        <h1 className="h2 pt-5">Popular Repos by Languages</h1>
        <div className="row justify-content-center">
          <p className="col-12 col-md-6 mb-0">
            Select language, and see the popular repos on Github.com
            <br />
            Data comes from Github API.
          </p>
          <a
            className="text-sm p-2 word-break-all line-height-sm link-hover-teal"
            href="https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories"
            target="_blank"
          >
            "https://api.github.com/search/repositories?q=stars:>1+language:all&sort=stars&order=desc&type=Repositories"
          </a>
        </div>
      </header>
    </div>
  );
};

export default LangNav;
