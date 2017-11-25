class Resturant < ApplicationRecord

  def self.search(term, location)
    api_hot = "https://api.yelp.com"
    search_path = "/v2/businesses/search"
    url = "#{api_host}#{search_path}"
    params = {
      term: term,
      location: location,
      limit: 5
    }

    response = HTTP.auth(token).get(url, params: params)
    binding.pry
    response.parse
  end

  def self.token
    "#{ENV["TOKEN_TYPE"]} #{ENV["ACCESS_TOKEN"]}"
  end
end
