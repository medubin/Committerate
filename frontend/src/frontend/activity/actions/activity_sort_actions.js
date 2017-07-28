import * as SortUtil from '../util/activity_sort_service'

export const RECEIVE_SORTED_ACTIVITIES = 'RECEIVE_SORTED_ACTIVITIES'


export const DESC = 'desc'
export const ASC = 'asc'



export const SORTS = {
  Value: 'value',
  Name: 'name'
}

export const sortActivities = (activities, sortKey, order) => dispatch => {
  let sortedActivities = SortUtil.sortActivities(activities, sortKey, order)
  dispatch(receiveSortedActivities(sortedActivities))
}

export const receiveSortedActivities = (sortedActivities) => ({
      type: RECEIVE_SORTED_ACTIVITIES,
      sortedActivities
  });
