export const AUTH_LOGIN = 'auth/AUTH_LOGIN';
export const AUTH_LOGIN_SUCCESS = 'auth/AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_FAILED = 'auth/AUTH_LOGIN_FAILED';

export const AUTH_REGISTER_USER = 'auth/AUTH_REGISTER_USER';
export const AUTH_REGISTER_USER_SUCCESS = 'auth/AUTH_REGISTER_USER_SUCCESS';
export const AUTH_REGISTER_USER_FAILED = 'auth/AUTH_REGISTER_USER_FAILED';

export const AUTH_REGISTER_ADMIN = 'auth/AUTH_REGISTER_ADMIN';
export const AUTH_REGISTER_ADMIN_SUCCESS = 'auth/AUTH_REGISTER_ADMIN_SUCCESS';
export const AUTH_REGISTER_ADMIN_FAILED = 'auth/AUTH_REGISTER_ADMIN_FAILED';

export const AUTH_LOGOUT = 'auth/AUTH_LOGOUT';

const initialState = {
  isLoading: false,
  authenticated: false,
  errorMessage: '',
  userData: {},
  adminData: {},
  userRole: null,
};

export const getUserData = ({ auth }) => auth.userData;
export const getAdminData = ({ auth }) => auth.adminData;
export const getAuthenticatedStatus = ({ auth }) => !!auth.authenticated;
export const getUserRole = ({ auth }) => auth.userRole;
export const getErrorMessage = ({ auth }) => auth.errorMsg;
export const isRegistering = ({ auth }) => auth.isRegistering;

export const selectors = {
  getUserData,
  getAdminData,
  getUserRole,
  getAuthenticatedStatus,
  getErrorMessage,
  isRegistering,
};

// user register

const userRegister = (userData) => ({
  type: AUTH_REGISTER_USER,
  userData,
});

const userRegisterSuccess = (userData) => ({
  type: AUTH_REGISTER_USER_SUCCESS,
  userData,
});

const userRegisterFailed = (errorMsg) => ({
  type: AUTH_REGISTER_USER_FAILED,
  errorMsg,
});

// admin register

const adminRegister = (adminData) => ({
  type: AUTH_REGISTER_ADMIN,
  adminData,
});

const adminRegisterSuccess = (adminData) => ({
  type: AUTH_REGISTER_ADMIN_SUCCESS,
  adminData,
});

const adminRegisterFailed = (errorMsg) => ({
  type: AUTH_REGISTER_ADMIN_FAILED,
  errorMsg,
});

// login

const login = (loginValue) => ({
  type: AUTH_LOGIN,
  loginValue,
});

const loginSuccess = (role) => ({
  type: AUTH_LOGIN_SUCCESS,
  role,
});

const loginFailed = (errorMessage) => ({
  type: AUTH_LOGIN_FAILED,
  errorMessage,
});

const logout = () => ({
  type: AUTH_LOGOUT,
});

export const actions = {
  userRegister,
  userRegisterSuccess,
  userRegisterFailed,

  adminRegister,
  adminRegisterSuccess,
  adminRegisterFailed,

  login,
  loginSuccess,
  loginFailed,

  logout,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_REGISTER_USER:
    case AUTH_REGISTER_ADMIN: {
      return {
        ...state,
        isRegistering: true,
        errorMsg: null,
      };
    }

    case AUTH_REGISTER_USER_SUCCESS: {
      const { userData } = action;
      return {
        ...state,
        userData,
        userRole: (userData || {}).role,
        isRegistering: false,
      };
    }

    case AUTH_REGISTER_ADMIN_SUCCESS: {
      const { adminData } = action;
      return {
        ...state,
        adminData,
        userRole: (adminData || {}).role,
        isRegistering: false,
      };
    }

    case AUTH_REGISTER_USER_FAILED:
    case AUTH_REGISTER_ADMIN_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        errorMsg,
        isRegistering: false,
      };
    }

    case AUTH_LOGIN:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };

    case AUTH_LOGIN_SUCCESS: {
      const { role } = action;
      return {
        ...state,
        isLoading: false,
        authenticated: true,
        userRole: role,
        errorMessage: '',
      };
    }

    case AUTH_LOGIN_FAILED: {
      const { errorMessage } = action;
      return {
        ...state,
        authenticated: false,
        errorMessage,
      };
    };

    case AUTH_LOGOUT: {
      return {
        ...state,
        authenticated: false,
        userRole: null,
      }
    }
  
    default:
      return state;
  }
}