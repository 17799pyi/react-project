let baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com'
const RUN_ENV = process.env.REACT_APP_RUN_ENV;
switch (process.env.NODE_ENV) {
  case 'production':
    if (RUN_ENV === 'prod') {
      baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com'
    }
    if (RUN_ENV === 'stage') {
      baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com'
    }
    if (RUN_ENV === 'dev') {
      baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com'
    }
    break
  case 'development':
    baseUrl = 'http://va2-mvp2-dev.japaneast.cloudapp.azure.com'
    break
  default:
    break
}
// console.log("process.env", process.env)
export default baseUrl
