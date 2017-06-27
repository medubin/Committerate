import * as APIUtil from '../util/activity_api_util'

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const createActivity = activity => dispatch => (
  APIUtil.createActivity(activity)
);

export const logActivity = activity => dispatch => (
  APIUtil.logActivity(activity)
)

export const fetchActivities = () => dispatch => {
  APIUtil.fetchActivities()
    .then(activites => dispatch(receiveActivities(activites)))
  };

export const receiveActivities = (activities) => ({
      type: RECEIVE_ACTIVITIES,
      activities
  });


export const receiveErrors = errors => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};
