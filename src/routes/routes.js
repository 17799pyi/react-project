import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import WelcomePage from '../pages/WelcomePage';
import PageNotFound from '../pages/PageNotFound';
import HomePage from '../pages/HomePage';
import PersonaSelection from '../pages/Lesson/PersonaSelection/PersonaSelection';
import HeaderBar from '../components/HeaderBar/HeaderBar';
import React from 'react';
import '../pages/index.css'
import PersonaSelected from '../pages/Lesson/PersonaSelected/PersonaSelected';
import PersonaScenaio from '../pages/Lesson/PersonaScenario/PersonaScenaio';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <div className="container">
          <div className="container-wrapper">
            <HeaderBar />
            <div className="content-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/welcome" component={WelcomePage} />
              <Route exact path="/lessons" component={PersonaSelection} />
              <Route exact path="/lessons/1" component={PersonaSelected} />
              <Route exact path="/lessons/1/scenario" component={PersonaScenaio} />
              <Route path="*" component={PageNotFound} />
            </Switch>
            </div>
          </div>
        </div>
      </Router>
    </React.Fragment>
  )
};

export default Routes;