import service from "./service";
import proxyService from './proxyService';

export function getUserList(url) {
  return service({
    url: url,
    method: "GET",
  });
}

export function getLessonTask(url) {
  return service({
    url: url,
    method: "GET",
  });
}

// no use
export function getRecruiterList() {
  return service({
    url: "/",
    method: "get",
  });
}

export function getHistoryList(inputText) {
  return service({
    url: `/history?agent=${inputText}`,
    method: "get",
  });
}

export function getPayOfNumber(url) {
  return service({
    url: url,

    method: 'GET'
  })
}
// no use, page is not completed
export function getRateOfRiskCirclePercent(taskID)
{
  return service({
    url : `tasks/${taskID}/stats`,
    method: 'GET'
  })
}
// no result, page is not completed
export function getRateOfRiskScoreBar(taskID)
{
  return service({
    url : `/tasks/${taskID}/chats/stats`,
    method: 'GET'
  })
}
// no use yet, seems not merge into dev yet
export function getAiScoreHistoryChats(taskID)
{
  return service({
    url : `/tasks/${taskID}/chats`,
    method: 'GET'
  })
}

export function getHistoryDetailList(userId) {
  return service({
    url: `/history/${userId}`,
    method: "get",
  });
}

export function getCompanyList(){
  return service({
    url: '/history/agent',
    method : "get"
  })
}

export function startChat(taskId) {
  return service({
    url: '/tasks/' + taskId + '/start-chat',
    method: 'POST'
  })
}

export function postTexhToSpeech(data) {
  return proxyService({
    url: '/node-api/text-to-speech',
    method: 'POST',
    data: data,
  })
}

export function upArrow(chatId, data) {
  return service({
    url: '/chats/' + chatId,
    method: 'PUT',
    data: data
  })
}

export function postVoice(chatId) {
  return proxyService({
    url: '/socket.io',
    method: 'POST'
  })
}

export function finishScoring(chatId) {
  return service({
    url: '/chats/' + chatId + '/finished',
    method: 'PUT'
  })
}

export function getAuthorizeUserList(){
  return service({
    url: '/users/me',
    method : "post"
  })
}

export function getSectionList(){
  return service({
    url: '/maintain/all-sections',
    method : "get"
  })
}

export function getKeywords(query) {
  return service({
    url: `/synonyms?query=${query}`,
    method: 'GET'
  })
}

export function getAllKeywords() {
  return service({
    url: '/synonyms/all',
    method: 'GET'
  })
}

export function postKeywords(data) {
  return service({
    url: '/synonyms',
    method: 'POST',
    data: data
  })
}

export function deleteKeywords({ keyword, synonym }) {
  return service({
    url: `/synonyms?keyword=${keyword}&synonym=${synonym}`,
    method: 'DELETE'
  })
}

export function getMaintainSection(sectionId){
  return service({
    url: `/maintain/section/${sectionId}`,
    method : "get"
  })
}

export function getProcessToken(){
  return service({
    url: `/processes/token`,
    method : "get"
  })
}

export function getPersonActions(){
  return service({
    url: `/maintain/section/personaAction`,
    method : "get"
  })
}

export function getMaterialToken() {
  return service({
    url: '/processes/token',
    method: 'GET'
  })
}

export function uploadMaterail(data) {
  return service({
    url: `/processes/reference-materials`,
    method: 'POST',
    data: data
  })
}
export function saveAndUpdateMatainSection(data, sectionId) {
  return service({
    url: `/maintain/section/${sectionId}`,
    method: 'PUT',
    data: {chatProcess:data}
  })
}

export function getScoreTable(taskID) {
  return service({
    url: `/processes/task/${taskID}`,
    method: 'GET',
  })
}



