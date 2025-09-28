import api from '@/plugins/axios';
import type { LoginData, RegisterData } from '@/types/authType';

export const login = (data: LoginData) => {
  return api.post('user/login', data);
};

export const register = (data: RegisterData) => {
  return api.post('/user/register', data);
};

export const logout = () => {
  return api.post('/user/logout');
};
