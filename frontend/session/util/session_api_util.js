import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

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



// import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';
//
// export const login = (user) => {
//   return fetch('/api/session', {
//     method: 'POST',
//     body: user,
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     credentials: 'same-origin'
//   });
// };
//
// export const signup = (user) => {
//   return fetch('/api/user', {
//     method: 'POST',
//     body: user,
//     headers: {
//       Accept: 'application/json'},
//     credentials: 'same-origin'
//
//   });
// };
//
// export const logout = () => {
//   return fetch('/api/session', {
//     method: 'delete',
//     headers: {
//       "Accept": "application/json",
//       "Content-Type": "application/json"
//     },
//     credentials: 'same-origin'
//   });
// };
