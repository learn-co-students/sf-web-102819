Rails.application.routes.draw do
  resources :recipe_ingredients
  resources :ingredients
  resources :recipes
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
