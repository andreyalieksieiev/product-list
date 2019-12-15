import { createAction } from 'deox';
import { RESET_STORE } from 'store/auth/types';

export const login = {
  request: createAction('auth/LOGIN_REQUEST'),
  success: createAction('auth/LOGIN_SUCCESS', (resolve) => (jwt: string) => resolve(jwt)),
  fail: createAction('auth/LOGIN_FAIL', (resolve) => (error: string) => resolve(error)),
};

export const changeValue = createAction('auth/CHANGE_VALUE', (resolve) => ({ name, value }) => resolve({ name, value }));

export const logout = createAction(RESET_STORE);