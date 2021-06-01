import axios from 'axios' // import axios
import baseUrl from './baseUrl'
import EventBus from './../components/EventBus'
import store from '../store'
let timestamp = `${new Date().getTime()}`;


const service = axios.create({
  baseURL: baseUrl,
  // timeout: 5000,
  // headers: { 'Content-Type': 'application/json' },
})

service.interceptors.request.use(config => {
  config.headers['Cache-Control'] = 'no-store, no-cache';
  config.headers['Accept'] = 'application/json';
  config.headers["Authorization"] = "bearer " + store.getState().vAgent.access_token;
  config.params = config.params || {};
  config.params['timestamp'] = timestamp;
  return config;
})

service.interceptors.response.use(response => {
  return response
}, error => {
  console.log('error ',error)
  if (error.response.status === 401) {
    EventBus.dispatch('show_snack', { message: 'トークンの有効期限が切れました', type: "error" })
  store.dispatch({ type: 'ACCESS_TOKEN', access_token: '' });
    store.dispatch({ type: 'USERNAME', username: '' });
    store.dispatch({ type: 'AGENT_COMPANY', agent_company: {} });
    return window.location.href = '/'   // login 
  }
  return Promise.reject(error);
})

export default service
