import axios from 'axios' // import axios
import { backend_url } from '../configuration/config'
import EventShuttle from '../eventShuttle'
import store from '../storage'

const service = axios.create({
  baseURL: backend_url,
  // timeout: 5000,
  headers: { 'Content-Type': 'application/json; charset=UTF-8' },
  crossdomain: true,
})

service.interceptors.request.use(config => {
  if(!process.env.REACT_APP_CURRENT_ENV || process.env.REACT_APP_CURRENT_ENV == 'dev'){
    config.headers['x-aanet-user'] = store.getState().requestHeaderUserId;
    config.headers['x-aanet-group'] = store.getState().requestHeaderGroupId;
  }
  config.headers['Access-Control-Allow-Origin'] = '*';
  config.headers['Access-Control-Expose-Headers'] = 'Content-Length,Content-Range';
  config.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS';
  config.headers['Access-Control-Allow-Headers'] = 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range';
  config.headers['Cache-Control'] = 'no-store, no-cache';
  config.headers['Accept'] = 'application/json';
  config.headers['Content-Security-Policy'] = 'upgrade-insecure-requests';
  // config.headers["Authorization"] = "bearer " + store.getState().vAgent.access_token;
  // config.params = config.params || {};
  // config.params['timestamp'] = timestamp;
  return config;
})

service.interceptors.response.use(response => {
  return response
}, error => {
  console.log('error ',error)
  // if (error.response.status === 401) {
  //   EventShuttle.dispatch('show_snack', { message: 'トークンの有効期限が切れました', type: "error" })
  // store.dispatch({ type: 'ACCESS_TOKEN', access_token: '' });
  //   store.dispatch({ type: 'USERNAME', username: '' });
  //   store.dispatch({ type: 'AGENT_COMPANY', agent_company: {} });
  //   return window.location.href = '/'   // login 
  // }
  return Promise.reject(error);
})

export default service
