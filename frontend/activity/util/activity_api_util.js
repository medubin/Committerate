export const createActivity = (activity) => {
  return $.ajax({
    method: 'POST',
    url: 'api/activities',
    data: activity
  });
};


export const fetchActivities = () => {
  return $.ajax ({
    method: 'GET',
    url: 'api/activities'
  })
}
