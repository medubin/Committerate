import * as APIUtil from '../util/activity_api_util'

export const RECEIVE_ACTIVITIES = "RECEIVE_ACTIVITIES";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const RECEIVE_ACTIVITY_LOG ="RECEIVE_ACTIVITY_LOG";


export const createActivity = activity => dispatch => (
  APIUtil.createActivity(activity)
);

export const logActivity = activity => dispatch => (
  APIUtil.logActivity(activity)
  .then(activityLog => dispatch(receiveActivityLog(activityLog)))
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

export const receiveActivityLog = (activityLog) => ({
      type: RECEIVE_ACTIVITY_LOG,
      activityLog
  });
