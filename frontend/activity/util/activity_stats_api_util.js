export const fetchActivityStats = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/activity_stats/'
  })
}
