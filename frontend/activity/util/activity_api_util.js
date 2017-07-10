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
