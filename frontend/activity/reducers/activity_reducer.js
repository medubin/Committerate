import {RECEIVE_ACTIVITIES, RECEIVE_ERRORS} from '../actions/activity_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  activities: [],
  errors: []
});

const ActivityReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ACTIVITIES:
      newState.activities = action.activities;
      return newState;
    // case RECEIVE_ERRORS:
      // const errors = action.errors;
      // return merge({}, _nullHomes, {errors});
    default:
      return state;
  }
}

export default ActivityReducer;
