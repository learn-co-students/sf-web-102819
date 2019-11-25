Rails.application.routes.draw do
  resources :orders
  resources :barista, only: [:show, :index]
  resources :drinks
  resources :customers
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
