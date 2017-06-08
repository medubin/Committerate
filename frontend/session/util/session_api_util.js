import { receiveCurrentUser, receiveErrors } from '../actions/session_actions';

export const login = (user) => {
  return fetch('/api/session', {
    method: 'POST',
    body: user
  });
};

export const signup = (user) => {
  return fetch('/api/user', {
    method: 'POST',
    body: user
  });
};

export const logout = () => {
  return fetch('/api/session', {
    method: 'delete'
  });
};
