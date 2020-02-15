import {
  all, call, put,
  takeLeading,
} from 'redux-saga/effects';
import * as LoanAPIs from '../../apis/loans';
import { 
  actions as loanActions,
  LOAN_SUBMIT,
} from '../../reducers/loans';

export function* handleLoanSubmit({ loanValue }) {
  try {
    const loanResponseData = yield call(LoanAPIs.loanSubmit, loanValue);
    const error = null;
    
    if (error) throw error;

    yield put(loanActions.loanSubmitSuccess(loanResponseData));
  } catch (error) {
    yield put(loanActions.loanSubmitFailed(error));
  }
}

export default function* authSaga() {
  yield all([
    takeLeading(LOAN_SUBMIT, handleLoanSubmit),
  ]);
}
