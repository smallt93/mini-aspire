export const REGISTER_USER = 'auth/REGISTER_USER';
export const REGISTER_USER_SUCCESS = 'auth/REGISTER_USER_SUCCESS';
export const REGISTER_USER_FAILED = 'auth/REGISTER_USER_FAILED';

export const REGISTER_ADMIN = 'auth/REGISTER_ADMIN';
export const REGISTER_ADMIN_SUCCESS = 'auth/REGISTER_ADMIN_SUCCESS';
export const REGISTER_ADMIN_FAILED = 'auth/REGISTER_ADMIN_FAILED';

const initialState = {
  userData: {},
  isRegistering: false,
  errorMsg: '',
};

export const getUserData = ({ user }) => user.userData || {};
export const getUserId = ({ user }) => (user.userData || {}).id;
export const getUserRole = ({ user }) => (user.userData || {}).role;
export const getErrorMessage = ({ user }) => user.errorMsg;
export const isRegistering = ({ user }) => user.isRegistering;

export const selectors = {
  getUserData,
  getUserId,
  getUserRole,
};

// user register

export const registerUser = (userData) => ({
  type: REGISTER_USER,
  userData,
});

export const registerUserSuccess = () => ({
  type: REGISTER_USER_SUCCESS,
});

export const registerUserFailed = (errorMsg) => ({
  type: REGISTER_USER_FAILED,
  errorMsg,
});

// admin register

export const registerAdmin = (userData) => ({
  type: REGISTER_ADMIN,
  userData,
});

export const registerAdminSuccess = () => ({
  type: REGISTER_ADMIN_SUCCESS,
});

export const registerAdminFailed = (errorMsg) => ({
  type: REGISTER_ADMIN_FAILED,
  errorMsg,
});

export const actions = {
  registerUser,
  registerUserSuccess,
  registerUserFailed,

  registerAdmin,
  registerAdminSuccess,
  registerAdminFailed,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REGISTER_USER:
    case REGISTER_ADMIN: {
      return {
        ...state,
        isRegistering: true,
        errorMsg: null,
      };
    }

    case REGISTER_USER_SUCCESS:
    case REGISTER_ADMIN_SUCCESS: {
      const { userData } = action;
      return {
        ...state,
        userData,
        isRegistering: false,
      };
    }

    case REGISTER_USER_FAILED:
    case REGISTER_ADMIN_FAILED: {
      const { errorMsg } = action;
      return {
        ...state,
        errorMsg,
        isRegistering: false,
      };
    }
  
    default:
      return state;
  }
}