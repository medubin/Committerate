import $ from 'jquery'
export const createActivity = (activity) => {
  return $.ajax({
    method: 'POST',
    url: '/api/activities',
    data: activity
  });
};


export const fetchActivities = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/activities'
  })
}

export const logActivity = (activity) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/activity_logs',
    data: {activity_log: {activity_id: activity.id}}
  })
}

//todo nest namespaces in routes and fix these!!!



// let headers = new Headers()
//
// export const createActivity = (activity) => {
//   let createActivityParams = {
//     method: 'post',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default',
//     data: activity
//   }
//   return fetch('/api/activities', createActivityParams)
// }
//
// export const fetchActivities = () => {
//   let fetchActivitiesParams = {
//     method: 'get',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default',
//   }
//   return fetch('/api/activities', fetchActivitiesParams)
// }
//
// export const logActivity = (activity) => {
//   let logActivityParams = {
//     method: 'post',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default',
//     data: {activity_log: {activity_id: activity.id}}
//   }
//   return fetch('/api/activity_logs', logActivityParams)
// }
