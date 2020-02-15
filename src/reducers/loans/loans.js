export const LOAN_SUBMIT = 'loan/LOAN_SUBMIT';
export const LOAN_SUBMIT_SUCCESS = 'loan/LOAN_SUBMIT_SUCCESS';
export const LOAN_SUBMIT_FAILED = 'loan/LOAN_SUBMIT_FAILED';
export const LOAN_CLEAR_STATUS = 'loan/LOAN_CLEAR_STATUS';

const initialState = {
  loanData: [],
  isLoading: false,
  isLoanSuccess: false,
  loanMessage: '',
};

export const getLoadData = ({ loans }) => loans.loanData;
export const getLoading = ({ loans }) => loans.isLoading;
export const getLoadSuccess = ({ loans }) => loans.isLoanSuccess;
export const getMessageError = ({ loans }) => loans.loanMessage;

export const selectors = {
  getLoadData,
  getLoading,
  getLoadSuccess,
  getMessageError,
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

const loanClearStatus = () => ({
  type: LOAN_CLEAR_STATUS,
});

export const actions = {
  loanSubmit,
  loanSubmitSuccess,
  loanSubmitFailed,

  loanClearStatus,
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

    case LOAN_CLEAR_STATUS: {
      return {
        ...state,
        isLoanSuccess: false,
      }
    }
    
    default:
      return state;
  }
}