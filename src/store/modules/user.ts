import storageService from '@/service/storageService';
import { user } from '@/views/data.type';

interface userState {
  token: string;
  userInfo: user | null,
}

const userModule = {
  namespaced: true,
  state: {
    token: storageService.get(storageService.USER_TOEKN),
    userInfo: JSON.parse(storageService.get(storageService.USER_INFO)),
  },
  mutations: {
    SET_TOKEN(state: userState, token: string) {
      storageService.set(storageService.USER_TOEKN, token);

      state.token = token;
    },
    SET_USERINFO(state: userState, userInfo: user) {
      storageService.set(storageService.USER_INFO, JSON.stringify(userInfo));

      state.userInfo = userInfo;
    },
  },
};

export default userModule;