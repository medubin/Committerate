import {combineReducers} from 'redux';

import SessionReducer from '../session/reducers/session_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
});

export default RootReducer;
