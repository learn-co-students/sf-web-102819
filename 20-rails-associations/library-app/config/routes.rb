Rails.application.routes.draw do
  resources :books
  # author routes
  resources :authors, only: [:show]
  # get '/authors/:id', to: 'authors#show'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
