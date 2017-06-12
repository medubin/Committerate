json.array! @activities do |activity|
  json.name activity.name
  json.description activity.description
  json.active activity.active
  json.value activity.value
end
