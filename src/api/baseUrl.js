let baseUrl = 'https://jsonplaceholder.typicode.com/posts'
const RUN_ENV = process.env.REACT_APP_RUN_ENV;
switch (process.env.NODE_ENV) {
  case 'production':
    if (RUN_ENV === 'prod') {
      baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    }
    if (RUN_ENV === 'stage') {
      baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    }
    if (RUN_ENV === 'dev') {
      baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    }
    break
  case 'development':
    baseUrl = 'https://jsonplaceholder.typicode.com/posts'
    break
  default:
    break
}
// console.log("process.env", process.env)
export default baseUrl
