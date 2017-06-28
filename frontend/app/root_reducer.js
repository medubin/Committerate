import {combineReducers} from 'redux';

import SessionReducer from '../session/reducers/session_reducer';
import ActivityReducer from '../activity/reducers/activity_reducer'
import ActivityStatsReducer from '../activity/reducers/activity_stats_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  activities: ActivityReducer,
  activityStats: ActivityStatsReducer
});

export default RootReducer;
