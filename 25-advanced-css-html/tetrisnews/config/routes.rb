Rails.application.routes.draw do
  resources :players
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  get '/', to: 'pages#home', as: 'home'
end
