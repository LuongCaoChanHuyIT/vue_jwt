import api from '@/plugins/axios';

export const login = (data: { email: string; password: string }) => {
  return api.post('/login', data);
};

export const register = (data: { email: string; password: string }) => {
  return api.post('users/register', data);
};

export const logout = () => {
  return api.post('/logout');
};
