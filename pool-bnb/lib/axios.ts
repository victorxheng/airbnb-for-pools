import axios from 'axios';

const instance = axios.create({
  // Use same-origin API by default so client requests work across any dev/prod host.
  baseURL: process.env.NEXT_PUBLIC_API_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
