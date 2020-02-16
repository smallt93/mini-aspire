import { all } from 'redux-saga/effects';

import authSaga from '../sagas/auth';
import loansSaga from '../sagas/loans';

export default function* rootSaga() {
  yield all([
    authSaga(),
    loansSaga(),
  ]);
}
