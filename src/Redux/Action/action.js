import * as types from "./actionTypes";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
// import { toast } from "react-toastify";

//? Register action

const registerStart = () => ({
  type: types.REGISTER_START,
});

const registerSuccess = user => ({
  type: types.REGISTER_SUCCESS,
  payload: user,
});

const registerError = error => ({
  type: types.REGISTER_FAIL,
  payload: error,
});

//? Login Action

const loginStart = () => ({
  type: types.LOGIN_START,
});

const loginSuccess = user => ({
  type: types.LOGIN_SUCCESS,
  payload: user,
});

const loginError = error => ({
  type: types.LOGIN_FAIL,
  payload: error,
});

export const registerInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(registerStart());
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(registerSuccess(user));
      })
      .catch(error => dispatch(registerError(error.message)));
  };
};

export const loginInitiate = (email, password) => {
  return function (dispatch) {
    dispatch(loginStart());
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        dispatch(loginSuccess(user));
      })
      .catch(error => dispatch(loginError(error.message)));
  };
};

export let AddBasket = item => ({
  type: types.Addtobasket,
  payload: item,
});
export let removeBasket = id => ({
  type: types.RemoveFromCart,
  payload: id,
});

export const setBasketEmpty = () => ({
  type: types.SET_BASKET_EMPTY,
});

// export let Createuser = (email, password) => {
//   return async dispatch => {
//     signInWithEmailAndPassword(auth, email, password)
//       .then(({ userData }) => {
//         if (userData.user.emailVerified === true) {
//           if (userData) {
//             dispatch({
//               type: "createData",
//               payload: user,
//             });
//             toast.success(`sucessfully ${email} has been logged in`);
//             window.location.assign("/");
//           }
//         }
//       })
//       .catch(alert);
//   };
// };

// export let Signup = (email, password) => {
//   return async dispatch => {
//     createUserWithEmailAndPassword(auth, email, password).then(({ user }) => {
//       dispatch({
//         type: "Upload",
//         // payload: uploadData,
//       });
//       sendEmailVerification(user);
//     });
//   };
// };
