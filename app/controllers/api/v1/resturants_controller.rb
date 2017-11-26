class Api::V1::ResturantsController < ApplicationController

  def index
    @term = params[:term]
    @location = params[:location]
    Resturant.search(@term, @location)
    render json: {q: @term}
  end
end
