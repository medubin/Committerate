import {RECEIVE_ACTIVITY_STATS} from '../actions/activity_stats_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  score: null
});

const ActivityStatsReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ACTIVITY_STATS:
    console.log(action)
      newState.score = action.activityStats.score;
      return newState;
    default:
      return state;
  }
}

export default ActivityStatsReducer;
