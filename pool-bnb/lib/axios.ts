import axios from 'axios';

const configuredBaseUrl = process.env.NEXT_PUBLIC_API_URL?.trim();
const normalizedBaseUrl = configuredBaseUrl?.replace(/\/+$/, '');
const baseURL = normalizedBaseUrl
  ? normalizedBaseUrl.endsWith('/api')
    ? normalizedBaseUrl
    : `${normalizedBaseUrl}/api`
  : '/api';

const instance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
