import service from './service'

export function getUserList(url) {
  console.log(url)
  return service({
    url: url,
    method: 'GET'
  })
}

export function getTraineeFilterList(url, data) {
  return service({
    url: url,
    method: 'post',
    data: JSON.stringify(data)
  })
}

export function getThemeList() {
  return service({
    url: '/backend/learningThemes',
    method: 'get'
  })
}
export function patternsForAgentCompanyCode(agentCompanyCode) {
  return service({
    url: `/backend/learningThemes/patternsForAgentCompanyCode/${agentCompanyCode}`,
    method: 'get'
  })
}

export function patternsForTrainersCompany() {
  return service({
    url: `/backend/learningThemes/patternsForTrainersCompany`,
    method: 'get'
  })
}

export function getScenarioByThemeId(themeId) {
  return service({
    url: `/backend/scenario/scenarioList/${themeId}`,
    method: 'get'
  })
}

export function getCustomerList(data) {
  return service({
    url: `/backend/customers/profile`,
    method: 'post',
    data: JSON.stringify(data)
  })
}

// export function getCustomerDetailById(custId) {
//   return service({
//     url: `/backend/customers/customerDetail/${custId}`,
//     method: 'get'
//   })
// }

export function getTraineeDetailsDashboardByAgentId(agentId) {
  return service({
    url: `/backend/getTraineeDetailsDashboard/${agentId}`,
    method: 'get'
  })
}

export function sectionCriteriaList(policy, insurance, trainerId, traineeId, data) {
  return service({
    url: `/backend/sectionCriteria/sectionCriteriaList/${policy}/${insurance}/${trainerId}/${traineeId}`,
    method: 'post',
    data: JSON.stringify(data)
  })
}

export function getTraineeDetailsById(user_id) {
  return service({
    url: `backend/getTraineeDetailsById/userId/${user_id}`,
    method: 'get'
  })
}
export function updateResultForLevel(data) {
  return service({
    url: '/backend/getTraineeDetailsById/updateResultForLevel',
    method: 'PUT',
    data: JSON.stringify(data),
  })
}

export function getTraineeDetailsByDate(user_id) {
  return service({
    url: `backend/getTraineeDetailsById/userByDate/${user_id}`,
    method: 'get'
  })
}

export function getRolePlayDetail(rolePlayId = 1) {
  let params = {
    rolePlayId
  }
  return service({
    url: '/backend/aiScoreResult/getRolePlayDetail',
    method: 'get',
    params
  })
}

export function getAiScoreResultList(rolePlayId = 1, themeId = 1, scenarioId = 1) {
  let params = {
    rolePlayId,
    themeId,
    scenarioId
  }
  return service({
    url: '/backend/aiScoreResult/getAiScoreResultList',
    method: 'get',
    params
  })
}

export function getStartRolePlayList(rolePlayId = 1, themeId = 1, scenarioId = 1) {
  let params = {
    rolePlayId,
    themeId,
    scenarioId
  }
  return service({
    url: '/backend/aiScoreResult/getStartRolePlayList',
    method: 'get',
    params
  })
}

export function updateFeedback(rolePlayId = 1, data) {
  return service({
    url: `/backend/aiScoreResult/updateFeedback/${rolePlayId}`,
    method: 'put',
    data
  })
}

export function updateHumanEval(data) {
  return service({
    url: `/backend/aiScoreResult/updateHumanEval`,
    method: 'put',
    data
  })
}

export function Authenticate(data) {
  return service({
    method: 'POST',
    url: `/backend/login`,
    data: JSON.stringify(data),
  })
}

export function AuthenticateUpdate(data) {
  return service({
    method: 'put',
    url: `/backend/getLoginDetails/update`,
    data: data,
  })
}

export function startNewRolePlayInit(data) {
  return service({
    method: 'POST',
    url: `/v1/recs`,
    data: data
  })
}

export function startNextSection(dividedUrl, sectionId) {
  return service({
    method: 'put',
    // url: `/v1/recs/${callId}/divided/${sectionId}`,
    url: `${dividedUrl}/${sectionId}`
  })
}

export function finishRolePlay(finishedUrl) {
  return service({
    method: 'put',
    // url: `/v1/recs/${callId}/finished`,
    url: `${finishedUrl}`
  })
}

export function pauseRecording(pauseUrl) {
  return service({
    method: 'put',
    url: `${pauseUrl}`
  })
}

export function resumeRecording(resumeUrl) {
  return service({
    method: 'put',
    url: `${resumeUrl}`
  })
}

export function startNewRolePlaySave(data) {
  return service({
    method: 'POST',
    url: `/backend/startNewRolePlay`,
    data: JSON.stringify(data)
  })
}

export function updateRolePlayEndTime(rolePlayId) {
  return service({
    method: 'PUT',
    url: `/backend/updateRolePlayEndTime/${rolePlayId}`,
  })
}

export function updateRecordingStatus(rolePlayId) {
  return service({
    method: 'PUT',
    url: `/backend/updateRecordingStatus/${rolePlayId}`,
  })
}

export function getCustomerPdfFile() {
  return service({
    url: `/backend/learningThemes/withUrls`,
    method: 'get',
  })
}

export function updateSectionStatus(data) {
  return service({
    url: `/backend/updateSectionStatus`,
    method: 'put',
    data: JSON.stringify(data)
  })
}


export function getExamSectionCriteria(agentId, themeId, scenarioId) {
  return service({
    url: `/backend/sectionCriteria/getExamSectionCriteria/${agentId}/${themeId}/${scenarioId}`,
    method: 'get'
  })
}

export function submitExam(data) {
  return service({
    url: `/backend/exam/submitExam`,
    method: 'post',
    data: JSON.stringify(data)
  })
}

export function getKeywords() {
  return service({
    url: `/backend/keywords`,
    method: 'get'
  })
}

export function updateKeywords(data) {
  return service({
    url: `/backend/keywords/updateKeywords`,
    method: 'put',
    data: JSON.stringify(data)
  })
}

export function getAIScoringConditions(scenarioID, sectionID, criteriaID) {
  let params = {
    scenarioID,
    sectionID,
    criteriaID
  }
  return service({
    url: `/backend/keywords/getAIScoringConditions`,
    method: 'get',
    params
  })
}
export function updateKeywordConditions(data) {

  return service({
    url: `/backend/keywords/updateKeywordConditions`,
    method: 'put',
    data: JSON.stringify(data)
  })
}
export function getTrainingPlan(agentCompanyCode) {
  return service({
    url: `/backend/trainingPlans/forAgentCompanyCode/${agentCompanyCode}`,
    method: 'get'
  })
}

export function updateTrainingPlan(data) {
  return service({
    url: `/backend/trainingPlans/update`,
    method: 'put',
    data: JSON.stringify(data)
  })
}

export function getLearningThemePattern(agentCompanyCode) {
  return service({
    url: `/backend/learningThemes/patternsForAgentCompanyCode/${agentCompanyCode}`,
    method: 'get'
  })
}

export function updatePatterns(data) {
  return service({
    url: `/backend/learningThemes/updatePatterns`,
    method: 'put',
    data: JSON.stringify(data)
  })
}

export function getCheckCriteriaList(agentCompanyCode) {
  return service({
    url: `/backend/sectionCriteria/getCheckCriteriaList/${agentCompanyCode}`,
    method: 'get',
  })
}

export function updateCheckCriteriaList(data) {
  return service({
    url: `/backend/sectionCriteria/upsertCheckCriteria`,
    method: 'put',
    data: JSON.stringify(data)
  })
}

export function getRecruiterList() {
    return service({
      url: '/',
      method: 'get'
    })
  }