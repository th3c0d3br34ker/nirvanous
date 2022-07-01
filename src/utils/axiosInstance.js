import axios from 'axios';
import { CHAT_ENGINE_API_URI } from './config';

const instance = axios.create({
  baseURL: CHAT_ENGINE_API_URI,
});

export default instance;
