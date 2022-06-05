import axios from 'axios';

const config = {
  baseURL: 'http://localhost:3000/api',
};

export const api = axios.create(config);
