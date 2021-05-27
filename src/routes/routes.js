
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PageNotFound from '../pages/PageNotFound';
import Sidebar from '../components/Sidebar';
import StartOfNewRolePlay from '../pages/phase1/StartOfNewRolePlayPage';
import '../pages/index.css'
import ScenariosSelectionPage from '../pages/phase1/StartOfNewRolePlayPage/ScenariosSelectionPage/index.js';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
        <Sidebar/>          
          <div id="main-content" className='content-large'>
          <Switch>
            <Route exact path="/" component={StartOfNewRolePlay} />
            <Route exact path="/scenario-selection" component={ScenariosSelectionPage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  )
};

export default Routes;