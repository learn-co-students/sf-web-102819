Rails.application.routes.draw do
  resources :authors
  resources :books, except: :new
  get '/create-a-book', to: 'books#new', as: 'create_a_book'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
