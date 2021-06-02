import service from './service'

export function getUserList(url) {
  console.log(url)
  return service({
    url: url,
    method: 'GET'
  })
}

export function getLessonTask(url)
{
  return service({
    url: url,
    method: 'GET'
  })
}

export function getRecruiterList() {
    return service({
      url: '/',
      method: 'get'
    })
  }