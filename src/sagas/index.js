import { all } from 'redux-saga/effects';
import '../utils/axiosClient';



export default function* rootSaga() {
  yield all([
    // newsSaga(),
  ]);
}
