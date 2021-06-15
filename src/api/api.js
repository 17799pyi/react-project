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

export function getRateOfRiskCirclePercent(taskID)
{
  return service({
    url : `tasks/${taskID}/stats`,
    method: 'GET'
  })
}

export function getRateOfRiskScoreBar(taskID)
{
  return service({
    url : `/tasks/${taskID}/chats/stats`,
    method: 'GET'
  })
}

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
    url: '/finished',
    method: 'GET'
  })
}

export function getAuthorizeUserList(){
  return service({
    url: '/users/me',
    method : "post"
  })
}