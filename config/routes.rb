Rails.application.routes.draw do
  root "game#index"
  namespace :api do
    namespace :v1 do
      resources :restaurants
    end
  end
end
