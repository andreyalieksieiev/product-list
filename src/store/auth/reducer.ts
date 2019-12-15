import { createReducer } from 'deox';

import { login, changeValue } from './actions';
import { AuthState } from './types';

const initialState: AuthState = {
  email: '',
  password: '',
  token: null,
};

export const reducer = createReducer(initialState, (handle) => [
  handle(changeValue, (state, { payload: { name, value } }) => ({
    ...state,
    [name]: value,
  })),
  handle(
    login.success,
    (state, { payload }) => ({
      ...state,
      token: payload,
    }),
  ),
]);