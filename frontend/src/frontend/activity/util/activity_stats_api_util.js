import $ from "jquery";

export const fetchActivityStats = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/activity_stats/'
  })
}

// let headers = new Headers()
//
// export const fetchActivityStats = () => {
//   let fetchActivityStatsParams = {
//     method: 'get',
//     headers: headers,
//     mode: 'cors',
//     cache: 'default',
//   }
//   return fetch('/api/activity_stats/', fetchActivityStats)
// }
