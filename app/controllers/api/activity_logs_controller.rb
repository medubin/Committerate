class Api::ActivityLogsController < ApplicationController
  def create
    @activity_log = ActivityLog.new(activity_log_params)
    if @activity_log_params.save
      # probably will have to render something else
      render "api/activities/show"
    else
      render json: @activity_log.errors.full_messages, status: 422
    end
  end

end
