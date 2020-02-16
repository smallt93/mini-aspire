import { STATUS_TYPE } from '../../utils/enums';
import moment from 'moment';

export const LOAN_SUBMIT = 'loan/LOAN_SUBMIT';
export const LOAN_SUBMIT_SUCCESS = 'loan/LOAN_SUBMIT_SUCCESS';
export const LOAN_SUBMIT_FAILED = 'loan/LOAN_SUBMIT_FAILED';
export const LOAN_CLEAR_STATUS = 'loan/LOAN_CLEAR_STATUS';

export const LOAN_APPROVE_SUBMIT = 'loan/LOAN_APPROVE_SUBMIT';
export const LOAN_DISMISS_SUBMIT = 'loan/LOAN_DISMISS_SUBMIT';
export const LOAN_REMOVE = 'loan/LOAN_REMOVE';

export const LOAN_SELECTED = 'loan/LOAN_SELECTED';

export const LOAN_REPAY = 'loan/LOAN_REPAY';
export const LOAN_REPAY_SUCCESS = 'loan/LOAN_REPAY_SUCCESS';
export const LOAN_REPAY_FAILED = 'loan/LOAN_REPAY_FAILED';

export const LOAN_SAVE_HISTORY_LIST = 'loan/LOAN_SAVE_HISTORY_LIST';

const initialState = {
  loanData: [],
  isLoading: false,
  isLoanSuccess: false,
  isRepaySuccess: false,
  loanMessage: '',
  loanSelectedId: null,
  repaidHistoryList: [],
};

export const getLoanData = ({ loans }) => loans.loanData;
export const getRepaidHistoryList = ({ loans }) => loans.repaidHistoryList;
export const getLoading = ({ loans }) => loans.isLoading;
export const getLoanSuccess = ({ loans }) => loans.isLoanSuccess;
export const getRepaySuccess = ({ loans }) => loans.isRepaySuccess;
export const getMessageError = ({ loans }) => loans.loanMessage;
export const getLoanSelectedId = ({ loans }) => loans.loanSelectedId;

export const selectors = {
  getLoanData,
  getLoading,
  getLoanSuccess,
  getMessageError,
  getLoanSelectedId,
  getRepaySuccess,
  getRepaidHistoryList,
}

const loanSubmit = (loanValue) => ({
  type: LOAN_SUBMIT,
  loanValue,
});

const loanSubmitSuccess = (loanData) => ({
  type: LOAN_SUBMIT_SUCCESS,
  loanData,
})

const loanSubmitFailed = (errorMsg) => ({
  type: LOAN_SUBMIT_FAILED,
  errorMsg,
});

const loanApproveSubmit = (loanId) => ({
  type: LOAN_APPROVE_SUBMIT,
  loanId,
});

const loanDismissSubmit = (loanId) => ({
  type: LOAN_DISMISS_SUBMIT,
  loanId,
});

const loanRemove = (loanId) => ({
  type: LOAN_REMOVE,
  loanId,
})

const loanClearStatus = () => ({
  type: LOAN_CLEAR_STATUS,
});

const loanSelected = (loanId) => ({
  type: LOAN_SELECTED,
  loanId,
})

const loanRepay = (loanId) => ({
  type: LOAN_REPAY,
  loanId,
});

const loanRepaySuccess = (loanId) => ({
  type: LOAN_REPAY_SUCCESS,
  loanId,
});

const loanRepayFailed = () => ({
  type: LOAN_REPAY_SUCCESS,
});

const saveHistoryLoanList = (loanItem) => ({
  type: LOAN_SAVE_HISTORY_LIST,
  loanItem,
})

export const actions = {
  loanSubmit,
  loanSubmitSuccess,
  loanSubmitFailed,

  loanClearStatus,
  loanApproveSubmit,
  loanDismissSubmit,

  loanRemove,
  loanSelected,

  loanRepay,
  loanRepaySuccess,
  loanRepayFailed,

  saveHistoryLoanList,
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAN_SUBMIT: {
      return {
        ...state,
        isLoading: true,
        isLoanSuccess: false,
        loanMessage: '',
      }
    }

    case LOAN_SUBMIT_SUCCESS: {
      const { loanData } = action;
      const newLoanData = [
        ...state.loanData,
        loanData,
      ]
      return {
        ...state,
        loanData: newLoanData,
        isLoading: false,
        isLoanSuccess: true,
        loanMessage: '',
      }
    }
      
    case LOAN_SUBMIT_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        isLoading: false,
        isLoanSuccess: false,
        loanMessage: errorMsg,
      }
    }

    case LOAN_SUBMIT_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        isLoading: false,
        isLoanSuccess: false,
        loanMessage: errorMsg,
      }
    }

    case LOAN_APPROVE_SUBMIT: {
      const { loanId } = action;
      const newLoanList = [...state.loanData];
      const updateLoanList = newLoanList.map(l => {
        if (l.id === loanId) {
          l.status = STATUS_TYPE.APPROVED;
          return l;
        }
        return l;
      })
      return {
        ...state,
        loanData: updateLoanList,
      }
    }

    case LOAN_DISMISS_SUBMIT: {
      const { loanId } = action;
      const newLoanList = [...state.loanData];
      const updateLoanList = newLoanList.map(l => {
        if (l.id === loanId) {
          l.status = STATUS_TYPE.DISMISS;
          return l;
        }
        return l;
      })
      return {
        ...state,
        loanData: updateLoanList,
      }
    }

    case LOAN_REMOVE: {
      const { loanId } = action;
      const newLoanList = [...state.loanData];
      const updateLoanList = newLoanList.filter(l => l.id !== loanId);
      return {
        ...state,
        loanData: updateLoanList,
      }
    }

    case LOAN_SELECTED: {
      const { loanId } = action;
      return {
        ...state,
        loanSelectedId: loanId,
      }
    }

    case LOAN_CLEAR_STATUS: {
      return {
        ...state,
        isLoanSuccess: false,
        isRepaySuccess: false,
        loanSelectedId: null,
      }
    }

    case LOAN_REPAY: {
      return {
        ...state,
        isRepaySuccess: false,
      }
    }

    case LOAN_REPAY_SUCCESS: {
      const { loanId } = action;
      const newLoanList = [...state.loanData];
      const updateLoanList = newLoanList.map(l => {
        if (l.id === loanId) {
          if (l.amount <= l.payPerWeek) {
            l.amount = 0;
            l.status = 'paid';
            return l;
          }
          l.amount = l.amount - l.payPerWeek;
          return l;
        }
        return l;
      })

      return {
        ...state,
        isRepaySuccess: true,
        loanData: updateLoanList,
      }
    }

    case LOAN_SAVE_HISTORY_LIST: {
      const { loanItem } = action;
      const newRepaidHistoryList = [
        ...state.repaidHistoryList,
        loanItem,
      ]
      return {
        ...state,
        repaidHistoryList: newRepaidHistoryList,
      }
    }

    case LOAN_REPAY_FAILED: {
      return {
        ...state,
        isRepaySuccess: false,
      }
    }
    
    default:
      return state;
  }
}