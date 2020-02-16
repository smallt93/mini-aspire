import {
  all, call, put,
  takeLeading,
  takeEvery, select,
} from 'redux-saga/effects';
import { push, getLocation } from 'connected-react-router';
import * as AuthAPIs from '../../apis/auth';
import {
  actions as authActions,
  selectors as authSelectors,
  AUTH_REGISTER_USER,
  AUTH_REGISTER_ADMIN,
  AUTH_LOGIN,
  AUTH_LOGOUT,
} from '../../reducers/auth';

export function* userRegistration({ userData }) {
  try {
    const userResponseData = yield call(AuthAPIs.userRegister, userData);
    const error = null;
    
    if (error) throw error;

    yield put(authActions.userRegisterSuccess(userResponseData));
    yield put(authActions.loginSuccess());
  } catch (error) {
    yield put(authActions.userRegisterFailed(error));
  }
}

export function* adminRegistration({ adminData }) {
  try {
    const adminResponseData = yield call(AuthAPIs.adminRegister, adminData);
    const error = null;
    
    if (error) throw error;

    yield put(authActions.adminRegisterSuccess(adminResponseData));
    yield put(authActions.loginSuccess());
  } catch (error) {
    yield put(authActions.adminRegisterFailed(error));
  }
}

function* handleLogin({ loginValue }) {
  try {
    const loginData = yield call(AuthAPIs.login, loginValue);
    const { email, password } = loginData;
    const userData = yield select(authSelectors.getUserData);
    const adminData = yield select(authSelectors.getAdminData);

    const emailCompare = email === userData.email || email === adminData.email;
    const passwordCompare = password === userData.password || password === adminData.password;
    const isAllowed = emailCompare && passwordCompare;

    const error = null;
    if (error) throw error;

    if (isAllowed) {
      yield put(authActions.loginSuccess());
    }
  } catch (error) {
    
    yield put(authActions.loginFailed(error));
  }
}

function* handleLogout() {
  const location = yield select(getLocation);
  const { pathname } = location;

  if (pathname !== '/login') {
    yield put(push('/login'));
  }
}

export default function* authSaga() {
  yield all([
    takeLeading(AUTH_REGISTER_USER, userRegistration),
    takeLeading(AUTH_REGISTER_ADMIN, adminRegistration),
    takeLeading(AUTH_LOGIN, handleLogin),
    takeEvery(AUTH_LOGOUT, handleLogout),
  ]);
}
