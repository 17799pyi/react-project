
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import HeaderBarChatPage from '../constituents/IHeaderBar/HearderBarChatLog';
import HeaderBar from '../constituents/IHeaderBar/HeaderBar';

import LanguageBar from '../constituents/ILanguageBar';

import PersonaSelection from '../scenarios/IPersonaPages/PersonaSelection/PersonaSelection';
import PersonaSelected from '../scenarios/IPersonaPages/PersonaSelected/PersonaSelected';
import PersonaScenaio from '../scenarios/IPersonaPages/PersonaScenario/PersonaScenaio';
import Index from '../scenarios/ITrainingRersultList/Index';
import ChatPage from '../scenarios/IChatPage'
import ScenariosPage from '../scenarios/IScenariosPage'
import SettingPage from '../scenarios/ISettingPage/SettingPage';
import RateOfRisk from '../scenarios/IRateOfRisk/index'
import PageNotFound from '../scenarios/PageNotFound';
import Recruiter from '../scenarios/IRecruiterPage'


import Sidebar from '../constituents/ISidebar';
import AIScore from '../scenarios/IStageOnePages/AIScorePage';
import RateOfRisk1 from '../scenarios/IStageOnePages/RateOfRiskPage';
import VideoChat from '../scenarios/IStageOnePages/VideoChatPage';
import StartOfNewRolePlay from '../scenarios/IStageOnePages/StartOfNewRolePlayPage';
import HistoryCheck from '../scenarios/IStageOnePages/HistoryCheckPage'
import HistoryCheckDetail from '../scenarios/IStageOnePages/HistoryCheckPage/detail'
import Evaluation from '../scenarios/IStageOnePages/Evaluation/index'
import EvaluationDetail from '../scenarios/IStageOnePages/Evaluation/detail'

import '../scenarios/index.css'
import ScenarioSelection from '../scenarios/IScenarioSelection/ScenarioSelection.js';
import ScenariosSelectionPage from '../scenarios/IStageOnePages/StartOfNewRolePlayPage/ScenariosSelectionPage/index.js';
import { base_url } from '../configuration/config'
const Routes = () => {
  return (
    <React.Fragment>
      <Router basename={base_url}>
            {/* <HeaderBar/> */}
            <Sidebar/>          
              <div id="main-content" className='content-large'>
              <LanguageBar/>
              <div className="main-content-inr">
              <Switch>
                <Route exact path="/ai-score/:taskID/:lessonId" component={AIScore} />
                <Route exact path="/rate-of-risk/:taskID/:lessonId" component={RateOfRisk1} />
                <Route exact path="/video-chat/:taskID/:lessonId" component={VideoChat} />
                <Route exact path="/" component={StartOfNewRolePlay} />
                <Route exact path="/scenario-selection" component={ScenariosSelectionPage} />
                <Route exact path="/historycheck" component={HistoryCheck} />
                <Route exact path="/history-check-detail" component={HistoryCheckDetail} />
                <Route exact path="/evaluation" component={Evaluation} />
                <Route exact path="/evaluation-detail" component={EvaluationDetail} />

                
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