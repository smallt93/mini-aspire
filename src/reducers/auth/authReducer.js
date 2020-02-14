export const AUTH_USER_LOGIN = 'auth/AUTH_USER_LOGIN';
export const AUTH_ADMIN_LOGIN = 'auth/AUTH_ADMIN_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'auth/AUTH_LOGIN_FAILED';

const initialState = {
  isLoading: false,
  authenticated: false,
  errorMessage: '',
};

export const getAuthenticatedStatus = ({ auth }) => !!auth.authenticated;

export const selectors = {
  getAuthenticatedStatus,
};

const userLogin = () => ({
  type: AUTH_USER_LOGIN,
});

const adminLogin = () => ({
  type: AUTH_ADMIN_LOGIN,
});

const loginSuccess = (userData) => ({
  type: AUTH_LOGIN_SUCCESS,
  userData,
});

const loginFailed = (errorMessage) => ({
  type: AUTH_LOGIN_FAILED,
  errorMessage,
});

export const actions = {
  userLogin,
  adminLogin,
  loginSuccess,
  loginFailed,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER_LOGIN:
    case AUTH_ADMIN_LOGIN: {
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    };

    case AUTH_LOGIN_SUCCESS: {
      const { userData } = action;
      return {
        ...state,
        userData,
        isLoading: false,
        authenticated: true,
        errorMessage: '',
      };
    };

    case AUTH_LOGIN_FAILED: {
      const { errorMessage } = action;
      return {
        ...state,
        authenticated: false,
        errorMessage,
      };
    };
  
    default:
      return state;
  }
}