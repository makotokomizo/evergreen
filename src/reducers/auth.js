import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  token: null,
  username: null,
  error: null,
  loading: false,
  isAuthenticated: null,

};

const authStart = (state, action) => {
  return updateObject(state, {
    error: null,
    loading: true
  });
};
const authSuccess = (state, action) => {
  console.log("auth.js/authSuccess");

  return updateObject(state, {
    token: action.token,
    username: action.username,
    error: null,
    loading: false,
    isAuthenticated: true,

  });
};

const authFail = (state, action) => {
  console.log("auth.js/reducers fail");

  return updateObject(state, {
    error: action.error,
    loading: false
  });
};

// ログアウト
const authLogout = (state, action) => {
  return updateObject(state, {
    token: null,
    username: null
  });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    default:
      return state;
  }
};

export default reducer;
