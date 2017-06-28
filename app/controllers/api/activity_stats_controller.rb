class Api::ActivityStatsController < ApplicationController
  def show
    @aggregate = {
      score: current_user.get_score
    }

    render json: @aggregate, status: 200
  end

end
