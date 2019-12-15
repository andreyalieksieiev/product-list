import {
  call,
  put,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';

import api from 'services/api';
import { apiPaths } from 'services/apiPaths';
import { login}  from './actions';

function* loginUserSaga(): SagaIterator {
  try {
    const { email, password } = yield select((store) => store.auth);
    console.log('email: ', email);
    console.log('password: ', password);
    yield call(api.get, apiPaths.login);
    const jwt = '86fasfgfsogHGad';   
    yield put(login.success(jwt));
  } catch (err) {
    yield put(login.fail(err.response.data));
  }
}

export function* watchAuth(): SagaIterator {
  yield takeLatest(login.request, loginUserSaga);
}