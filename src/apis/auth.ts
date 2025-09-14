import api from '@/plugins/axios';
import type { LoginData, RegisterData } from '@/types/authType';

export const login = (data: LoginData) => {
  return api.post('/users/login', data);
};

export const register = (data: RegisterData) => {
  return api.post('/users/register', data);
};

export const logout = () => {
  return api.post('/users/logout');
};
