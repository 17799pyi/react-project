import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import WelcomePage from '../pages/WelcomePage';
import PageNotFound from '../pages/PageNotFound';
import HomePage from '../pages/HomePage';
import HeaderBar from '../components/HeaderBar/HearderBarChatLog';
import ChatPage from '../pages/ChatPage'
import PersonaSelection from '../pages/Lesson/PersonaSelection/PersonaSelection';
// import HeaderBar from '../components/HeaderBar/HeaderBar';
import React from 'react';
import '../pages/index.css'
import PersonaSelected from '../pages/Lesson/PersonaSelected/PersonaSelected';
import PersonaScenaio from '../pages/Lesson/PersonaScenario/PersonaScenaio';
import SettingPage from '../pages/SettingPage/SettingPage';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
            <HeaderBar />
            <div className="content-container">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/welcome" component={WelcomePage} />

              <Route exact path="/ChatPage" component={ChatPage} />
              <Route exact path="/lessons" component={PersonaSelection} />
              <Route exact path="/lessons/1" component={PersonaSelected} />
              <Route exact path="/lessons/1/scenario" component={PersonaScenaio} />
              <Route exact path="/setting" component={SettingPage} />
              <Route path="*" component={PageNotFound} />
            </Switch>
            </div>
      </Router>
    </React.Fragment>
  )
};

export default Routes;