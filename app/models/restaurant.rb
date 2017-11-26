class Restaurant < ApplicationRecord

  def self.search(term, location)
    api_host = "https://api.yelp.com"
    search_path = "/v3/businesses/search"
    url = "#{api_host}#{search_path}"
    params = {
      term: term,
      location: location,
      limit: 5
    }
    response = HTTP.auth(token).get(url, params: params)
    response.parse
  end

  def self.token
    "Bearer #{ENV["ACCESS_TOKEN"]}"
  end
end
