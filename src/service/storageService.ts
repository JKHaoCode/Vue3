// 本地服务

const PREFIX = 'ginessential_';

const USER_PREFIX = `${PREFIX}user_`;
const USER_TOEKN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;

const set = (key: string, data: any) => {
  localStorage.setItem(key, data);
};

const get = (key: string) => {
  return localStorage.getItem(key) || '';
};

export default {
  set,
  get,
  USER_INFO,
  USER_TOEKN,
};
