Rails.application.routes.draw do
  resources :aliens
  get "/search", to: "aliens#index"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
