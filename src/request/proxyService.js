import axios from 'axios'; // import axios
import { translate_server_url } from '../configuration/config';
import store from '../storage';

let server_url = translate_server_url?translate_server_url:'';
if(process.env.REACT_APP_CURRENT_ENV == 'stage' || process.env.REACT_APP_CURRENT_ENV == 'prod'){
  server_url = window.location.origin + '/apigw/va2roleplay/mvp2/webapp';
}
const service = axios.create({
  baseURL: server_url + '/proxy',
  // timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

service.interceptors.request.use(config => {
  if(!process.env.REACT_APP_CURRENT_ENV || process.env.REACT_APP_CURRENT_ENV == 'dev'){
    config.headers['x-aanet-user'] = store.getState().requestHeaderUserId;
    config.headers['x-aanet-group'] = store.getState().requestHeaderGroupId;
  }
  config.headers['Cache-Control'] = 'no-store, no-cache';
  config.headers['Accept'] = 'application/json';
  return config;
})

service.interceptors.response.use(response => {
  return response
}, error => {
  console.log('error ', error)
  return Promise.reject(error);
})

export default service
