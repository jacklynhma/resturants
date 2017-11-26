class Api::V1::RestaurantsController < ApplicationController

  def index
    @term = params[:term]
    @location = params[:location]
    Restaurant.search(@term, @location)
    render json: {q: @term}
  end
end
