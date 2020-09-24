import { fetch, post } from '@/utils/request';

const register = ({ name, telephone, password }: { name: string; telephone: string; password: string }) => post('auth/register', { name, telephone, password });

const info = () => {
  return fetch('auth/info');
};

export default {
  register,
  info,
};
