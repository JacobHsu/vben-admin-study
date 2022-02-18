import { defineStore } from 'pinia';
import { store } from '/@/store';
import { ROLES_KEY, TOKEN_KEY, USER_INFO_KEY } from '/@/enums/cacheEnum';
import { getAuthCache, setAuthCache } from '/@/utils/auth';


interface UserState {
  token?: string;
  sessionTimeout?: boolean;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    // token
    token: undefined,
    // Whether the login expired
    sessionTimeout: false,
  }),
  getters: {
    getToken(): string {
      return this.token || getAuthCache<string>(TOKEN_KEY);
    },
    getSessionTimeout(): boolean {
      return !!this.sessionTimeout;
    },
  },
  actions: {
    setToken(info: string | undefined) {
      this.token = info ? info : ''; // for null or undefined value
      setAuthCache(TOKEN_KEY, info);
    },
    setSessionTimeout(flag: boolean) {
      this.sessionTimeout = flag;
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
