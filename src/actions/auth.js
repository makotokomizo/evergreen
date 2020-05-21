import axios from "axios";
import * as actionTypes from "./actionTypes";
import { HOST_URL } from "../settings";

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

export const authSuccess = (username, token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    username: username
  };
};

export const authFail = error => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

// ログアウト
export const logout = () => (dispatch, getState) => {
  localStorage.removeItem("token");
  localStorage.removeItem("username");
  localStorage.removeItem("email");
  localStorage.removeItem("first_name");
  localStorage.removeItem("last_name");
  localStorage.removeItem("yourImage");
  localStorage.removeItem("expirationDate");
//   console.log("auth.js actions `${HOST_URL}", `${HOST_URL}`)

  axios
    .post(`${HOST_URL}/register/api/auth/logout/`, null, tokenConfig(getState))
    .then((res) => {
    //   console.log("logout axios")
      dispatch({ type: 'AUTH_LOGOUT' });
      dispatch({
        type: actionTypes.AUTH_LOGOUT,
      });
    })
    .catch((err) => {
      dispatch(authFail(err));
      // dispatch(returnErrors(err.response.data, err.response.status));
    });


  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

// // LOGOUT USER
// export const logout = () => (dispatch, getState) => {
//   axios
//     .post(`${HOST_URL}/register/api/auth/logout/`, null, tokenConfig(getState))
//     .then((res) => {
//       dispatch({ type: 'AUTH_LOGOUT' });
//       dispatch({
//         type: actionTypes.AUTH_LOGOUT,
//       });
//     })
//     .catch((err) => {
//       dispatch(authFail(err));
//       // dispatch(returnErrors(err.response.data, err.response.status));
//     });
// };

export const checkAuthTimeout = expirationTime => {
  return dispatch => {
    setTimeout(() => {
      dispatch(logout());
    }, expirationTime * 1000);
  };
};

// export const authLogin = (username, password) => {
//   return dispatch => {
//     dispatch(authStart());
//     axios
//       .post(`${HOST_URL}/rest-auth/login/`, {
//         username: username,
//         password: password
//       })
//       .then(res => {
//         const token = res.data.key;
//         const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", username);
//         localStorage.setItem("expirationDate", expirationDate);
//         dispatch(authSuccess(username, token));
//         dispatch(checkAuthTimeout(3600));
//       })
//       .catch(err => {
//         dispatch(authFail(err));
//       });
//   };
// };




export const authLogin = (username, password) => {
  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // Request Body
  const body = JSON.stringify({ username, password });

  return dispatch => {
    dispatch(authStart());
    axios
      .post(`${HOST_URL}/register/api/auth/login`, body, config)
      .then(res => {
        const token = res.data.token;
        // console.log("action auth res.data", res.data)
        // console.log("action auth res.data.user", res.data.user)
        // console.log("action auth res.data.user", res.data.user.first_name)
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("username", username);
        localStorage.setItem("first_name", res.data.user.first_name);
        localStorage.setItem("last_name", res.data.user.last_name);
        localStorage.setItem("yourImage", res.data.user.yourImage);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(username, token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
        console.log("action auth", String(err.response.data["non_field_errors"]) )
        console.log("action auth", "Incorrect Credentials")
        console.log("action auth", err.response.data["non_field_errors"] === ["Incorrect Credentials"])
        if (String(err.response.data["non_field_errors"]) === "Incorrect Credentials") {
          document.getElementById("login-error").innerHTML = "メールアドレスかパスワードが間違っています"
        } else {
          document.getElementById("login-error").innerHTML = err.response.data["non_field_errors"]

        }
        
      });
  };
};

// // LOGIN USER
// export const login = (username, password) => (dispatch) => {
//   // Headers
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };

//   // Request Body
//   const body = JSON.stringify({ username, password });

//   axios
//     .post('/api/auth/login', body, config)
//     .then((res) => {
//       dispatch({
//         type: LOGIN_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: LOGIN_FAIL,
//       });
//     });
// };





// レジスター
export const authSignup = ({email, first_name, last_name, is_Nester, password}) => {
  return dispatch => {
    dispatch(authStart());
    console.log("authStart")
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
  
    // Request Body
    const body = JSON.stringify({ email, first_name, last_name, is_Nester, password });
    

    axios
      .post(`${HOST_URL}/register/api/auth/register`, body, config)
      .then(res => {
        console.log("authSignup then")
        const token = res.data.token;
        const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
        localStorage.setItem("token", token);
        localStorage.setItem("username", email);
        localStorage.setItem("expirationDate", expirationDate);
        dispatch(authSuccess(email, token));
        dispatch(checkAuthTimeout(3600));
      })
      .catch(err => {
        dispatch(authFail(err));
        console.log("auth action register", err.response)
        console.log("auth action register", err.response.data.email)
        console.log("auth action register", String(err.response.data.email))
        document.getElementById("register-error").innerHTML = String(err.response.data.email)
      });

    
  };
};
// // REGISTER USER
// export const authSignup = ({ email, first_name, last_name, is_Nester, password }) => (dispatch) => {
//   // Headers
//   const config = {
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   };
//   // Request Body
//   const body = JSON.stringify({ email, first_name, last_name, is_Nester, password });

//   axios
//     .post(`${HOST_URL}/register/api/auth/register`, body, config)
//     .then((res) => {
//       dispatch({
//         type: REGISTER_SUCCESS,
//         payload: res.data,
//       });
//     })
//     .catch((err) => {
//       dispatch(returnErrors(err.response.data, err.response.status));
//       dispatch({
//         type: REGISTER_FAIL,
//       });
//     });
// };
// export const authSignup = (username, email, password1, password2) => {
//   return dispatch => {
//     dispatch(authStart());
//     axios
//       .post(`${HOST_URL}/rest-auth/registration/`, {
//         username: username,
//         email: email,
//         password1: password1,
//         password2: password2
//       })
//       .then(res => {
//         const token = res.data.key;
//         const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
//         localStorage.setItem("token", token);
//         localStorage.setItem("username", username);
//         localStorage.setItem("expirationDate", expirationDate);
//         dispatch(authSuccess(username, token));
//         dispatch(checkAuthTimeout(3600));
//       })
//       .catch(err => {
//         dispatch(authFail(err));
//       });
//   };
// };

export const authCheckState = () => {
  return dispatch => {
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    if (token === undefined) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(username, token));
        dispatch(
          checkAuthTimeout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};




// Setup config with token - helper function
export const tokenConfig = (getState) => {
  // Get token from state
  const token = getState().auth.token;

  // Headers
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  // If token, add to headers config
  if (token) {
    config.headers['Authorization'] = `Token ${token}`;
  }
  console.log("auth action token", token)

  return config;
};