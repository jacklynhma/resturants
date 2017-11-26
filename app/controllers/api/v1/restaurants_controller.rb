class Api::V1::RestaurantsController < ApplicationController

  def index
    @term = params[:term]
    @location = params[:location]
    results = Restaurant.search(@term, @location)
    render json: {q: results}
  end
end
