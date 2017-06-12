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
  end

  def destroy
  end


  private
  def activity_params
    params.require(:activity).permit(:user_id, :name, :description, :value, :active)
  end

end
