let baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com/backend/aflac-trainer'

const RUN_ENV = process.env.REACT_APP_RUN_ENV;
switch (process.env.NODE_ENV) {
  case 'production':
    if (RUN_ENV === 'prod') {
      baseUrl = '/'
    }
    if (RUN_ENV === 'stage') {
      baseUrl = '/'
    }
    if (RUN_ENV === 'dev') {
      baseUrl = '/'
    }
    break
  case 'development':
    baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com/backend/aflac-trainer'
    break
  default:
    break
}
console.log("process.env", process.env)
export default baseUrl
