import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import WelcomePage from '../pages/WelcomePage';
import PageNotFound from '../pages/PageNotFound';
import HomePage from '../pages/HomePage';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import React from 'react';
import '../pages/index.css'

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="container">
          <div className="container-wrapper">
            <HeaderBar />
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/welcome" component={WelcomePage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </React.Fragment>
  )
};

export default Routes;