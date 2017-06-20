class Api::ActivitiesController < ApplicationController

  def index
    @activities = Activity.find_by(user_id: params[:user_id])
    render "api/activities/index"
  end

  def show
    @activity = Activity.find(params[:id])
    render "api/activities/show"
  end

  def create
    if (!current_user)
      render json: "User not found", status: 422
    end

    @activity = Activity.new(activity_params)
    @activity.user_id = current_user.id
    @activity.active = true;

    if (!@activity.save)
      render json: @activity.errors.full_messages, status: 422
    end

    render "api/activities/show"
  end

  def destroy
  end


  private
  def activity_params
    params.require(:activity).permit(:user_id, :name, :description, :value, :active)
  end

end
