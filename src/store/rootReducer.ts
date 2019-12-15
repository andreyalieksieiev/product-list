import { Action, combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { history } from 'services/history';
import { reducer as auth } from 'store/auth/reducer';
import { RESET_STORE } from './auth/types';

const persistConfig = {
  storage,
  key: 'root',
  whitelist: ['auth'],
};

const appReducer = combineReducers({
  auth,
  router: connectRouter(history),
});

const rootReducer = (state: AppState | undefined, action: Action) => {
  if (action.type === RESET_STORE) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default persistReducer(persistConfig, rootReducer);
export type AppState = ReturnType<typeof appReducer>;