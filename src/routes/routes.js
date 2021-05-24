
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderBarChatPage from '../components/HeaderBar/HearderBarChatLog';
import HeaderBar from '../components/HeaderBar/HeaderBar';

import PersonaSelection from '../pages/Lesson/PersonaSelection/PersonaSelection';
import PersonaSelected from '../pages/Lesson/PersonaSelected/PersonaSelected';
import PersonaScenaio from '../pages/Lesson/PersonaScenario/PersonaScenaio';
import Index from '../pages/TrainingRersultList/Index';
import ChatPage from '../pages/ChatPage'
import ScenariosPage from '../pages/ScenariosPage'
import SettingPage from '../pages/SettingPage/SettingPage';
import RateOfRisk from '../pages/RateOfRisk/index'
import PageNotFound from '../pages/PageNotFound';

import '../pages/index.css'
import ScenarioSelection from '../pages/ScenarioSelection/ScenarioSelection';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
            {/* <HeaderBar/> */}
              <Switch>
                <Route exact path="/agency" component={Index} />
                <Route exact path="/ChatPage" component={ChatPage} />
                <Route exact path="/ScenariosPage" component={ScenariosPage} />
                <Route exact path="/lessons" component={PersonaSelection} />
                <Route exact path="/lessons/1" component={PersonaSelected} />
                <Route exact path="/lessons/1/scenario" component={PersonaScenaio} />
                <Route exact path="/setting" component={SettingPage} />
                <Route exact path="/scenario-selection" component={ScenarioSelection} />
                <Route exact path="/scenario-selection/1" component={RateOfRisk} />
                <Route path="*" component={PageNotFound} />
              </Switch>
      </Router>
    </React.Fragment>
  )
};

export default Routes;