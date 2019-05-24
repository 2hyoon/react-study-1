import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import { FaSpinnerLoader } from './components/loader/';
import './index.scss';

const Home = React.lazy(() => import('./components/home'));
const GitRanks = React.lazy(() => import('./components/gitRanks'));
const Error404 = React.lazy(() => import('./components/error'));

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <React.Suspense fallback={<FaSpinnerLoader />}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/gitranks" component={GitRanks} />
              <Route component={Error404} />
            </Switch>
          </React.Suspense>
        </React.Fragment>
      </Router>
    );
  }
}

ReactDom.render(<App />, document.getElementById('app'));
