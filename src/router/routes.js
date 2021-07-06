
import React from 'react';
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom';

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
import LoginPage from '../scenarios/ILoginPage'
import HistoryCheck from '../scenarios/IStageOnePages/HistoryCheckPage'
import HistoryCheckDetail from '../scenarios/IStageOnePages/HistoryCheckPage/detail'
import Evaluation from '../scenarios/IStageOnePages/Evaluation/index'
import EvaluationDetail from '../scenarios/IStageOnePages/Evaluation/detail'
import RegisterSynonyms from '../scenarios/RegisterSynonyms/index'

import '../scenarios/index.css'
import ScenarioSelection from '../scenarios/IScenarioSelection/ScenarioSelection.js';
import ScenariosSelectionPage from '../scenarios/IStageOnePages/StartOfNewRolePlayPage/ScenariosSelectionPage/index.js';
import { base_url } from '../configuration/config'
import AdminSidebar from '../constituents/IAdminSidebar'
import store from '../storage'
import { LastLocationProvider } from 'react-router-last-location';
import { getAuthorizeUserList } from "../request/api";


function CheckLoginStatus(){
  const location = useLocation();
  const mainJsx = <>
                    <Sidebar/>
                    <div id="main-content" className='content-large'>
                      {/* <LanguageBar/> */}
                        <div className="main-content-inr">
                        <Switch>
                          <Route exact path="/ai-score/:taskID/:lessonId" component={AIScore} />
                          <Route exact path="/rate-of-risk/:taskID/:lessonId" component={RateOfRisk1} />
                          <Route exact path="/video-chat/:taskID/:lessonId" component={VideoChat} />
                          <Route exact path="/start-new-role-play" component={StartOfNewRolePlay} /> 
                          <Route exact path="/scenario-selection" component={ScenariosSelectionPage} />
                          <Route exact path="/historycheck" component={HistoryCheck} />
                          <Route exact path="/history-check-detail" component={HistoryCheckDetail} />
                          <Route exact path="/agency" component={Index} />
                          <Route exact path="/ChatPage" component={ChatPage} />
                          <Route exact path="/ScenariosPage" component={ScenariosPage} />
                          <Route exact path="/lessons" component={PersonaSelection} />
                          <Route exact path="/lessons/1" component={PersonaSelected} />
                          <Route exact path="/lessons/1/scenario" component={PersonaScenaio} />
                          <Route exact path="/setting" component={SettingPage} />
                          <Route exact path="/recruiter" component={Recruiter} />
                          <Route exact path="/scenario-selection/1" component={RateOfRisk} />               
                        
                          <Route path="*" component={StartOfNewRolePlay} />
                        </Switch>
                        </div>
                    </div>
                  </>

  const adminJsx =  <>
                      <AdminSidebar/>
                      <div id="main-content" className='content-large'>
                        {/* <LanguageBar/> */}
                          <div className="main-content-inr">
                          <Switch>
                            <Route exact path="/admin/create/" component={Evaluation} />
                            <Route exact path="/admin/create/register-synonyms" component={RegisterSynonyms} />
                            <Route exact path="/admin/create/:tab" component={Evaluation} />
                            <Route exact path="/admin/create/evaluation-detail/:sectionId" component={EvaluationDetail} />
                            
                            <Route path="*" component={PageNotFound} />
                          </Switch>
                          </div>
                      </div>
                    </>

  // offer a fake login page for debugging and testing in local and DEV env
  if(!process.env.REACT_APP_CURRENT_ENV || process.env.REACT_APP_CURRENT_ENV == 'dev'){
    if(location.pathname == '/'){
      return <Route exact path="/" component={LoginPage} />
    } else {
      return ShowAdminOrNormalPage(adminJsx, mainJsx);
    }
  } else {
    return ShowAdminOrNormalPage(adminJsx, mainJsx);
  }
};

function ShowAdminOrNormalPage(adminJsx, mainJsx){
  const location = useLocation();
  let userAuth = store.getState().login_task_all? store.getState().login_task_all.userRoles : [];
  if(location.pathname.split("/")[1] == 'admin' && userAuth.includes("ADMINISTRATOR")){
    return adminJsx;
  } else {
    return mainJsx;
  }
}

const Routes = () => {
  return (
    <React.Fragment>
          <Router basename={base_url}>
                {/* <HeaderBar/> */}
            <LastLocationProvider>
                <CheckLoginStatus></CheckLoginStatus>
            </LastLocationProvider>
          </Router>
    </React.Fragment>
  )
};

export default Routes;