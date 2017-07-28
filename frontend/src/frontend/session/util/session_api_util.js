import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
import $ from "jquery";

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/session',
    data: user
  });
};

export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/user',
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: 'delete',
    url: '/api/session'
  });
};

export const getCurrentUser = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/session'
  });
};

// import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
//
// let headers = new Headers()
//
// export const login = (user) => {
//   let loginParameters = {
//     method: 'post',
//     headers: {
//        'Accept': 'application/json',
//        'Content-Type': 'application/json'
//      },
//     mode: 'cors',
//     cache: 'default',
//     credentials: 'include',
//     body: JSON.stringify(user)
//   }
//   return fetch('/api/session', loginParameters)
// }
//
// export const signup = (user) => {
//   let signupParameters = {
//     method: 'post',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default',
//     data: user
//   }
//   return fetch('/api/user', signupParameters)
// }
//
//
// export const logout = () => {
//   let signoutParameters = {
//     method: 'delete',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default',
//   }
//   return fetch('/api/user', signoutParameters)
// }
//
// export const getCurrentUser = () => {
//   let getCurrentUserParameters = {
//     method: 'get',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default'
//   }
//   return fetch('/api/session')
// }
