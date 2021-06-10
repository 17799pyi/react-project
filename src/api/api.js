import service from "./service";

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