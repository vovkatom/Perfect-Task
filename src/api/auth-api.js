import axios from 'axios';
import { refresh } from '../redux/auth/auth-operations';
import { logout } from '../redux/auth/auth-operations';
// import { store } from '../redux/store.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export const axiosInstance = axios.create({
  baseURL: 'https://perfect-task-back.onrender.com/api',
});

const setToken = (accessToken) => {
  if (accessToken) {
    return (axiosInstance.defaults.headers.authorization = `Bearer ${accessToken}`);
  }
  axiosInstance.defaults.headers.authorization = '';
};

//*global getState, instance*/ // не заберати цей коментар
axiosInstance.interceptors.response.use(
  (response) => {
    console.log('why', response);
    return response;
  },
  (error) => {
    console.log('MYYYYYYYYYYYY', error.response.status);
    if (error.response.status === 401) {
      console.log('first');
      // refresh();
      let dispatch = useDispatch();
      useEffect(() => {
        return dispatch(refresh());
      });
      // return axiosInstance.request(error.config);
    }
    if (error.response.status === 403) {
      let dispatch = useDispatch();
      useEffect(() => {
        return dispatch(logout());
      });
    }
    return Promise.reject(error);
  }
);

export const refreshRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/refresh', body);
  setToken(data.accessToken);
  return data;
};

export const signupRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signup', body);
  setToken(data.accessToken);
  return data;
};

export const loginRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/signin', body);
  setToken(data.accessToken);
  return data;
};

export const currentRequest = async (token) => {
  setToken(token);
  try {
    const { data } = await axiosInstance.get('/users/current');
    return data;
  } catch (error) {
    setToken();
    throw error;
  }
};

/*--------------------------------------------------------*/
export const supportRequest = async (body) => {
  const { data } = await axiosInstance.post('/users/support', body);
  return data;
};
/*--------------------------------------------------------*/

export const logoutRequest = async () => {
  const { data } = await axiosInstance.post('/users/logout');
  return data;
};

export const updateProfileRequest = async (formData) => {
  try {
    const { data } = await axiosInstance.patch('/users/update', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
