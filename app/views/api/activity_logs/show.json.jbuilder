
json.extract! @activity_log, :id

json.extract! @activity_log.activity, :value
