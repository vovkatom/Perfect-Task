//import { refresh } from '../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../api/auth-api.js';

export const requestAllBoards = async () => {
  const { data } = await axiosInstance.get('/boards');
  return data;
};

export const requestBoardById = async (id) => {
  const { data } = await axiosInstance.get(`/boards/${id}`);
  return { data };
};

export const requestAddBoard = async (body) => {
  const { data } = await axiosInstance.post('/boards', body);
  return data;
};

export const requestDeleteBoardById = async (id) => {
  const { data } = await axiosInstance.delete(`/boards/${id}`);
  return { data };
};

export const updateBoardById = async (id) => {
  const { data } = await axiosInstance.put(`/boards/${id}`);
  return { data };
};