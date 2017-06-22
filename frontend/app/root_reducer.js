import {combineReducers} from 'redux';

import SessionReducer from '../session/reducers/session_reducer';
import ActivityReducer from '../activity/reducers/activity_reducer'

const RootReducer = combineReducers({
  session: SessionReducer,
  activities: ActivityReducer
});

export default RootReducer;
