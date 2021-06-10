
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderBarChatPage from '../components/HeaderBar/HearderBarChatLog';
import HeaderBar from '../components/HeaderBar/HeaderBar';

import LanguageBar from '../components/LanguageBar';

import PersonaSelection from '../pages/Lesson/PersonaSelection/PersonaSelection';
import PersonaSelected from '../pages/Lesson/PersonaSelected/PersonaSelected';
import PersonaScenaio from '../pages/Lesson/PersonaScenario/PersonaScenaio';
import Index from '../pages/TrainingRersultList/Index';
import ChatPage from '../pages/ChatPage'
import ScenariosPage from '../pages/ScenariosPage'
import SettingPage from '../pages/SettingPage/SettingPage';
import RateOfRisk from '../pages/RateOfRisk/index'
import PageNotFound from '../pages/PageNotFound';
import Recruiter from '../pages/RecruiterPage'


import Sidebar from '../components/Sidebar';
import AIScore from '../pages/phase1/AIScorePage';
import RateOfRisk1 from '../pages/phase1/RateOfRiskPage';
import VideoChat from '../pages/phase1/VideoChatPage';
import StartOfNewRolePlay from '../pages/phase1/StartOfNewRolePlayPage';
import HistoryCheck from '../pages/phase1/HistoryCheckPage'
import HistoryCheckDetail from '../pages/phase1/HistoryCheckPage/detail'
import Evaluation from '../pages/phase1/Evaluation'
import EvaluationDetail from '../pages/phase1/Evaluation/detail'

import '../pages/index.css'
import ScenarioSelection from '../pages/ScenarioSelection/ScenarioSelection';
import ScenariosSelectionPage from '../pages/phase1/StartOfNewRolePlayPage/ScenariosSelectionPage/index.js';

const Routes = () => {
  return (
    <React.Fragment>
      <Router>
            {/* <HeaderBar/> */}
            <Sidebar/>          
              <div id="main-content" className='content-large'>
              <LanguageBar/>
              <div className="main-content-inr">
              <Switch>
                <Route exact path="/ai-score/:taskID" component={AIScore} />
                <Route exact path="/rate-of-risk/:taskID" component={RateOfRisk1} />
                <Route exact path="/VideoChat" component={VideoChat} />
                <Route exact path="/" component={StartOfNewRolePlay} />
                <Route exact path="/scenario-selection" component={ScenariosSelectionPage} />
                <Route exact path="/historycheck" component={HistoryCheck} />
                <Route exact path="/history-check-detail" component={HistoryCheckDetail} />
                <Route exact path="/evaluation" component={Evaluation} />
                <Route exact path="/evaluation_detail" component={EvaluationDetail} />

                
                <Route exact path="/agency" component={Index} />
                <Route exact path="/ChatPage" component={ChatPage} />
                <Route exact path="/ScenariosPage" component={ScenariosPage} />
                <Route exact path="/lessons" component={PersonaSelection} />
                <Route exact path="/lessons/1" component={PersonaSelected} />
                <Route exact path="/lessons/1/scenario" component={PersonaScenaio} />
                <Route exact path="/setting" component={SettingPage} />
                <Route exact path="/recruiter" component={Recruiter} />
                <Route exact path="/scenario-selection/1" component={RateOfRisk} />               
              
                <Route path="*" component={PageNotFound} />
              </Switch>
              </div>
        </div>
      </Router>
    </React.Fragment>
  )
};

export default Routes;