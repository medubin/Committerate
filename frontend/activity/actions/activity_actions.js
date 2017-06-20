import * as APIUtil from '../util/activity_api_util'

export const createActivity = activity => dispatch => (
  APIUtil.createActivity(activity)
);
