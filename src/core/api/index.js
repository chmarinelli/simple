import axios from 'axios';
import { responseInterceptor } from './interceptors';
import { API } from '@/config';

export const http = axios.create({
  baseURL: API.BASE_URL,
  timeout:  API.TIMEOUT,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

http.interceptors.response.use(
    responseInterceptor.onFulfilled,
    responseInterceptor.onRejected
);