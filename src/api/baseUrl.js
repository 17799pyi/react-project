let baseUrl = ''
const RUN_ENV = process.env.REACT_APP_RUN_ENV;
switch (process.env.NODE_ENV) {
  case 'production':
    if (RUN_ENV === 'prod') {
      baseUrl = '/apigw/va2roleplay'
    }
    if (RUN_ENV === 'stage') {
      baseUrl = '/apigw/va2roleplay'
    }
    if (RUN_ENV === 'dev') {
      baseUrl = '/'
    }
    break
  case 'development':
    baseUrl = '/'
    break
  default:
    break
}
console.log("process.env", process.env)
export default baseUrl
