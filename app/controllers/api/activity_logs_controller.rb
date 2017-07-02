class Api::ActivityLogsController < ApplicationController
  def create
    @activity_log = ActivityLog.new(activity_log_params)
    if @activity_log.save

      # probably will have to render something else
      # render json: @activity_log, status: 200
      render "api/activity_logs/show"
    else
      render json: @activity_log.errors.full_messages, status: 422
    end
  end

  def index
    @activity_logs = ActivityLog.find_by(user_id: params[:user_id])
    render "api/activity_logs/index"
  end

  private
  def activity_log_params
    params.require(:activity_log).permit(:activity_id)
  end

end
