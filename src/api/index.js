import logger from 'utils/logger';
import instance from 'utils/axiosInstance';
import { CHAT_ENGINE_ID, CHAT_ENGINE_KEY } from '../utils/config';

export const fetchMe = async (currentUser) => {
  try {
    await instance.get('/users/me', {
      headers: {
        'project-id': CHAT_ENGINE_ID,
        'user-name': currentUser?.email,
        'user-secret': currentUser?.uid,
      },
    });
  } catch (error) {
    logger(error);
  }
};

export const createUser = async (formData) => {
  try {
    instance.post('/users', formData, {
      headers: {
        'private-key': CHAT_ENGINE_KEY,
      },
    });
  } catch (error) {
    logger(error);
  }
};

export const getFile = async (url) => {
  const response = await instance.get(url);
  const data = await response.blob();
  return new File([data], 'test.jpg', { type: 'image/jpeg' });
};
