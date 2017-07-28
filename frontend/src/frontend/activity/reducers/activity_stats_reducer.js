import {RECEIVE_ACTIVITY_STATS} from '../actions/activity_stats_actions'
import {RECEIVE_ACTIVITY_LOG} from '../actions/activity_actions'
import merge from 'lodash/merge';

const _defaultState = Object.freeze({
  score: null
});

//todo possible code smell activity_action feeds into this and activity_reducer
const ActivityStatsReducer = (state = _defaultState, action) => {
  let newState = merge({}, state);
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_ACTIVITY_STATS:
      newState.score = action.activityStats.score;
      return newState;
    case RECEIVE_ACTIVITY_LOG:
      newState.score += action.activityLog.value
      return newState;
    default:
      return state;
  }
}

export default ActivityStatsReducer;
