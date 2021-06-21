import axios from 'axios'; // import axios
import { proxyUrl } from '../configuration/config';
import store from '../storage';


const service = axios.create({
  baseURL: proxyUrl + '/proxy',
  // timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
})

service.interceptors.request.use(config => {
  config.headers['x-aanet-user'] = 'test-user-id';
  config.headers['x-aanet-group'] = 'G1test-agent,G5ARPevaluater';
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
