export const createActivity = (activity) => {
  return $.ajax({
    method: 'POST',
    url: 'api/activities',
    data: activity
  });
};
