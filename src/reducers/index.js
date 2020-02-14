import { connectRouter } from 'connected-react-router';
import { combineReducers } from 'redux';

import auth from './auth';
import user from './user';
import loans from './loans';

const rootReducer = (history) => {
  const appReducer = combineReducers({
    router: connectRouter(history),
    auth,
    user,
    loans,
  });

  const rootReducerModified = (state, action) => appReducer(state, action)

  return rootReducerModified;
};

export default rootReducer;
