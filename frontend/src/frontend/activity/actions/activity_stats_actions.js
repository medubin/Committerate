import * as APIUtil from '../util/activity_stats_api_util'

export const RECEIVE_ACTIVITY_STATS = "RECEIVE_ACTIVITY_STATS";

export const fetchActivityStats = () => dispatch => {
  APIUtil.fetchActivityStats()
    .then(activityStats => dispatch(receiveActivityStats(activityStats)))
  };

export const receiveActivityStats = (activityStats) => ({
      type: RECEIVE_ACTIVITY_STATS,
      activityStats
  });
